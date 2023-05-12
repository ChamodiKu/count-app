import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import CreateProduct from "./components/product/create.component";
import UpdateProduct from "./components/product/edit.component";
import ViewAllProducts from "./components/product/viewall.component";
import DeleteProduct from "./components/product/delete.component";

import CreateSection from "./components/section/create.component";
import UpdateSection from "./components/section/edit.component";
import ViewAllSections from "./components/section/viewall.component";
import CreateCount from "./components/count/create.component";
import UpdateCount from "./components/count/edit.component";
import ViewAllCounts from "./components/count/viewall.component";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

function DeleteSection() {
  return null;
}

function App() {
  return (<Router>
    <Navbar bg="primary">
      <Container>
        <Link to={"/products"} className="navbar-brand text-white">
          Count App
        </Link>
      </Container>
    </Navbar>

    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <Routes>
            {/*products routes*/}
            <Route path="/products/create" element={<CreateProduct />} />
            <Route path="/products/update/:id" element={<UpdateProduct />} />
            <Route exact path='/products/' element={<ViewAllProducts />} />
            <Route path="/products/delete/:id" element={<DeleteProduct />}/>

            {/*section routes*/}
            <Route path="/sections/create" element={<CreateSection />} />
            <Route path="/sections/update/:id" element={<UpdateSection />} />
            <Route exact path='/sections/' element={<ViewAllSections />} />
            {/*<Route path="/sections/delete/:id" element={<DeleteSection />}/>*/}

            {/*count routes*/}
            <Route path="/counts/create" element={<CreateCount />} />
            <Route path="/counts/update/:id" element={<UpdateCount />} />
            <Route exact path='/counts/' element={<ViewAllCounts />} />
            {/*<Route path="/counts/delete/:id" element={<DeleteCount />}/>*/}

          </Routes>
        </Col>
      </Row>
    </Container>
  </Router>);
}

export default App;