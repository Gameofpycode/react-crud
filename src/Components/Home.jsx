import React from "react";
import { Link } from 'react-router-dom';

function Home(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md12 text-center">
                    <h3 className="display-3 text-secondary">Home</h3>
                </div>
            </div>

            <div className="row">
            <div className="col-md-12">
                <div className="table-responsive">
                   <table className="table table-bordered table-stripped table-hovered text-center">
                   <thead>
                       <tr>
                          <th colSpan={5}>
                          <Link className="btn btn-succes float-end">Create new</Link>
                          </th>
                       </tr>
                        <tr>
                            <td>Title</td>
                            <td>Image</td>
                            <td>Description</td>
                            <td>price </td>
                            <td>action</td>
                        </tr>
                    </thead>
                   </table>

                </div>
            </div>
        </div>
        </div>
        
       

    )
}

export default Home

