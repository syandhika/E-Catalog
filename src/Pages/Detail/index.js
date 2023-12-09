import React, { useEffect, useState } from 'react'
import BotNavbar from '../../Components/bot-navbar'
import DetailProduct from '../../Components/Detail-product'
// import { Image } from 'react-bootstrap';
import Product1 from './../../assets/image/all-spareparts.png';
import Product2 from './../../assets/image/product17.png';
import Footer from '../../Components/Footer'
import Main from '../../Components/Homepage'
import CategoryDetail from '../../Components/Detail-product/category-detail';
import { DetailApi } from '../../api/main/detail';
import { ProductApi } from '../../api/main/product';

function Detail() {
  // const data = [
  //   {
  //     id: 1,
  //     image: Product1,
  //     stock: '10',
  //     name: 'Main Hydraulic pump PC-200',
  //     partNumber: 'ABC-1234',
  //     equipt: 'Komatsu PC-200',
  //     site: 'BCP',
  //   },
  //   {
  //     id: 2,
  //     image: Product2,
  //     stock: '10',
  //     name: 'Gearbox Set 730D AFE-9823',
  //     partNumber: 'ABC-12345',
  //     equipt: 'Komatsu 730D',
  //     site: 'BCP',
  //   },
  //   {
  //     id: 3,
  //     image: Product1,
  //     stock: '10',
  //     name: 'Main Hydraulic pump PC-200',
  //     partNumber: 'ABC-1234',
  //     equipt: 'Komatsu PC-200',
  //     site: 'BCP',
  //   },
  //   {
  //     id: 4,
  //     image: Product2,
  //     stock: '10',
  //     name: 'Gearbox Set 730D AFE-9823',
  //     partNumber: 'ABC-12345',
  //     equipt: 'Komatsu 730D',
  //     site: 'BCP',
  //   },
  //   {
  //     id: 5,
  //     image: Product2,
  //     stock: '10',
  //     name: 'Gearbox Set 730D AFE-9823',
  //     partNumber: 'ABC-12345',
  //     equipt: 'Komatsu 730D',
  //     site: 'BCP',
  //   },
  //   {
  //     id: 6,
  //     image: Product1,
  //     stock: '10',
  //     name: 'Main Hydraulic pump PC-200',
  //     partNumber: 'ABC-1234',
  //     equipt: 'Komatsu PC-200',
  //     site: 'BCP',
  //   },
  //   {
  //     id: 7,
  //     image: Product2,
  //     stock: '10',
  //     name: 'Gearbox Set 730D AFE-9823',
  //     partNumber: 'ABC-12345',
  //     equipt: 'Komatsu 730D',
  //     site: 'BCP',
  //   },
  //   {
  //     id: 8,
  //     image: Product1,
  //     stock: '10',
  //     name: 'Main Hydraulic pump PC-200',
  //     partNumber: 'ABC-1234',
  //     equipt: 'Komatsu PC-200',
  //     site: 'BCP',
  //   },
  //   {
  //     id: 9,
  //     image: Product2,
  //     stock: '10',
  //     name: 'Gearbox Set 730D AFE-9823',
  //     partNumber: 'ABC-12345',
  //     equipt: 'Komatsu 730D',
  //     site: 'BCP',
  //   },
  //   {
  //     id: 10,
  //     image: Product2,
  //     stock: '10',
  //     name: 'Gearbox Set 730D AFE-9823',
  //     partNumber: 'ABC-12345',
  //     equipt: 'Komatsu 730D',
  //     site: 'BCP',
  //   },
  // ]
  const [data, setData] = useState()
  const getDet=()=>{
    ProductApi.getProduct()
    .then((res)=>{
      console.log("res", res)
      setData(res.data)
    })
  }
  useEffect(() => {
    getDet()
  }, [])
  
  return (
    <>
      <div className='wrapper'>
        <BotNavbar />
        <div className='container'>
          <div className='row'>
            <DetailProduct />
            <div className='row'>
              {
                data?.map((v, i) => (
                  <CategoryDetail data={v} key={i} />
                ))
              }
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Detail