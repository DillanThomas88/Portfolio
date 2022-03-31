import React from "react"
import {ReactComponent as Menu} from './menu.svg'
import {ReactComponent as Email} from './email.svg'
import {ReactComponent as Light} from './light.svg'
import {ReactComponent as Dark} from './dark.svg'
import {ReactComponent as Linkedin} from './linkedin.svg'
import {ReactComponent as Github} from './github.svg'
import {ReactComponent as Doc} from './doc.svg'
import {ReactComponent as Link} from './link.svg'
import {ReactComponent as Send} from './send.svg'

function Icon({title, classes}) {

    let icons = {
        menu: <Menu className={classes} />,
        email: <Email className={classes} />,
        light: <Light className={classes} />,
        dark: <Dark className={classes} />,
        linkedin: <Linkedin className={classes} />,
        github: <Github className={classes} />,
        doc: <Doc className={classes} />,
        link: <Link className={classes} />,
        send: <Send className={classes} />,
    }
    return (<>
        {icons[title]}
    </>)
}

export default Icon