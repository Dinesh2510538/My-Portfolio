import { useEffect, useState } from "react";
import { person, projects, experience, skills, education, achievements } from "./data.js";
import Terminal from "./Terminal.jsx";
import Project from "./Project.jsx";

const tabs = [
  ["about", "about.md"],
  ["projects", "projects.jsx"],
  ["experience", "experience.log"],
  ["skills", "skills.json"],
  ["education", "education.md"],
  ["contact", "contact.sh"],
];

function Skills() {
  const rows = skills.map(([k, v]) => [k.toLowerCase().replace(/ /g, "_"), v.split(", ")]);
  return (
    <pre className="code" aria-label="Skills as JSON">
      <code>
        <span className="rv ln" style={{ "--i": 0 }}>{"{"}</span>
        {rows.map(([k, arr], i) => (
          <span className="rv ln" key={k} style={{ "--i": i + 1 }}>
            {"  "}<span className="jk">"{k}"</span>: [
            {arr.map((a, j) => (
              <span key={a}><span className="js">"{a}"</span>{j < arr.length - 1 ? ", " : ""}</span>
            ))}
            ]{i < rows.length - 1 ? "," : ""}
          </span>
        ))}
        <span className="rv ln" style={{ "--i": rows.length + 1 }}>{"}"}</span>
      </code>
    </pre>
  );
}

export default function App() {
  const [active, setActive] = useState("about");
  const [prog, setProg] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    const spy = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-30% 0px -60% 0px" }
    );
    tabs.forEach(([id]) => { const el = document.getElementById(id); if (el) spy.observe(el); });
    const onScroll = () => {
      const h = document.documentElement;
      setProg(h.scrollTop / Math.max(h.scrollHeight - h.clientHeight, 1));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { io.disconnect(); spy.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <>
      <nav className="tabs" aria-label="Sections">
        <div className="wrap">
          {tabs.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? "on" : ""} aria-current={active === id ? "true" : undefined}>{label}</a>
          ))}
        </div>
        <div className="bar" style={{ "--p": prog }} />
      </nav>

      <main className="wrap">
        <header className="hero">
          <div>
            <div className="who">
              <img className="avatar" src="/dinesh.jpg" alt="Portrait of Dinesh Kanna Ravi" width="84" height="84" />
              <p className="role">{person.role}</p>
            </div>
            <h1>{person.name}</h1>
            <p className="headline">{person.headline}</p>
            <div className="cta">
              <a className="run as-link" href={person.resume} download>Download resume</a>
              <a className="ghost" href="#projects">See projects</a>
            </div>
          </div>
          <Terminal />
        </header>

        <section id="about" className="sec">
          <h2>About</h2>
          {person.about.map((t, i) => <p className="lead rv" style={{ "--i": i }} key={t}>{t}</p>)}
        </section>

        <section id="projects" className="sec">
          <h2>Projects</h2>
          {projects.map((p, i) => <Project key={p.name} p={p} index={0 * i} />)}
        </section>

        <section id="experience" className="sec">
          <h2>Experience</h2>
          {experience.map((e, i) => (
            <div className="log rv" style={{ "--i": 0 }} key={e.org}>
              <p><span className="k">commit</span> {e.org.toLowerCase().replace(/ /g, "-")}{i === 0 && <span className="h"> (HEAD)</span>}</p>
              <p>Date:   {e.when}</p>
              <p className="msg">{e.role}, {e.org}</p>
              <ul>{e.points.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          ))}
        </section>

        <section id="skills" className="sec">
          <h2>Skills</h2>
          <Skills />
        </section>

        <section id="education" className="sec">
          <h2>Education</h2>
          <div className="log rv">
            <p className="msg">{education.degree}</p>
            <p>{education.school}, {education.when}. {education.detail}.</p>
            <ul>{achievements.map((a) => <li key={a}>{a}</li>)}</ul>
          </div>
        </section>

        <section id="contact" className="sec contact">
          <h2>Contact</h2>
          <p className="lead">Hiring or building something? Send me a message.</p>
          <p className="mono sh"><span className="ps">$</span><a href={`mailto:${person.email}`}>mail {person.email}</a></p>
          <p className="mono sh"><span className="ps">$</span><a href={person.github} target="_blank" rel="noreferrer">open github</a></p>
          <p className="mono sh"><span className="ps">$</span><a href={person.linkedin} target="_blank" rel="noreferrer">open linkedin</a></p>
        </section>
      </main>
    </>
  );
}
