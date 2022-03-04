import Project from "../components/project/Project"
import './projectList.css'

export default function ProjectList() {

    return (
        <>
            <div className="pl-container">
                <div className="pl-text">
                    <h1 className="pl-title">my portfolio</h1>
                    <p className="pl-caption">a collection of applications built by me. </p>

                </div>
                <div className="pl-list">
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>
        </>
    )
}