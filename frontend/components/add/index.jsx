import {
  Box,
  Breadcrumbs,
  Button,
  Divider,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import React, { useState } from "react";

const useStyles = makeStyles({
  root: {
    width: 500,
    margin: "auto",
    border: "1px solid rgba(0, 0, 0, 0.12)",
  },
  linkStyle: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export default function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
  });
  const [message, setMessage] = useState({
    name: false,
    description: false,
    message: "",
  });
  const classes = useStyles();

  const handleChangeName = (e) => {
    const { value } = e.target;
    if (value === "") {
      setMessage({ ...message, name: true });
      return;
    }
    setMessage({ ...message, name: false });
    setProduct({ ...product, name: value });
  };

  const handleChangeDes = (e) => {
    const { value } = e.target;
    if (value === "") {
      setMessage({ ...message, description: true });
      return;
    }
    setMessage({ ...message, description: false });
    setProduct({ ...product, description: value });
  };

  const submitAddProduct = async (e) => {
    e.preventDefault();
    if (product.name !== "" && product.description !== "") {
      try {
        const response = await fetch(
          `https://localhost:${process.env.port}/api/product/addproduct`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          }
        );
        if (response.ok) {
          setMessage({ ...message, message: "Add product successful!" });
        } else {
          setMessage({ ...message, message: "Error, please try again later" });
        }
      } catch (err) {
        setMessage({ ...message, message: "Error, please try again later" });
      }
    } else {
      setMessage({ ...message, name: true, description: true });
    }
  };

  return (
    <Box m={3} p={2}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/">
          <Typography className={classes.linkStyle}>Home</Typography>
        </Link>
        <Typography color="textPrimary">Add Product</Typography>
      </Breadcrumbs>
      <br />
      <Divider />
      <br />
      <form className={classes.root} onSubmit={submitAddProduct}>
        <Box m={3} p={2} display="flex" justifyContent="center">
          <Typography variant="h4">Add Product</Typography>
        </Box>
        <Box m={3} p={2}>
          <Typography>Product's Name</Typography>
          <TextField
            variant="outlined"
            fullWidth
            onChange={handleChangeName}
            error={message.name}
            helperText="Name must not be empty"
          />
        </Box>
        <Box m={3} p={2}>
          <Typography>Product's Description</Typography>
          <TextField
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            onChange={handleChangeDes}
            error={message.description}
            helperText="Description must not be empty"
          />
        </Box>
        {message.message ? (
          <Box display="flex" justifyContent="center">
            <Typography>{message.message}</Typography>
          </Box>
        ) : null}
        <Box m={3} p={2} display="flex" justifyContent="center">
          <Button type="submit" color="secondary" variant="contained">
            Add Product
          </Button>
        </Box>
      </form>
    </Box>
  );
}
