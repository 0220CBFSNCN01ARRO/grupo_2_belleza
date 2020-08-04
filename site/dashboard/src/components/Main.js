import React, {Component} from 'react';
import Card from './Card';
import LastProduct from './LastProduct';
import Categories from './Categories';

// let modulos = [
//     {
//     color: '',
//     icon: '',
//     text: '',
//     value: 0
// }
// ]

class Main extends Component {
    constructor() {
        super();
        this.state = {
            cards: []
        }
    }
    componentDidMount() {
        fetch("api/dashboard/widgets")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                cards: res.data
            })
        })
    }
    render () {
    return (
        <div className="container-fluid">

        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>
        
        {/* <!-- Content Row --> */}
        <div className="row mb-3 justify-content-between">
            {
                this.state.cards.map((card, i)=> {
                    return (
                    <div className="col-md-4 mb-4" key={i}>
                        <Card {...card} />
                    </div>
                    )
                })
            }
            {/* <!-- Amount of Products in DB --> */}
            
        
            {/* <!-- $$$ of all products in DB --> */}
            <div className="col-md-4 mb-4">
                <Card color='success' icon="fa-clipboard-list" text='Amount in products' value='$546.456' />
                
            </div>
        
            {/* <!-- Amount of users in DB --> */}
            <div className="col-md-4 mb-4">
                <Card color='warning' icon="fa-clipboard-list" text='Users quantity' value='38' />
                
            </div>
        </div>
        
        {/* <!-- Content Row --> */}
        <div className="row">
            {/* <!-- Last Product in DB --> */}
            <div className="col-lg-6 mb-4">
                <LastProduct />
            </div>
        
            {/* <!-- Categories in DB --> */}
            <div className="col-lg-6 mb-4">						
                <Categories />
            </div>
        </div>
        </div>
        
    )
}}

export default Main



