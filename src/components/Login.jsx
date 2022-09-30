import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { database } from '../firebase'
import {ref,push,child,update} from "firebase/database"


localStorage.setItem('bagValue',JSON.stringify(0))


export default function Login(){
    const [userName,setUserName] = useState()
    const [password,setPassword] = useState()
    

    function handleChangeU(e){
        setUserName(e.target.value)
    }
    function handleChangeP(e){
        setPassword(e.target.value)
    }
    const defaultUser= {
        userNameD:"cem",
        passwordD:"2022"
    }
    localStorage.setItem('userDefault',JSON.stringify(defaultUser))
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        let member ={
            userName: {userName},
            password: {password},
            bagValue: 0            
        }
        
        const userDef =  localStorage.getItem('userDefault')
        if(userDef.userNameD == member.userName){
            if(userDef.password == member.password){
                console.log("youre logged in ")
            }else{console.log("password error")}
        }else{console.log("username error")}
        console.log(userName,password,userDef )
       
        
        //firebase
        // const newPostKey = push(child(ref(database), 'posts')).key;
        // const updates = {};
        // updates['/' + newPostKey] = member
        // localStorage.setItem('user',JSON.stringify(member))
        // return update(ref(database), updates);
    }
    function handleLogin(e){
        e.preventDefault()
        let member ={
            userName: {userName},
            password: {password},
            bagValue: 0            
        }

        const userDef =  localStorage.getItem('userDefault')
        if(userDef.userNameD == member.userName){
            if(userDef.password == member.password){
                console.log("youre logged in ")
            }else{console.log("password error")}
        }else{console.log("username error")}
        console.log(userName,password,userDef )
       
    }
    
    
  

    return(
        <div>
            <form onSubmit={handleSubmit} >
                <Box
                    component="form"
                    marginTop="12rem"
                    noValidate
                    autoComplete="off"
                    >
                    <TextField onChange={handleChangeU} id="userName" label="username"  />
                    <TextField onChange={handleChangeP} id="password" label="password"  />
                </Box>   
                <input type="submit" onClick={()=> handleSubmit} value="register" />  
     
            </form>
            <div>
                <form onSubmit={handleLogin} >
                    <Box
                        component="form"
                        marginTop="6rem"
                        noValidate
                        autoComplete="off"
                        >
                        <TextField onChange={handleChangeU} id="userName" label="username"  />
                        <TextField onChange={handleChangeP} id="password" label="password"  />
                    </Box>        
                    <input type="submit" onClick={handleLogin} value="login" />  
                </form>

            </div>
            
        </div>          
        
    )
}
