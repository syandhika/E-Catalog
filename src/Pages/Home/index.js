import React, { useEffect, useState } from 'react';
import TopNavbar from '../../Components/navbar';
import MainNavbar from '../../Components/main-navbar';
import Main from '../../Components/Homepage';
import Overview from '../../Components/Homepage/Overview';
import Category from '../../Components/Homepage/Category';
// import axios from 'axios';
// import './Styles/css/home.css';
import Product1 from '../../../src/assets/image/productDH1.png';
import Product2 from '../../../src/assets/image/product-dh1.png';
import Product3 from '../../../src/assets/image/product-dh2.png';
import Product4 from '../../../src/assets/image/product-dh3.png';
import Product5 from '../../../src/assets/image/product-dh4.png';
import Product6 from '../../../src/assets/image/product-dh5.png';
import Product7 from '../../../src/assets/image/product-dh6.png';
import Product8 from '../../../src/assets/image/product-dh7.png';
import Product9 from '../../../src/assets/image/product-dh8.png';
import Product10 from '../../../src/assets/image/product-dh9.png';
import Product11 from '../../../src/assets/image/product-dh10.png';
import Product12 from '../../../src/assets/image/product-dh11.png';
import Product13 from '../../../src/assets/image/product-dh12.png';
import Product14 from '../../../src/assets/image/product-dh13.png';
import Product15 from '../../../src/assets/image/product-dh14.png';
import { CategoryApi } from '../../api/main/category';

function Home() {
  // const data = [
  //   {
  //     id: 1,
  //     image: Product1,
  //     name: 'High Wear Parts',
  //     stock: '100'
  //   },
  //   {
  //     id: 2,
  //     image: Product2,
  //     name: 'Gasket and Seal Parts',
  //     stock: '100'
  //   },
  //   {
  //     id: 3,
  //     image: Product3,
  //     name: 'Chassis Parts',
  //     stock: '100'
  //   },
  //   {
  //     id: 4,
  //     image: Product4,
  //     name: 'Filter Parts',
  //     stock: '100'
  //   },
  //   {
  //     id: 5,
  //     image: Product5,
  //     name: 'Hydraulic Parts',
  //     stock: '100'
  //   },
  //   {
  //     id: 6,
  //     image: Product6,
  //     name: 'Engine Parts',
  //     stock: '100'
  //   },
  //   {
  //     id: 7,
  //     image: Product7,
  //     name: 'Electrical Parts',
  //     stock: '100'
  //   },
  //   {
  //     id: 8,
  //     image: Product8,
  //     name: 'Colling System Parts',
  //     stock: '100'
  //   },
  //   {
  //     id: 9,
  //     image: Product9,
  //     name: 'Hardware Parts',
  //     stock: '100'
  //   },
  //   {
  //     id: 10,
  //     image: Product10,
  //     name: 'Bearing Parts',
  //     stock: '100'
  //   },
  //   {
  //     id: 11,
  //     image: Product11,
  //     name: 'Under Carriage Parts',
  //     stock: '100'
  //   },
  //   {
  //     id: 12,
  //     image: Product12,
  //     name: 'Power Train',
  //     stock: '100'
  //   },
  //   {
  //     id: 13,
  //     image: Product13,
  //     name: 'Brake Parts',
  //     stock: '100'
  //   },
  //   {
  //     id: 14,
  //     image: Product14,
  //     name: ' Lights Parts',
  //     stock: '100'
  //   },
  //   {
  //     id: 15,
  //     image: Product15,
  //     name: 'Tires Parts',
  //     stock: '100'
  //   },
  // ]
  const [data, setData] = useState()
  const getCat = () => {
    CategoryApi.getCategory()
      .then((res) => {
        console.log("res", res)
        setData(res.data)
      })
  }
  useEffect(() => {
    getCat()
  }, [])

  return (
    <div className='wrapper'>
      <main class="container top-content">
        <div class="row">
          <Overview />
          <div class="main2">
            <h4 class="color-green fw-bold">Categories</h4>
            <div class="row">
              {
                data?.map((v, i) => (
                  <Category data={v} key={i} />
                ))
              }
            </div>
          </div>
        </div>
      </main>
      <div class="d-flex">
        <button className='btn btn-secondary button mr-btn color-button'>
          <a href="/product" class="text-color">See All Spare Parts Items</a>
        </button>
      </div>
    </div>
  )
}

export default Home;