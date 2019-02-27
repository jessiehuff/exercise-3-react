import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 

class User extends Component {

    render(){
        const user = this.props.user[0]
         
        return (
            <div className="user_info">
                <h2>{user.name}</h2>
                <ul>
                    <li><h4 className="specific_detail">Username: </h4> {user.username}</li> 
                    <li><h4 className="specific_detail">Email: </h4> {user.email}</li> 
                    <li><h4 className="specific_detail">Address: </h4> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode} 
                        <p className="geo">Geo: {user.address.geo.lat}, {user.address.geo.lng}</p></li> 
                    <li><h4 className="specific_detail">Phone: </h4> {user.phone}</li> 
                    <li><h4 className="specific_detail">Website: </h4> {user.website}</li>  
                    <li><h4 className="specific_detail">Company: </h4> {user.company.name}
                        <p className="co_detail">{user.company.catchPhrase}</p>
                        <p className="co_detail">{user.company.bs}</p> 
                    </li> 
                </ul> 
                <br></br>
                <br></br> 
                <a href="/"><button>Back to All Users</button></a> 
            </div> 
        )
    }
}

const mapStateToProps = (state, ownProps) => {  
     
    const allUsers = state.users
    const user = allUsers.filter(user => user.id === parseInt(ownProps.match.params.userId))

    return { user }
}

export default connect(mapStateToProps, null)(User); 