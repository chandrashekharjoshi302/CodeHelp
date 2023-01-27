import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [Email, setEmail] = useState("")
    const [password, SetPassword] = useState("")
    let loggedin=localStorage.getItem("token") 
    let loggedName=localStorage.getItem("loginName")
    loggedName=JSON.parse(loggedName)
    const handleLogin=async (e)=>{
        e.preventDefault()
        if(Email!=="" && password!==""){
            let data={email:Email,password}
            let cos=await axios.patch("https://good-pear-chameleon-veil.cyclic.app/",data)
            if(cos.data==="Wrong Credentials" || cos.data==="No such user exist"){
                alert("Invalid Email or Password.")
            }else if(cos.data.data!=="No such user exist"){
                alert("Successfully Logged In.")
                localStorage.setItem("token",JSON.stringify(cos.data.token))
                localStorage.setItem("loginName",JSON.stringify(cos.data.data[0].name))
                window.location.reload()
            }
        }else{
            alert("Fill all Credentials.")
        }
    }

    if(loggedin){
        return (
            <div>
                <h1 style={{textAlign:"center"}}>
                    Welcome Mr. {loggedName}
                </h1>
            </div>
        )
    }

  return (
    <div>
        <form onSubmit={(e)=>handleLogin(e)} style={{margin:"auto",backgroundColor:"#050b4f",border:"1px solid white",width:"40%",padding:"40px"}}>
        <label>
                Email:
            </label>
            <input style={{width:"100%"}} type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="abc@gmail.com"/>
            <br />
            <label>
                Password:
            </label>
            <input style={{width:"100%"}} type="password" onChange={(e)=>SetPassword(e.target.value)} placeholder="Password"/>
            <br />
            <input style={{width:"100%",marginTop:"40px"}} type="submit" placeholder='Submit'/>
        </form>
    </div>
  )
}

export default Login