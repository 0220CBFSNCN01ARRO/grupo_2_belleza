import React from 'react';



function Category({children}) {
    return (
        <div className="card bg-info text-white shadow">
            <div className="card-body">
                {children[0]}
                <p>cabecera</p>
                {children[2]}
                <p>pie</p>
                {children[1]}
            </div>
        </div>
    )
}

export default Category