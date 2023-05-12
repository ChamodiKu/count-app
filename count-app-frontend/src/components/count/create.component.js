import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'

export default function CreateCount() {
    const navigate = useNavigate();

    const [product_id, setProduct_id] = useState("")
    const [section_id, setSection_id] = useState("")
    const [tcount, setTcount] = useState("")
    const [validationError,setValidationError] = useState({})

    const createCount = async (e) => {
        e.preventDefault();

        const formData = new FormData()

        formData.append('product_id', product_id)
        formData.append('section_id', section_id)
        formData.append('tcount', tcount)

        await axios.post(`http://localhost:8000/api/counts/create`, formData).then(({data})=>{
            Swal.fire({
                icon:"success",
                text:data.message
            })
            navigate("/counts")
        }).catch(({response})=>{
            if(response.status===422){
                setValidationError(response.data.errors)
            }else{
                Swal.fire({
                    text:response.data.message,
                    icon:"error"
                })
            }
        })
    }

    let productslist;
    function created(){
        productslist.selectItems(['']);
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Create Count</h4>
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
                                <Form onSubmit={createCount}>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="Product_id">
                                                <Form.Label>Product_id</Form.Label>
                                                {/*<ListBoxComponent dataSource={productslist} ref={(scope)=>productslist = scope} created={created}/>);}*/}
                                                <Form.Control type="text" value={product_id} onChange={(event)=>{
                                                    setProduct_id(event.target.value)
                                                }}/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
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
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="TCount">
                                                <Form.Label>Count</Form.Label>
                                                <Form.Control type="text" value={tcount} onChange={(event)=>{
                                                    setTcount(event.target.value)
                                                }}/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
                                        Create
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