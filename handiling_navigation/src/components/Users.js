import React, { Component } from 'react'
import UsersDisplay from './UsersDisplay'

const url = "http://localhost:3002/users"

export class Users extends Component {
    
    constructor(){
        super()
        this.state = {
            users: ''
            
        }
    }
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {console.log(data)
            this.setState({
                users: data
            })
            console.log(this.state.users)
        })
        console.log(url)
        console.log(this.state)
    }
   
    render() 
    
    {
        return (
            <div className="panel panel-primary">
                    <div className="panel-heading">
                        User Details
                    </div>
                    <div className="panel-body">
                        
                        <UsersDisplay displayUser={this.state.users}></UsersDisplay>
                    </div>
            </div>
        )
    }
}

export default Users
