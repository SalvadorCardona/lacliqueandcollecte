export default abstract class AbstractStore<T> {
    protected stateList: Array<T> = [];

    protected subscriberList: Array<(state: any|null) => void> = [];

    public set state(state: T)
    {
        this.stateList.push(state);
        this.dispatch();
    }

    public get state(): T|null
    {
        return this.stateList[this.stateList.length -1];
    }

    protected dispatch(): void
    {
        this.subscriberList
            .forEach(subscriber => subscriber(this.state));
    }

    public onChange(callback: (state: any|null) => void): void {
        this.subscriberList.push(callback);
        alert('test');
    }
}