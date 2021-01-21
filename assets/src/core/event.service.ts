export enum events  {
    SERVICE_MOUNTED = 'SERVICE_MOUNTED',
    CART_HAS_CHANGED = 'cart_has_changed',
    COMPONENT_MOUNTED = 'component_mounted',
}

export class EventService {

    private subscriber: Array<{event: events, callback: () => void}> = [];

    public dispatch(event: events): void {
        this.subscriber
            .filter(subscriber => subscriber.event === event)
            .forEach(({callback}) => callback());
    }

    public addSubscriber(event: events, callback: () => void): void {
        this.subscriber.push({event, callback})
    }
}