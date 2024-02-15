type Jsonable = string | number | boolean | null | undefined | readonly Jsonable[] | {
    readonly [key: string]: Jsonable;
} | {
    toJSON(): Jsonable;
};
export declare class BaseError extends Error {
    readonly context?: Jsonable;
    constructor(message: string, options?: {
        error?: Error;
        context?: Jsonable;
    });
}
export {};
