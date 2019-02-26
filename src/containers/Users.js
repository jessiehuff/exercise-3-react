import React, {Component} from 'react'; 
import PropTypes from 'prop-types'; 
import {bindActionCreators} from 'redux'; 
import { connect } from 'react-redux'; 
import * as actionCreators from '../actions/index.js'; 


class Users extends Component {

    componentDidMount(){
        this.props.actions.fetchUsers(); 
    }

    render(){
        const allUsers = Object.keys(this.props).map(i => this.props[i])
        console.log(allUsers) 
        return(
            <p>Hello</p> 
            
        ) 
    } 
}

Users.propTypes = {
    users: PropTypes.array,
    actions: PropTypes.object
}; 

function mapStateToProps(state){
    return {
        ...state.users
    };
}

function mapDispatchToProps(dispatch){
    return {actions: bindActionCreators(actionCreators, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Users); 