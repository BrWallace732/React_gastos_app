import React, {useState} from 'react'
import Boton from '../elements/Boton';
import {ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton } from './../elements/ElementsForm' 
import { ReactComponent as IconoPlus } from './../images/plus.svg';

const FormularioGasto = () => {

    const [inputDesc, setInputDesc] = useState('')
    const [inputCant, setInputCant] = useState('')

    const handleChange = (e)=>{
        if(e.target.name === "descripcion"){
            setInputDesc(e.target.value)
        }else if(e.target.name === "cantidad"){
            setInputCant(e.target.value.replace(/[^0-9.]/g, ''))
        }
    }
    
    return ( 
        <Formulario>
            <ContenedorFiltros>
                <p>select</p>
                <p>Picker</p>
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
                <ContenedorBoton>
                    <Boton as="button" primario conIcono type="submit">
                        Agregar Gasto <IconoPlus />
                    </Boton>
                </ContenedorBoton>
            </div>


        </Formulario>
    );
}

export default FormularioGasto;









