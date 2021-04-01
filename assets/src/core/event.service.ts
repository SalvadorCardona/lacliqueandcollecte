export enum events  {
    SERVICE_LOADED = 'service_loaded',
    CART_HAS_CHANGED = 'cart_has_changed',
    COMPONENT_LOADED = 'component_loaded',
    CONFIGURATION_LOADED = 'configuration_loaded',
    EVENT_DISPATCHED = 'event_dispatched'
}

export class EventService {
    private subscriber: Array<{event: events, callback: () => void}> = [];

    public dispatch(event: events): void {
        this.subscriber
            .filter(subscriber => subscriber.event === event)
            .forEach(({callback}) => callback());

        if (event !== events.EVENT_DISPATCHED) {
            this.dispatch(events.EVENT_DISPATCHED);
        }
    }

    public addSubscriber(event: events, callback: () => void): void {
        this.subscriber.push({event, callback})
    }
}