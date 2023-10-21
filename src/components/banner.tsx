function Banner() {
  return (
    <header className="container">
      <a href="/" className="name w-nav-link">
        <span>
          Jérôme Commaret
          <br />
        </span>
        <span className="text-span">
          Lead Front End <br />
          More than 5 years of experience
        </span>
      </a>
      <nav role="navigation">
        <a href="https:/medium.com" className="nav-link w-nav-link">
          Twitter
        </a>
        <a href="https://www.linkedin.com/in/jcommaret" className="nav-link">
          LinkedIn
        </a>
        <a href="mailto:jcommaret@gmail.com" className="nav-link">
          Contact me
        </a>
      </nav>
    </header>
  )
}
export default Banner
