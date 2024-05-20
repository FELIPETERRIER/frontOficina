'use client'
import Image from "next/image";
import styles from "../styles/home.module.css"
import { useState } from "react";
import InputMask from 'react-input-mask';

import Gears from "../../public/images/gears.png"

export default function Login() {
    const [user,setUser] = useState("");
    const[ident,setIdent] = useState("");
    const[password,setPass] = useState("");



    const handleSubmit = () =>{
        console.log("envio")}


  return (
    <main className={styles.main}>
        <div className={styles.rectangle}>
            <div className={styles.imgGears}>
                <Image src={Gears} className={styles.gears} />
            </div>
            <div className={styles.users}>
                <label>Usuário</label>
                <select className={styles.input} id="user" type="text" onChange={(e) => setUser(e.target.value)}>  
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
                <InputMask className={styles.input} id="cpf"  onChange={(e)=> setIdent(e.target.value)} mask="999.999.999 - 99"  maskChar="_" required/>        
            </div>
            <div className={styles.password}>
                <label>Senha</label>
                <input type="password" id="password" className={styles.input}  onChange={(e)=> setPass(e.target.value)} placeholder="*********"required/>        
            </div>        
            <div className={styles.loginButton}>        
                <button onClick={handleSubmit}>Login</button>        
            </div>
        </div>
    </main>
  );
}
