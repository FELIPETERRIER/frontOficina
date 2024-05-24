'use client'
import Image from "next/image";
import styles from "../styles/home.module.css"
import {useState} from "react";
import InputMask from 'react-input-mask';
import axios from "axios";

import Gears from "../../public/images/gears.png"

export default function Login() {
   
   
    const [post,setPost] = useState({
        cpf:'',
        senha:'',
       })
       const handleInput = (e)=> {
        setPost({...post,[e.target.value]:e.target.value})
       }
      
       const handleSubmit=()=>{
        //e.preventDefault()
        axios.post('http://localhost:3001/login',{post})
        .then(res =>console.log(res))
        .catch(err => console.log(err))
       }
  return (
    <form onSubmit={handleSubmit()} className={styles.main}>
        <div className={styles.rectangle}>
            <div className={styles.imgGears}>
                <Image src={Gears} className={styles.gears} />
            </div>
            <div className={styles.users}>
                <label>Usuário</label>
                <select className={styles.input} id="typeUser" name="typeUser" type="text" >  
                    <option>Selecione o tipo de usuário</option>                   
                    <option>Cliente</option>
                    <option>Mecânico(a)</option>
                    <option>Gerente</option>
                    <option>Funileiro(a)</option>
                    <option>Propietário(a)</option>
                </select>       
            </div>
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
            
        </div>
        
    </form>
  );
}
/*axios*/