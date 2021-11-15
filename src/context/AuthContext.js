import React, { useEffect, useState } from 'react'
import { useContext } from 'react/cjs/react.development'
import { auth } from '../firebase/firebaseConfig'

const AuthContext = React.createContext()

//hook
const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {
    const [usuario, setUsuario] = useState()
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const cancelarSus = auth.onAuthStateChanged((usuario)=>{
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