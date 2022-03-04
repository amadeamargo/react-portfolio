import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import {faIdCard} from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
    return (
        <div className="footer">
            <a className="fa" id="github" href="https://github.com/amadeamargo">
                <FontAwesomeIcon icon={faGithub} ></FontAwesomeIcon>
            </a>
            <a className="fa" id="linkedin" href="https://linkedin.com/in/amadea-margo">
                <FontAwesomeIcon icon={faLinkedin} ></FontAwesomeIcon>
            </a>
            <a className="fa" id="instagram" href="https://www.instagram.com/amadeamargo/">
                <FontAwesomeIcon icon={faInstagramSquare} ></FontAwesomeIcon>
            </a>
            <a className="fa" id="resume" href="https://docs.google.com/document/d/1cnN9EO6f89ncmDeuy97BvIHv-itSmlcnPsBHxZkWAW4/edit?usp=sharing">
                <FontAwesomeIcon icon={faIdCard} ></FontAwesomeIcon>
            </a>
               </div>

    )
}
