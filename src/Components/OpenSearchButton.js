import React from 'react';
import { Link } from 'react-router-dom';

function OpenSearchButton(props) {
    return(
        <div>
            <Link to  = "/search" >
                <div className = "open-search">
                    <button>Add book</button>
                </div>
            </Link>
        </div>
    )
}
export default OpenSearchButton;