import React from 'react';
import './pagination.css'

function BotPagination() {
    return (
        <nav aria-label="Page navigation example" class="pagination2">
            <ul class="pagination justify-center">
                <li class="page-item" selected><a class="page-link slide color-slide" href="#">1</a></li>
                <li class="page-item"><a class="page-link slide color-slide" href="#">2</a></li>
                <li class="page-item"><a class="page-link slide color-slide" href="#">3</a></li>
                <li class="page-item"><a class="page-link slide color-slide" href="#">4</a></li>
                <li class="page-item"><a class="page-link slide color-slide" href="#">5</a></li>
            </ul>
        </nav>
    )
}

export default BotPagination;