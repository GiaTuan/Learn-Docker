import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const useStyle = makeStyles({
  product: {
    width: 300,
    height: 450,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
});

export default function HomeIndex() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const classes = useStyle();

  useEffect(async () => {
    try {
      const response = await fetch(
        `https://localhost:${process.env.port}/api/product`,
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
        setProducts(data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <Box m={3} display="flex" justifyContent="flex-end">
        <Link href="/add">
          <Button color="primary" variant="contained">
            Add product
          </Button>
        </Link>
      </Box>
      <Box m={3} p={2} display="flex">
        {loading ? (
          <CircularProgress />
        ) : (
          products.map((item) => (
            <Card className={classes.product}>
              <CardMedia
                style={{ height: 200 }}
                image={"https://picsum.photos/200"}
                title="Paella dish"
              />
              <CardContent style={{ height: 200 }}>
                <Typography color="textSecondary" gutterBottom>
                  {item.name}
                </Typography>
                <div
                  style={{
                    height: 100,
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Typography variant="body2" component="p">
                    {item.description}
                  </Typography>
                </div>
              </CardContent>
              <CardActions>
                <Link href={`/product/${item.id}`}>
                  <Button size="small" color="secondary" variant="contained">
                    More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          ))
        )}
      </Box>
    </>
  );
}
