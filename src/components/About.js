export const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-inner-narrow">
        <p className="section-kicker">About</p>
        <p>
          I'm an engineering student who wants to build the next generation of quantum computers. Currently I'm working with the Joyce Poon group in accelerating the design process for <b>photonic integrated circuit</b> (PIC) design. Our lab developed an agentic framework that translates human design intent into fab-ready layouts. I worked on developing a benchmarking suite to assess our framework. Most recently, I worked on integrating GDSFactory+ deterministic routing engines. This has improved layout reliability and one of our next steps is to send our framework design PIC to fabrication!
          </p>
          <p>
          Outside of photonics, I'm interested in quantum computing. I audited CSC2332 (Introduction to Quantum Algorithms) and am involved with UTQC (University of Toronto Quantum Computing Club). I have also done embedded programming and hardware for UTBIOME's microfluidic droplet generator team.
        </p>
        <p>
          Outside engineering and academics, I enjoy running, hiking, and recently rock climbing. Feel free to <a href="mailto:pranav.upreti@mail.utoronto.ca">reach out!</a>
        </p>
      </div>
    </section>
  );
}

export default About;
