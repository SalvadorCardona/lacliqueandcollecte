import {icons} from "App/core/icons";

const iconTemplate = (): string => {
    let template = '';

    Object.keys(icons).forEach(keyIcon => {
        template += `
            <div class="d-flex justify-content-left align-items-center mb-1">
                <app-icon class="text-around" icon="${keyIcon}"></app-icon>
                <pre class="m-0 ms-2">IconName : ${keyIcon}</pre>
            </div>
        `;
    });

    return template
};

export default `
<div class="col-4">
    <app-wrapper title="Icons">
        <span class="fw-normal">
            &lt;app-icon icon="" &gt &lt;/app-icon&gt
        </span>
        <hr>
        ${iconTemplate()}
    </app-wrapper>
</div>
`;