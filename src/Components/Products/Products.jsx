import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'
import { Card, CardBody, CardTitle, Button,CardSubtitle } from 'reactstrap';
import styles from "./styles.module.scss";



export const ProductsApi = () => {
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    setLoading(true);
    try {
      axios.get('https://fakestoreapi.com/products')
        .then(response => {
          console.log('response', response.data)
          setProducts(response.data)
          setLoading(false);
        })
    } catch (error) {
      console.error('error is', error)
      setError(true);
      setLoading(false);
    }
  }, [])

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching products.</p>;
  }

  return (
    <>
    <h3 className={styles.featuredtag}>Featured Products</h3>
    
      <ul className={styles.containerStyles}>
        {products.map((product) => (
         <Card className={styles.cardStyles} 
            
            >
          <img
            alt="Sample"
            src={product.image}
          />
          <CardBody >
            <CardTitle tag="h5">
              {product.name}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
            Rs {product.price}
            </CardSubtitle>
            
            <Button>
              View Item
            </Button>
          </CardBody>
        </Card>
        ))}
      </ul>
    </>
  );
}
