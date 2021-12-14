import React, { Suspense } from "react"

import { Route, Switch, Redirect } from "react-router-dom"
import Login from "./components/pages/login/Login"
import AppWrapper from "./AppWrapper"
import LoadingSpinner from "./components/spinner/LoadingSpinner"
import Navigation from "./components/navigation/Navigation"

const About = React.lazy(() => import("./components/pages/about/About"))
const Contact = React.lazy(() => import("./components/pages/contact/Contact"))
const NotFound = React.lazy(
  () => import("./components/pages/not-found/NotFound")
)

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/login' />
          </Route>
          <Route path='/login'>
            <Login
            // initialValues={initialValues}
            // onSubmit={onSubmit}
            // isLoggedIn={isLoggedIn}
            />
          </Route>
          <Route path='/app'>
            <AppWrapper />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </>
  )
}

export default App
