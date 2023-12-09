import React from 'react'
import './detail.css'
import { Image } from 'react-bootstrap';
import ProductDetail from '../../assets/image/Product-detail.png'
import Product1 from './../../assets/image/all-spareparts.png';
import Product2 from './../../assets/image/product17.png';
import BotPagination from '../../Components/Bot-pagination';

function DetailProduct() {
    return (
        <>
            <main class="container top-content">
                <div class="row">
                    <div class="main breadcrumb1">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="/" class="text-main text-link">Main</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><a href="/product" class="text-main text-link">All Sparesparts</a></li>
                                <li class="breadcrumb-item"><a href="#" class="text-main text-link">Main Hydraulic Pump-PC200</a></li>
                            </ol>
                        </nav>
                    </div>
                    <div class="main4 d-flex justify-content-between">
                        <div class="d-flex">
                            <div class=" d-flex">
                                <h4 class="mt-15">Main Hydraulic Pump - PC200</h4>
                                <span class="text-red fw-bold">Stock Available: 5 units</span>
                            </div>
                            <div class="">
                                <button class="btn-request btn-secondary">Request this item</button>
                            </div>
                        </div>
                    </div>
                    <div class="main2 d-flex">
                        <div class="col-5">
                            <div className="card card-detail">
                                <div className="padding-image">
                                    <Image
                                        src={ProductDetail}
                                        width="255px"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="col-7">
                            <div class="mt-25">
                                <div class="mb-10">
                                    <span class="ft-size clr-text">Part Number:</span>
                                    <span class="ft-size clr-text ml-86">ABC-1234567890</span>
                                </div>
                                <div class="mb-10">
                                    <span class="ft-size clr-text">Equipment Model:</span>
                                    <span class="ft-size clr-text ml-50">Komatsu PC200</span>
                                </div>
                                <div class="mb-10">
                                    <span class="ft-size clr-text">Vehicle Type:</span>
                                    <span class="ft-size clr-text ml-88">Digger</span>
                                </div>
                                <div class="mb-10">
                                    <span class="ft-size clr-text">Category:</span>
                                    <span class="ft-size clr-text ml-113">Hydrolic Parts</span>
                                </div>
                                <div class="mb-10">
                                    <span class="ft-size clr-text">Made in:</span>
                                    <span class="ft-size clr-text ml-122">USA</span>
                                </div>
                                <div class="mb-10">
                                    <span class="ft-size clr-text">Year:</span>
                                    <span class="ft-size clr-text ml-148">2021</span>
                                </div>
                                <div class="mb-10">
                                    <span class="ft-size clr-text">Warehouse Site:</span>
                                    <span class="ft-size clr-text ml-67">BCP</span>
                                </div>
                                <div class="mb-10">
                                    <span class="ft-size clr-text">Rack ID:</span>
                                    <span class="ft-size clr-text ml-127">112233</span>
                                </div>
                                <div class="mb-10">
                                    <span class="ft-size clr-text">Description:</span>
                                    <span class="ft-size clr-text ml-99">The main hydraulic pump is typically a variable displacement</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-related">
                        <h6 class="color-green">Related Parts</h6>
                    </div>
                </div>
            </main>
        </>
    )
}

export default DetailProduct;