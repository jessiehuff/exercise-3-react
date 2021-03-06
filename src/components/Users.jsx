import React, {Component} from 'react'; 
import {Link} from 'react-router-dom'; 
import { connect } from 'react-redux'; 


class Users extends Component {
   
    render(){ 
        const userArray = this.props.users
        const allUsers = userArray.filter(function(user){return user !== undefined && user.name !== undefined})
        const alphaUsers = allUsers.sort(function(a,b){
            if (a.name < b.name) return 1; 
            else if (a.name > b.name) return -1; 
            else return 0; 
        });
        debugger 
        return( 
            <div className="users">
                <h1 className="users_title">Users</h1> 
                <div className="users_list">
                <table className="users_table">
                    <tbody>
                           <tr>
                               <th>Name</th>
                               <th>Username</th>
                               <th>Email</th>
                               <th>Address</th>
                            </tr>
                {alphaUsers.map((user) => {
                    return (
                            <tr key={user.id}>
                                <td><Link to={`/users/${user.id}`}>{user.name}</Link></td>
                                <td>{user.username}</td> 
                                <td>{user.email}</td>
                                <td>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</td> 
                            </tr>  
                    )
                })}
                    </tbody>
                </table>
                </div> 
            </div>  
        )
    }
}


function mapStateToProps(state){    
    return {
        users: state.users
    };
}

export default connect(mapStateToProps)(Users); 