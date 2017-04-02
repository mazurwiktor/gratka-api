import * as soap from 'soap-as-promised';

import { JavascriptifySoap } from './JavascriptifySoap';

export interface ConnectionParams {
    login: String,
    password: String,
    webapiKey: String
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

    aktualizuj_inwestycje(id_ogloszenie: Number, id_kategoria?: Number): Promise<any> {
        return this.connection.then(client => client.aktualizuj_inwestycje({
            sesja: this.session,
            id_kategoria: id_kategoria || this.categoryId,
            id_ogloszenie: id_ogloszenie
        })).then(result => JavascriptifySoap.parse(result));
    }

    aktualizuj_kontakt(dane_kontaktu: any): Promise<any> {
        return this.connection.then(client => client.aktualizuj_kontakt({
            sesja: this.session,
            dane_kontaktu: dane_kontaktu,
        })).then(result => JavascriptifySoap.parse(result));
    }

    aktualizuj_ogloszenie(ogloszenie: any, id_kategoria?: Number): Promise<any> {
        return this.connection.then(client => client.aktualizuj_ogloszenie({
            sesja: this.session,
            id_kategoria: id_kategoria || this.categoryId,
            ogloszenie: ogloszenie
        })).then(result => JavascriptifySoap.parse(result));
    }

    dodaj_inwestycje(inwestycja: any): Promise<any> {
        return this.connection.then(client => client.dodaj_inwestycje({
            sesja: this.session,
            inwestycja: inwestycja
        })).then(result => JavascriptifySoap.parse(result));
    }

    dodaj_kontakt(dane_kontaktu: any): Promise<any> {
        return this.connection.then(client => client.dodaj_kontakt({
            sesja: this.session,
            dane_kontaktu: dane_kontaktu
        })).then(result => JavascriptifySoap.parse(result));
    }

    dodaj_ogloszenie(ogloszenie: any, id_kategoria: Number): Promise<any> {
        return this.connection.then(client => client.dodaj_ogloszenie({
            sesja: this.session,
            id_kategoria: id_kategoria || this.categoryId,
            ogloszenie: ogloszenie
        })).then(result => JavascriptifySoap.parse(result));
    }

    dodaj_rzut_base64(rzut_base64: String, id_ogloszenie: Number, id_kategoria?: Number): Promise<any> {
        return this.connection.then(client => client.dodaj_rzut_base64({
            sesja: this.session,
            id_kategoria: id_kategoria || this.categoryId,
            id_ogloszenie: id_ogloszenie,
            rzut_base64: rzut_base64
        })).then(result => JavascriptifySoap.parse(result));
    }

    dodaj_wideo(url_wideo: String, id_ogloszenie: Number, id_kategoria?: Number): Promise<any> {
        return this.connection.then(client => client.dodaj_wideo({
            sesja: this.session,
            id_kategoria: id_kategoria || this.categoryId,
            id_ogloszenie: id_ogloszenie,
            url_wideo: url_wideo
        })).then(result => JavascriptifySoap.parse(result));
    }

    dodaj_zdjecie(url_zdjecia: String, id_ogloszenie: Number, id_kategoria?: Number): Promise<any> {
        return this.connection.then(client => client.dodaj_zdjecie({
            sesja: this.session,
            id_kategoria: id_kategoria || this.categoryId,
            id_ogloszenie: id_ogloszenie,
            url_zdjecia: url_zdjecia
        })).then(result => JavascriptifySoap.parse(result));
    }

    dodaj_zdjecie_base64(zdjecie_base64: String, id_ogloszenie: Number, id_kategoria?: Number): Promise<any> {
        return this.connection.then(client => client.dodaj_zdjecie_base64({
            sesja: this.session,
            id_kategoria: id_kategoria || this.categoryId,
            id_ogloszenie: id_ogloszenie,
            zdjecie_base64: zdjecie_base64
        })).then(result => JavascriptifySoap.parse(result));
    }

    pobierz_kategorie(id_kategoria?: Number): Promise<any> {
        return this.connection.then(client => client.pobierz_kategorie({
            sesja: this.session,
            id_kategoria: id_kategoria || this.categoryId
        })).then(result => JavascriptifySoap.parse(result));
    }

    pobierz_kontakt(id: Number): Promise<any> {
        return this.connection.then(client => client.pobierz_kontakt({
            sesja: this.session,
            id: id
        })).then(result => JavascriptifySoap.parse(result));
    }

    pobierz_liste_id_kontaktow(): Promise<any> {
        return this.connection.then(client => client.pobierz_liste_id_kontaktow({
            sesja: this.session
        })).then(result => JavascriptifySoap.parse(result));
    }

    pobierz_pola(id_kategoria?: Number): Promise<any> {
        return this.connection.then(client => client.pobierz_pola({
            sesja: this.session,
            id_kategoria: id_kategoria || this.categoryId
        })).then(result => JavascriptifySoap.parse(result));
    }

    importuj_ogloszenia(options: import_ogloszen_opcje, id_kategoria?: Number): Promise<any> {
        return this.connection.then(client => client.importuj_ogloszenia({
            sesja: this.session,
            id_kategoria: id_kategoria || this.categoryId,
            opcje: options
        })).then(result => JavascriptifySoap.parse(result));
    }

    pobierz_ilosc_dostepnych_punktow(): Promise<any> {
        return this.connection.then(client => client.pobierz_ilosc_dostepnych_punktow({
            sesja: this.session
        })).then(result => JavascriptifySoap.parse(result));
    }

    pobierz_inwestycje(id: Number): Promise<any> {
        return this.connection.then(client => client.pobierz_inwestycje({
            sesja: this.session,
            id: id
        })).then(result => JavascriptifySoap.parse(result));
    }

    pobierz_liste_id_ogloszen(id_kategoria?: Number): Promise<any> {
        return this.connection.then(client => client.pobierz_liste_id_ogloszen({
            sesja: this.session,
            id_kategoria: id_kategoria || this.categoryId
        })).then(result => JavascriptifySoap.parse(result));
    }

    pobierz_liste_id_ogloszen_kontaktu(id_kontakt: Number, id_kategoria?: Number): Promise<any> {
        return this.connection.then(client => client.pobierz_liste_id_ogloszen_kontaktu({
            sesja: this.session,
            id_kategoria: id_kategoria || this.categoryId,
            id_kontakt: id_kontakt
        })).then(result => JavascriptifySoap.parse(result));
    }

    pobierz_liste_id_ogloszen_usunietych(options: any, id_kategoria?: Number): Promise<any> {
        return this.connection.then(client => client.pobierz_liste_id_ogloszen_usunietych({
            sesja: this.session,
            id_kategoria: id_kategoria || this.categoryId,
            opcje: options
        })).then(result => JavascriptifySoap.parse(result));
    }

    pobierz_liste_id_ogloszen_z_inwestycji(id_inwestycja: Number, id_kategoria?: Number): Promise<any> {
        return this.connection.then(client => client.pobierz_liste_id_ogloszen_z_inwestycji({
            sesja: this.session,
            id_inwestycja: id_inwestycja
        })).then(result => JavascriptifySoap.parse(result));
    }

    pobierz_liste_slownikow(id_kategoria?: Number): Promise<any> {
        return this.connection.then(client => client.pobierz_liste_slownikow({
            sesja: this.session,
            id_kategoria: id_kategoria || this.categoryId
        })).then(result => JavascriptifySoap.parse(result));
    }

    pobierz_liste_wideo(id_ogloszenie: Number, id_kategoria?: Number): Promise<any> {
        return this.connection.then(client => client.pobierz_liste_wideo({
            sesja: this.session,
            id_kategoria: id_kategoria || this.categoryId,
            id_ogloszenie: id_ogloszenie
        })).then(result => JavascriptifySoap.parse(result));
    }

    pobierz_ogloszenie(id_ogloszenie: Number, id_kategoria?: Number): Promise<any> {
        return this.connection.then(client => client.pobierz_ogloszenie({
            sesja: this.session,
            id_kategoria: id_kategoria || this.categoryId,
            id_ogloszenie: id_ogloszenie
        })).then(result => JavascriptifySoap.parse(result));
    }

    pobierz_slownik(nazwa: String, dane: any, id_kategoria?: Number): Promise<any> {
        return this.connection.then(client => client.pobierz_slownik({
            sesja: this.session,
            id_kategoria: id_kategoria || this.categoryId,
            nazwa: nazwa,
            dane: dane
        })).then(result => JavascriptifySoap.parse(result));
    }

    usun_inwestycje(id: Number): Promise<any> {
        return this.connection.then(client => client.usun_inwestycje({
            sesja: this.session,
            id: id
        })).then(result => JavascriptifySoap.parse(result));
    }

    usun_kontakt(id: Number): Promise<any> {
        return this.connection.then(client => client.usun_kontakt({
            sesja: this.session,
            id: id
        })).then(result => JavascriptifySoap.parse(result));
    }

    usun_ogloszenie(id_ogloszenie: Number, id_kategoria?: Number): Promise<any> {
        return this.connection.then(client => client.usun_ogloszenie({
            sesja: this.session,
            id_kategoria: id_kategoria || this.categoryId,
            id_ogloszenie: id_ogloszenie
        })).then(result => JavascriptifySoap.parse(result));
    }

    usun_rzut(id_ogloszenie: Number, id_kategoria?: Number): Promise<any> {
        return this.connection.then(client => client.usun_rzut({
            sesja: this.session,
            id_kategoria: id_kategoria || this.categoryId,
            id_ogloszenie: id_ogloszenie
        })).then(result => JavascriptifySoap.parse(result));
    }

    usun_wideo(id: Number, id_ogloszenie: Number, id_kategoria?: Number): Promise<any> {
        return this.connection.then(client => client.usun_wideo({
            sesja: this.session,
            id_kategoria: id_kategoria || this.categoryId,
            id_ogloszenie: id_ogloszenie,
            id: id
        })).then(result => JavascriptifySoap.parse(result));
    }

    usun_zdjecie(nr_zdjecia: Number, id_ogloszenie: Number, id_kategoria?: Number): Promise<any> {
        return this.connection.then(client => client.usun_zdjecie({
            sesja: this.session,
            id_kategoria: id_kategoria || this.categoryId,
            id_ogloszenie: id_ogloszenie,
            nr_zdjecia: nr_zdjecia
        })).then(result => JavascriptifySoap.parse(result));
    }

    usun_zdjecie_id(id: Number, id_ogloszenie: Number, id_kategoria?: Number): Promise<any> {
        return this.connection.then(client => client.usun_zdjecie_id({
            sesja: this.session,
            id_kategoria: id_kategoria || this.categoryId,
            id_ogloszenie: id_ogloszenie,
            id: id
        })).then(result => JavascriptifySoap.parse(result));
    }

    wyroznij_ogloszenie(liczbaPunktow: Number, id_ogloszenie: Number, id_kategoria?: Number): Promise<any> {
        return this.connection.then(client => client.wyroznij_ogloszenie({
            sesja: this.session,
            id_kategoria: id_kategoria || this.categoryId,
            id_ogloszenie: id_ogloszenie,
            "liczba-punktow": liczbaPunktow
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