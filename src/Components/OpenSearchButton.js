import React from 'react';

function OpenSearchButton(props) {
    return(
        <div className="open-search">
            <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
    )
}
export default OpenSearchButton;