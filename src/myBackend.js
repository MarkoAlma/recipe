import axios from "axios";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebaseApp";
import imageCompression from "browser-image-compression";

const apiKey = import.meta.env.VITE_IMGBB_API_KEY
const iurl = "https://api.imgbb.com/1/upload?key="+apiKey
export const uploadToIbb = async (file)=> {
    const formData =new FormData()
    formData.append("image", file)
    try {
        const resp = await axios.post(iurl, formData)
        const {url, delete_url} = resp.data.data
        return {url, delete_url}
    } catch (error) {
        console.log("Képfeltöltési hiba: ", error);
    }
}

export const addRecipe = async(recipe, file)=> {
    try {
        const compressed = await imageCompression(file, {maxWidthOrHeight:800, useWebWorker:true})
        const {url, delete_url} = await uploadToIbb(compressed)
        const collRef = collection(db, "recipes")
        await addDoc(collRef, {...recipe, url, delete_url, timestamp:serverTimestamp()})
    } catch (error) {
        console.log(error);
        
    }
}