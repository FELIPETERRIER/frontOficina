'use client'
import Image from "next/image";
import styles from "../styles/home.module.css"
import { useState } from "react";
import InputMask from 'react-input-mask';

import Gears from "../../public/images/gears.png"

export default function Login() {
    const [user,setUser] = useState("");
    const[ident,setIdent] = useState("");


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
                <select className={styles.input} type="text" onChange={(e) => setUser(e.target.value)}> 
                    <option>anana</option>
                    <option>nana</option>
                    <option>na</option>
                </select>       
            </div>
            <div className={styles.identification}>
                <label>CPF</label>
                <InputMask className={styles.input}  onChange={(e)=> setIdent(e.target.value)} mask="999.999.999 - 99"  maskChar="_" required/>        
            </div>      
            <div className={styles.loginButton}>        
                <button onClick={handleSubmit}>Login</button>        
            </div>
        </div>
    </main>
  );
}
