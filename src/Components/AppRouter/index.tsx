import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom';
import { ROUTES } from '../../consts';
import { BeersPage } from '../../Pages/BeersPage';
import { FavoritePage } from '../../Pages/FavoritePage';
import App from '../App';

const AppRouter = (): JSX.Element => {
    return (
        <Router>
            <Routes>
                <Route path={ROUTES.BROWSE_BEERS} element={<BeersPage />} />
                <Route path={ROUTES.FAVORITE_BEERS} element={<FavoritePage />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;
