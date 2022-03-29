import {ReactComponent as ListSVG} from '../svg/buttons/list.svg'

function MobileNavbar() {
    return (
        <>
            <div  className="fixed z-40 h-screen right-0 w-56 bg-blue-600">

            </div>
            <ListSVG className="z-50 fixed w-8 h-8 bottom-4 right-6" />

        </>
    );
}

export default MobileNavbar;