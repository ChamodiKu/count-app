import React, { useEffect, useState } from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2';

export default function DeleteSection() {

    const navigate = useNavigate();

    const [sections, setSections] = useState([])
    const { id } = useParams()

    useEffect(()=>{
        fetchSection()
    },[])

    const fetchSection = async () => {
        await axios.get(`http://localhost:8000/api/sections/delete/${id}`).then(({data})=>
            setSections(data)
        )
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
            fetchSection()
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
                    <h4 className="card-title">
                        Delete Section
                    </h4>
                </div>
            </div>
            <Button variant="danger" className="mt-2" size="lg" block="block" type="submit">
                Delete
            </Button>
        </div>
    )
}