import React from 'react'
import { Image, Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import product1 from './../../assets/image/all-spareparts.png';
// import product2 from './../../assets/image/product17.png';


function CategoryProduct({ data, key }) {
  const navigate = useNavigate()

    const handleClick = () => {
        navigate("/detail")
    }

  return (
    <>
      <div className='col-3' role='button' onClick={handleClick}>
        <div class="main-card d-flex">
          <div class="card card1">
            <div class="card-product">
              <Image
                src={process.env.REACT_APP_BACKEND_API + data.image}
                width="170px"
                height="130px"
                referrerPolicy="no-referrer"
              />
            </div>
            <div class="text-card-product1">
              <div class="d-flex mr-hydraulic">
                <p class="text"> Hydraulic </p>
                <div class="text1">
                  <p class="mr-top2">Stock    {data.stock}</p>
                </div>
              </div>
              <div class="name-product">
                <a href="/detail" className="text-link"><h5>{data.name}</h5></a>
              </div>
              <div class="text-product-bottom">
                <div class="font-text2">
                  <span>Part Number : {data.partNumber}</span>
                </div>
                <div class="font-text2">
                  <span>Equipment : {data.equipt}</span>
                </div>
                <div class="font-text2">
                  <span>Site : {data.site}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryProduct;