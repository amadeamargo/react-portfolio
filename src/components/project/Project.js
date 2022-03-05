import './project.css'

export default function Project({ img, link }) {
    return (
        <>
            <div className="project-card">
                <div className="browser">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
                <a href={link}>
                    <img src={img} className="p-img" />
                </a>
            </div>
        </>
    )
}