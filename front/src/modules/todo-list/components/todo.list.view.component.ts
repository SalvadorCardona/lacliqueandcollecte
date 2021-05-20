import {html, property, TemplateResult} from 'lit-element';
import {AppComponent} from "App/core/custom.element";
import TodoListStore from "App/modules/todo-list/service/todo.list.store";
import {injector} from "App/core/container.service";
import InputBaseComponent from "App/modules/shared/components/form/input.base.component";
import ButtonComponent from "App/modules/shared/components/button.component";
import TodoList from "App/modules/todo-list/model/todo.list";
import debounce from "lodash.debounce";
import {Color} from "App/enum/color.enum";

export default class TodoListViewComponent extends AppComponent {
    @injector(TodoListStore)
    private todoListStore: TodoListStore;

    @property({type: Array})
    private todoList: TodoList[] = [];

    private currentTodo: string = '';

    public static getComponentName(): string {
        return 'app-todo-list-view';
    }

    public connectedCallback(): void {
        super.connectedCallback();

        this.todoListStore.onChange(todoList => {
            this.todoList = todoList;

            this.requestUpdate();
        });
    }

    public todoCurrentChange(todo: string): void {
        this.currentTodo = todo;
    }

    public addNewTodo(): void {
        this.todoListStore.add(this.currentTodo);
        this.currentTodo = '';
    }

    private removeTodo(id: string): void {
        this.todoListStore.remove(id);
    }

    private todoChange(id: string, value: string): void {
        debounce(() => {
            this.todoListStore.change(id, value)
        }, 500)();
    }

    public render(): TemplateResult {
        console.log('render')
        return html`
            <div class="container">
                <div class="app-wrapper">
                    <h1>
                        My Todo List : ${this.todoList.length}
                    </h1>
                    <div id="todo-list" class="app-wrapper">
                        ${this.todoList.map(todo => this.renderTodo(todo))}
                        <h2>Ajouter</h2>
                        ${this.createElement(InputBaseComponent, {
                            label: 'Nouvelle todo',
                            value: '',
                            onChange: (e) => this.todoCurrentChange(e.target.value)
                        })}
                        <div class="mt-2">
                            ${this.createElement(ButtonComponent, {
                                $click: () => this.addNewTodo(),
                                label: 'Ajouter',
                                type: Color.SUCCESS,
                            })}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    public renderTodo(todo: TodoList): TemplateResult {
        return html`
            <hr>
            <div>
                ${this.createElement(InputBaseComponent, {
                    value: todo.content,
                    onChange: (e) => this.todoChange(todo.id, e.target.value)
                })}
                <div class="mt-2">
                    ${this.createElement(ButtonComponent, {
                        $click: () => this.removeTodo(todo.id),
                        type: Color.DANGER,
                        label: 'Supprimer'
                    })}
                </div>
            </div>
        `;
    }
}