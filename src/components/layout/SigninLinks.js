import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import { signOut } from '../../store/action/authActions'

const SigninLinks = (props) =>{
    return (
        <ul className="right">
            <li> <NavLink to="/createproject">New Project</NavLink> </li>
            {/*<li> <NavLink to="/">Log Out</NavLink> </li>*/}
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li> <NavLink to="/" className="btn btn-floating pink lighten-1">{props.profile.initial}</NavLink> </li>
        </ul>
    )
}

const mapsDispatchtoProps = (dispatch) =>{
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null,mapsDispatchtoProps)(SigninLinks)