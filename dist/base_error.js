export class BaseError extends Error {
    constructor(message, options = {}) {
        const { context } = options;
        super(message);
        this.name = this.constructor.name;
        this.context = context;
    }
}
