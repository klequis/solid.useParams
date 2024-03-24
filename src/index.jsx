/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route, A, useLocation, useParams } from "@solidjs/router";

render(() => (
  <Router>
    <Route path="/" component={App} />
    <Route path="/profile" component={UserProfile} />
  </Router>
), document.getElementById("root"));

function App() {
  return (
    <nav>
      <A href="/profile?username=johndoe&age=30">John Doe's Profile</A>
http://localhost:3000/?username=johndoe&age=30
    </nav>
  );
}

function UserProfile() {
  const location = useLocation();
  const query = location.query
  

  const params = useParams();
  console.log('params', params.username)
  console.log('params', params.age)

  return (
    <div>
      <h1>User Profile</h1>
      <h2>Query</h2>
      <p>Username: {query.username}</p>
      <p>Age: {query.age}</p>
      <h2>Params</h2>
      <p>Username: {params.username}</p>
      <p>Age: {params.age}</p>
    </div>
  );
}