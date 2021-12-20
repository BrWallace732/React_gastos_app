import {useState, useEffect} from 'react'
import { db } from '../firebase/firebaseConfig'
import { useAuth } from '../context/AuthContext'
import {collection, onSnapshot, query, orderBy, where, limit, startAfter} from 'firebase/firestore'

const useObtenerGastos = () => {
    const {usuario} = useAuth()
    const [gastos, setGastos] = useState([])
    const [ultimoGasto, setultimoGasto] = useState(null)
    const [porCargar, setPorCargar] = useState(false)
    
    const obtenerMasGastos = () =>{
        const consulta = query(
            collection(db, 'gastos'),
            where('uidUsuario', '==', usuario.uid ),
            orderBy('fecha', 'desc'),
            limit(10),
            startAfter(ultimoGasto)
        )
        onSnapshot(consulta, (snapshot)=>{
            if(snapshot.docs.length > 0){
                setultimoGasto(snapshot.docs[snapshot.docs.length -1])

                setGastos(gastos.concat(snapshot.docs.map((gasto)=>{
                    return {...gasto.data(), id: gasto.id}
                })))
            } else {
                setPorCargar(false)
            }
        }, error => {console.log(error)})
    }

    useEffect(() => {

        const consulta = query(
            collection(db, 'gastos'),
            where('uidUsuario', '==', usuario.uid ),
            orderBy('fecha', 'desc'),
            limit(10)
        )
        const unsuscribe = onSnapshot(consulta, (snapshot)=>{
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
