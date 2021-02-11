/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect, HashRouter } from "react-router-dom";
import "assets/css/material-dashboard-react.css?v=1.9.0";
// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import Reports from 'components/reports/reports'
import DraftDetails from 'components/reports/DraftDetails'
import FollowupReports from "components/reports/followupreports";
import FollowupList from "components/reports/followuplist";
import ClosedReports from "components/reports/closedreports";
import FollowupDetails from "components/reports/followupdetails";
import IncidentMap from "components/map/incidents";
import KDMap from "components/map/kdmap";
import ReportsByLGA from "components/reports/reportsbylga";

const hist = createBrowserHistory();

ReactDOM.render(
  <HashRouter history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/reports" exact component={Reports} />
      <Route path="/draft/:id" exact component={DraftDetails} />
      <Route path="/followup" exact component={FollowupReports} />
      <Route path="/draft/followup/:action/:id" exact component={FollowupList} />
      <Route path="/closedreports" exact component={ClosedReports} />
      <Route path="/followup/:id" exact component={FollowupDetails} />
      <Route path="/incidentmap/:id" exact component={IncidentMap} />
      <Route path="/kdmap" exact component={KDMap} />
      <Route path="/reportsbylga/:id" exact component={ReportsByLGA} />






     {//} <Route path="/rtl" component={RTL} />
      } <Redirect from="/" to="/admin/dashboard" />

    </Switch>

  </HashRouter>,
  document.getElementById("root")
);
