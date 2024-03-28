import './about.css'
import port from '../../img/port.jpg'
export const About = () => {
    return(
        <>
        <div className="about">
        <div className="info">
            <div className="title">
                <h1>About me</h1>
                <p>I’m software developer and this is my portfolio.
                    I'm Full-Stack developer.Here my stack. <br /> You can check my projects in my
                    <a href="https://github.com/NurekeMuss" className='github'>Github.</a>
                </p>
            </div>
            <div className="decs">
                <div className="list">
                    <div className="line">
                        <button className='pointer'></button>
                        <p>Mongo DB (DataBase)</p>
                    </div>
                    <div className="line">
                        <button className='pointer'></button>
                        <p>Express JS(Backend)</p>
                    </div>
                </div>
                <div className="list">
                    <div className="line">
                        <button className='pointer'></button>
                        <p>React Js (FrontEnd)</p>
                    </div>
                    <div className="line">
                        <button className='pointer'></button>
                        <p>Node JS(Backend)</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="image">
            <img src={port} alt="" />
        </div>
    </div>
    <hr />
        </>
        
    )
}