import { FirstPorject } from "./firstProject/firstProject"
import { SecondProject } from "./secondProject/secondProject"
import { Title } from "./title/title"

export const Project = () =>{
    return(
        <div className="project">
            <Title/>
            <FirstPorject/>
            <SecondProject/>
            <hr />
        </div>
    )
}