import Module from "App/types/module.type";
import TodoListViewComponent from "App/modules/todo-list/components/todo.list.view.component";
import TodoListStore from "App/modules/todo-list/service/todo.list.store";

export default {
    components: [
        TodoListViewComponent
    ],
    services: [
        TodoListStore
    ]
} as Module