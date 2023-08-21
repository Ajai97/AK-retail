import React, { useState } from 'react'
import './Adddata.css'
import {db,storage} from '../FireBase/FirebaseConfig';
import {addDoc,collection} from "firebase/firestore"
import {ref,uploadBytes,getDownloadURL} from "firebase/storage"
const Adddata = () => {
    const[itemName,setItemName]=useState('')
    const[brandName,setBrandName]=useState('')
    const[category,setCategory]=useState('')
    const[price,setPrice]=useState('')
    const[image,setImage]=useState(null)
    const[shopName,setShopName]=useState('')
    const[address,setAddress]=useState('')
    const[phone,setPhone]=useState('')
    const [imageUrl,setImageUrl]=useState('')
    //console.log()
    const handleSubmit=(e)=>{
        e.preventDefault()
        if (image==null){
            alert("please select an image")
            return
        }
        else{
            const imageRef=ref(storage,`Images/${image.name}`)
            uploadBytes(imageRef,image)
            .then(()=>{
                alert("image upload successfully")
                getDownloadURL(imageRef)
                .then((url)=>{
                    console.log(url)
                    setImageUrl(url)
                }
                )
            })
            .catch((error)=>{
                alert (error.message)
            })
        }
        const adddata={
            itemName,
            brandName,
            category,
            price,
            imageUrl,
            shopName,
            address,
            phone
        }
        try{
            const docRef= addDoc(collection(db,"RetailData"),adddata);
            alert("Data Added Successfully",docRef.id);
        }
        catch(error){
            alert("Error adding document:",error);

        }
    }

  return (
    <div className='form-outer'>
        <h1>Add Data </h1>
        <form className='form-inner'>
            <label>Item name</label>
            <input type='text' name='cloth_name'
            onChange={(e)=>{setItemName(e.target.value)}}/>
            <br/>
            <label>Brand Name</label>
            <input type='text' name='brand_name'
           onChange={(e)=>{setBrandName(e.target.value)}}/>
            <br/>
            <label>Category</label>
            <input type='text' name='category'
            onChange={(e)=>{setCategory(e.target.value)}}/>
            <br/>
            <label>Price</label>
            <input type='text' name='price'
            onChange={(e)=>{setPrice(e.target.value)}}/>
            <br/>
            <label>Image</label>
            <input type='file' name='photo'
            onChange={(e)=>{setImage(e.target.files[0])}}/>
            <br/>
            <label>Shop name</label>
            <input type='text' name='shopname'
            onChange={(e)=>{setShopName(e.target.value)}}/>
            <br/>
            <label>Address</label>
            <input type='text' name='address'
            onChange={(e)=>{setAddress(e.target.value)}}/>
            <br/>
            <label>Phone</label>
            <input type='text' name='phone'
            onChange={(e)=>{setPhone(e.target.value)}}/>
            <br/>
            <button onClick={handleSubmit}>Add detail</button>


        </form>
        
        
        
        
        
        
        </div>
  )
}

export default Adddata;