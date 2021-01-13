import {ServiceContainer} from "App/core/service.container"
import {events, EventService} from "App/core/event.service";

ServiceContainer.get().mount();

ServiceContainer.get().service<EventService>(EventService).dispatch(events.APP_LOADED);