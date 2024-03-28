import project from '../../../img/projectOne.png'
import './firstProject.css'
export const FirstPorject = () => {
    return(
        <div className="project-container">
            <div className="image-project">
                <img src={project} alt="" />
            </div>
            <div className="decs-project">
                <div className="decs-title">
                    <h3>TMDB Movie</h3>
                    <p>This project create with frontEnd(EJS) and Backend(node js,express js) as a database i use MongoDB. All details you check in my Github</p>
                    <a href="https://longhaired-honorable-archeology.glitch.me/" target='_blank'>Visit site</a>
                </div>
                <div className="features">
                    <div className="btns">
                    <button className='pointer'></button>
                    <p>Good project for your practice</p> 
                    </div>
                    <div className="btns">
                    <button className='pointer'></button>
                    <p>Containing form authorization and login, also with admin page:) </p> 
                    </div>
                </div>
            </div>
        </div>
    )
}