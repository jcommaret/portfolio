import data from '../assets/data/publication.json';

function publicationList() {
  const publicationList = data
  return (
    <div className="block">
        <h2 id="some-words" className="section-title">Some Words</h2>
    <ul>
      <li>
      {publicationList.map((publication, index) => (        
        <div className="writing_card" key={index}>
          <div aria-hidden="true" className="div-block-2">📝</div>
          <div className="div-block">
            <h3 className="experience-title">
                <a href={publication.link}>{publication.title}</a>
            </h3>
            <div className="date">{publication.date}</div>
            <div className="experience_desc">{publication.desc}</div>
        </div>
      </div> 
      ))}
      </li>
    </ul>
    </div>
  )
}
export default publicationList;