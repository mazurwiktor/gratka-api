import * as soap from 'soap-as-promised';

import { JavascriptifySoap } from './JavascriptifySoap';

export interface ConnectionParams {
    login: String,
    password: String,
    webapiKey: String
}

export interface aktualizuj_inwestycje_params {
    id_ogloszenie: Number,
    id_kategoria?: Number
}

export interface aktualizuj_kontakt_params {
    dane_kontaktu: any
}
export interface aktualizuj_ogloszenie_params {
    ogloszenie: any,
    id_kategoria?: Number
}

export interface dodaj_inwestycje_params {
    inwestycja: any
}

export interface dodaj_kontakt_params {
    dane_kontaktu: any
}

export interface dodaj_ogloszenie_params {
    ogloszenie: any,
    id_kategoria?: Number
}

export interface dodaj_rzut_base64_params {
    rzut_base64: String, 
    id_ogloszenie: Number, 
    id_kategoria?: Number
}

export interface dodaj_wideo_params {
    url_wideo: String, 
    id_ogloszenie: Number, 
    id_kategoria?: Number
}

export interface dodaj_zdjecie_params {
    url_zdjecia: String, 
    id_ogloszenie: Number, 
    id_kategoria?: Number
}

export interface dodaj_zdjecie_base64_params {
    zdjecie_base64: String, 
    id_ogloszenie: Number, 
    id_kategoria?: Number
}

export interface pobierz_kategorie_params {
    id_kategoria?: Number,
    js_tree?: Boolean
}

export interface pobierz_kontakt_params {
    id: Number
}

export interface pobierz_pola_params {
    id_kategoria?: Number
}

export interface importuj_ogloszenia_params {
    options: import_ogloszen_opcje, 
    id_kategoria?: Number
}

export interface pobierz_inwestycje_params {
    id: Number
}

export interface pobierz_liste_id_ogloszen_params {
    id_kategoria?: Number
}

export interface pobierz_liste_id_ogloszen_kontaktu_params {
    id_kontakt: Number, 
    id_kategoria?: Number
}

export interface pobierz_liste_id_ogloszen_usunietych_params {
    options: any, 
    id_kategoria?: Number
}

export interface pobierz_liste_id_ogloszen_z_inwestycji_params {
    id_inwestycja: Number
}

export interface  pobierz_liste_slownikow_params {
    id_kategoria?: Number
}

export interface pobierz_liste_wideo_params {
    id_ogloszenie: Number, 
    id_kategoria?: Number
}

export interface pobierz_ogloszenie_params {
    id_ogloszenie: Number, 
    id_kategoria?: Number
}

export interface pobierz_slownik_params {
    nazwa: String, 
    dane: any, 
    id_kategoria?: Number
}

export interface usun_inwestycje_params {
    id: Number
}

export interface usun_kontakt_params {
    id: Number
}

export interface usun_ogloszenie_params {
    id_ogloszenie: Number, 
    id_kategoria?: Number
}

export interface usun_rzut_params {
    id_ogloszenie: Number,
    id_kategoria?: Number
}

export interface usun_wideo_params {
    id: Number,
    id_ogloszenie: Number,
    id_kategoria?: Number
}

export interface usun_zdjecie_params {
    nr_zdjecia: Number, 
    id_ogloszenie: Number, 
    id_kategoria?: Number
} 

export interface usun_zdjecie_id_params {
    id: Number, 
    id_ogloszenie: Number, 
    id_kategoria?: Number
}

export interface wyroznij_ogloszenie_params {
    liczbaPunktow: Number, 
    id_ogloszenie: Number, 
    id_kategoria?: Number
}

export class Nieruchomosci {
    login: String;
    password: String;
    webapiKey: String;
    categoryId: Number;
    webapiVersion: Number;

    session: String;
    connection: Promise<any>;
    logIn: Promise<any>;
    constructor(params: ConnectionParams) {
        this.categoryId = 382;
        this.webapiVersion = 2;
        let connection = soap.createClient('http://soap.webapi2.gratka.pl/dom.html?wsdl');
        this.connection = connection;

        this.logIn = connection.then(client => client.zaloguj({
            login: params.login,
            haslo: params.password,
            klucz_webapi: params.webapiKey,
            id_kategoria: this.categoryId,
            wersja_webapi: this.webapiVersion
        })).then(result => {
            this.session = result.sesja.$value;
        })
    }

    connect(): Promise<String> {
        return this.logIn;
    }


    aktualizuj_inwestycje(params: aktualizuj_inwestycje_params): Promise<any> {
        return this.connection.then(client => client.aktualizuj_inwestycje({
            sesja: this.session,
            id_kategoria: params.id_kategoria || this.categoryId,
            id_ogloszenie: params.id_ogloszenie
        })).then(result => JavascriptifySoap.parse(result));
    }

    aktualizuj_kontakt(params: aktualizuj_kontakt_params): Promise<any> {
        return this.connection.then(client => client.aktualizuj_kontakt({
            sesja: this.session,
            dane_kontaktu: params.dane_kontaktu,
        })).then(result => JavascriptifySoap.parse(result));
    }

    aktualizuj_ogloszenie(params: aktualizuj_ogloszenie_params): Promise<any> {
        return this.connection.then(client => client.aktualizuj_ogloszenie({
            sesja: this.session,
            id_kategoria: params.id_kategoria || this.categoryId,
            ogloszenie: params.ogloszenie
        })).then(result => JavascriptifySoap.parse(result));
    }

    dodaj_inwestycje(params: dodaj_inwestycje_params): Promise<any> {
        return this.connection.then(client => client.dodaj_inwestycje({
            sesja: this.session,
            inwestycja: params.inwestycja
        })).then(result => JavascriptifySoap.parse(result));
    }

    dodaj_kontakt(params: dodaj_kontakt_params): Promise<any> {
        return this.connection.then(client => client.dodaj_kontakt({
            sesja: this.session,
            dane_kontaktu: params.dane_kontaktu
        })).then(result => JavascriptifySoap.parse(result));
    }

    dodaj_ogloszenie(ogloszenie: any, id_kategoria: Number): Promise<any> {
        return this.connection.then(client => client.dodaj_ogloszenie({
            sesja: this.session,
            id_kategoria: id_kategoria || this.categoryId,
            ogloszenie: ogloszenie
        })).then(result => JavascriptifySoap.parse(result));
    }

    dodaj_rzut_base64(params: dodaj_rzut_base64_params): Promise<any> {
        return this.connection.then(client => client.dodaj_rzut_base64({
            sesja: this.session,
            id_kategoria: params.id_kategoria || this.categoryId,
            id_ogloszenie: params.id_ogloszenie,
            rzut_base64: params.rzut_base64
        })).then(result => JavascriptifySoap.parse(result));
    }

    dodaj_wideo(params: dodaj_wideo_params): Promise<any> {
        return this.connection.then(client => client.dodaj_wideo({
            sesja: this.session,
            id_kategoria: params.id_kategoria || this.categoryId,
            id_ogloszenie: params.id_ogloszenie,
            url_wideo: params.url_wideo
        })).then(result => JavascriptifySoap.parse(result));
    }

    dodaj_zdjecie(params: dodaj_zdjecie_params): Promise<any> {
        return this.connection.then(client => client.dodaj_zdjecie({
            sesja: this.session,
            id_kategoria: params.id_kategoria || this.categoryId,
            id_ogloszenie: params.id_ogloszenie,
            url_zdjecia: params.url_zdjecia
        })).then(result => JavascriptifySoap.parse(result));
    }

    dodaj_zdjecie_base64(params: dodaj_zdjecie_base64_params): Promise<any> {
        return this.connection.then(client => client.dodaj_zdjecie_base64({
            sesja: this.session,
            id_kategoria: params.id_kategoria || this.categoryId,
            id_ogloszenie: params.id_ogloszenie,
            zdjecie_base64: params.zdjecie_base64
        })).then(result => JavascriptifySoap.parse(result));
    }

    pobierz_kategorie(params?: pobierz_kategorie_params): Promise<any> {
        return this.connection.then(client => client.pobierz_kategorie({
            sesja: this.session,
            id_kategoria: params ? params.id_kategoria || this.categoryId : this.categoryId 
        })).then(result => {
            let parsed = JavascriptifySoap.parse(result);
            return params && params.js_tree ? JavascriptifySoap.parseTree(parsed) : parsed;
        });
    }

    pobierz_kontakt(params: pobierz_kontakt_params): Promise<any> {
        return this.connection.then(client => client.pobierz_kontakt({
            sesja: this.session,
            id: params.id
        })).then(result => JavascriptifySoap.parse(result));
    }

    pobierz_liste_id_kontaktow(): Promise<any> {
        return this.connection.then(client => client.pobierz_liste_id_kontaktow({
            sesja: this.session
        })).then(result => JavascriptifySoap.parse(result));
    }

    pobierz_pola(params: pobierz_pola_params): Promise<any> {
        return this.connection.then(client => client.pobierz_pola({
            sesja: this.session,
            id_kategoria: params ? params.id_kategoria || this.categoryId : this.categoryId 
        })).then(result => JavascriptifySoap.parse(result));
    }

    importuj_ogloszenia(params: importuj_ogloszenia_params): Promise<any> {
        return this.connection.then(client => client.importuj_ogloszenia({
            sesja: this.session,
            id_kategoria: params.id_kategoria || this.categoryId,
            opcje: params.options
        })).then(result => JavascriptifySoap.parse(result));
    }

    pobierz_ilosc_dostepnych_punktow(): Promise<any> {
        return this.connection.then(client => client.pobierz_ilosc_dostepnych_punktow({
            sesja: this.session
        })).then(result => JavascriptifySoap.parse(result));
    }

    pobierz_inwestycje(params: pobierz_inwestycje_params): Promise<any> {
        return this.connection.then(client => client.pobierz_inwestycje({
            sesja: this.session,
            id: params.id
        })).then(result => JavascriptifySoap.parse(result));
    }

    pobierz_liste_id_ogloszen(params: pobierz_liste_id_ogloszen_params): Promise<any> {
        return this.connection.then(client => client.pobierz_liste_id_ogloszen({
            sesja: this.session,
            id_kategoria: params ? params.id_kategoria || this.categoryId : this.categoryId
        })).then(result => JavascriptifySoap.parse(result));
    }

    pobierz_liste_id_ogloszen_kontaktu(params: pobierz_liste_id_ogloszen_kontaktu_params): Promise<any> {
        return this.connection.then(client => client.pobierz_liste_id_ogloszen_kontaktu({
            sesja: this.session,
            id_kategoria: params.id_kategoria || this.categoryId,
            id_kontakt: params.id_kontakt
        })).then(result => JavascriptifySoap.parse(result));
    }

    pobierz_liste_id_ogloszen_usunietych(params: pobierz_liste_id_ogloszen_usunietych_params): Promise<any> {
        return this.connection.then(client => client.pobierz_liste_id_ogloszen_usunietych({
            sesja: this.session,
            id_kategoria: params.id_kategoria || this.categoryId,
            opcje: params.options
        })).then(result => JavascriptifySoap.parse(result));
    }

    pobierz_liste_id_ogloszen_z_inwestycji(params: pobierz_liste_id_ogloszen_z_inwestycji_params): Promise<any> {
        return this.connection.then(client => client.pobierz_liste_id_ogloszen_z_inwestycji({
            sesja: this.session,
            id_inwestycja: params.id_inwestycja
        })).then(result => JavascriptifySoap.parse(result));
    }

    pobierz_liste_slownikow(params?: pobierz_liste_slownikow_params): Promise<any> {
        return this.connection.then(client => client.pobierz_liste_slownikow({
            sesja: this.session,
            id_kategoria: params ? params.id_kategoria || this.categoryId : this.categoryId 
        })).then(result => JavascriptifySoap.parse(result));
    }

    pobierz_liste_wideo(params: pobierz_liste_wideo_params): Promise<any> {
        return this.connection.then(client => client.pobierz_liste_wideo({
            sesja: this.session,
            id_kategoria: params.id_kategoria || this.categoryId,
            id_ogloszenie: params.id_ogloszenie
        })).then(result => JavascriptifySoap.parse(result));
    }

    pobierz_ogloszenie(params: pobierz_ogloszenie_params): Promise<any> {
        return this.connection.then(client => client.pobierz_ogloszenie({
            sesja: this.session,
            id_kategoria: params.id_kategoria || this.categoryId,
            id_ogloszenie: params.id_ogloszenie
        })).then(result => JavascriptifySoap.parse(result));
    }

    pobierz_slownik(params: pobierz_slownik_params): Promise<any> {
        return this.connection.then(client => client.pobierz_slownik({
            sesja: this.session,
            id_kategoria: params.id_kategoria || this.categoryId,
            nazwa: params.nazwa,
            dane: params.dane
        })).then(result => JavascriptifySoap.parse(result));
    }

    usun_inwestycje(params: usun_inwestycje_params): Promise<any> {
        return this.connection.then(client => client.usun_inwestycje({
            sesja: this.session,
            id: params.id
        })).then(result => JavascriptifySoap.parse(result));
    }

    usun_kontakt(params: usun_kontakt_params): Promise<any> {
        return this.connection.then(client => client.usun_kontakt({
            sesja: this.session,
            id: params.id
        })).then(result => JavascriptifySoap.parse(result));
    }

    usun_ogloszenie(params: usun_ogloszenie_params): Promise<any> {
        return this.connection.then(client => client.usun_ogloszenie({
            sesja: this.session,
            id_kategoria: params.id_kategoria || this.categoryId,
            id_ogloszenie: params.id_ogloszenie
        })).then(result => JavascriptifySoap.parse(result));
    }

    usun_rzut(params: usun_rzut_params): Promise<any> {
        return this.connection.then(client => client.usun_rzut({
            sesja: this.session,
            id_kategoria: params.id_kategoria || this.categoryId,
            id_ogloszenie: params.id_ogloszenie
        })).then(result => JavascriptifySoap.parse(result));
    }

    usun_wideo(params: usun_wideo_params): Promise<any> {
        return this.connection.then(client => client.usun_wideo({
            sesja: this.session,
            id_kategoria: params.id_kategoria || this.categoryId,
            id_ogloszenie: params.id_ogloszenie,
            id: params.id
        })).then(result => JavascriptifySoap.parse(result));
    }

    usun_zdjecie(params: usun_zdjecie_params): Promise<any> {
        return this.connection.then(client => client.usun_zdjecie({
            sesja: this.session,
            id_kategoria: params.id_kategoria || this.categoryId,
            id_ogloszenie: params.id_ogloszenie,
            nr_zdjecia: params.nr_zdjecia
        })).then(result => JavascriptifySoap.parse(result));
    }

    usun_zdjecie_id(params: usun_zdjecie_id_params): Promise<any> {
        return this.connection.then(client => client.usun_zdjecie_id({
            sesja: this.session,
            id_kategoria: params.id_kategoria || this.categoryId,
            id_ogloszenie: params.id_ogloszenie,
            id: params.id
        })).then(result => JavascriptifySoap.parse(result));
    }

    wyroznij_ogloszenie(params: wyroznij_ogloszenie_params): Promise<any> {
        return this.connection.then(client => client.wyroznij_ogloszenie({
            sesja: this.session,
            id_kategoria: params.id_kategoria || this.categoryId,
            id_ogloszenie: params.id_ogloszenie,
            "liczba-punktow": params.liczbaPunktow
        })).then(result => JavascriptifySoap.parse(result));
    }
}

export interface import_ogloszen_opcje {
    numer_paczki: Number,
    data_od?: Date,
    data_do?: Date,
    godzina_od?: Date,
    godzina_do?: Date,
    region: Number
}