// @ts-nocheck
import React from "react";
import staticRoutes from "./staticRoutes";
import { Error404 } from "../views";
import { Route, Switch, HashRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { Layout } from "../layouts";

export default function RenderRoutes() {
  return (
    <HashRouter basename="/">
      <ScrollToTop>
        <Switch>
          {/* Render the staticRoutes */}
          {staticRoutes.map(({ component, path }, key) => {
            const Component = component;
            return (
              <Route
                exact
                path={path}
                key={key}
                render={(props) => (
                  <Layout>
                    <Component {...props} />
                  </Layout>
                )}
              />
            );
          })}
          <Route
            render={(props) => (
              <Layout>
                <Error404 {...props} />
              </Layout>
            )}
          />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  );
}
