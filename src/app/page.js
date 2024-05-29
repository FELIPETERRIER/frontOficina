'use client'
import Image from "next/image";
import styles from "../styles/home.module.css"
import {useState} from "react";
import InputMask from 'react-input-mask';
import axios from "axios";

import Gears from "../../public/images/gears.png"

export default function Login() {
   
   
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
     
  return (
    <div className={styles.main}>
        <div className={styles.rectangle}>
            <div className={styles.imgGears}>
                <Image src={Gears} className={styles.gears} alt="gears" />
            </div>
            <div className={styles.users}>
                <label>Usuário</label>
                <select className={styles.input} onChange={handleInput} id="typeUser" name="typeUser" type="text" >  
                    <option value="0">Selecione o tipo de usuário</option>                   
                    <option value="34" >Cliente</option>
                    <option value="32">Auxiliar Mecânico(a)</option>
                    <option value="33">Gerente</option>
                    <option value="38">Funileiro(a)</option>
                    <option value="35">Propietário(a)</option>
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
