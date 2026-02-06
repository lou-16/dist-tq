// src/db/index.ts

enum TaskType {
    add = 0,
    sub,
    mul,
    div
};
type OperandArray = number[];

type taskId = bigint;
type LeaseId = string;

interface LeaseToken {
    TaskId : taskId,
    leaseId: LeaseId,
    expiresAt: number,
}

interface AddTaskInput {
    type : TaskType;
    operands : OperandArray,
};
interface DeleteTaskInput {
    taskId : taskId
};

// intefaces defined for workers

interface AcquireTaskResult {
    taskToken : LeaseToken | null,
};

export const addTask = async (
    {type, operands} : AddTaskInput
) : Promise<taskId> =>  {

    return BigInt(0);
}