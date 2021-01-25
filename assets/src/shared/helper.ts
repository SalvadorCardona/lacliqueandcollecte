import camelCase from 'lodash.camelcase';
import isObject from 'lodash.isobject';

export const keysToCamel = (o: {[name: string]: any}|Array<any>): {[name: string]: any}|Array<any> => {
    if (isObject(o)) {
        let n;

        if (o['0']) {
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
    }

    if (Array.isArray(o)) {
        const array = o as Array<any>
        return array.map((i) => {
            return keysToCamel(i);
        });
    }

    return o;
};

export const filterPrice = (price: number): string =>  price + ' €';
export const filterTax = (price: number): string =>  filterPrice(price) + ' TTC';
