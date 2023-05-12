import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

export default function UpdateProduct() {
    const navigate = useNavigate();

    const { id } = useParams()

    const [title, setTitle] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [validationError,setValidationError] = useState({})

    useEffect(()=>{
        fetchProduct()
    },[])

    const fetchProduct = async () => {
        await axios.get(`http://localhost:8000/api/products/update/${id}`).then(({data})=>{
            const { title, name, price, category } = data.product
            setTitle(title)
            setName(name)
            setPrice(price)
            setCategory(category)
        }).catch(({response:{data}})=>{
            Swal.fire({
                text:data.message,
                icon:"error"
            })
        })
    }

    // const changeHandler = (event) => {
    //     setImage(event.target.files[0]);
    // };

    const updateProduct = async (e) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append('_method', 'PATCH');
        formData.append('title', title)
        formData.append('name', name)
        formData.append('price', price)
        formData.append('category', category)

        // if(image!==null){
        //     formData.append('image', image)
        // }

        await axios.post(`http://localhost:8000/api/products/update/${id}`, formData).then(({data})=>{
            Swal.fire({
                icon:"success",
                text:data.message
            })
            navigate("/")
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

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Update Product</h4>
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
                                <Form onSubmit={updateProduct}>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="Title">
                                                <Form.Label>Title</Form.Label>
                                                <Form.Control type="text" value={title} onChange={(event)=>{
                                                    setTitle(event.target.value)
                                                }}/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="Name">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" value={name} onChange={(event)=>{
                                                    setName(event.target.value)
                                                }}/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="Price">
                                                <Form.Label>Price</Form.Label>
                                                <Form.Control type="text" value={price} onChange={(event)=>{
                                                    setPrice(event.target.value)
                                                }}/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="Category">
                                                <Form.Label>Category</Form.Label>
                                                <Form.Control type="text" value={category} onChange={(event)=>{
                                                    setCategory(event.target.value)
                                                }}/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
                                        Update
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