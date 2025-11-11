import { Button } from '@mui/material'
import React from 'react'
import { FaHome } from 'react-icons/fa'
import { useNavigate } from 'react-router'

const Login = () => {

  const navigate = useNavigate()

  return (
    <div style={{display:'flex', justifyContent:'space-between', flexDirection:'row', width:'100vw', padding:'10px'}}>
        <div className='glass-btnka' onClick={()=>navigate("/")}>
            <FaHome fill='black'/>
        </div>
        <div style={{display:'flex', gap:'20px'}}>
            <Button onClick={()=>navigate("/signin")} className='glass-btnka' >Bejelentezés</Button>
            <Button onClick={()=>navigate("/signup")} className='glass-btnka' >Regisztráció</Button>
        </div>
    </div>
  )
}

export default Login
