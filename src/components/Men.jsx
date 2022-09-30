import Axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import './components.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



export default function Men(){
    
    const [data,setData] = useState([])
    useEffect(()=>{
    Axios.get("https://api.unsplash.com/search/photos?page=2&query=man clothing&client_id=q_Cs2LYS5kqrSsWKtyksNUoDqtGqB6FrnKVN3op66-I&per_page=20")
    .then( res=> {
      console.log(res.data.results)
      setData(res.data.results)}      
      ).catch(err => console.log(err))
     },[])

   
    
    
       
       

    return(
        <div className='womenDiv' id='deneme' >
           
            {data.map((item) => (
                <img className='manClothes'
                    src={`${item.urls.small}`}
                    srcSet={`${item.urls.small}`}
                />
                ))}
            
            
        </div>
    )
}

 {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {data.map((item) => (
                <ImageListItem key={item.urls.small}>
                <img
                    src={`${item.urls.small}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.urls.small}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                />
                </ImageListItem>
                ))}
            </ImageList> */}

           // function dunnoButtonT (){
                //     var iDiv = document.getElementById("iDiv")
                //     data.map(function(i) {
                //        return  (iDiv.innerHTML+= "<img src={i.urls.small} />", console.log(<img src={i.urls.small} />) )}
                //     )
                // }