

## Routes & Params

In the context of web development, a route is a way to define how an application responds to a client request for a specific endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, etc.). 

The term "params" in this context refers to route parameters. Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the `req.params` object, with the name of the route parameter specified in the path as their respective keys.

For example, in the route `GET /users/:userId/books/:bookId`, there are two route parameters, `userId` and `bookId`. This route could match `GET /users/34/books/8989`, for instance, with `req.params` equal to `{ "userId": "34", "bookId": "8989" }`.

This feature is very useful for creating dynamic routes and capturing user input directly from the route itself. It's a fundamental concept in many web frameworks, including Express.js in the Node.js ecosystem.


In the context of SolidJS Router, a route is defined using the `<Route>` component, and it maps a specific URL path to a component. The URL is what the user sees in the browser's address bar.

Using SolidJS Router as an example
- A route is defined using the `<Route>` component.
- A URL is the address that corresponds to that route.

## In the simpliest case, this route will match the url
- The protocal and domain are https://example.com
  - A route does not contain the protocal or domain **<<(what about when it is deployed)>>**
- This route will match the URL `https://example.com/users`

```jsx
<Route path="/users" component={Users}/>
```

- A Route can match _route params_.
- While a URL can have _query params_, routes cannot match against them.
- Interesting, but routes in SolidJS do not include a protocol or domain.

## Routes can have params

```jsx
<Route path="/users/:id" component={Users}>
```




## What is the difference between `useParams` and the `query` property of `useLocation`?

`useParams` provides access to route's path parameters.

```jsx
/users/:id
```

`query` provides access to the URL's query parameters.

If the route is
```jsx
<Route path="/profile" component={UserProfile} />
```

And in `<UserProfile>` you have:
```jsx
const location = useLocation();
const query = location.query
const params = useParams();

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
```

And the URL is: `/profile?username=johndoe&age=30"`

`query.username` returns `johndoe`
`query.age` returns `30`

However, both `params.username` are `undefined`. The URL doesn't have any params.