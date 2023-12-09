import React from 'react';
import './allSpare.css';
import { Image, Pagination } from 'react-bootstrap';
import Product1 from './../../assets/image/all-spareparts.png';
import Product2 from './../../assets/image/product17.png';
import BotPagination from '../../Components/Bot-pagination';
import Breadcumb from '../Breadcumb';
import FilterBar from './filter-bar';
import CategoryProduct from './Category';

function AllSpareparts() {
  return (
    <main class="container top-content">
      <div class="row">
        {/* <Breadcumb /> */}
        {/* <div className='main4'>
          <FilterBar />
        </div> */}
        <CategoryProduct/>
        <BotPagination />
      </div>
    </main>
  )
}

export default AllSpareparts