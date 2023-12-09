import React from 'react'

function Dropdown() {
    return (
        <div class="dropdown text-left">
            <a class="secondary dropdown-toggle text-bahasa dropdown1" href="#" role="button" id="dropdownMenuLink"
                data-bs-toggle="dropdown" aria-expanded="false">
                English
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a class="dropdown-item" href="#">Bahasa Indonesia</a></li>
            </ul>
        </div>
    )
}

export default Dropdown;