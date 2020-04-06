import { withStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import theme from "../../commons/Theme/index";
import GlobalLoading from "../../components/GlobalLoading";
import configureStore from "../../redux/configureStore";
import Taskboard from "../Taskboard/index";
import styles from "./styles";
import CommonModal from "../../components/Modal";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <GlobalLoading />
          <CommonModal />
          <Taskboard />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
