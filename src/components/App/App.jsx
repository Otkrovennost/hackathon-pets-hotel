import React from "react";
import { Switch, Route, HashRouter, Redirect } from "react-router-dom";

import MainPage from "../Pages/MainPage/MainPage";
import PetsOnHoliday from '../Pages/PetsOnHoliday/PetsOnHoliday';
import PetSitters from '../Pages/PetSitters/PetSitters';

import { AppRoute } from "../../constants";

import './App.scss';

function App() {
  return (
    <HashRouter>


      <Switch>
        <Route exact path={AppRoute.MAIN_PAGE} component={MainPage} />
        <Route
          exact
          path={AppRoute.PETS_ON_HOLIDAY}
          component={PetsOnHoliday}
        />
        <Route
          exact
          path={AppRoute.PET_SITTERS}
          component={PetSitters}
        />
        <Redirect to={AppRoute.MAIN_PAGE} />
      </Switch>
    </HashRouter>
  );
};

export default App;
