# best-route
A small javascript url router.

# API

## on
### BestRoute.on(route, callback [, checkNow])
Adds a new route
<a id="route"></a>
#### route 
route should be a string of any length with each thing seperated with a forward slash:
```
/pages/home
```
routes can also contain parameters. Parameters have to start with a colon:
```
/user/:username/
```

#### callback
callback should be a function.
If the route contains parameters then they are passed as an object like:
```
{
  paramname: value
}
```

#### checkNow
checkNow is a boolean. If true then the route is checked as soon as it's created instead of when the location hash is changed.

This can be useful if you want the user to be able to load a page with a route already in the url.

## on
### BestRoute.off(route)
Removes a route

#### [route](#route)

# Usage

## Basic Usage
```
BestRoute.on('/home', function() {
  alert('We are home');
})
```

## URL Parameters
Sometimes you'll want to have a route that has paramters such as:
```
/users/username/
```

but adding each user to the route is inefficient so you can should use URL parameters instead.

```
/users/:username/
```

### Code Example
```
var users = {
  bob: 'admin',
  jim: 'user'
}

BestRoute.on('/users/:username', function(params) {
  if(users[params.username]) {
    alert('Welcome, ' + params.username + '. You are a ' + users[params.username])
  }
})
```
