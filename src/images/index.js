import Avatar from './avatar.JPG'
import Hexa from './hexa.png'
import StarGrab from './stargrab.png'

function Image({title, classes}) {

    const images = {
        avatar: Avatar,
        hexa: Hexa,
        stargrab: StarGrab,
    }
    return (<>
    <img src={images[title]} alt={title}
          className={classes}></img>
    </>)
}
export default Image