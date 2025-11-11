import { TextField } from '@mui/material'
import React from 'react'
import { FaHome } from 'react-icons/fa'
import { useNavigate } from 'react-router'

const SignUp = () => {
  const navigate = useNavigate()

  return (
    <div style={{minHeight:'100vh', display:'flex', justifyContent:'center', gap:'20px',alignItems:'center', backgroundColor:'lightyellow', position:'relative'}}>
      <div className='login' style={{textAlign:'center', display:'flex',  flexDirection:'column', gap:'200px', justifyContent:'center', alignItems:'center', flexWrap:'wrap', gap:'10px',   backgroundColor:'white', borderRadius:'10px', padding:'40px', height:'fit-content'}}>
        <div style={{paddingBottom:'40px', fontSize:'xx-large', fontWeight:'bold'}}>Regisztráció</div>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:'20px'}}>
        <TextField style={{width:'310px'}} className='inputok' variant="outlined" type='text' label="Email" required/>
        <TextField style={{width:'310px'}} className='inputok' variant="outlined" type='text' label="Jelszó"required/>
        <TextField style={{width:'310px'}} className='inputok' variant="outlined" type='text' label="Felhasználónév" required/>
            </div>
      </div>
      <div className='glass-btn' onClick={()=>navigate("/")}><FaHome fill='black'/></div>
    </div>
  )
}

export default SignUp
