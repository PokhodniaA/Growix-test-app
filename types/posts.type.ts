// TYPES

export type PageNumber = Number | null

export type QueryParam = string | (string | null)[]


// INTERFACES

export interface Post {
    readonly id: Number,
    readonly userId: Number,
    readonly title: String,
    readonly body: String,
}
