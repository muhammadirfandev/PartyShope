import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'
import { Card, CardBody, CardTitle, Button, CardText, CardSubtitle } from 'reactstrap';
import styles from './styles.module.scss'


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
        //   console.log('response', response.data)
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
      <ul>
        {products.map((product) => (
          <Card className={styles.card-styles}
          
        >
          <img
            alt="Sample"
            src="https://picsum.photos/300/200"
          />
          <CardBody>
            <CardTitle tag="h5">
              {product.title}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card‘s content.
            </CardText>
            <Button>
              Button
            </Button>
          </CardBody>
        </Card>
        ))}
      </ul>
    </>
  );
}
