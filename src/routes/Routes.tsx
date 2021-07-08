import { Switch, Route } from 'react-router-dom';
import ArtistPage from '../pages/ArtistPage/ArtistPage';
import Index from '../pages/Index/Index';
import AlbumPage from '../pages/AlbumPage/AlbumPage';

export default function Routes(): JSX.Element {
    return (
        <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/artist/:name" component={ArtistPage} />
            <Route
                exact
                path="/album/:artistId/:albumId"
                component={AlbumPage}
            />
            <Route exact path="*" component={Index} />
        </Switch>
    );
}
