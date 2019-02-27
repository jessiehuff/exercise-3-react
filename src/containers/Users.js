import React, {Component} from 'react'; 
import PropTypes from 'prop-types'; 
import {bindActionCreators} from 'redux'; 
import { connect } from 'react-redux'; 
import * as actionCreators from '../actions/index.js'; 


class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount(){
        this.props.actions.fetchUsers(); 
    }

    
    render(){
        const userArray = Object.keys(this.props).map(i => this.props[i])
        const allUsers = userArray.filter(function(user){return user !== undefined && user.name !== undefined})
        const alphaUsers = allUsers.sort(function(a,b){
            if (a.name < b.name) return -1; 
            else if (a.name > b.name) return 1; 
            else return 0; 
        });

        return( 
            <div className="users">
                <h1>Users</h1> 
                <ul className="users_list">
                {alphaUsers.map((user) => {
                    return (
                       <li key={user.id} className="user_name">
                        <h3>{user.name}</h3> 
                        </li>
                    )
                })}
                </ul> 
            </div>  
        )
    }
}


function mapStateToProps(state){
    return {
        ...state.users
    };
}

function mapDispatchToProps(dispatch){
    return {actions: bindActionCreators(actionCreators, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Users); 