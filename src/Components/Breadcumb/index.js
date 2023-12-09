import React from 'react'

function Breadcumb() {
  return (
    <>
      <div class="main breadcrumb1">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/" class="text-main text-link">Main</a></li>
              <li class="breadcrumb-item active" aria-current="page"><a href="/product" class="text-main text-link">All Sparesparts</a></li>
            </ol>
          </nav>
        </div>
    </>
  )
}

export default Breadcumb;

