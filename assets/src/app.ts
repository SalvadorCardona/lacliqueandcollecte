import serviceContainer from "App/core/service.container"
import {events, EventService} from "App/core/event.service";

serviceContainer.get().mount();

serviceContainer.get().service<EventService>(EventService).dispatch(events.APP_LOADED);