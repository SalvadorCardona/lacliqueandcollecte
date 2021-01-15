export enum events  {
    SERVICE_MOUNTED = 'SERVICE_MOUNTED',
    CART_HAS_CHANGED = 'cart_has_changed',
    COMPONENT_MOUNTED = 'component_mounted',
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