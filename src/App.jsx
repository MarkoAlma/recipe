import './App.css'
import { Route, Routes } from 'react-router'
import {Home} from './pages/Home'
import {Recipes} from './pages/Recipes'
import {RecipesForm} from './pages/RecipesForm'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/recipes' element={<Recipes/>}></Route>
        <Route path='/addnew' element={<RecipesForm/>}></Route>
        <Route path='/edit/:id' element={<RecipesForm/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
    </>
  )
}

export default App
