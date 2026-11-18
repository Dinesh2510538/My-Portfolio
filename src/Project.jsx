import { useEffect, useRef, useState } from "react";
import { reduce } from "./Terminal.jsx";

export default function Project({ p, index }) {
  const [step, setStep] = useState(-1);
  const [done, setDone] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearInterval(timer.current), []);

  const send = () => {
    clearInterval(timer.current);
    if (reduce) { setStep(-1); setDone(true); return; }
    setDone(false);
    setStep(0);
    let i = 0;
    timer.current = setInterval(() => {
      i += 1;
      if (i >= p.flow.length) { clearInterval(timer.current); setStep(-1); setDone(true); }
      else setStep(i);
    }, 650);
  };

  const status = done ? `200 OK after ${p.flow.length} hops` : step >= 0 ? `at ${p.flow[step]}` : "idle";

  return (
    <article className="project rv" style={{ "--i": index }}>
      <h3>{p.name}</h3>
      <p className="sum">{p.summary}</p>
      <ol className="flow" aria-label="Request path">
        {p.flow.map((s, i) => (
          <li key={s} className={step === i ? "on" : done || (step > i) ? "hit" : ""}>{s}</li>
        ))}
      </ol>
      <div className="runrow">
        <button className="run" onClick={send}>Send request</button>
        <span className="status" aria-live="polite">{status}</span>
      </div>
      {p.deploy && <p className="deploy">Shipped with {p.deploy}.</p>}
      <ul>{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
      {p.link && <p><a href={p.link} target="_blank" rel="noreferrer">View source</a></p>}
    </article>
  );
}
