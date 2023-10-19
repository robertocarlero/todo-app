import Layout from "../components/AuthLayout";
import { TextField, Button } from '@mui/material';
import { useState } from "react";

export default function SignIn() {
    const [formValue, setFormValue] = useState({name:"", email: "", password: "", date:""});

    function handleClick(event) {
        
        console.log(formValue);
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
                <TextField value={formValue.name} label="Your name" variant="outlined" type="text" name="name" fullWidth onChange={onChange}/>
                <TextField value={formValue.date} label="Your birthday" variant="outlined" type="date" name="date" fullWidth onChange={onChange}/>
                <TextField value={formValue.email} label="Your email" variant="outlined" type="email" name="email" fullWidth onChange={onChange}/>
                <TextField value={formValue.password} label="Your password" variant="outlined" type="password" name="password" fullWidth onChange={onChange}/>
                <Button variant="contained" type="button" fullWidth onClick={handleClick}>Enviar</Button>
            </form>
        </Layout>
    )
}