export const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <p className="section-kicker">Contact</p>
      <h2 className="section-title section-title-sm">Let's talk</h2>
      <p className="contact-line">
        437 326 1907 &nbsp;|&nbsp; <a href="mailto:pranav.upreti@mail.utoronto.ca">pranav.upreti@mail.utoronto.ca</a>
      </p>
      <p className="copyright">&copy; {new Date().getFullYear()} Pranav Upreti</p>
    </footer>
  )
}
