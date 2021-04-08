export enum events  {
    SERVICE_LOADED = 'service_loaded',
    CART_HAS_CHANGED = 'cart_has_changed',
    COMPONENT_LOADED = 'component_loaded',
    CONFIGURATION_LOADED = 'configuration_loaded',
    EVENT_DISPATCHED = 'event_dispatched'
}

export class EventService {
    private subscriber: Array<{event: events, callback: (payload: any|null) => void}> = [];

    private _eventLoaded: Array<events> = [];
    
    public dispatch(event: events, payload: any = null): void {
        this._eventLoaded.push(event);

        this.subscriber
            .filter(subscriber => subscriber.event === event)
            .forEach(({callback}) => callback(payload));

        if (event !== events.EVENT_DISPATCHED) {
            this.dispatch(events.EVENT_DISPATCHED, event);
        }
    }

    public get eventLoaded(): Array<events> {
        return this._eventLoaded;
    }

    public addSubscriber(event: events, callback: (payload) => void): void {
        this.subscriber.push({event, callback})
    }
}