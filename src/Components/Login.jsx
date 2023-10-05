import React from "react";
import { Link } from "react-router-dom";

function Login(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md12 text-center">
                    <h3 className="display-3 text-secondary">Login</h3>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-lg-6 offset-md-3 col-lg-6 offset-md-2 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <form autocomplet="off">
                               

                                <div className="form-group mt-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" className="form-control" required />
                                </div>


                                <div className="form-group mt-2">
                                    <label htmlFor="pass">password</label>
                                    <input type="password" name="pass" id="pass" className="form-control" required />
                                </div>

                                <div className="form-group mt-2">
                                    <input type="submit" value="Login" className="btn btn-outline-success"/>
                                    <div className="float-end d-flex align-items-center">
                                        <strong className="text-success">are you new user?</strong>
                                        <Link to={'/register'} className="btn btn-link">Register</Link>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Login