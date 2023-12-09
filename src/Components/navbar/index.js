import Dropdown from '../dropdown';
import { Image } from 'react-bootstrap';
import Language from '../../assets/icons/Group 1750.svg';
import { destroyCookie } from "nookies";


function Navbar() {

    const formatDate = () => {
        const date = new Date();
        const options = {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        };
        return date.toLocaleDateString('en-US', options);
    };

    const logoutHandler =()=>{
        destroyCookie(null,'access_token')
        destroyCookie(null,'token')
        window.location.href="/"
    }

    return (
        <>
            {/* <div className="container"> */}
            <nav className="navbar">
                <div className="container">
                    <div className="d-flex">
                        <div className="text-day">
                            <span className="font-text">Today : </span>
                            <span className="font-text">{formatDate()}</span>
                        </div>
                        <div className="mt-6 d-flex">
                            <div className="">
                                <Image
                                    src={Language}
                                    width="20px"
                                    height="15px"
                                />
                            </div>
                            <p className='font-text'>
                                <Dropdown />
                            </p>
                        </div>
                        <div onClick={logoutHandler}>
                            <button className="btn btn-secondary btn-logout" ><p className='ft-size'>Logout</p></button>
                        </div>
                    </div>
                </div>
            </nav>
            {/* </div> */}
        </>
    )
}

export default Navbar;