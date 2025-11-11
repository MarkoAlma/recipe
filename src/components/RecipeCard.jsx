import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { deleteRecipe } from '../myBackend';
import { CiEdit } from "react-icons/ci";
import { useNavigate } from 'react-router';

const RecipeCard = ({id, name, steps, ingredients, categ, url, delete_url}) => {

    const navigate = useNavigate()

  return (
    <div style={{flexBasis:'24%', backgroundColor:'rgb(250,250,250) ', boxShadow:'1px 1px 5px 2px lightgray', borderRadius:'10px', position:'relative', padding:'10px', paddingBottom:"50px"}}>
      <h1>{name}</h1>
        <h6>({categ})</h6>
      <img src={url} alt={name} style={{width:'100px'}}/>
    <ul>
        <h3 style={{textAlign:'left'}}>Hozzávalók:</h3>
        {ingredients.map((obj, ind) => 
            <li key={ind} style={{textAlign:'left'}}>{obj}</li>
        )}
    </ul>
    <p style={{textAlign:'left', marginBottom:"20px"}}>{steps}</p>
      <div className='glass-btnk balos' style={{cursor:'pointer'}} onClick={()=>deleteRecipe(id, delete_url)}><FaRegTrashAlt/></div>
      <div className='glass-btnk jobbos' style={{cursor:'pointer'}} onClick={()=>navigate("/edit/"+id)} ><CiEdit/></div>
    </div>
  )
}

export default RecipeCard
