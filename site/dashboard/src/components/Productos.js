import React, { Component } from 'react';

class Productos extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          totalProductos: "",
          productos:[]
        }
    }

    componentDidMount() {
      fetch("/api/products")
        .then(res => res.json())
        .then(
          (datos) => {
            this.setState({
              totalProductos: datos.meta.totalProductos,
              productos: datos.data
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
        )
      }
      
      render() {
        const {error, totalProductos, productos} = this.state;
        if(error) {
        return <div>Error: {error.message}</div>;
        } else {
          return (
            <div>
              <div className="row">
                <div className="col-md-4">
                  <div>
                    <h4 className="mt-3">Cantidad de <br></br>Productos:<br></br><mark className="total-dashboard-panel">{totalProductos}</mark></h4>
                  </div>
                </div>
                <div className="col-md-8">
                    <table className="table">
                        <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Producto</th>
                              <th scope="col">Categoria</th>
                              <th scope="col">Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                        {productos.map((product,i) => (
                            <tr>
                              <th scope="row" key={product.id + i}>{product.id}</th>
                              <td key={product.nombre + i}>{product.nombre}</td>
                              <td key={product.categoria.categoria + i}>{product.categoria.categoria}</td>
                              <td key={product.descripcion + i}>{product.descripcion}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                </div>
                </div>
           )
         }
       }
}
        
export default Productos;