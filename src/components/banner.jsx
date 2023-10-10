function Banner(){
    return(
        <div role="banner" >
            <div className="container small w-container">
                <a href="/" className="name w-nav-link w--current">
                    <span>Jérôme Commaret<br/></span>
                    <span className="text-span">Web projet manager, developer <br/>10 years experience
                    </span>
                </a>
                <nav role="navigation" className="nav-menu-test w-nav-menu">
                    <a href="https:/medium.com" className="nav-link w-nav-link">Twitter</a>
                    <a href="https://www.linkedin.com/in/juliechabin/"  className="nav-link w-nav-link">LinkedIn</a>
                    <a href="/" fs-copyclip-duration="3000" fs-copyclip-element="click" fs-copyclip-text="jcommaret@gmail.com" fs-copyclip-message="💌 Address copied!" className="nav-link w-nav-link">Contact me</a>
                </nav>
            </div>
        </div>
    )
}
export default Banner;