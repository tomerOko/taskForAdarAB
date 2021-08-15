import { CSSProperties, FC } from "react"
import HttpsTest from "./https_test"
import MaterialTest from "./Material_test"

interface AllTestsProps {}


const AllTests:FC<AllTestsProps> = () => {
    return (
        <div>

            <div className="styleAsObject" style={styleAsObject} >styleAsObject</div>

            <HttpsTest say={"hallow"}/>

            <MaterialTest />
        </div>
    )
}

export default AllTests


const styleAsObject:CSSProperties = {
    backgroundColor:'purple'
}