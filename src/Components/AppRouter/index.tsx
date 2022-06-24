import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { ROUTES } from '../../consts';
import { BeersPage } from '../../Pages/BeersPage';
import { FavoritePage } from '../../Pages/FavoritePage';
import { Navigation, NavItem } from './styled';

const AppRouter = (): JSX.Element => {
    return (
        <Router>
            <Navigation>
                <NavItem to={ROUTES.BROWSE_BEERS}>
                    Beers page
                </NavItem>
                <NavItem to={ROUTES.FAVORITE_BEERS}>
                    Favorite page
                </NavItem>
            </Navigation>
            <Routes>
                <Route path={ROUTES.BROWSE_BEERS} element={<BeersPage />} />
                <Route path={ROUTES.FAVORITE_BEERS} element={<FavoritePage />} />
                <Route path="/" element={<Navigate to="/beers" replace={true} />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;
