import {useState, useEffect} from 'react'
import { db } from '../firebase/firebaseConfig'
import { useAuth } from '../context/AuthContext'

const useObtenerGastos = () => {
    const {usuario} = useAuth()
    const [gastos, setGastos] = useState([])    

    useEffect(() => {
        const unsuscribe = db.collection('gastos')
        .where('uidUsuario', '==', usuario.uid )
        .orderBy('fecha', 'desc')
        .limit(10)
        .onSnapshot((snapshot)=>{
            setGastos(snapshot.docs.map((gasto)=>{
                return{...gasto.data(), id: gasto.id}
            }))
        })
        return unsuscribe
    }, [usuario])

    return [gastos];
}

export default useObtenerGastos;