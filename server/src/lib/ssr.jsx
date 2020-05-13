import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import store from '../../../client/src/store/prod.store';
import App from '../../../client/src/containers/Availability/Availability';

const ssr = (data, roomId) => {
  const newStore = store();
  newStore.dispatch({
    type: 'FETCH_AVAILABILITY',
    data,
  });

  const rendered = renderToString(
    <Provider store={newStore}>
      <App roomId={roomId} />
    </Provider>,
  );

  const preloadedState = newStore.getState();

  return {
    rendered,
    preloadedState,
  };
};

export default ssr;
