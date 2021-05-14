import React, { useEffect, useState } from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  CircularProgress,
  Divider,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";

const useStyle = makeStyles({
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
export default function DetailProduct() {
  const classes = useStyle();
  const [product, setProduct] = useState({
    id: 0,
    name: "",
    description: "",
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(async () => {
    try {
      const response = await fetch(
        `https://localhost:${process.env.port}/api/product/${id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <Box m={3} p={2}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/">
          <Typography className={classes.linkStyle}>Home</Typography>
        </Link>
        <Typography color="textPrimary">Detail Product</Typography>
      </Breadcrumbs>
      <br />
      <Divider />
      <br />
      {loading ? (
        <CircularProgress />
      ) : (
        <div className={classes.root}>
          <Box m={3} p={2} display="flex" justifyContent="center">
            <Typography variant="h4">Detail Product</Typography>
          </Box>
          <Box m={3} p={2}>
            <Typography>Product's Name</Typography>
            <TextField
              value={product.name}
              variant="outlined"
              fullWidth
              disabled
            />
          </Box>
          <Box m={3} p={2}>
            <Typography>Product's Description</Typography>
            <TextField
              value={product.description}
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              disabled
            />
          </Box>
        </div>
      )}
    </Box>
  );
}
