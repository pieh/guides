import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import createStore from './src/store';

const propTypes = {
  children: PropTypes.node.isRequired
};

const store = createStore();

const replaceRouterComponent = function replaceRouterComponent({ history }) {
  function ConnectedRouterWrapper({ children }) {
    return (
      <Provider store={store}>
        <Router history={history}>{children}</Router>
      </Provider>
    );
  }
  ConnectedRouterWrapper.displayName = 'ConnectRouterWrapper';
  ConnectedRouterWrapper.propTypes = propTypes;

  return ConnectedRouterWrapper;
};

if (typeof exports !== 'undefined') {
  exports.replaceRouterComponent = exports.replaceRouterComponent;
}
export { replaceRouterComponent };
