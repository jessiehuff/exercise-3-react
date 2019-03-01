import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index';
import Users from './Users';
import User from './User'; 

class App extends Component {    

    componentDidMount(){
        if (this.props.users.length === 0) {
            this.props.actions.fetchUsers(); 
        } 
    }

    render(){ 
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Users} /> 
                    <Route exact path="/users/:userId" component={User} /> 
                </Switch>
            </Router>
        );
    }
}

function mapStateToProps(state){   
    return {
        users: state.users
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actionCreators, dispatch) };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App); 