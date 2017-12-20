export const ADD_TODO="[TODOS] Add";

export class AddTodo{
    readonly type = ADD_TODO;
    constructor(private payload:any){}
}


