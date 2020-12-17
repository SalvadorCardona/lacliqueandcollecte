import { isObject, isArray, camelCase } from "lodash";

export const keysToCamel = (o: any) => {
    if (isObject(o)) {
        let n;

        if (o.hasOwnProperty('0')) {
            n = [];
            Object.keys(o)
                .forEach((k) => {
                    n.push(keysToCamel(o[k]));
                });
        } else {
            n = {};
            Object.keys(o)
                .forEach((k) => {
                    n[camelCase(k)] = keysToCamel(o[k]);
                });
        }

        return n;
    } else if (isArray(o)) {
        return o.map((i) => {
            return keysToCamel(i);
        });
    }

    return o;
};