export enum events  {
    SERVICE_READY = 'service_ready',
    APP_LOADED = 'app_loaded',
    CART_HAS_CHANGED = 'cart_has_changed'
}

export class EventService {

    private subscriber: Array<{event: events, callback: Function}> = [];

    public dispatch(event: events) {
        this.subscriber
            .filter(subscriber => subscriber.event === event)
            .forEach(({callback}) => callback());
    }

    public addSubscriber(event: events, callback: Function): void {
        this.subscriber.push({event, callback})
    }
}