import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'

export default function ViewAllProducts() {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetchProducts()
    },[])

    const fetchProducts = async () => {
        await axios.get(`http://localhost:8000/api/products`).then(({data})=>{
            setProducts(data)
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className='col-12'>
                    <Link className='btn btn-primary mb-2 float-end' to={"/products/create"}>
                        Create Product
                    </Link>
                </div>
                <div className="col-12">
                    <div className="card card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered mb-0 text-center">
                                <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Category</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    products.length > 0 && (
                                        products.map((row, key)=>(
                                            <tr key={key}>
                                                <td>{row.title}</td>
                                                <td>{row.name}</td>
                                                <td>{row.price}</td>
                                                <td>{row.category}</td>
                                                {/*<td>*/}
                                                {/*    <img width="50px" src={`http://localhost:8000/storage/product/image/${row.image}`} />*/}
                                                {/*</td>*/}
                                                <td>
                                                    <Link to={`/products/update/${row.id}`} className='btn btn-success me-2'>
                                                        Edit
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}