export default class test {
    get speed(): string {
        return <string>this._speed;
    }

    set speed(value: string) {
        this._speed = value;
    }
    private _speed: string | undefined;
}