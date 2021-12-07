import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";

const UseObtenerGasto = (id) => {
    const [gasto, setGasto] = useState('')

    useEffect(() => {
    db.collection('gastos').doc(id).get()
    .then((doc)=>{
        console.log(doc.data)
    })
    }, [])

    return [gasto]
}

export default UseObtenerGasto;