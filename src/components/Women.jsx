import Axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import './components.css';

import { Link} from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Portal from '@mui/material/Portal';
import FullscreenIcon from '@mui/icons-material/Fullscreen';


export default function Men(){
    

    const [data,setData] = useState([])
    useEffect(()=>{
    Axios.get("https://api.unsplash.com/search/photos?page=1&query=woman clothing&client_id=q_Cs2LYS5kqrSsWKtyksNUoDqtGqB6FrnKVN3op66-I&per_page=20")
    .then( res=> {
      console.log(res.data.results)
      setData(res.data.results)}      
      ).catch(err => console.log(err))
     },[])

    const bagList=localStorage.setItem('bagValue',"")
    const totalPrice= localStorage.setItem('totalPrice',0)
    let bagValue= localStorage.setItem('bagValue',0)
    
    
    function PortalClickAway() {
        const [open, setOpen] = React.useState(false);
    
        const handleClick = () => {
        setOpen((prev) => !prev);
        };
    
        const handleClickAway = () => {
        setOpen(false);
        };
    
        const styles = {
        
        position: 'fixed',
        width: 200,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid',
        p: 1,
        bgcolor: 'background.paper',
        };
        const price = localStorage.getItem('totalPrice')
    return (
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <button type="button" onClick={handleClick} id="bagPrice" >
          click <br/> to see the total amount <br/>you should pay
          </button>
          {open ? (
            <Portal>
              <Box sx={styles}>
              {price}
              </Box>
            </Portal>
          ) : null}
        </div>
      </ClickAwayListener>
    );
  }
    function HandleBag(e){
        var bagValue =  localStorage.getItem('bagValue');
        var totalPrice =  localStorage.getItem('totalPrice');
        var bagList =   localStorage.getItem('bagList')
        const item = e.target.value
        localStorage.setItem('productUrl',(e.target.getAttribute("params")))
            
          
        return(
            
            bagList= item.data,
            localStorage.setItem('bagValue',bagList),
            bagValue = parseInt(bagValue)+ 1,
            totalPrice = parseInt(totalPrice)+ parseInt(item),
            localStorage.setItem('bagValue',JSON.stringify(bagValue)),
            localStorage.setItem('totalPrice',JSON.stringify(totalPrice)),
            console.log("bagList",e.target.data)
        )
    }
   
    const productList = useState([]);
    
    data.map(function(item){
        let product = {
            productImage: item,
            productShop: <AddShoppingCartIcon  margin=".1rem"  />,
            productPrice: item.likes ,
            productFavorite: false
        };
        productList.push(product);
    })
                

    return(
        <div className='womenDiv' id='deneme' >
           <PortalClickAway/>,
           {productList.map(function(item){
            if(productList.indexOf(item)>3){
                
                return( <span   >
                    <img className='manClothes'
                            value= {`${item.productImage.urls.small}`}
                            src={`${item.productImage.urls.small}`}
                            srcSet={`${item.productImage.urls.small}`} 
                        />
                <Link to="/ProductPage" target="_blank"   >
                    <FullscreenIcon value={`${item.productPrice}`} params={`${item.productImage.urls.small}`} onClick={HandleBag} />    
                </Link>
                <input id='priceButton' type="button" 
                    value={`${item.productPrice}`} params={`${item.productImage.urls.small}`} onClick={HandleBag} /> 
                     ₺  {item.productShop} 
                </span>
                )
            }
            })}
            
        </div>
    )
}
