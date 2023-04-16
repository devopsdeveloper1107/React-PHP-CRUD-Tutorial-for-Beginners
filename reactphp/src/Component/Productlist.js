import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Productlist()
{ 
  const[product, setProduct]= useState([]);

  useEffect( ()=>{
    const getProduct= ()=>{
        fetch("http://localhost/reactcrudphp/api/product.php")
        .then(res=>{ return res.json()})
        .then(data=>{ setProduct(data)})
        .catch(error=>{ console.log(error)});
    }
    getProduct();
  },[]);
 
  
    return(
        <React.Fragment>
            <div className="container container_overflow">
                <div className="row">
                    <div className="col-md-10 mt-4">
                        <h5 className="mb-4">Product List</h5> 
                        <p className="text-danger"> </p>                 
                                <table className="table table-bordered">
                                <thead>
                                <tr>
                                <th scope="col">Sr.No</th>
                                <th scope="col">Product Title</th>
                                <th scope="col">Product Price</th>
                                <th scope="col">Product Image</th>
                                <th scope="col">product Status</th>
                                <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        product.map((pdata, index)=>(
                                            <tr key={index}>
                                            <td>{index+1 } </td>
                                            <td>{pdata.ptitle } </td>
                                            <td>{pdata.pprice } </td>
                                            <td><img src={`http://localhost/reactcrudphp/images/${pdata.pimage}`} height={50} width={90} /></td>
                                            <td>{ pdata.status==1?"Active":"Inactive"} </td>
                                            <td>
                                                <Link to="/editproduct" className="btn btn-success mx-2">Edit</Link>
                                             <Link to="/deleteproduct" className="btn btn-danger">Delete</Link>
                                            </td>
                                            </tr>
                                        ))
                                    }
                              
                                                               
                                </tbody>
                                </table>  
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Productlist;