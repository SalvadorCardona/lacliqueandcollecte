import camelCase from 'lodash.camelcase';
import isObject from 'lodash.isobject';
import {environment} from "App/environement/environement";

export const keysToCamel = (data: {[name: string]: any}|Array<any>): {[name: string]: any}|Array<any> => {
    if (Array.isArray(data)) {
        const array = data as Array<any>
        return array.map((i) => {
            return keysToCamel(i);
        });
    }

    if (isObject(data)) {
        let dataConverted;

        if (data['0']) {
            dataConverted = [];
            Object.keys(data)
                .forEach((key) => {
                    dataConverted.push(keysToCamel(data[key]));
                });
        } else {
            dataConverted = {};
            Object.keys(data)
                .forEach((key) => {
                    dataConverted[camelCase(key)] = keysToCamel(data[key]);
                });
        }

        return dataConverted;
    }

    return data;
};

export const filterPrice = (price: number): string =>  price + ' €';
export const filterTax = (price: number): string =>  filterPrice(price) + ' TTC';

// TODO: Remove this
export const getBaseSiteUrl = (): string => environment.baseSiteUrl || window.location.origin;
export const getApiEndpoint = (): string => getBaseSiteUrl() + '/' + environment.apiEndpoint;