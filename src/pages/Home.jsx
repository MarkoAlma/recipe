import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

export const Home = () => {

  const navigate = useNavigate()

  return (
    <div className='home'>
      <div className='kisdiv'>
        <h1>RecipeBook</h1>
        <Button style={{color:'white'}} onClick={()=>navigate("/recipes")}>Főzz, posztolj, inspirálj !</Button>
      </div>
    </div>
  )
}