import React, {useState, useEffect} from 'react'
import Boton from '../elements/Boton';
import agregarGasto from '../firebase/agregarGasto';
import {ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton } from './../elements/ElementsForm' 
import { ReactComponent as IconoPlus } from './../images/plus.svg';
import DatePicker from './DatePicker';
import SelectCat from './Select';
import fromUnixTime from 'date-fns/fromUnixTime';
import getUnixTime from 'date-fns/getUnixTime';
import { useAuth } from './../context/AuthContext'
import Alerta from './../elements/Alerta'
import { useNavigate } from 'react-router-dom';
import editarGasto from '../firebase/editarGasto';

const FormularioGasto = ({gasto}) => {

    const [inputDesc, setInputDesc] = useState('')
    const [inputCant, setInputCant] = useState('')
    const [categoria, setCategoria] = useState('hogar')
    const [fecha, setFecha] = useState(new Date())
    const [estadoAlerta, setEstadoAlerta] = useState(false)
    const [alerta, setAlerta] = useState({})
    
    const {usuario} = useAuth()
    const navigate = useNavigate()


    useEffect(() => {
        if(gasto){
            if(gasto.data().uidUsuario === usuario.uid){ 
                setCategoria(gasto.data().categoria)
                setFecha(fromUnixTime(gasto.data().fecha))
                setInputDesc(gasto.data().descripcion)
                setInputCant(gasto.data().cantidad)
            } else {
                navigate('/lista')
            }
        }
    }, [gasto, usuario, navigate])
    

    const handleChange = (e)=>{
        if(e.target.name === "descripcion"){
            setInputDesc(e.target.value)
        }else if(e.target.name === "cantidad"){
            setInputCant(e.target.value.replace(/[^0-9.]/g, ''))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let cantidad = parseFloat(inputCant).toFixed(2)
        if(inputDesc !== '' && inputCant !== ''){

            if(cantidad){
                if(gasto){
                    editarGasto({
                        id: gasto.id,
                        categoria: categoria,
                        descripcion: inputDesc,
                        cantidad: cantidad,
                        fecha: getUnixTime(fecha)
                    }).then(()=>{
                        navigate('/lista')
                    }).catch((error)=>{
                        console.log(error)
                    })
                } else {
                    agregarGasto({
                        categoria: categoria,
                        descripcion: inputDesc,
                        cantidad: cantidad,
                        fecha: getUnixTime(fecha),
                        uidUsuario: usuario.uid
                    })
                    .then(()=>{
                        setCategoria('hogar')
                        setInputDesc('')
                        setInputCant('')
                        setFecha(new Date())
                        setEstadoAlerta(true)
                        setAlerta({tipo: 'exito', mensaje: 'el gasto fue gregado correctamente!..' })    
                    })
                    .catch((error)=>{
                        setEstadoAlerta(true)
                        console.log(error)
                        setAlerta({tipo: 'error', mensaje:'hubo un problema al intentar agregar tu gasto'})
                    })
                }
            } else {
                setEstadoAlerta(true)
                setAlerta({tipo: 'error', mensaje: 'El valor que ingresaste es incorrecto' })
            }
        }else{
            setEstadoAlerta(true)
            setAlerta({tipo: 'error', mensaje: 'Faltan datos...' })
        }
        

        
    }

    return ( 
        <Formulario onSubmit={handleSubmit} >
            <ContenedorFiltros>
                <SelectCat categoria={categoria} setCategoria={setCategoria} />
                <DatePicker fecha={fecha} setFecha={setFecha} />
            </ContenedorFiltros>
            <div>
                <Input 
                    type="text"
                    name="descripcion"
                    id="descripcion"
                    placeholder="descripcion gasto"
                    value={inputDesc}
                    onChange={handleChange}
                />
                <InputGrande 
                    type="text"
                    name="cantidad"
                    id="cantidad"
                    placeholder="$0.00"
                    value={inputCant}
                    onChange={handleChange}
                />
            </div>
                <ContenedorBoton>
                    <Boton as="button" primario conIcono type="submit">
                        {gasto ? 'Editar Gasto': 'Agregar Gasto'} <IconoPlus />
                    </Boton>
                </ContenedorBoton>
                <Alerta 
                    tipo={alerta.tipo}
                    mensaje={alerta.mensaje}
                    estadoAlerta={estadoAlerta}
                    setEstadoAlerta={setEstadoAlerta}
                />
        </Formulario>
    );
}

export default FormularioGasto;









