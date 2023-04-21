import "./style.css";

import upwork from "./icons/upwork-tile.svg";
import freelancer from "./icons/freelancer-icon.svg";
import freelancehunt from "./icons/freelancehunt.svg";
import linkedIn from "./icons/linkedIn.svg";
import gitHub from "./icons/gitHub.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a href="https://github.com/drift2000" target="_blank" rel="noreferrer">
                                <img src={gitHub} alt="ithub" />
                            </a>
                        </li>
                        {/* <li className="social__item">
                            <a href="https://www.linkedin.com/in/denis-shyngirii/" target="_blank" rel="noreferrer">
                                <img src={linkedIn} alt="Link" />
                            </a>
                        </li> */}
                        <li className="social__item">
                            <a href="https://freelancehunt.com/freelancer/SkyAn.html" target="_blank" rel="noreferrer">
                                <img src={freelancehunt} alt="Freelancehunt" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://www.upwork.com/freelancers/~01550f369ead6ac38a" target="_blank" rel="noreferrer">
                                <img src={upwork} alt="upwork" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://www.freelancer.com/u/sined23" target="_blank" rel="noreferrer" >
                                <img src={freelancer} alt="Freelancer" style={{height: "32px"}} />
                            </a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023 sined.pp.ua</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;