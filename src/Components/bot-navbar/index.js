import React from 'react';
import './bot-navbar.css';

function BotNavbar() {
    return (
        <>
            <nav className="navbar3">
                <div className="d-flex">
                    <div class="col-3">
                        <div class="mt-7">
                            <div class="dropdown">
                                <button type="button" class="btn btn-light btn-nav3 dropdown-toggle br" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown">Categories</button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-9">
                        <div class="input-group mb-3 form-nav nv-3">
                            <input type="text" class="form-control br" placeholder="Search for spare parts"
                                aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span class="input-group-text br" id="basic-addon2">search</span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default BotNavbar;