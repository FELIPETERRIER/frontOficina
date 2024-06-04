'use client'
import Image from "next/image";
import styles from "../styles/home.module.css"
import {useState} from "react";
import InputMask from 'react-input-mask';
import axios from "axios";

import Gears from "../../public/images/gears.png"

export default function Login() {
   
    const[selector,setSelector]= useState({

    })
        const selectInput = (e) =>{
            setSelector()
        }
      
    
         
    const [post,setPost] = useState({
        
        
       })
       const handleInput = (e)=> {
        setPost({...post,[e.target.id]:e.target.value})
       }
      
      
      
       const handleSubmit=()=>{
        event=>{event.preventDefault()}
        axios.post('http://localhost:3001/login',{post})
        .then(res =>console.log(res))
        .catch(err =>console.log(err))
       }    
      
      
       const seletorUsers=()=>{
        event=>{event.preventDefault()}
        axios.get('http://localhost:3001/tipoUsuarios',{selector})        
        .then(res =>{
            const data = res.data;                
            const funcaoSelect = funcaoUser => funcaoUser.funcao           
            const funcaoSelected = data.map(funcaoSelect)
            
            for (let value of funcaoSelected) {
                console.log(value)      
            
        }})
        .catch(err =>console.log(err))  
       }
      
        
       
      /* let b =  axios.get('http://localhost:3001/tipoUsuarios',{selector}) 
       console.log(b.data)
        
       
        
        /*map((funcao) => {
            selecao.push(
            <option key={funcao}>

            </option>)
            
        });*/
        
      
        
    
   
    
  return (
    <div className={styles.main}>
        <div className={styles.rectangle}>
            <div className={styles.imgGears}>
                <Image src={Gears} className={styles.gears} alt="gears" />
            </div>
            <div className={styles.users}>
                <label>Usuário</label>
                <select className={styles.input} onClick={seletorUsers}  id="typeUser" name="typeUser" type="text" > 
                   
                               
                   
                </select>       
            </div>
            <form>
            <div className={styles.identification}>
                <label>CPF</label>
                <InputMask className={styles.input} id="cpf" name="cpf"  onChange={handleInput} mask="999.999.999 - 99"  maskChar="_" required/>        
            </div>
            <div className={styles.password}>
                <label>Senha</label>
                <input type="password" id="senha" name="senha" className={styles.input}  onChange={handleInput} placeholder="*********"required/>        
            </div>        
            <div className={styles.loginButton}>        
                <button onClick={handleSubmit}>Login</button> 
                       
            </div>
           
            </form>
            
        </div>
        
    </div>
  );
}
