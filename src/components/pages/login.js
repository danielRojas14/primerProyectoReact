import React from 'react'

import saludar from '../../helpers/saludar'


const Login = () => {
return (
    <div className="container-fluid mt-5">
        <div className="row no-gutter">
       
            <div className="col-md-6 d-none d-md-flex bg-image">
              
            </div>
    
    
           
            <div className="col-md-6 bg-light">
                <div className="login d-flex align-items-center py-5">
    
  
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-xl-7 mx-auto">
                                <h3 className="display-4">Inciar Sesion</h3>
                                <p className="text-muted mb-4">Por favor inicie Sesion</p>
                                <form>
                                    <div className="form-group mb-3">
                                        <input id="inputNomUsu" type="text" placeholder="Nombre de Usuario" required  className="form-control rounded-pill border-0 shadow-sm px-4"/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input id="inputPassword" type="password" placeholder="Contraseña" required className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input id="customCheck1" type="checkbox"  className="custom-control-input"/>
                                        <label htmlFor="customCheck1" className="custom-control-label">Recuerdame</label>
                                    </div>
                                    <button type="button" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" onClick={saludar}>Enviar</button>
                                    <div className="text-center text-muted d-flex justify-content-between mt-4"><p>IPF - 2019 - 2020 - Tecnicatura de Desarrollo de Software</p></div>
                                </form>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
    
        </div>
    </div>

    
    )
}

export default Login
