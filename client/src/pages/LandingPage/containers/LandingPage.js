import React from 'react'
import {Button} from 'react-bootstrap'
import { connect } from 'react-redux';
import { renderLoginPage, renderSignupPage } from '../actions';
import LoginForm from '../components/loginForm'
import SignUpForm from '../components/signUpForm'



const mapStateToProps = (state) => {
    return {
        renderLogin: state.handleLandingPage.renderLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRenderSignupPage: () => dispatch(renderSignupPage()),
        onRenderLoginPage: () => dispatch(renderLoginPage())
    }
}

function LandingPage(props) {
    console.log(props);
    
    let {renderLogin} = props; 

    // if (renderLogin) return <LoginForm/>
    // else return <SignUpForm/>

    return (
        <div>
            {
                renderLogin ?
                <LoginForm renderSignUp={props.onRenderSignupPage}/> :
                <SignUpForm renderLogin={props.onRenderLoginPage}/>
            }   
        </div>
        
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);