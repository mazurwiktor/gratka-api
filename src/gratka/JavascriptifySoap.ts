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
                result[key] = _.map(value["item"], (value: any, key: any) => this.parse(value)) ;
            } else {
                result[key] = this.parse(value);
            }
            return result;
        }, {});
    }
}