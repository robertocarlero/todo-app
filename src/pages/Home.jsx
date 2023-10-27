import { useAuthState } from '../hooks/useAuthState';

export default function Home() {
    const { state, login } = useAuthState();

    return(
        <>
        <h1>Estado: {state}</h1>
        <button onClick={login}>Iniciar sesión</button>
        </>
    )
}