import React from "react";
import { Grid } from "@mui/material";
import './bankoffers.css'


export default function BankOffers() {
  return (
    <>

      <Grid container spacing={2.5} sx={{
        position: 'relative',
        width: 'fit-content',
        margin: '0 auto',
        height: 'fit-content'
      }}>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3} sx={{ margin: '0 auto' }}>
          <img className="bankofferimg " src={process.env.REACT_APP_PAYTM} alt="" />
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3} sx={{ margin: '0 auto' }}>
          <img className="bankofferimg " src={process.env.REACT_APP_RBLBANK} alt="" />
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3} sx={{ margin: '0 auto' }}>
          <img className="bankofferimg " src={process.env.REACT_APP_INDUS} alt="" />
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3} sx={{ margin: '0 auto' }}>
          <img className="bankofferimg " src={process.env.REACT_APP_DIGI} alt="" />
        </Grid>
      </Grid>

    </>
  )
}