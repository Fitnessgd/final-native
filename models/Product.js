export default class {
    #photo;
    #title;
    #description;
    #storage;
    #memory;
    #shipping;
    #totalPrice;
    #reviews;
    #categories;
    constructor(photo, title, description, storage, memory, shipping, totalPrice, reviews, categories = []) {
        this.photo = photo;
        this.title = title;
        this.description = description;
        this.storage = storage;
        this.memory = memory;
        this.shipping = shipping;
        this.totalPrice = totalPrice;
        this.reviews = reviews;
        this.categories = categories;
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
    get categories() {
        return this.#categories;
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
    set categories(v) {
        if (typeof v == Array)
            this.#categories = v;
    }
}
export class Review {
    constructor(author, content) {
        this.name = author;
        this.content = content;
    }
}