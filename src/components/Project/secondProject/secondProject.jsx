import projectTwo from '../../../img/projectTwo.png'
import './secondProject.css'
export const SecondProject = () => {
    return(
        <div className="project-container">
            <div className="decs-project">
                <div className="decs-title">
                    <h3>Blog MERN Project</h3>
                    <p>Blog project, which containing form authoraztion and posting post with images due to multer and etc.</p>
                </div>
                <div className="features">
                    <div className="btns">
                    <button className='pointer'></button>
                    <p>It's project still in process.   </p> 
                    </div>
                    <div className="btns">
                    <button className='pointer'></button>
                    <p>Good practice where you'll use jwtwebtoken,passwordHash and etc.Also check my github:)</p> 
                    </div>
                </div>
            </div>
            <div className="image-project">
                <img src={projectTwo} alt="" />
            </div>
        </div>
    )
}