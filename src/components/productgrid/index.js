import React from "react";
import ProductCard from "../../components/Product card";
import { ProductData } from "../../assets/productdata";
import { Grid, Box } from "@mui/material";
import { useSelector } from "react-redux";
import './productgrid.css'

export default function ProductGrid() {
  const productCategory = useSelector(state => state.filter.productCategory)
  const productName = useSelector(state => state.search.productName)
  const a = ProductData.filter((product, index) => {
    if (productCategory === 'all' && productName === '') {
      return product
    }
    return product.category === productCategory || productName === product.name
  })

  return (
    <Box class='cardgrid '>
      <Grid container spacing={4} >
        {a.map(items => (
          <Grid item xs={12} sm={6} md={3} lg={2.1} xl={2.1} sx={{
            margin: 'auto',
            marginTop: '10px',
            marginBottom: '10px'
          }}>
            <ProductCard productdata={items} />
          </Grid >))
        }
      </Grid>
    </Box>
  )
}