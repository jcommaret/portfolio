import Banner from './components/banner';
import ExperienceList from './components/experience';
import PublicationList from './components/publication';
import './styles/App.scss';

function App() {
  return (
    <>
    <Banner></Banner>
        <div aria-label="About" className="about small w-container">
            <h1 className="heading">Building products &amp; leading teams.</h1>
            <p className="paragraph">
                With over 10 years of experience working with companies such as big corporation from start-up, I am a manager specialized in development and innovation. 
                <br/>
                <br/>
                Since 2007, i won 2 awards, worked with Publicis, GDF-Suez, The Coca-Cola company, my expertise is on activity area such as bank, insurrance, and brand media website. 
                <br/>
                <br/>
                I like to optimize, and reduce technical debt by providing well documented, readable code. I also like to innovate and i am able to produce proof of concept or prototype on my own.
                <a href="mailto:jcommaret@gmail.com">
                    <span>‍</span>
                </a>
                <br/>
            </p>
            <ul aria-label="Links where to find me" className="links-list w-list-unstyled">
                <li className="link-icon">
                    <a aria-label="Contact me via email" rel="noopener" href="mailto:jcommaret@gmail.com" className="link-icons w-inline-block">
                        <img src="https://uploads-ssl.webflow.com/5ff62621e4a653ce2ada8a92/6352bd573032212d2fcee118_letter.svg" height="16" alt="" width="16" className="icon_s"/>
                        <div className="text-block">Contact me</div>
                    </a>
                </li>
                
                <li className="link-icon">
                    <a aria-label="My Twitter" rel="noopener" href="https://twitter.com/jcommaret"   className="link-icons w-inline-block">
                        <img src="https://uploads-ssl.webflow.com/5ff62621e4a653ce2ada8a92/6352bd5730322166aacee117_logo-twitter.svg" height="16" alt="" width="16" className="icon_s"/>
                        <div className="text-block">Twitter</div>
                    </a>
                </li>
                
                <li className="link-icon">
                    <a aria-label="My LinkedIn" rel="noopener" href="https://www.linkedin.com/in/jcommaret/"   className="link-icons w-inline-block">
                        <img src="https://uploads-ssl.webflow.com/63431e3d29c53460abf08e5c/634dc0e0ff0b6c0115609964_logo-linkedin.svg" width="16" height="16" alt="" className="icon_s"/>
                        <div className="text-block">LinkedIn</div>
                    </a>
                </li>
            </ul>

            <ExperienceList />
            <PublicationList />
        </div>
    </>
  )
}

export default App;
