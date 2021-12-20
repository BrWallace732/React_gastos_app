import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import {useHistory } from 'react-router-dom'
import {doc, getDoc} from 'firebase/firestore'


const UseObtenerGasto = (id) => {
    const history = useHistory()
    const [gasto, setGasto] = useState('')

    useEffect(() => {
        const obtenerGasto = async() =>{
            const documento = await getDoc(doc(db, 'gastos', id))
            if(documento.exists){
                setGasto(documento)
            }else{
                history.push('/lista')
            }
        }
        obtenerGasto()

    //     db.collection('gastos').doc(id).get() //actualizacion de firebase 
    //     .then((doc)=>{                        //<<-- antigua forma de obtener
    //     if(doc.exists){                       // la base de datos
    //         setGasto(doc)
    //     }else{
    //         history.push('/lista')
    //     }
    // })

    }, [history, id])

    return [gasto]
}

export default UseObtenerGasto;