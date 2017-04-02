import { JavascriptifySoap } from "../src/gratka/JavascriptifySoap";
import * as Chai from "chai";

var expect = Chai.expect;


const flatExample = {
    attributes: { 'xsi:type': 'ns1:kategoria_drzewo' },
    id: { attributes: { 'xsi:type': 'xsd:int' }, '$value': 382 },
    nazwa: { attributes: { 'xsi:type': 'xsd:string' }, '$value': 'Dom' },
    dane: { attributes: { 'xsi:type': 'xsd:string' }, '$value': '0' },
    id_rodzic: { attributes: { 'xsi:type': 'xsd:int' }, '$value': 1 },
    poziom: { attributes: { 'xsi:type': 'xsd:int' }, '$value': 0 },
    id_prasa: { attributes: { 'xsi:type': 'xsd:int' }, '$value': 2 }
};

const listExample = {
    drzewo_kategorii:
    {
        attributes:
        {
            'SOAP-ENC:arrayType': 'ns1:kategoria_drzewo[48]',
            'xsi:type': 'ns1:drzewo_kategorii'
        },
        item:
        [flatExample]
    }
}

const rawValueListExample = {
    lista_int:
    {
        attributes:
        {
            'SOAP-ENC:arrayType': 'ns1:kategoria_drzewo[48]',
            'xsi:type': 'ns1:drzewo_kategorii'
        },
        item:
        [{ attributes: { 'xsi:type': 'xsd:int' }, '$value': '58141419' }]
    }
}

const rawObject = {
    ogloszenie:
    {
        attributes: { 'xsi:type': 'ns1:ogloszenie' },
        cena: { attributes: {}, '$value': '255000' },
        liczba_punktow_wyroznienia: { attributes: {}, '$value': 0 },
        powierzchnia_dodatkowa_bit: {
            attributes: {
                "SOAP-ENC:arrayType": "xsd:int[1]",
                "xsi:type": "ns1:lista_int"
            },
            item: {
                attributes: {
                    "xsi:type": "xsd:int"
                },
                $value: "2"
            }
        }
    },
    "_rawResponse": [1, 2, 3,  {"a": ["b", "c"]}]
}

describe("JavascriptifySoap", () => {
    it("Should remove attributes field", () => {
        expect(JavascriptifySoap.parse(flatExample).attributes).to.be.undefined;
    });
    it("Should set fields to value if any", () => {
        expect(JavascriptifySoap.parse(flatExample).id).to.be.equal(flatExample.id.$value);
        expect(JavascriptifySoap.parse(flatExample).nazwa).to.be.equal(flatExample.nazwa.$value);
        expect(JavascriptifySoap.parse(flatExample).dane).to.be.equal(flatExample.dane.$value);
        expect(JavascriptifySoap.parse(flatExample).id_rodzic).to.be.equal(flatExample.id_rodzic.$value);
        expect(JavascriptifySoap.parse(flatExample).poziom).to.be.equal(flatExample.poziom.$value);
        expect(JavascriptifySoap.parse(flatExample).id_prasa).to.be.equal(flatExample.id_prasa.$value);
    });
    it("Should parse list arguments aswell", () => {
        expect(JavascriptifySoap.parse(listExample).drzewo_kategorii).to.be.an.instanceof(Array);
    });
    it("Should parse list arguments", () => {
        expect(JavascriptifySoap.parse(listExample).drzewo_kategorii[0].id).to.be.equal(flatExample.id.$value);
    });
    it("Should parse values without key", () => {
        expect(JavascriptifySoap.parse(rawValueListExample).lista_int[0]).to.be.equal(rawValueListExample.lista_int.item[0].$value);
    });
    it("Should parse raw nested objects", () => {
        expect(JavascriptifySoap.parse(rawObject).ogloszenie.cena).to.be.equal(rawObject.ogloszenie.cena.$value);
    });

});