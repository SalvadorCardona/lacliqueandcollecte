import {html, property , TemplateResult} from 'lit-element';
import {AppComponent} from "App/modules/shared/services/custom.element";
import {PostType} from "App/modules/shared/types/post.type";
import {unsafeHTML} from 'lit-html/directives/unsafe-html';

export default class PageViewsComponent extends AppComponent {

    @property({type: Object})
    private post: PostType;

    public static getComponentName(): string {
        return 'app-page-default';
    }

    public render(): TemplateResult {
        return html`
            <main class="container">
                <div class="app-wrapper">
                    <h1 class="entry-title">${this.post.title}</h1>

                    <div class="page-content">
                        <p>${unsafeHTML(this.post.postContent)}</p>
                    </div>
                </div>
            </main>
        `;
    }
}