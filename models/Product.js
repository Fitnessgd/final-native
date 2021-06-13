export default class Product {
    #photo;
    #title;
    #description;
    #storage;
    #memory;
    #shipping;
    #totalPrice;
    #reviews;
    constructor(photo, title, description, storage, memory, shipping, totalPrice, reviews) {
        this.photo = photo;
        this.title = title;
        this.description = description;
        this.storage = storage;
        this.memory = memory;
        this.shipping = shipping;
        this.totalPrice = totalPrice;
        this.reviews = reviews;
    }
    get photo() {
        return this.#photo;
    }
    get title() {
        return this.#title;
    }
    get description() {
        return this.#description;
    }
    get storage() {
        return this.#storage;
    }
    get memory() {
        return this.#memory;
    }
    get shipping() {
        return this.#shipping;
    }
    get totalPrice() {
        return this.#totalPrice;
    }
    get reviews() {
        return this.#reviews;
    }

    set photo(v) {
        if (typeof v == String)
            this.#photo = v;
    }
    set title(v) {
        if (typeof v == String)
            this.#title = v;
    }
    set description(v) {
        if (typeof v == String)
            this.#description = v;
    }
    set storage(v) {
        if (typeof v == Number)
            this.#storage = v;
    }
    set memory(v) {
        if (typeof v == Number)
            this.#memory = v;
    }
    set shipping(v) {
        if (typeof v == Number)
            this.#shipping = v;
    }
    set totalPrice(v) {
        if (typeof v == Number)
            this.#totalPrice = v;
    }
    set reviews(v) {
        if (typeof v == String)
            this.#reviews = v;
    }
}
export class Review {
    constructor(name, content, positive) {
        this.name = name;
        this.content = content;
        this.positive = positive;
    }
}