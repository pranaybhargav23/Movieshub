import { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import "./index.css"


const Login = () => {
    const [username, setUserName] = useState("")
    const [password,setPassWord] = useState("")
    const [isError,setIsError] = useState(false)
    const [errorMsg,setErrorMsg] = useState("")

    const navigate = useNavigate()

    const onChangeUserName = (event) => {
        setUserName(event.target.value)
    } 
    const onChangePassword = (event) => {
        setPassWord(event.target.value)
    }

    const onSubmitSucess = (jwtToken) => {
        Cookies.set("jwt_token",jwtToken,{expires:30})
        navigate("/",{replace:"true"})

    }
    const onSubmitFailure = (error) => {
        setIsError(true)
        setErrorMsg(error)

    }


    const onSubmitForm = async (event) => {
        
        event.preventDefault()
        const userDetails = {username,password} 
        const url="https://apis.ccbp.in/login"
        const options={
            method:'POST',
            body:JSON.stringify(userDetails),
        }
        const response = await fetch(url,options)
        const data = await response.json()
       
        if (response.ok === true){
            onSubmitSucess(data.jwt_token)
        }else {
           onSubmitFailure(data.error_msg)
        }


    }
    
    



  return (
    <>
        <div className="background">
            {/* <h1 className="movies-heading">MOVIES</h1> */}
            <img src="https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/react-js/coding-practices/moviesApp/moviesAppWebsiteLogo.png" alt="movies logo" className="movies-logo"/>
            <div className="login-box">
            <div className="login-form">
                <div className="login-container">
                    <form onSubmit={onSubmitForm}>
                        <h1 className="login-heading">Login</h1>
                        <div className="input-container">
                            <label className="user-name" htmlFor="userName">USERNAME</label>
                            <input className="custom-input" id="userName" type="text" placeholder="Username" onChange={onChangeUserName}/>
                        </div>
                        <div className="input-container">
                            <label className="user-name" htmlFor="passWord">PASSWORD</label>
                            <input  className="custom-input" id="passWord" type="password" placeholder="Password" onChange={onChangePassword} />
                        </div>
                          {isError && <p className="error-msg">{errorMsg}</p>}
                          <button className="signin-button" type="submit">Sign in</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Login