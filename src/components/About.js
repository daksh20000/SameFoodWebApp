import User from "./User"
import UserClassComponent from "./UserClassComponent"
const About = ()=>{
    return (
    <div>
        <h1>About</h1>
        <h2>This is about page</h2>
        {/* <User/>  */}
        <UserClassComponent userName= {"DAKSH(classbased component)"} userLocation={"GuruGram"} userContact={"100911"}/>
        {/* {console.log("written after user component")} */}
    </div>)
}
export default About