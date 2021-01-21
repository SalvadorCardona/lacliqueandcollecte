import {ContainerService} from "App/core/container.service";
import "reflect-metadata";

declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;

const injectorMetadataKey = Symbol("injector");

export function injector(target: any, propertyKey : string, index : number) {
    debugger
    let existingRequiredParameters: number[] =
        Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(index);
    Reflect.defineMetadata(
        requiredMetadataKey,
        existingRequiredParameters,
        target,
        propertyKey
    );
}

export function injectable(
    target: any,
    propertyName: string,
    descriptor: TypedPropertyDescriptor<Function>
) {
    debugger
    let method = descriptor.value;
    descriptor.value = function () {
        let requiredParameters: number[] = Reflect.getOwnMetadata(
            injectorMetadataKey,
            target,
            propertyName
        );
        if (requiredParameters) {
            for (let parameterIndex of requiredParameters) {
                if (
                    parameterIndex >= arguments.length ||
                    arguments[parameterIndex] === undefined
                ) {
                    throw new Error("Missing required argument.");
                }
            }
        }

        return method.apply(this, arguments);
    };
}


const requiredMetadataKey = Symbol("required");

function required(
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
) {
    let existingRequiredParameters: number[] =
        Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(
        requiredMetadataKey,
        existingRequiredParameters,
        target,
        propertyKey
    );
}

function validate(
    target: any,
    propertyName: string,
    descriptor: TypedPropertyDescriptor<Function>
) {
    let method = descriptor.value;
    descriptor.value = function () {
        let requiredParameters: number[] = Reflect.getOwnMetadata(
            requiredMetadataKey,
            target,
            propertyName
        );
        if (requiredParameters) {
            for (let parameterIndex of requiredParameters) {
                if (
                    parameterIndex >= arguments.length ||
                    arguments[parameterIndex] === undefined
                ) {
                    throw new Error("Missing required argument.");
                }
            }
        }

        return method.apply(this, arguments);
    };
}



const LOGGED_PARAM_KEY = "logged_param";

//Parameter decorator
export const  loggedParam = (target: Object, key: string | symbol, index: number) => {

    const loggedParams: number[] = Reflect.getOwnMetadata(LOGGED_PARAM_KEY, target, key) || [];
    loggedParams.push(index);
    Reflect.defineMetadata(LOGGED_PARAM_KEY, loggedParams, target, key);
    debugger
}

//Method decorator
export const logMethodParams = (target: Object, key: string, descriptor: TypedPropertyDescriptor<Function>) => {
    debugger
    const loggedParams: number[] = Reflect.getOwnMetadata(LOGGED_PARAM_KEY, target, key) || [];
    return {
        value: function( ... args: any[]) {
            console.log("Logged params: ", loggedParams.map(index => args[index]).join(", "));
            return descriptor.value.apply(target, args);
        }
    }
}


//Class decorator
export const logConstructorParams: ClassDecorator = <T>(target: new(...args: any[]) => T) => {
    debugger
    const loggedParams: number[] = Reflect.getOwnMetadata(LOGGED_PARAM_KEY, target) || [];
    function newConstructor(... args) {
        console.log("Logged params: ", loggedParams.map(index => args[index]).join(", "));
        new target(args);
    }
    newConstructor.prototype = target.prototype;
    return newConstructor;
}

