export class LevelTable {
    items: LevelTableItem[];

    constructor(_items: LevelTableItem[]) {
        this.items = _items;
    }
}

export class LevelTableItem {
    name: String;
    level: Number;

    constructor(_name: String, _level: Number) {
        this.name = _name;
        this.level = _level;
    }
}