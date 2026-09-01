import { useLayoutEffect, useRef } from 'react';

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#publications", label: "Research" },
  { href: "#contact", label: "Contact" },
];

export const NavBar = () => {
  const navRef = useRef(null);

  useLayoutEffect(() => {
    const setNavHeight = () => {
      if (navRef.current) {
        document.documentElement.style.setProperty('--nav-h', `${navRef.current.offsetHeight}px`);
      }
    };
    setNavHeight();
    window.addEventListener('resize', setNavHeight);
    return () => window.removeEventListener('resize', setNavHeight);
  }, []);

  return (
    <nav className="site-nav" ref={navRef}>
      <a href="#home" className="site-nav-brand">Pranav Upreti</a>
      <div className="site-nav-links">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="site-nav-link">
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
