import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
// import NotFoundPage from '../components/NotFoundPage';
import HomePage from '../components/mainComponent';

const AppRouter = () => (
        <BrowserRouter>
            <div>
                {/* can place component on top of switch 
          display in all routes */}
                <Switch>
                    <Route path="/" component={HomePage} exact={true} />
                </Switch>
            </div>
        </BrowserRouter>
);

export default AppRouter;
