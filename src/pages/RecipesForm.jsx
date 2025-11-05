import React from 'react'
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from 'react-router';
import { addRecipe } from '../myBackend';
import { Button, TextField } from '@mui/material';

export const RecipesForm = () => {

  const [name, setName] = useState("")
  const [ingredients, setIngredients] = useState([""])
  const [steps, setSteps] = useState("")
  const [categ, setCateg] = useState("")
  const [file, setFile] = useState(null)
  const [filePrev, setFilePrev] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    let inputData = {name, ingredients, steps, categ}
    console.log(inputData);
    await addRecipe(inputData, file)
    console.log("recept mentve");
    setLoading(false)
    navigate("/recipes")
  }

  const handleChangeIngredients = (ind, value)=> {
    const newIngredients = [...ingredients]
    newIngredients[ind] = value
    setIngredients(newIngredients)
  }

  const handleFileChange = (e)=>{
    const selected = e.target.files[0]
    setFile(selected)
    if (selected) {
      setFilePrev(URL.createObjectURL(selected))
    }
  }

  return (
    
    <div style={{minHeight:'100vh', backgroundColor:'lightyellow', position:'relative', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <h1 style={{textAlign:'center', position:'absolute', top:'5px'}}>Új recept feltöltése</h1>
      <div className='hozzaado' >
        <form onSubmit={handleSubmit} style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:'15px'}}>
          <TextField className='inputok' variant="outlined" type='text' label="Recept neve" value={name} onChange={(e)=>setName(e.target.value)} required/>
          {ingredients.map((item, index)=> 
            <div className='inputok' key={index}>
              <TextField className='inputok' style={{width:'100%'}} variant="outlined" type="text" value={item} onChange={(e)=>handleChangeIngredients(index, e.target.value)} placeholder={`${index+1}. hozzávaló`}/>
            </div>
          )}
          <FaPlus  onClick={()=>setIngredients([...ingredients,""])} />
          <textarea className='inputok' value={steps} onChange={(e)=>setSteps(e.target.value)} placeholder='Elkészítés lépései' required></textarea>
          <TextField className='inputok' variant="outlined" value={categ} onChange={(e)=>setCateg(e.target.value)} placeholder='Kategória' required/>
          <input style={{display:'flex', alignItems:'center', justifyContent:'space-between'}} type="file" accept='image/*' onChange={handleFileChange}/>
          {filePrev && <img src={filePrev} alt='kép' style={{maxHeight:200, objectFit:'cover'}}/>}
          <Button type='submit'>Mentés</Button>
        </form>
      </div>
      <IoMdClose onClick={()=>navigate("/recipes")} style={{position:'absolute', top:'5px', left:'5px', cursor:'pointer', backgroundColor:'yellow', boxShadow:'0 0 5px 2px yellow', color:'black'}}/>
    </div>
  )
}