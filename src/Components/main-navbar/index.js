import { Image } from 'react-bootstrap';
import DarmaHenwa from '../../../src/assets/image/DarmaHenwa.png';

function MainNavbar() {
    return (
        // <div>MainNavbar</div>
        <nav className="p-main">
            <div className="main-nav d-flex">
                <div className="col-4">
                    <Image
                        src={DarmaHenwa}
                    />
                </div>
                <div className="col-8 d-flex justify-content-end ml-30">
                    {/* <div className=""> */}
                        <p className="text-main">Spare Parts</p>
                        <p className="text-main">Tires</p>
                        <p className="text-main">Tools</p>
                        <p className="text-main">Supports</p>
                        <p className="text-main">Equipments</p>
                    {/* </div> */}
                </div>
            </div>
        </nav>
    )
}

export default MainNavbar;