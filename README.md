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
    return api.<METHOD_NAME>({...params});
}).then(result => {
    // handle result
}).catch(reason => {
  // handle rejectction
});
```
Call specific methods with params that should give more proper output i.e
```ts
export interface pobierz_kategorie_params {
    id_kategoria?: Number,
    js_tree?: Boolean
}

api.connect().then(() => {
    return api.pobierz_kategorie({js_tree: true});
}).then(result => {
    // result should be simmilar to presented bellow.
});

{ Dom: 
   { id: 382,
     nazwa: 'Dom',
     dane: '0',
     id_rodzic: 1,
     poziom: 0,
     id_prasa: 2,
     path: '/Dom',
     Pokoje: 
      { id: 8251,
        nazwa: 'Pokoje',
        dane: {},
        id_rodzic: 382,
        poziom: 1,
        id_prasa: 0,
        path: '/Dom/Pokoje',
        'Rynek wtórny': [Object] }
   }
}
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
