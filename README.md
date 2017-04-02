# Gratka-api
    Queries unofficial gratka APIs.
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
const api = new Gratka.Api.Dom.Nieruchomosci(connectionParams).conect();
```
Handle desired methods (avaible methods list http://pomoc.webapi2.gratka.pl/dokumentacja/dom_dokumentacja)
```js
api["<METHOD>"].then(result => {
 // handle result
}).catch(reason => {
  // handle rejectction
});
```
