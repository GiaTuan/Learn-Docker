import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import Link from "next/link";


export default function Index({ children }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
        <Link href="/">
          <Button style={{color: 'white'}}>
            <Typography variant="h5">Home</Typography>
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
