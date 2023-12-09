import React, { useEffect, useState } from 'react'
import Main from '../../Components/Homepage';
import BotNavbar from '../../Components/bot-navbar';
import AllSpareparts from '../../Components/Product';
import Breadcumb from '../../Components/Breadcumb';
import FilterBar from '../../Components/Product/filter-bar';
import Product1 from './../../assets/image/all-spareparts.png';
import Product2 from './../../assets/image/product17.png';
import CategoryProduct from '../../Components/Product/Category';
import { ProductApi } from '../../api/main/product';

function Product() {
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
  //   {
  //     id: 11,
  //     image: Product1,
  //     stock: '10',
  //     name: 'Main Hydraulic pump PC-200',
  //     partNumber: 'ABC-1234',
  //     equipt: 'Komatsu PC-200',
  //     site: 'BCP',
  //   },
  //   {
  //     id: 12,
  //     image: Product2,
  //     stock: '10',
  //     name: 'Gearbox Set 730D AFE-9823',
  //     partNumber: 'ABC-12345',
  //     equipt: 'Komatsu 730D',
  //     site: 'BCP',
  //   },
  //   {
  //     id: 13,
  //     image: Product1,
  //     stock: '10',
  //     name: 'Main Hydraulic pump PC-200',
  //     partNumber: 'ABC-1234',
  //     equipt: 'Komatsu PC-200',
  //     site: 'BCP',
  //   },
  //   {
  //     id: 14,
  //     image: Product2,
  //     stock: '10',
  //     name: 'Gearbox Set 730D AFE-9823',
  //     partNumber: 'ABC-12345',
  //     equipt: 'Komatsu 730D',
  //     site: 'BCP',
  //   },
  //   {
  //     id: 15,
  //     image: Product2,
  //     stock: '10',
  //     name: 'Gearbox Set 730D AFE-9823',
  //     partNumber: 'ABC-12345',
  //     equipt: 'Komatsu 730D',
  //     site: 'BCP',
  //   },
  // ]

  const [data, setData] = useState()
  const getProd=()=>{
    ProductApi.getProduct()
    .then((res)=>{
      // console.log("res")
      setData(res.data)
    })
  }
  useEffect(() => {
    getProd()
  }, [])
  
  return (
    <>
      <div className="wrapper">
        <BotNavbar />
        <div className='container'>
          <div className='row'>
            <Breadcumb />
            <div className='main4'>
              <FilterBar />
            </div>
            <div className='row'>
                  {
                    data?.map((v, i) => (
                      <CategoryProduct data={v} key={i} />
                    ))
                  }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product;