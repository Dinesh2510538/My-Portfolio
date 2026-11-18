import { useEffect, useRef, useState } from "react";
import { person, projects, skills } from "./data.js";

export const reduce =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const intro = [
  { cmd: "whoami", out: [person.name, person.role] },
  { cmd: "cat stack.txt", out: ["React, Spring Boot, FastAPI, MySQL, PostgreSQL, Docker, GCP Cloud Run"] },
  { cmd: "echo $STATUS", out: ["open to full stack developer roles"] },
];

const commands = {
  help: ["Commands: whoami, about, projects, skills, contact, resume, clear"],
  whoami: [person.name, person.role, person.tagline],
  about: person.about,
  projects: projects.map((p) => `- ${p.name}`),
  skills: skills.map(([k, v]) => `${k}: ${v}`),
  contact: [person.email, person.github, person.linkedin],
  resume: ["Opening resume..."],
};

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export default function Terminal() {
  const [lines, setLines] = useState([]);
  const [typing, setTyping] = useState("");
  const [ready, setReady] = useState(false);
  const [val, setVal] = useState("");
  const body = useRef(null);
  const input = useRef(null);

  useEffect(() => {
    let dead = false;
    const show = (s) => setLines((l) => [...l, { c: s.cmd }, ...s.out.map((o) => ({ o }))]);
    (async () => {
      for (const s of intro) {
        if (reduce) { show(s); continue; }
        for (let i = 1; i <= s.cmd.length; i++) {
          if (dead) return;
          setTyping(s.cmd.slice(0, i));
          await wait(55);
        }
        await wait(250);
        if (dead) return;
        setTyping("");
        show(s);
        await wait(400);
      }
      if (!dead) setReady(true);
    })();
    return () => { dead = true; };
  }, []);

  useEffect(() => {
    if (body.current) body.current.scrollTop = body.current.scrollHeight;
  }, [lines]);

  const run = (raw) => {
    const c = raw.trim().toLowerCase();
    if (!c) return;
    if (c === "clear") { setLines([]); return; }
    const out = commands[c] || [`command not found: ${c}. Type help.`];
    setLines((l) => [...l, { c: raw }, ...out.map((o) => ({ o }))]);
    if (c === "resume") window.open(person.resume, "_blank");
  };

  return (
    <div>
      <div className="term" role="region" aria-label="Interactive terminal" onClick={() => input.current && input.current.focus()}>
        <div className="term-bar"><i /><i /><i /><span>dinesh@portfolio: ~</span></div>
        <div className="term-body" ref={body}>
          {lines.map((l, i) =>
            l.c !== undefined
              ? <p key={i}><span className="ps">$</span>{l.c}</p>
              : <p key={i} className="out">{l.o}</p>
          )}
          {!ready && <p><span className="ps">$</span>{typing}<span className="caret" /></p>}
          {ready && (
            <form className="line" onSubmit={(e) => { e.preventDefault(); run(val); setVal(""); }}>
              <span className="ps">$</span>
              <input ref={input} value={val} onChange={(e) => setVal(e.target.value)} aria-label="Terminal command" placeholder="type help" autoComplete="off" spellCheck="false" />
            </form>
          )}
        </div>
      </div>
      <div className="chips" aria-label="Quick commands">
        {["help", "projects", "skills", "contact"].map((c) => (
          <button key={c} className="chip" disabled={!ready} onClick={() => run(c)}>{c}</button>
        ))}
      </div>
    </div>
  );
}
