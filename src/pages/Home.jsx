import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'
import Login from '../components/Login'

export const Home = () => {

  const navigate = useNavigate()

  return (
    <div className='home' style={{position:'relative'}}>
      <div className='kisdiv'>
        <h1>RecipeBook</h1>
        <Button style={{color:'white'}} onClick={()=>navigate("/recipes")}>Főzz, posztolj, inspirálj !</Button>
        <div style={{top:'0', right:'0', display:'flex'}}><Login/></div>
      </div>
    </div>
  )
}