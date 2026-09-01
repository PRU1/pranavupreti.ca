import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "plot2spectra",
    description: "Digitizes published figures back into numerical data. Reimplements an optical-flow inspired curve tracer. Axis and tick detection powered by Claude Vision.",
    tags: ["Python", "Computer Vision", "Claude API"],
    link: "https://github.com/PRU1",
  },
  {
    title: "Virtual Aircraft Controller",
    description: "A real-time virtual aircraft controller with speech input. Extracts heading, altitude, and runway assignment from voice via BosonAI audio-to-text models. Built with Ryan Zhang.",
    tags: ["FastAPI", "Streamlit", "higgs-audio API"],
    link: "https://github.com/PRU1",
  },
  {
    title: "SlideHive",
    description: "A beehive redesigned for the Toronto Beekeeping Collective. Reduces lifting strain by >50%, matches Langstroth-hive insulation, and introduces a novel drawer slide mechanism that avoids propolis build up. Built with Peter Leong, Ghazala Singh, and Ellie Kim",
    tags: ["CAD", "SimScale Thermal Analysis"],
    link: "https://github.com/PRU1",
  },
  {
    title: "The Chill House",
    description: "Proposed a novel window slat system that autonomously decides which windows to open to catch a breeze and aid natural convection. The goal of this concept was to reduce energy spent cooling in northern Ghanaian communities. We designed and built a physical prototype (~1.5 ft x 1.5 ft x 1.5 ft), including electronics, software, and mechanical design. Built with Jadon Tsai, Jeffery Tian, Geoffrey Cuff-Chartrand, Owen Poyner, and Chris Sarkissian",
    tags: ["CAD", "SimScale Thermal Analysis"],
    link: "https://drive.google.com/file/d/1wP55dbl2qCgqQiqk3QLBErb5ooElCICt/view?usp=sharing",
  },
];

export const Projects = () => {
  return (
    <section className="section-wrap" id="projects">
      <div className="section-inner-wide">
        <p className="section-kicker text-center">Projects</p>
        {/*
        <h2 className="section-title text-center">Things I've built</h2>
        */}
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
