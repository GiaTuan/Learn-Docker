import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import GuestLayout from "./GuestLayout";
import theme from '../theme/index';

export default function Index({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GuestLayout />
      {children}
    </ThemeProvider>
  );
}
