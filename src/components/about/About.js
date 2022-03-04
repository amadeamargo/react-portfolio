import Pic from '../../assets/images/about-img.jpg'
import './about.css'

export default function About (){

    return (
        <>
        <div className="main-container">
        <div className="about-container">
            <img className="profile-pic" src={Pic} alt="profile picture"/>
            <div className="about-text">
                <h2 id="about-me">about me</h2>
                <p>My name is Amadea Margo</p>
                <p>I am currently enrolled in a full stack </p>
                <p>coding bootcamp.</p>
                <p>My goal is to build and design</p>
                <p>simple and functional web applications.</p>
                <h4 id="my-passions">my passions</h4>
                <p>digital art</p>
                <p>photgraphy & videography</p>
                <p>music & performance</p>


            </div>
        </div>
        </div>
        </>
    )
}