import AdminHomePage from "../pages/AdminHomePage/AdminHomePage"
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage"
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage"
import HomePage from "../pages/HomePage/HomePage"
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage"


import { BrowserRouter, Switch, Route } from "react-router-dom"


export const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <HomePage />
          </Route>
  
          <Route exact path={"/admin/trips/list"}>
            <AdminHomePage />
          </Route>

          <Route exact path={"/trips/application"}>
            <ApplicationFormPage />
          </Route>

          <Route exact path={"/trips/list"}>
            <ListTripsPage />
          </Route>

          <Route exact path={"/admin/trips/create"}>
            <CreateTripPage />
          </Route>

          <Route exact path={"/login"}>
            <LoginPage />
          </Route>

          <Route exact path={"/admin/trips/:id"}>
            <TripDetailsPage />
          </Route>
  
          {/* <Route>
            <ErrorPage />
          </Route> */}
        </Switch>
      </BrowserRouter>
    );
  };