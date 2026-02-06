// src/db/errors.ts

// defined all error types here

export class TaskNotFoundError extends Error {
    readonly name = "TaskNotFoundError"
}

export class NoAvailableTaskError extends Error {
    readonly name = "NoAvailableTaskError"
}

export class LeaseExpiredError extends Error {
    readonly name = "LeaseExpiredError"
}

export class StateConflictError extends Error {
    readonly name = "StateConflictError"
}

export class LeaseMismatchError extends Error {
    readonly name = "LeaseMismatchError"
}