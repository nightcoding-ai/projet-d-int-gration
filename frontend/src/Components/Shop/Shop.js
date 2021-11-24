import React, { Component } from 'react'
import axios from 'axios'
//import { Link } from 'react-router-dom';
import './Shop.css';
import {Button} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
        };
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/products')
            .then((result) => {
            this.setState({
                isLoaded: true,
                items: result.data
            });
        });
    }
    render() {
        const { items } = this.state;
        const notify = (e) =>toast('L\'article : '+e.currentTarget.id+' a été ajouté au panier !', {
                                        position: "top-center",
                                        autoClose: 2000,
                                        hideProgressBar: true,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,

                                        });
        if (!this.state.isLoaded) {
          return <div>Chargement ... </div>;
        } else {
          return (
            <div class="container py-5 my-5">
                <div className="mb-5">
                    <h1 className='title'>Articles</h1>
                </div>
                <div class="row">
                    <div class="col-lg-7 mx-auto">
                    <ul className="list-group shadow">
                    {items.map((product) => (
                        <li className="list-group-item">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-6">
                                    <h3 className="mt-4 font-weight-bold mb-2">{product.name}</h3>
                                    <p className="text-muted">{product.description}</p>
                                    <h5 className="font-weight-bold my-2">{product.price}€</h5>
                                </div>
                                <div className="col-lg-6 text-center">
                                    <div className='box "my-3'>
                                        <img src={product.image} alt={product.name} width="150" className='picture'/>
                                    </div>
                                    <div className="my-3">
                                        <Button type="button" id={product.name} variant="btn btn-outline-success"  onClick={notify}>Ajouter au panier</Button>
                                       <ToastContainer/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    ))}
                    </ul>
                    </div>
                </div>
            </div>
          );
        }
    }
}

export default Shop;

