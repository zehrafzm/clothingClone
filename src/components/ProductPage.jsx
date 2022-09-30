import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Box from '@mui/material/Box';
import Portal from '@mui/material/Portal';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { display } from '@mui/system';


export default function ProductPage(){
    const [size, setSize] = React.useState('');

    const handleChange = (event) => {
        setSize(event.target.value);
    };
    function HandleBag(e){
        var bagValue =  localStorage.getItem('bagValue');
        var totalPrice =  localStorage.getItem('totalPrice');
        var bagList =   localStorage.getItem('bagList')
        const item = e.target.value
            
          
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
  
  
   function InfoTabs() {
        const [value, setValue] = React.useState('1');
    
        const handleChange = (event, newValue) => {
        setValue(newValue);
        };
    
        return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Item One" value="1" />
                    <Tab label="Item Two" value="2" />
                    <Tab label="Item Three" value="3" />
                </TabList>
            </Box>
            <TabPanel value="1">
                Bu ürün, dünyanın en büyük sürdürülebilir pamuk programı o
                lan BCI (Better Cotton Initiative – Daha İyi Pamuk İnisiyatifi) tarafından 
                belirlenen standartlar çerçevesinde yetiştirilen pamuktan üretildi. <br/>
                “Daha iyi pamuk” ile hem çevre üzerindeki etkinin azaltıldığı hem de
                çiftçilerin koşullarının geliştirildiği bir üretim modeli ifade ediliyor.
             </TabPanel>
            <TabPanel value="2">
                %100 BCI sertifikalı pamuk.<br/>
                FSC sertifikalı karton etiket.<br/>
                Türkiye’de üretildi. <br/>
                Makinede 30°C’de, benzer renklerle, tersten yıkayın ve tersten ütüleyin. 
                Ağartıcı kullanılmaz, tambur kurutma ve kuru temizleme yapılmaz.<br/>
                Çevre için tüm giyim ürünlerini ve aksesuarları daha az yıkamanızı öneriyoruz.</TabPanel>
            <TabPanel value="3">
                Regular fit unisex t-shirt. 
                <br/>
                Kadın modelin boyu: 179 cm
                Kadın modelin bedeni: S
                <br/>
                Erkek modelin boyu: 190 cm
                Erkek modelin bedeni: L
            </TabPanel>
            </TabContext>
        </Box>
        );
    }
  
    const product= localStorage.getItem('productUrl')
    return(
        <div className='toBeInlined'>
            <div >
                <PortalClickAway/>
                <img src={product}  />
            </div>
            <div >
          <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Size</InputLabel>
                <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={size}
                onChange={handleChange}
                autoWidth
                label="Size"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={0}>XS</MenuItem>
                <MenuItem value={1}>S</MenuItem>
                <MenuItem value={2}>M</MenuItem>
                <MenuItem value={3}>L</MenuItem>
                <MenuItem value={4}>XL</MenuItem>
                </Select>
          </FormControl>
          <InfoTabs  />
          <input   id='priceButton' type="button"    value="50"  onClick={HandleBag} />
          <AddShoppingCartIcon  />
            </div>
             
        </div>
    )

}
