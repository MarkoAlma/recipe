import { Button } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router';
import { readRecipes } from '../myBackend';
import RecipeCard from '../components/RecipeCard';
import Login from '../components/Login';

export const Recipes = () => {

  const [recipes, setRecipes] = useState([])


  

  const navigate = useNavigate()

  useEffect(()=>{
    readRecipes(setRecipes)
  },[])
console.log(recipes);

  return (
    <div style={{minHeight:'100vh', display:'flex', justifyContent:'center' , flexDirection:'column', backgroundColor:'lightyellow', position:'relative'}}>
      <div style={{width:'100vw'}}><Login/></div>
      <div style={{textAlign:'center', display:'flex', justifyContent:'center', flexWrap:'wrap', gap:'10px', padding:'50px'}}> {recipes && recipes.length>0 && recipes.map(obj=> <RecipeCard key={obj.id} {...obj}/> )} {recipes && recipes.length==0 && <h4>Nincsenek receptek feltöltve</h4> }</div>
      <Button onClick={()=>navigate("/addnew")} style={{position:'absolute', bottom:'5px', right:'5px', cursor:'pointer'}}>Új recept hozzáadása</Button>
    </div>
  )
}