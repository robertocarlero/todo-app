import Layout from "../components/AuthLayout";
import { TextField, Button } from '@mui/material';
import { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default function SignIn() {
    const [formValue, setFormValue] = useState({email: "", password: ""});


    useEffect(() => { 
        const auth = getAuth();
        
        onAuthStateChanged(auth, (user) => {
            console.log("cambio de estado", user);
        });
    }, [])

    async function  handleClick(event) {
        const auth = getAuth();
        const { email, password } = formValue;
        
        const res = await signInWithEmailAndPassword(auth, email, password);

        console.log(res);

        
            
    }

    function onChange(event) {
        const newFormValue= {
            ...formValue,
            [event.target.name]: event.target.value
        }
        setFormValue(newFormValue);
    }

    return (
        <Layout title="Iniciar sesión">
            <form className="flex flex-col gap-4 min-w-[500px]">
                <TextField value={formValue.email} label="Your email" variant="outlined" type="email" name="email" fullWidth onChange={onChange}/>
                <TextField value={formValue.password} label="Your password" variant="outlined" type="password" name="password" fullWidth onChange={onChange}/>
                <Button variant="contained" type="button" fullWidth onClick={handleClick}>Enviar</Button>
            </form>
        </Layout>
    )
}