import React from "react";
import { profile, experience, skills, education } from "./resume";

function Section({ title, children }) {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <main className="page">
      <header className="masthead">
        <h1 className="name">{profile.name}</h1>
        <p className="title">{profile.title}</p>
        <nav className="links" aria-label="Contact">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.resumeFile} target="_blank" rel="noreferrer">Résumé (PDF)</a>
        </nav>
      </header>

      <p className="summary">{profile.summary}</p>

      <Section title="Experience">
        {experience.map((job) => (
          <article className="job" key={`${job.company}-${job.role}`}>
            <div className="job-head">
              <h3 className="job-role">
                {job.role} <span className="at">·</span> {job.company}
              </h3>
              <span className="job-period">{job.period}</span>
            </div>
            <ul className="bullets">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </Section>

      <Section title="Skills">
        <dl className="skills">
          {skills.map((skill) => (
            <React.Fragment key={skill.group}>
              <dt>{skill.group}</dt>
              <dd>{skill.items}</dd>
            </React.Fragment>
          ))}
        </dl>
      </Section>

      <Section title="Education">
        {education.map((entry) => (
          <div className="edu" key={entry.credential}>
            <div className="edu-head">
              <h3 className="edu-credential">{entry.credential}</h3>
              <span className="edu-period">{entry.period}</span>
            </div>
            <p className="edu-school">{entry.school}</p>
          </div>
        ))}
      </Section>

      <footer className="footer">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </footer>
    </main>
  );
}
