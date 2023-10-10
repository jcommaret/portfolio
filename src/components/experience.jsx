import data from '../assets/data/experience.json';

function ExperienceList() {
  const ExperienceList = data
  return (
    <div aria-label="experience" className="block">
            <h2 id="work-experience" className="section-title">Work experience</h2>
            <ul className="logementsList">
      {ExperienceList.map((xp, index) => (        
        <li>
          <div className="experience_card" key={index}>
            <img src={xp.img} loading="lazy" width="40" alt="" className="image-2"/>
            <div>
                <h3 className="experience-title">{xp.company}</h3>
                <div className="date">{xp.date}</div>
                <div className="experience_desc">{xp.desc}</div>
            </div>
          </div>
        </li>       
      ))}
    </ul>
    </div>
  )
}
export default ExperienceList;