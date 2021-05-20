import AbstractStore from "App/core/abstract.store";
import TodoList from "App/modules/todo-list/model/todo.list";


export default class TodoListStore extends AbstractStore<TodoList[]> {

    public constructor() {
        super();
        this.state = [] as TodoList[];
    }

    public add(todoContent: string): void {
        this.state.push(new TodoList(todoContent));

        this.dispatch();
    }

    public hasTodolist(todoListId: string): null|number
    {
        const index = this.state.findIndex(todo => todo.id === todoListId);

        return index ?? null;
    }

    public remove(todoListId: string): void {
        const index = this.hasTodolist(todoListId);

        if (index === null) return;

        this.state.splice(index, 1);

        this.dispatch();
    }

    public change(todoListId: string, todoListContent: string): void {
        const index = this.hasTodolist(todoListId);

        if (index === null) return;

        this.state[index].content = todoListContent;

        this.dispatch();
    }
}