import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'
import DeleteCount from "./delete.component";

export default function ViewAllCounts() {

    const [counts, setCounts] = useState([])

    useEffect(()=>{
        fetchCounts()
    },[])

    const fetchCounts = async () => {
        await axios.get(`http://localhost:8000/api/counts`).then(({data})=>{
            setCounts(data)
        })
    }

    const deleteCount = async (id) => {
        const isConfirm = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            return result.isConfirmed
        });

        if(!isConfirm){
            return;
        }

        await axios.delete(`http://localhost:8000/api/counts/delete/${id}`).then(({data})=>{
            Swal.fire({
                icon:"success",
                text:data.message
            })
            fetchCounts()
        }).catch(({response:{data}})=>{
            Swal.fire({
                text:data.message,
                icon:"error"
            })
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className='col-12'>
                    <Link className='btn btn-primary mb-2 float-end' to={"/counts/create"}>
                        Create Count
                    </Link>
                </div>
                <div className="col-12">
                    <div className="card card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered mb-0 text-center">
                                <thead>
                                <tr>
                                    <th>Product_id</th>
                                    <th>Section_id</th>
                                    <th>Count</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    counts.length > 0 && (
                                        counts.map((row, key)=>(
                                            <tr key={key}>
                                                <td>{row.product_id}</td>
                                                <td>{row.section_id}</td>
                                                <td>{row.tcount}</td>

                                                <td>
                                                    <Link to={`/counts/update/${row.id}`} className='btn btn-success me-2'>
                                                        Edit
                                                    </Link>
                                                    <Button variant="danger" onClick={()=>deleteCount(row.id)}>
                                                        Delete
                                                    </Button>
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