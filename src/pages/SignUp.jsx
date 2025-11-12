import { Button, TextField } from '@mui/material'
import React from 'react'
import { FaHome } from 'react-icons/fa'
import { useNavigate } from 'react-router'

const SignUp = () => {
  const navigate = useNavigate()

  const handleSubmit = (event)=> {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log(data);
    
    console.log(data.get('email'), data.get('password'), data.get('display_name'));
  }

  return (
    <div style={{minHeight:'100vh', display:'flex', justifyContent:'center', gap:'20px',alignItems:'center', backgroundColor:'lightyellow', position:'relative'}}>
      <div className='login' style={{textAlign:'center', display:'flex',  flexDirection:'column', gap:'200px', justifyContent:'center', alignItems:'center', flexWrap:'wrap', gap:'10px',   backgroundColor:'white', borderRadius:'10px', padding:'40px', height:'fit-content'}}>
        <div style={{paddingBottom:'40px', fontSize:'xx-large', fontWeight:'bold'}}>Regisztráció</div>
        <form onSubmit={handleSubmit}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:'20px'}}>
            <TextField style={{width:'310px'}} className='inputok' variant="outlined" type='text' name='email' label="Email" required/>
            <TextField style={{width:'310px'}} className='inputok' variant="outlined" type='text' name='password' label="Jelszó"required/>
            <TextField style={{width:'310px'}} className='inputok' variant="outlined" type='text' name='display_name' label="Felhasználónév" required/>
            <div className='hoverke' style={{position:'relative'}}>
              <Button style={{opacity:'1'}} className='glass-btnka'>Regisztrálás</Button>
              <button className='hoverke' style={{opacity:'1', position:'absolute', left:'0', top:'0', width:'100%', height:'100%', zIndex:'5', opacity:'0'}}>a</button>
            </div>
          </div>
        </form>
      </div>
      <div className='glass-btn' onClick={()=>navigate("/")}><FaHome fill='black'/></div>
    </div>
  )
}

export default SignUp
