import camelCase from 'lodash.camelcase';
import isObject from 'lodash.isobject';
import {environment} from "App/environement/environement";

export const keysToCamel = (o: {[name: string]: any}|Array<any>): {[name: string]: any}|Array<any> => {
    if (Array.isArray(o)) {
        const array = o as Array<any>
        return array.map((i) => {
            return keysToCamel(i);
        });
    }

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

    return o;
};

export const filterPrice = (price: number): string =>  price + ' €';
export const filterTax = (price: number): string =>  filterPrice(price) + ' TTC';

// TODO: Remove this
export const getBaseSiteUrl = (): string => environment.baseSiteUrl || window.location.origin;
export const getApiEndpoint = (): string => getBaseSiteUrl() + '/' + environment.apiEndpoint;