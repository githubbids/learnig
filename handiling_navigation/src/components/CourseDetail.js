import React, { Component } from 'react'

const courseURL = "http://localhost:3001/courses"
const userURL  = "http://localhost:3002/users"

 class CourseDetail extends Component  {
     constructor(){
         super()
         this.state = {
             courseDetails: '',
             name: '',
            email: '',
            phNum: ''
         }
         this.handleChangeName = this.handleChangeName.bind(this)
         this.handleChangeEmail = this.handleChangeEmail.bind(this)
         this.handleChangephNum = this.handleChangephNum.bind(this)
         this.btnSubmit         = this.btnSubmit.bind(this)
     }
     componentDidMount(){
         fetch(`${courseURL}/${this.props.match.params.id}`,{method:'GET'})
         .then((res) => res.json())
         .then((data) => {console.log(data)
             this.setState({
                courseDetails: data
             })
            // console.log(url)
        console.log(this.state)
         })
         
     }
     handleChangeName(event){
         this.setState({name:event.target.value})
     }
     handleChangeEmail(event){
        this.setState({email:event.target.value})
     }
     handleChangephNum(event){
        this.setState({phNum:event.target.value})
     }

     btnSubmit(){
         console.log("Bidisha")
         console.log(this.state)
         var uid = Math.floor(Math.random() * 1000);
         console.log(uid)
         var uData = {
             id: uid,
             name: this.state.name,
             email: this.state.email,
             ph: this.state.phNum
         }
         console.log(uData)
         fetch(userURL, {
             method:'POST',
             headers:{
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(uData)
            })
            .then(console.log("data added"))
     }

     render(){
        return (
            <div className="panel panel-primary">
                    <div className="panel-heading">
                        Courses Deatils
                    </div>
                    <div className="panel-body">
                    <h2>{this.state.courseDetails.course}</h2> 
                    <p>{this.state.courseDetails.details}</p>
                
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" 
                            className="form-control" 
                            placeholder="Name..." 
                            id="name"
                            value={this.state.name}
                            onChange={this.handleChangeName}></input>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" 
                            className="form-control" 
                            placeholder="Email..." 
                            id="email"
                            value={this.state.email}
                            onChange={this.handleChangeEmail}></input>
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="password" 
                            className="form-control" 
                            placeholder="Phone Number..." 
                            id="ph"
                            value={this.state.phNum}
                            onChange={this.handleChangephNum}></input>
                        </div>

                        <button type="submit" className="btn btn-success" onClick={this.btnSubmit}>Submit</button>
                    
                    </div>
                    
                </div>
        )
     }
     
     
    
}
export default CourseDetail
