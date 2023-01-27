import React from 'react'
import { useState } from 'react'
import axios from "axios"

const SignUp = () => {
    const [name, setname] = useState("")
    const [lastname, setlastname] = useState("")
    const [Mobile, setMobile] = useState(0)
    const [Email, setEmail] = useState("")
    const [password, SetPassword] = useState("")

    const handleSubmit=async (e)=>{
        e.preventDefault()
        if(name!=="" && lastname!=="" && Mobile!=="" && Email!=="" && password!==""){
            let data = {firstname:name,lastname:lastname,mobile:Number(Mobile),email:Email,password}
            let x=await axios.post("https://good-pear-chameleon-veil.cyclic.app/",data)
            console.log(x)
            if(x.data==="Already Exist"){
                alert("Already exist")
            }else{
                alert("Created Account SuccesFully")
            }
        }else{
            alert("Enter all Credentials")
        }
    }
    

  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)} >
            <label>
                First Name:
            </label>
            <input  type="text" required onChange={(e)=>setname(e.target.value)}/>
            <br />
            <label>
                 last Name:
            </label>
            <input  type="text" onChange={(e)=>setlastname(e.target.value)}/>
            <br />
            <label>
                Mobile No. :
            </label>
            <input  type="number" onChange={(e)=>setMobile(e.target.value)}/>
            <br />
            <label>
                Email:
            </label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
            <br />
            <label>
                Password:
            </label>
            <input type="password" onChange={(e)=>SetPassword(e.target.value)}/>
            <br />
            <input type="submit" placeholder='Submit'/>
        </form>
    </div>
  )
}

export default SignUp