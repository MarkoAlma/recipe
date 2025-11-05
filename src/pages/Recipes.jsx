import { Button } from '@mui/material';
import React from 'react'
import { FaHome } from "react-icons/fa";
import { useNavigate } from 'react-router';

export const Recipes = () => {

  const navigate = useNavigate()

  return (
    <div style={{minHeight:'100vh', backgroundColor:'lightyellow', position:'relative'}}>
      <div style={{textAlign:'center'}}>Receptek...</div>
      <FaHome onClick={()=>navigate("/")} style={{position:'absolute', top:'5px', left:'5px', cursor:'pointer', backgroundColor:'yellow', boxShadow:'0 0 5px 2px yellow', color:'black'}}/>
      <Button onClick={()=>navigate("/addnew")} style={{position:'absolute', bottom:'5px', right:'5px', cursor:'pointer'}}>Új recept hozzáadása</Button>
    </div>
  )
}