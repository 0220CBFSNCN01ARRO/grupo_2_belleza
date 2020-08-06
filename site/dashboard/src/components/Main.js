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
            fetch("api/products")
            .then(res=>res.json())
            .then(res=>{
                let newCard = res.data
				this.setState(prevState => {
					return { cards: newCard }
            })
            .catch(error => console.log(error))
        })
    }

        render() {
        return (
        <div className="container-fluid">

        {/* <!-- Content Row -->
        <div className="row mb-4 justify-content-between">
            {
                this.state.cards.map((card, i)=> {
                    return (
                    <div className="col-md-4 mb-4" key={i}>
                        <Card {...card} />
                    </div>
                    )
                })
            }
        </div> */}
        
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
}
}

export default Main