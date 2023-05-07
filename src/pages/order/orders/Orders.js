import React, { useEffect, useState } from "react";
import "./orders.css";
import { useNavigate } from "react-router-dom";
import { Snackbar, Grid, Typography } from "@mui/material";
import { Alert } from "react-bootstrap";
import { getOrderList } from "../../../helpers/api-helper/product";
import Fade from "react-reveal/Fade";
import Flash from "react-reveal/Flash";
import Loading from "../../../Components/loading/Loading";

const Orders = () => {
  const navigate = useNavigate();
  const [orderList, setOrderList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getOrdersListData = () => {
    setIsLoading(true);
    setError(null);
    getOrderList(
      (response) => setOrderList(response.data),
      (error) => setError(error.data),
      () => setIsLoading(false)
    );
  };

  useEffect(() => {
    getOrdersListData();
  }, []);

  const renderError = () => (
    <div>
      <Snackbar open autoHideDuration={6000}>
        <Alert variant="filled" severity="error">
          {error}
        </Alert>
      </Snackbar>
    </div>
  );

  const renderLoading = () => <Loading />;

  return (
    <div className="mt-4 container">
      <Flash>
        <h1 className="fw-semibold text-center">Orders History</h1>
      </Flash>
      <hr />
      {isLoading ? (
        renderLoading()
      ) : error ? (
        renderError()
      ) : (
        <Fade bottom cascade>
          <Grid
            direction="row"
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              {orderList.map((item) => (
                <Grid
                  item
                  container
                  className="card"
                  key={item._id}
                  onClick={() => navigate(`${item._id}`)}
                >
                  <Grid item xs container direction="row" spacing={2}>
                    <Grid item className="order-grid">
                      <Typography variant="h5">OrderId:</Typography>
                      <Typography variant="body2">{item._id}</Typography>
                    </Grid>
                    <Grid item></Grid>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      p: 2,
                      margin: "auto",
                    }}
                  >
                    <Typography variant="h5" component="div">
                      total price: ${item.totalPrice}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Fade>
      )}
    </div>
  );
};

export default Orders;
