export default class TodoList {
    public id: string;

    public content: string;

    public constructor(content: string) {
        this.id = '_' + Math.random().toString(36).substr(2, 9);
        this.content = content;
    }
}