import React from "react"
import {ReactComponent as Menu} from './menu.svg'
import {ReactComponent as Email} from './email.svg'

function Icon({title, classes}) {

    let icons = {
        menu: <Menu className={classes} />,
        email: <Email className={classes} />
    }
    return (<>
        {icons[title]}
    </>)
}

export default Icon