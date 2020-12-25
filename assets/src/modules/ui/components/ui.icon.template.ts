import {icons} from "App/shared/icons";

const iconTemplate = (): string => {
    let template = '';

    Object.keys(icons).forEach(keyIcon => {
        template += `
            <div class="d-flex justify-content-left">
                <app-icon  icon="${keyIcon}"></app-icon>
                <pre class="mx-2">${keyIcon}</pre>
            </div>
        `;
    });

    return template
};

export default `
<div class="col-4">
    <div class="app-wrapper">
    <div class="title">
        Icons
    </div>
        ${iconTemplate()}
    </div>
</div>
`;