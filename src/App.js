import './App.css';
import Login from "./Login";
import {Route, Redirect, useHistory} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import instance from "./api";
import {useEffect, useState} from "react";
import Profile from "./Profile";

function App() {
    let history = useHistory();

    //login error message
    const [errMsg, setErrMsg] = useState(null)
    //authorization
    const [auth, setAuth] = useState(false)

    const token = localStorage.getItem('x-auth-token')

    //HANDLE LOGIN
    const login = (data) => {
        console.log(data)
        instance.post('/auth/signIn', data)
            .then(data => {
                if (data.status === 200) {
                    localStorage.setItem('x-auth-token', data.headers['x-auth-token'])
                    setAuth(prevState => prevState = data.data)
                } else {
                    console.log(errMsg)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        console.log(token)
        if (token === null) {
            history.push("/login")
        }else{
            history.push("/profile")
        }
    }, [token])


    return (
        <div className="App">
                    <Route path='/login' exact render={() => <Login login={login}/>}/>
                    <Route path='/profile' exact render={() => <Profile />}/>
        </div>
    );
}

export default App;
