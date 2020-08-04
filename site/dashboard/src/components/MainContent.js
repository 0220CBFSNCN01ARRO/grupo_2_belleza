import React from 'react';
import NavBar from './NavBar';
import Main from './Main';
import Card from './Card';

let cards = [
    {
        color: 'primary',
        text: 'Total de productos en la DB',
        value: '200',
        icon: 'fa-clipboard-list'
    },
    {
        color: 'success',
        text: 'Valorización total de productos',
        value: '$546.456',
        icon: 'fa-dollar-sign'
    },
    {
        color: 'warning',
        value: '38',
        text: 'Cantidad Usuarios',
        icon: 'fa-user-check'
    }
];

let titulo = 'App Dashboard';

function MainContent(){ 
    return (
        <div id="content">
            <NavBar />

            <div className="container-fluid">

                {/* <!-- Page Heading --> */}
                <div classNameName="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">{titulo}</h1>
                </div>

                {/* <!-- Content Row --> */}
                <div className="row">
                    {
                    cards.map((card,i) => {
                        return (
                            <div classNameName="col-md-4 mb-4" key={i}>
                                < Card {...card} />
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <Main />
        </div>
    )
}

export default MainContent