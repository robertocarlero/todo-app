import { authContext } from "../api/AuthContextProvider"
import { useContext } from "react"

export default function Home() {
    const {state, login} = useContext(authContext)

    return(
        <>
        <h1>Estado: {state}</h1>
        <button onClick={login}>Iniciar sesión</button>
        </>
    )
}