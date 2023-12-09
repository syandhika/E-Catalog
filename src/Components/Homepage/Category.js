import React from 'react'
import Product1 from '../../../src/assets/image/productDH1.png';
import { Image } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


function Category({ data, key }) {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/product")
    }
    return (
        <>

            <div className="col-3 " role='button' onClick={handleClick}>
                <div className='main'>
                    <div class="card card-home">
                        <div class="mr-card">
                            {/* <div className="uk-product"> */}
                            <Image
                                src={process.env.REACT_APP_BACKEND_API + data.image}
                                width="170px"
                                height="130px"
                                referrerPolicy="no-referrer"
                            />
                            {/* </div> */}
                        </div>
                        <div class="text-card">
                            <a class="text-black" >
                                <h6 class="mr-bottom">{data.name}</h6>
                            </a>
                            <p class="color-green ft-size">{data.stock} items</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category