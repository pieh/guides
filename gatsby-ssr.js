import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

import createStore from './src/store';

const store = createStore();

const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  function renderConnectedBody(reduxStore) {
    return <Provider store={reduxStore}>{bodyComponent}</Provider>;
  }

  const providerWrappedBodyString = renderToString(renderConnectedBody(store));

  replaceBodyHTMLString(providerWrappedBodyString);
};

exports.replaceRenderer = replaceRenderer;
export { replaceRenderer };
