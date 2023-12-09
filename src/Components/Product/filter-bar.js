import React from 'react'

function FilterBar() {
  return (
    <>
        {/* <div class="main4"> */}
          <div class="d-flex all-spareparts">
            <div class="col-5">
              <div class="d-flex">
                <h2>All SPareparts</h2>
                <h5 class="mr-text">3.000 items</h5>
              </div>
            </div>
            <div class="col-7">
              <div class="d-flex">
                <div class="dropdown">
                  <button type="button" class="btn btn-light btn-main dropdown-toggle br warehouse color-grey" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown">Warehouse Site</button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
                <div class="dropdown">
                  <button type="button" class="btn btn-light btn-main dropdown-toggle br color-grey" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown">Equipment Unit</button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
                <div class="dropdown">
                  <button type="button" class="btn btn-light btn-main dropdown-toggle br color-grey" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown">Vehicle Type</button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        {/* </div>   */}
    </>
  )
}

export default FilterBar