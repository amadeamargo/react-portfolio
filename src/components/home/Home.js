import Me from '../../assets/images/profile-artwork.png'
import './home.css'


export default function Home() {

    return (
        <>
            <div id="intro">
                <div id="intro-text">
                    <p>Hi there,</p>
                    <p>I'm Amadea.</p>
                    <p>I'm a full stack</p>
                    <p>software engineer.</p>
                </div>
                <div id="caption">
                    <p>mask up and stay safe!</p>
                </div>
            </div>
            <div>
                <img id="profile-artwork" className="artwork" src={Me} alt="profile artwork" />
            </div>
        </>
    )
}