import components from "App/app.components";
import serviceContainer from "App/core/service.container"
import {events, EventService} from "App/core/event.service";

serviceContainer.get().mount();

components.forEach(Component => new Component());

serviceContainer.get().service<EventService>(EventService).dispatch(events.APP_LOADED);