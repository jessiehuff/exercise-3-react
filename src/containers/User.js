import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 

class User extends Component {
   


    render(){
        const user = this.props.user
        return (
            <div className="user">
                {user.map((x) => {
                    return(
                        <div className="user_info">
                        <h2>{x.name}</h2>
                        <ul>
                            <li><h4 className="specific_detail">Username: </h4> {x.username}</li> 
                            <li><h4 className="specific_detail">Email: </h4> {x.email}</li> 
                            <li><h4 className="specific_detail">Address: </h4> {x.address.street}, {x.address.suite}, {x.address.city}, {x.address.zipcode} 
                                <p className="geo">Geo: {x.address.geo.lat}, {x.address.geo.lng}</p></li> 
                            <li><h4 className="specific_detail">Phone: </h4> {x.phone}</li> 
                            <li><h4 className="specific_detail">Website: </h4> {x.website}</li>  
                            <li><h4 className="specific_detail">Company: </h4> {x.company.name}
                                <p className="co_detail">{x.company.catchPhrase}</p>
                                <p className="co_detail">{x.company.bs}</p> 
                            </li> 
                        </ul>   
                        <br></br>
                        <br></br> 
                        <a href="/"><button>Back to All Users</button></a>
                        </div> 
                    )
                })}
            </div> 
        )
    }
}

function mapStateToProps(state, ownProps){   
    const allUsers = state.users
    const user = allUsers.filter(user => user.id === parseInt(ownProps.match.params.userId))

    if (user) {
        return { user }
    }
    else {
    return { user: []}
    }
}

export default connect(mapStateToProps)(User); 