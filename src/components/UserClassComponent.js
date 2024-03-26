import React from "react";
class UserClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // count1 : 0,
            // count2 : 0,
            // count3 : 0,
            // count4 : 0,
            // count5 : 0,
            userInfo : {
                userName : "",
                location : "",
                id : "",
                bio : "",
                avatar_url:""
            }
        }
        console.log("constructor");
    }
    async componentDidMount(){

            const data = await fetch("http://api.github.com/users/akshaymarch7")
            const json = await data.json()
            console.log(json);
            console.log(" component did mount");
            this.setState({
                userInfo : json

            })

          
    }
    componentDidUpdate(){
        console.log("componentdidupdate");
    }
    render(){
        const {userName, userLocation, userContact}= this.props
        // const {count1, count2, count3,count4,count5} = this.state
        const {name, id, location, bio, avatar_url} = this?.state?.userInfo
        return(
            <div className="user-classbased">
                {/* <h2>Count1: {count1}</h2>
                <h2>Count2 : {count2}</h2>
                <h2>Count3 : {count3}</h2>
                <h2>Count4 : {count4}</h2>
                <h2>Count5 : {count5}</h2> */}
                {/* <button onClick={
                    ()=>{
                        this.setState({
                            count1: this.state.count1 + 1,
                            count2: this.state.count2 + 1,
                            count3: this.state.count3 + 1,
                            count4: this.state.count4 + 1,
                            count5: this.state.count5 + 1,
                        })
                    }
                }>+1</button> */}
                {/* <h2>Name: {userName}</h2>
                <h2>Location: {userLocation}</h2>
                <h2>Contact: {userContact}</h2> */}
                
                <h4><img className="abt-img" src={avatar_url} alt="user Profile Photo"/></h4>
                <h4>Info</h4>
                <h4>NAME: {name}</h4>
                <h4>ID: {id}</h4>
                <h4>BIO: {bio}</h4>
                <h4>LOCATION: {location}</h4>

                {console.log("render")}
            </div>
        )
    }
}
export default UserClassComponent