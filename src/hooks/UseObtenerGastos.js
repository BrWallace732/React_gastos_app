import {useState, useEffect} from 'react'
import { db } from '../firebase/firebaseConfig'
import { useAuth } from '../context/AuthContext'

const useObtenerGastos = () => {
    const {usuario} = useAuth()
    const [gastos, setGastos] = useState([])
    const [ultimoGasto, setultimoGasto] = useState(null)
    const [porCargar, setPorCargar] = useState(false)
    
    const obtenerMasGastos = () =>{
        db.collection('gastos')
        .where('uidUsuario', '==', usuario.uid )
        .orderBy('fecha', 'desc')
        .limit(10)
        .startAfter(ultimoGasto)
        .onSnapshot((snapshot)=>{
            if(snapshot.docs.length > 0){
                setultimoGasto(snapshot.docs[snapshot.docs.length -1])

                setGastos(gastos.concat(snapshot.docs.map((gasto)=>{
                    return {...gasto.data(), id: gasto.id}
                })))
            } else {
                setPorCargar(false)
            }
        })
    }

    useEffect(() => {
        const unsuscribe = db.collection('gastos')
        .where('uidUsuario', '==', usuario.uid )
        .orderBy('fecha', 'desc')
        .limit(10)
        .onSnapshot((snapshot)=>{
                if(snapshot.docs.length > 0){
                    setultimoGasto(snapshot.docs[snapshot.docs.length -1])
                    setPorCargar(true)
                }else {
                    setPorCargar(false)
                }
            setGastos(snapshot.docs.map((gasto)=>{
                return{...gasto.data(), id: gasto.id}
            }))
        })
        return unsuscribe
    }, [usuario])

    return [gastos, obtenerMasGastos, porCargar];
}

export default useObtenerGastos;
