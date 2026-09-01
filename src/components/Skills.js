const skillGroups = [
  { label: "Languages", tags: ["Python", "C / C++", "MATLAB", "Java", "SystemVerilog"] },
  { label: "ML & Quantum", tags: ["NumPy / SciPy", "Keras / TensorFlow", "Pennylane", "Qiskit"] },
  { label: "Hardware & Photonics", tags: ["RISC-V", "gdsfactory / KLayout", "Tidy3D"] },
  { label: "Tools & Web", tags: ["FastAPI / Streamlit", "Git", "uv / pytest", "HTML / CSS / JS"] },
];

export const Skills = () => {
  return (
    <section className="section-wrap" id="skills">
      <div className="section-inner-narrow">
        <p className="section-kicker">Skills &amp; Coursework</p>
        <h2 className="section-title">What I work with</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h5>{group.label}</h5>
              <div className="tag-row">
                {group.tags.map((tag) => (
                  <span key={tag} className="tag-chip">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
