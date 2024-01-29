import Layout from "../../Components/Layout/Layout"
import ErrorComponent from "./ErrorComponent"

function Error(){
    return (
        <div className="errorContent">
            <Layout children={<ErrorComponent/>}/>
            
        </div>
    )
 }
 
 export default Error