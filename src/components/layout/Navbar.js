import React from 'react'
import {Link} from 'react-router-dom'
import SigninLinks from './SigninLinks'
import SignoutLinks from './SignoutLinks'
import { connect } from 'react-redux'

const Navbar = (props) =>{
    const { auth, profile } = props
    //console.log(auth)
    const link = auth.uid ? <SigninLinks profile={profile}/> : <SignoutLinks/>
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Project Plan</Link>
                {/*<SigninLinks />
                <SignoutLinks />*/}
                {link}
            </div>
        </nav>
    )
}
const mapStatetoProps = (state) =>{
    console.log(state)
    return {
        auth : state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStatetoProps)(Navbar)