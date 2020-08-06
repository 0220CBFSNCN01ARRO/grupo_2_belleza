import React, { Component } from 'react';

class Usuarios extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          cantidad: "",
          usuarios:[]
        }
    }

    componentDidMount() {
      fetch("api/users")
        .then(res => res.json())
        .then(
          (data) => {
            this.setState({
              cantidad: data.meta.totalUsuarios,
              usuarios: data.usuarios
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
         const {error, cantidad, usuarios} = this.state;
         if(error) {
         return <div>Error: {error.message}</div>;
         } else {
           return (
            
            <div>
            <div className="row">
               <div className="col-md-4">
                 <div>
                   <h4 className="mt-3">Cantidad de Usuarios Registrados:<br></br>
                   <mark className="total-dashboard-panel">{cantidad}</mark>
                   </h4>
                 </div>
               </div>
               
               <div className="col-md-8">
                 <div>
                 
                   <table className="table">
                       <thead>
                           <tr>
                             <th scope="col">#</th>
                             <th scope="col">Nombre</th>
                             <th scope="col">Apellido</th>
                             <th scope="col">eMail</th>
                           </tr>
                       </thead>
                       <tbody>
                       {usuarios.map((user,i) => (
                           <tr>
                             <th scope="row" key={user.id + i}>{user.id}</th>
                             <td key={user.nombre + i}>{user.nombre}</td>
                             <td key={user.apellido + i}>{user.apellido}</td>
                             <td key={user.email + i}>{user.email}</td>
                           </tr>
                            ))}
                       </tbody>
                   </table>
                
                 </div>
               </div>
               </div>
               </div>
           

           )
         }
       }
    
}
        
export default Usuarios;