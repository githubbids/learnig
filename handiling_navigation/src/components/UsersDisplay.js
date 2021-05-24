import React from 'react';

const UsersDisplay = (props) => {
    const renderUser = ({displayUser}) => {
        if(displayUser){
            return displayUser.map((item) => {

                return(
                    <div key={item.id}>
                        <div className="form-group">
                            <h4><label>{item.name}</label></h4>
                            <h4><label>{item.email}</label></h4>
                            <h4><label>{item.ph}</label></h4>
                            <hr />
                        </div>
                        
                       
                    </div>
                )
            })
        }

    }

    return(
        <React.Fragment>
           
            {renderUser(props)}
        </React.Fragment>
    )
}

export default UsersDisplay
