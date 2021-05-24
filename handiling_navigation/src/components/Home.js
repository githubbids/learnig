import React, { Component } from 'react'
//import Courses from './Courses'

import CourseDisplay from './CourseDisplay'

const courseURL = "http://localhost:3001/courses"

export class Home extends Component {
    constructor(){
        super ()
        this.state = {
           courses: ''
        }
        
    }
    componentDidMount(){
        fetch(courseURL, {method:'GET'})
        .then((res) => res.json())
        .then((data) => {
           console.log(data)
           this.setState({
            courses: data
            
           })
          
           console.log(this.state.courses)

        })
    }
    render() {
        return (
            <div className="panel panel-primary">
            <div className="panel-heading">
                Home
            </div>
            <div className="panel-body">
                <div className="jumbotron" >
                    <CourseDisplay displayCourse={this.state.courses}></CourseDisplay>
                </div>
            </div>
            </div>
        )
    }
}

export default Home
