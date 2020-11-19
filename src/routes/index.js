import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const IndexPage = React.lazy(() => import('@/pages/IndexPage'));

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route exact component={IndexPage} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
