import React, { useEffect, useState, useContext } from 'react'
// import { useContext } from 'react/cjs/react.development'
import { auth } from '../firebase/firebaseConfig'
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext()

//hook
const useAuth = () => {
    return useContext(AuthContext)
}


const AuthProvider = ({children}) => {
    const [usuario, setUsuario] = useState()
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const cancelarSus = onAuthStateChanged(auth, (usuario)=>{
            setUsuario(usuario)
            setCargando(false)
        })

        return cancelarSus
    }, [])

    return (
        <AuthContext.Provider value={{usuario: usuario}}>
            {!cargando && children}
        </AuthContext.Provider>
    );
}

export {AuthProvider, AuthContext, useAuth} ;