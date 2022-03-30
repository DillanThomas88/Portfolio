import React from "react"
import {ReactComponent as Menu} from './menu.svg'
import {ReactComponent as Email} from './email.svg'
import {ReactComponent as Light} from './light.svg'
import {ReactComponent as Dark} from './dark.svg'

function Icon({title, classes}) {

    let icons = {
        menu: <Menu className={classes} />,
        email: <Email className={classes} />,
        light: <Light className={classes} />,
        dark: <Dark className={classes} />,
    }
    return (<>
        {icons[title]}
    </>)
}

export default Icon