const experience = [
  {
    date: "Feb 2026 — Present",
    title: "Undergraduate Researcher, Joyce Poon Group",
    description: "Built a comprehensive benchmarking suite for PhIDO, an agentic photonic integrated circuit design tool. Also implemented deterministic GDSFactory+ routing into its layout agent.",
  },
  {
    date: "May 2026 — Aug 2026",
    title: "Research Volunteer, Mount Sinai Hospital",
    description: "Ballistocardiography signal analysis with Dr. Isaac Sung Jae Chang. Wrote code to filter and integrate 3-axis BCG signals. Used to calculate cardiac parameters (SV, ejection fraction) more reliably compared to traditional peak amplitude equations. ",
  },
  {
    date: "Nov 2025 — Aug 2026",
    title: "Embedded Programmer, UTBIOME",
    description: "C++ firmware and electronic design for a low-cost on-demand droplet generator used for medical research.",
  },
  {
    date: "September 2023 — December 2023",
    title: "Hackathon Organizer and Judge, NRGHacks",
    description: "Cofounded a local interschool hackathon. Led a team to handle marketing, logistics and budget. Ran a workshop and judged 100+ hackers.",
  },
];

export const Experience = () => {
  return (
    <section className="section-wrap" id="experience">
      <div className="section-inner-narrow">
        <p className="section-kicker">Experience</p>
        <h2 className="section-title">Where I've spent my time</h2>
        <div className="timeline">
          {experience.map((item) => (
            <div className="timeline-item" key={item.title}>
              <span className="timeline-dot" />
              <p className="timeline-date">{item.date}</p>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
