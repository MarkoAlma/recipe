import { Button } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { FaHome } from 'react-icons/fa'
import { useNavigate } from 'react-router'
import { MyUserContext } from '../context/MyUserProvider'

const Login = () => {

  const {user} = useContext(MyUserContext)
  console.log(user);
  
  const navigate = useNavigate()

  return (
    <div className='header' style={{display:'flex', justifyContent:'space-between', flexDirection:'row', padding:'10px', top:'0', left:'0', position:'absolute'}}>
        <div className='glass-btnka' onClick={()=>navigate("/")}>
            <FaHome fill='black'/>
        </div>
        {user ? <div style={{display:'flex', gap:'20px'}}>
            <Button className='glass-btnka szove'>Kijlentkezés</Button>
        </div> :
        <div style={{display:'flex', gap:'20px'}}>
            <Button onClick={()=>navigate("/signin")} className='glass-btnka szove' >Bejelentezés</Button>
            <Button onClick={()=>navigate("/signup")} className='glass-btnka szove' >Regisztráció</Button>
        </div>}
    </div>
  )
}

export default Login
