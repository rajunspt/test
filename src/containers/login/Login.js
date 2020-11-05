import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    
    document.body.classList.add("bg-blue");    

    return (
        <div>
            <div className="cotainer">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header font-weight-bold">Login</div>

                            <div className="card-body">
                                <div className="form-group row">
                                    <label className="col-md-4 col-form-label text-md-right ">Email Address / ID</label>
                                    <div className="col-md-6">
                                        <input type="text" id="email_address" className="form-control" name="email-address" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-md-4 col-form-label text-md-right">Password</label>
                                    <div className="col-md-6">
                                        <input type="password" id="password" className="form-control" name="password" />
                                    </div>
                                </div>
                                <div className="col-md-6 offset-md-4">
                                    
                            <Link to="/users" className="btn btn-primary">Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;