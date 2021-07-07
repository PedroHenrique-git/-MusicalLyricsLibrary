import { Switch, Route } from 'react-router-dom';
import ArtistPage from '../pages/ArtistPage/ArtistPage';
import Index from '../pages/Index/Index';

export default function Routes(): JSX.Element {
    return (
        <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/artist/:name" component={ArtistPage} />
            <Route exact path="*" component={Index} />
        </Switch>
    );
}
