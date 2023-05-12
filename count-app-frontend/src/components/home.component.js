import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'

export default function TotalCount() {
    const navigate = useNavigate();

    const [section_id, setSection_id] = useState("")
    const [validationError,setValidationError] = useState({})

    const totalCount = async (e) => {
        e.preventDefault();

        const formData = new FormData()

        formData.append('section_id', section_id)


        // await axios.post(`http://localhost:8000/api/viewbysection/${id}`, formData).then(({data})=>{
        //     Swal.fire({
        //         icon:"success",
        //         text:data.message
        //     })
        //     navigate("/")
        // }).catch(({response})=>{
        //     if(response.status===422){
        //         setValidationError(response.data.errors)
        //     }else{
        //         Swal.fire({
        //             text:response.data.message,
        //             icon:"error"
        //         })
        //     }
        // })

    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Total Count</h4>
                            <hr />
                            <div className="form-wrapper">
                                {
                                    Object.keys(validationError).length > 0 && (
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="alert alert-danger">
                                                    <ul className="mb-0">
                                                        {
                                                            Object.entries(validationError).map(([key, value])=>(
                                                                <li key={key}>{value}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                <Form onSubmit={totalCount}>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="Section_id">
                                                <Form.Label>Section_id</Form.Label>
                                                <Form.Control type="text" value={section_id} onChange={(event)=>{
                                                    setSection_id(event.target.value)
                                                }}/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
                                        Total
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}