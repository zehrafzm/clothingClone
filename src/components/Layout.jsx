import {Outlet, Link} from "react-router-dom";
import Button from '@mui/material/Button';
import "./components.css"
import TemporaryDrawer from "./Drawer";

export default function Layout(){
    return(
        <div> 
            <nav className="menuBar" >
                <ul className="menuBar" >
                    <span id="brandName" > Cara loves Karl </span>
                    <li className="genderButtonLis" >
                        <Link to="/Main"  ><button className='genderButton' >main </button></Link>
                    </li>
                    <li className="genderButtonLis">
                        <Link to="/Women"  ><button className='genderButton'  >women </button></Link>
                    </li>
                    <li className="genderButtonLis">
                        <Link to="/Men"  ><button className='genderButton'  >men </button></Link>
                    </li>
                  
                   
                    <li> <TemporaryDrawer /> </li>
                </ul>            
            </nav>
            <Outlet />
        </div>
    )
}