// TYPES

export type PageNumber = Number | null

export type QueryParam = string | (string | null)[]


// INTERFACES

export interface Posts {
    readonly id: Number,
    readonly userId: Number,
    readonly title: String,
    readonly body: String,
}
