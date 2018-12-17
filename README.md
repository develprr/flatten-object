# flatten-object

A micro-library for flattening deeply nested objects.
**Please don't use this package!** This package is only an experiment!

## Installation

```js
npm i @metamatic.net/flatten-object
```

## Usage

```js
import {flattenObject} from 'flatten-object'

const deepObject = {
  user: {
    username: 'jondoe',
    kids: ['tim', 'kim', 'jim'],
    address: {
      streetAddress: 'Somestreet 1'
    }
  }
};

const flatObject = flattenObject(deepObject);
```

The flattened object: 
```js
{ 
  'user.username': 'jondoe',
  'user.kids.0': 'tim',
  'user.kids.1': 'kim',
  'user.kids.2': 'jim',
  'user.address.streetAddress': 'Somestreet 1' 
}
```

## License 

Apache 2.0

## Author 

[Heikki Kupiainen](https://www.linkedin.com/in/heikki-kupiainen-oppikone) / [metamatic.net](http://www.metamatic.net)


