import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import {auth} from '../firebaseApp'
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router'

export const MyUserContext = createContext()

const MyUserProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [msg, setMsg] = useState({})


  useEffect(()=>{
    const unsub = onAuthStateChanged(auth,(currentUser)=>{
      //console.log(currentUser.emailVerified);
      
      currentUser?.emailVerified && setUser(currentUser)
    })
    return ()=>unsub()
  },[])

  const signUpUser = async (email, password, display_name, setLoading)=> {
    console.log(email, password, display_name);
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(auth.currentUser, {displayName:display_name})
      await sendEmailVerification(auth.currentUser)
      console.log("Emailre aktiváló link érkezett");
      console.log("sikeres regisztráció");
      setMsg(prev => delete prev.err)
      //setMsg({signUp:"Kattints az emailben érkezett aktiváló linkre"})
      setMsg({katt:"Kattints az emailben érkezett aktiváló linkre"})
    } catch (error) {
      console.log(error);
      setMsg({err:error.message})
    }finally {
      setLoading(false)
    }
  }

  const logoutUser = async ()=> {
    await signOut(auth)
    setMsg({})
    setUser(null)
  }

  const signInUser = async (email, password) => {
    try {
      const adat = await signInWithEmailAndPassword(auth, email, password)
      console.log(adat.user.emailVerified);
      if (adat.user.emailVerified) {
        setMsg({signIn:true})
      }else {
        setMsg({err:"Nincs megerősítve az email!"})
      }
      //
    } catch (error) {
      console.log(error);
      setMsg({err:error.message})
    }
  }

  const resetPassword = async (email)=> {
    let success = false
    try {
      await sendPasswordResetEmail(auth, email)
      setMsg({resetPw:"A jelszó visszaállításhoz szükséges email elküldve"})
      success = true
    } catch (error) {
      setMsg({err:error.message})
    }finally {
      if (success) {
        //navigate("/signin")
      }
    }
  }

  return (
    <MyUserContext.Provider value={{user, signUpUser, logoutUser, signInUser, setMsg, msg, resetPassword}}>
      {children}
    </MyUserContext.Provider>
  )
}

export default MyUserProvider
    