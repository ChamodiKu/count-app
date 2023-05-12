import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'
import DeleteSection from "./delete.component";

export default function ViewAllSections() {

    const [sections, setSections] = useState([])

    useEffect(()=>{
        fetchSections()
    },[])

    const fetchSections = async () => {
        await axios.get(`http://localhost:8000/api/sections`).then(({data})=>{
            setSections(data)
        })
    }

    const deleteSection = async (id) => {
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

        await axios.delete(`http://localhost:8000/api/sections/delete/${id}`).then(({data})=>{
            Swal.fire({
                icon:"success",
                text:data.message
            })
            fetchSections()
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
                    <Link className='btn btn-primary mb-2 float-end' to={"/sections/create"}>
                        Create Section
                    </Link>
                </div>
                <div className="col-12">
                    <div className="card card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered mb-0 text-center">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    sections.length > 0 && (
                                        sections.map((row, key)=>(
                                            <tr key={key}>
                                                <td>{row.name}</td>
                                                <td>
                                                    <Link to={`/sections/update/${row.id}`} className='btn btn-success me-2'>
                                                        Edit
                                                    </Link>
                                                    <Button variant="danger" onClick={()=>deleteSection(row.id)}>
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