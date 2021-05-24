import React from 'react'
import {Link} from 'react-router-dom'

const CourseDisplay = (props) => {
    const renderCourse = ({displayCourse}) => {
        if(displayCourse){
            return displayCourse.map((item) => {

                return(
                    <div key={item.id}>
                        <h2>{item.course}</h2>
                        <Link className="btn btn-info" to={`courses/${item.id}`}>Enquire</Link>
                    </div>
                )
            })
        }

    }
    return(
        
       <div>
           {renderCourse(props)}
       </div>
    )
}
export default CourseDisplay;