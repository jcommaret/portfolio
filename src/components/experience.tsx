import experiences from "../assets/data/experience.json"

function ExperienceList() {
  const ExperienceList = experiences
  return (
    <div aria-label="experience" className="container">
      <h2 id="work-experience" className="section-title">
        Work experience
      </h2>
      {ExperienceList.map((xp, index) => (
        <ul className="experienceList" key={index}>
          <li>
            <div className="experience_card">
              <img
                src={xp.img}
                loading="lazy"
                width="40"
                alt=""
                className="image-2"
              />
              <div>
                <h3 className="xp-title">{xp.company}</h3>
                <div className="date">{xp.date}</div>
                <div className="experience_desc">{xp.desc}</div>
              </div>
            </div>
          </li>
        </ul>
      ))}
    </div>
  )
}
export default ExperienceList
