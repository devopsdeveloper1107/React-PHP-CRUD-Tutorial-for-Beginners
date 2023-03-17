import React, {useState} from "react";
import { Link } from "react-router-dom";


function Productlist()
{ 
  

       return(
        <React.Fragment>
            <div className="container">
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
                                </tr>
                                </thead>
                                <tbody>
                                 <tr>
                                <td>1</td>
                                <td>Jeans</td>
                                <td>4000</td>
                                <td>image</td>
                                <td>Active </td>
                                
                                </tr>
                                                               
                                </tbody>
                                </table>  
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Productlist;