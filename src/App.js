import { Route } from "react-router-dom/cjs/react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";
import { Switch } from "react-router";
import Layout from "./components/layouts/Layout";

function App() {
  return (<Layout >
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage/>
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupsPage/>
        </Route>
        <Route path='/favorites'>
          <FavoritesPage/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
