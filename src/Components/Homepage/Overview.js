import React from 'react'
import { Image } from 'react-bootstrap';
import Ecatalog from '../../../src/assets/image/e-catalog.png';

function Overview() {
  return (
    <>
        <div class="col-lg-6">
            <div class="main">
                <h2 class="fw-bold">E-Catalogue</h2>
                <div class="">
                    <h4 class="fw-bold color-green mr-3">Spare parts Inventory Live Stock Catalogue</h4>
                </div>
                <div class="text mr-3">
                    <p class="text mr-3">Are you tired of the hassle and inefficiency of managing your spare parts inventory
                        manually? Say goodbye to outdated methods and embrace the power of the E-Catalogue Spare Parts Inventory
                        Live Stock Catalogue</p>
                </div>
                <div class="mb-3 mr-4">
                    <label for="exampleFormControlInput1" class="form-label fw-bold  mr-4">Find Spare Parts</label>
                    <input type="text" class="form-control form" />
                </div>
            </div>
        </div>
        <div class="col-lg-6">
                    <div class="main-image">
                        <div class="p-image">
                            <Image
                                src={Ecatalog}
                            />
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Overview