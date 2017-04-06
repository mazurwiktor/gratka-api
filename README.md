# Gratka-api

Queries unofficial gratka APIs.

# Instalation

```bash
    npm install gratka-api
```

# Usage

Create connection params.
```ts
interface ConnectionParams {
    login: String,
    password: String,
    webapiKey: String
};
const connectionParams: ConnectionParams;
```

Create an api object.
```ts
const api = new Gratka.Api.Dom.Nieruchomosci(connectionParams);
```
Handle desired methods (avaible methods list http://pomoc.webapi2.gratka.pl/dokumentacja/dom_dokumentacja)
```js
api.conect().then(() => {
    return api.<METHOD_NAME>(...params);
}).then(result => {
    // handle result
}).catch(reason => {
  // handle rejectction
});
```

# Contribution
## Testing

To test helper functions simply
```bash
gulp test
```

If you want to run api tests, you need to first set proper env variables
```bash
export GRAKTA_LOGIN=<YOUR_LOGIN>
export GRAKTA_PASSWORD=<YOUR_PASSWORD>
export GRAKTA_KEY=<YOUR_GRATKA_API_KEY>
```

And then
```bash
gulp test
```
