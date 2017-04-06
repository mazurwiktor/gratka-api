import { Gratka, } from "../src/index";
import * as Chai from "chai";

const expect = Chai.expect;

const connectionParams = {
    login: process.env["GRAKTA_LOGIN"],
    password: process.env["GRAKTA_PASSWORD"],
    webapiKey: process.env["GRAKTA_KEY"]
}

describe("Gratka", () => {

    function envIsSet() {
        return connectionParams.login && connectionParams.password && connectionParams.webapiKey;
    }

    function ifEnvIsSetIt(name, callback) {
        var fn = envIsSet() ? it : it.skip;
        fn(name, callback);
    };

    function ifEnvIsSetBefore(callback) {
        if (envIsSet()) {
            before(callback);
        }
    }

    describe("Methods", () => {
        ifEnvIsSetIt("Should implement all dom api methods", () => {
            const api = new Gratka.Api.Dom.Nieruchomosci(connectionParams);
            expect(api.aktualizuj_inwestycje).to.be.not.undefined;
            expect(api.aktualizuj_kontakt).to.be.not.undefined;
            expect(api.aktualizuj_ogloszenie).to.be.not.undefined;
            expect(api.dodaj_inwestycje).to.be.not.undefined;
            expect(api.dodaj_kontakt).to.be.not.undefined;
            expect(api.dodaj_ogloszenie).to.be.not.undefined;
            expect(api.dodaj_rzut_base64).to.be.not.undefined;
            expect(api.dodaj_wideo).to.be.not.undefined;
            expect(api.dodaj_zdjecie).to.be.not.undefined;
            expect(api.dodaj_zdjecie_base64).to.be.not.undefined;
            expect(api.importuj_ogloszenia).to.be.not.undefined;
            expect(api.pobierz_ilosc_dostepnych_punktow).to.be.not.undefined;
            expect(api.pobierz_inwestycje).to.be.not.undefined;
            expect(api.pobierz_kategorie).to.be.not.undefined;
            expect(api.pobierz_kontakt).to.be.not.undefined;
            expect(api.pobierz_liste_id_kontaktow).to.be.not.undefined;
            expect(api.pobierz_liste_id_ogloszen).to.be.not.undefined;
            expect(api.pobierz_liste_id_ogloszen_kontaktu).to.be.not.undefined;
            expect(api.pobierz_liste_id_ogloszen_usunietych).to.be.not.undefined;
            expect(api.pobierz_liste_id_ogloszen_z_inwestycji).to.be.not.undefined;
            expect(api.pobierz_liste_slownikow).to.be.not.undefined;
            expect(api.pobierz_liste_wideo).to.be.not.undefined;
            expect(api.pobierz_liste_wideo).to.be.not.undefined;
            expect(api.pobierz_ogloszenie).to.be.not.undefined;
            expect(api.pobierz_pola).to.be.not.undefined;
            expect(api.pobierz_slownik).to.be.not.undefined;
            expect(api.usun_inwestycje).to.be.not.undefined;
            expect(api.usun_kontakt).to.be.not.undefined;
            expect(api.usun_ogloszenie).to.be.not.undefined;
            expect(api.usun_rzut).to.be.not.undefined;
            expect(api.usun_wideo).to.be.not.undefined;
            expect(api.usun_zdjecie).to.be.not.undefined;
            expect(api.usun_zdjecie_id).to.be.not.undefined;
            expect(api.wyroznij_ogloszenie).to.be.not.undefined;
        });
    });

    ifEnvIsSetIt("Should construct api", () => {
        const api = new Gratka.Api.Dom.Nieruchomosci(connectionParams);

        expect(api).to.be.not.undefined;
    });

    ifEnvIsSetIt("Should get session id", () => {
        const api = new Gratka.Api.Dom.Nieruchomosci(connectionParams);

        return api.connect().then(() => {
            expect(api.session).to.be.not.undefined;
        });
    });

    describe("Methods tests", () => {
        var api;
        ifEnvIsSetBefore(() => {
            api = new Gratka.Api.Dom.Nieruchomosci(connectionParams);
            return api.connect();
        });

        ifEnvIsSetIt("Should return list of categories", () => {
            return api.pobierz_kategorie().then(res => {
                expect(res).to.be.not.undefined;
            });
        });

        ifEnvIsSetIt("Should return list of categories in javascipt tree way", () => {
            return api.pobierz_kategorie({js_tree: true}).then(res => {
                expect(res.Dom).to.be.not.undefined;
            });
        });

        ifEnvIsSetIt("Should return list of fields", () => {
            return api.pobierz_pola().then(res => {
                expect(res).to.be.not.undefined;
            });
        });

        ifEnvIsSetIt("Should return list of dostepnych_punktow", () => {
            return api.pobierz_ilosc_dostepnych_punktow().then(res => {
                expect(res).to.be.not.undefined;
            });
        });

        ifEnvIsSetIt("Should return list of pobierz_liste_id_ogloszen", () => {
            // id ogloszenia 71822574
            return api.pobierz_liste_id_ogloszen().then(res => {
                expect(res).to.be.not.undefined;
            });
        });

        ifEnvIsSetIt("Should return pobierz_ogloszenie", () => {
            const addId = 71822574;
            const categoryId = 397;
            return api.pobierz_ogloszenie({
                id_ogloszenie: addId,
                id_kategoria: categoryId
            }).then(res => {
                expect(res).to.be.not.undefined;
            });
        });


    })
});
