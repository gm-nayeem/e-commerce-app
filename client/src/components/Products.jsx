// external import
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios';

// internal import
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({cat, filters, sort}) => {
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat ? `http://localhost:4000/api/products?category=${cat}` :
          "http://localhost:4000/api/products"
        );
        // console.log(res.data);
        setProducts(res.data);
      } catch(err) {
        console.log(err)
      }
    }
    getProducts();
  }, [cat])

  useEffect(() => {
    cat && setFilterProducts(
      products.filter(item => (
        Object.entries(filters).every(([key, value]) => (
          item[key].includes(value)
        ))
      ))
    )
  }, [products, cat, filters])
  
  return (
    <Container>
      {filterProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
