import { Button } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router';
import { readRecipes } from '../myBackend';
import RecipeCard from '../components/RecipeCard';

export const Recipes = () => {

  const [recipes, setRecipes] = useState([])


  

  const navigate = useNavigate()

  useEffect(()=>{
    readRecipes(setRecipes)
  },[])
console.log(recipes);

  return (
    <div style={{minHeight:'100vh', display:'flex', justifyContent:'center  ' , backgroundColor:'lightyellow', position:'relative'}}>
      <div style={{textAlign:'center', display:'flex', justifyContent:'center', flexWrap:'wrap', gap:'10px'}}> {recipes && recipes.length>0 && recipes.map(obj=> <RecipeCard key={obj.id} {...obj}/> )} {recipes && recipes.length==0 && <h4>Nincsenek receptek feltöltve</h4> }</div>
      <div className='glass-btn' onClick={()=>navigate("/")}><FaHome fill='black'/></div>
      <Button onClick={()=>navigate("/addnew")} style={{position:'absolute', bottom:'5px', right:'5px', cursor:'pointer'}}>Új recept hozzáadása</Button>
    </div>
  )
}