import * as _ from 'lodash';

export class JavascriptifySoap {
    static parse(input): any {
        if (!_.isUndefined(input["$value"])) {
            return input["$value"];
        }
        return _.reduce(_.omit(input, ["_rawResponse", "attributes"]), (result: any, value: any, key: any) => {
            if (!_.isUndefined(value["$value"])) {
                result[key] = value["$value"];
            } else if (_.isArray(value["item"])) {
                result[key] = _.map(value["item"], (value: any, key: any) => this.parse(value));
            } else {
                result[key] = this.parse(value);
            }
            return result;
        }, {});
    }
    static parseTree(input): any {
        const treeKey = _.first(_.keys(input));
        const arrayLikeTree: Array<any> = input[treeKey];
        var tree = {};

        const items = _.map(arrayLikeTree, (item) => {
            item.path = "/" + buildPath(arrayLikeTree, item);
            return item;
        });

        _.each(items, item => updateTree(tree, item));

        return tree;   
    }
}

function buildPath(arrayLikeTree: Array<any>, item, result = item.nazwa): String {
    const parent = _.find(arrayLikeTree, (i) => {
        return item.id_rodzic === i.id;
    });

    if (parent) {
        result = parent.nazwa + "/" + result;
        return buildPath(arrayLikeTree, parent, result);
    } else {
        return result
    }
}

function updateTree(tree, item): any {
    const path: String = item.path;
    const ids = _.without(path.split('/'), '');

    let currentNode = tree;
    _.reduce(ids, (result, prop) => {
        let currentUri = result + "/" + prop;
        if (_.isUndefined(currentNode[prop])) {
            currentNode[prop] = {};
        }
        if (currentUri === path) {
            _.each(item, (value, key) => {
                currentNode[prop][key] = value;
            });
        }

        currentNode = currentNode[prop];
        return currentUri;
    }, "");
    return tree;
}