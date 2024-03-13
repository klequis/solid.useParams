/* @refresh reload */
import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import { useParams } from "@solidjs/router"

// const Route1 = lazy(() => import('./pages/Route1'))
// const Route2 = lazy(() => import('./pages/Route2'))

render(() => (
  <Router>
    <Route path="/" component={() => <h1>Home</h1>} />
    <Route
      path="/route1/:id"
      component={Route1}
    />
    <Route
      path="/route2/:id"
      component={Route2}
    />
  </Router>
), document.getElementById("root"));

function Route1(props) {
  console.log('props', props) // includes `location` & `params`
  console.log('Users.params', props.params)       // Proxy(Object) {}
  console.log('props.params.id', props.params.id) // 1
  
  return (
    <>
      <h1>Route1</h1>
    </>
  )
}

function Route2() {
  const p = useParams()
  console.log('p', p)       // Proxy(Object) {}
  console.log('p.id', p.id) // 1
  return (
    <>
      <h1>Route2</h1>
    </>
  )
}

/*
Does `useParams` do something different than `props.params?`
*/