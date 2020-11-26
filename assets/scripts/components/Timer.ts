import {CustomElement} from "custom-elements-ts";

@CustomElement({
    tag: 'second-timer',
    template: '<div>Jesuisunepetitediv</div>'
})
export default class Timer extends HTMLElement {
}