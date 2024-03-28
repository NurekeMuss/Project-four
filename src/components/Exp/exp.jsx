import { ExpList } from './exp-list/expList'
import './exp.css'

export const Exp = () =>{
    return(
        <>
        <div className="exp">
            <div className="info-exp">
                <div className="title">
                    <h1>Experience</h1>
                </div>
                <div className="list-exp">
                    <ExpList/>
                </div>
            </div>
        </div>
        <hr />
        </>
    )
}