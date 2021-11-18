import React from 'react'

import {ReactComponent as IconoComida} from './../images/eat.svg'
import {ReactComponent as IconoCompras} from './../images/shopping.svg'
import {ReactComponent as IconoCuentas} from './../images/bills.svg'
import {ReactComponent as IconoDivercion} from './../images/fun.svg'
import {ReactComponent as IconoHogar} from './../images/home.svg'
import {ReactComponent as IconoRopa} from './../images/clothing.svg'
import {ReactComponent as IconoSalud} from './../images/medical.svg'
import {ReactComponent as IconoTransporte} from './../images/car.svg'

const IconoCat = ({id}) => {
    switch (id) {
        case 'comida':
                return <IconoComida />
        case 'compras':
                return <IconoCompras />
        case 'cuentas y pagos':
                return <IconoCuentas />
        case 'diversion':
                return <IconoDivercion />
        case 'hogar':
                return <IconoHogar />
        case 'ropa':
                return <IconoRopa />
        case 'salud':
                return <IconoSalud />
        case 'transporte':
                return <IconoTransporte />
        default:
            break;
    }
}

export default IconoCat;