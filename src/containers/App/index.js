import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdmminLayoutRoute from '../../commons/Layout/AdminLayoutRoute';
import theme from '../../commons/Theme/index';
import GlobalLoading from '../../components/GlobalLoading';
import CommonModal from '../../components/Modal';
import { ADMIN_ROUTES } from '../../constants/index';
import configureStore from '../../redux/configureStore';
import styles from './styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const store = configureStore();

class App extends Component {
  renderAdminRoutes() {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map((route) => {
      return (
        <AdmminLayoutRoute
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      );
    });
    return xhtml;
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ToastContainer />
            <GlobalLoading />
            <CommonModal />
            <Switch>{this.renderAdminRoutes()}</Switch>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
