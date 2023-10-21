import Banner from "./components/banner"
import ExperienceList from "./components/experience"
import PublicationList from "./components/publication"
import "./styles/App.scss"

function App() {
  return (
    <>
      <Banner></Banner>
      <div className="container noflex">
        <h1 className="heading">Building products &amp; leading teams.</h1>
        <p className="paragraph">
          With over 10 years of experience working with companies such as big
          corporation from start-up, I am a manager specialized in development
          and innovation.
          <br />
          <br />
          Since 2007, i won 2 awards, worked with Publicis, GDF-Suez, The
          Coca-Cola company, my expertise is on activity area such as bank,
          insurrance, and brand media website.
          <br />
          <br />I like to optimize, and reduce technical debt by providing well
          documented, readable code. I also like to innovate and i am able to
          produce proof of concept or prototype on my own.
          <a href="mailto:jcommaret@gmail.com">
            <span>‍</span>
          </a>
          <br />
        </p>
      </div>
      <ExperienceList />
      <PublicationList />
    </>
  )
}

export default App
