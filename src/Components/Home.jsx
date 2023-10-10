import React,{useState,useEffect} from "react";
import { Link } from 'react-router-dom';
import { readBook } from "../data/book";

function Home(props){
    const [books,setBooks]= useState([])

    useEffect(()=>{
        let data = readBook()
        setBooks(data)
    })
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
                          <Link to={"/create"} className="btn btn-success float-end">Create new</Link>
                          </th>
                       </tr>
                        <tr>
                            <tt>Title</tt>
                            <th>Image</th>
                            <th>Description</th>
                            <th>price </th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books && books.map((item,index)=>{
                                return(
                                    <tr className="text-center" key={index}>
                                        <td>{item.title}</td>
                                        <td>
                                            <img src={item.image?item.image:""}  alt="" className="img-fluid rounded-circle" width={100} height={100} />
                                        </td>
                                        <td>{item.description}</td>
                                        <td>&#8377;{item.price}</td>
                                        <td to={`/update/${item.id}`} className="d-flex justify-content-evenly">
                                            <Link to={"/update"} className="btn btn-info"><i className="bi bi-pencil"></i></Link>
                                            <button className="btn btn-danger"><i className="bi bi-trash"></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                   </table>

                </div>
            </div>
        </div>
        </div>
        
       

    )
}

export default Home

