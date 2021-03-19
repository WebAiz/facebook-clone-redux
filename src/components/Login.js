import React from 'react'
import '../styles/Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'

function Login() {

    const [state, dispatch] = useStateValue();
    const signIn = () => {
        //sign in
        auth
            .signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
                console.log(result.user);
            }).catch(error => alert(error.message));
    }
    return (
        <div className='login'>
            <div className="login__logo">
                <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png" alt="" />
                <img className='login__logoname' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/800px-Facebook_Logo_%282019%29.svg.png" alt="" />
            </div>
            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>
        </div>

    )
}

export default Login
