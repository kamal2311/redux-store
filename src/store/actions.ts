export const ADD_TODO="TODOS.Add";
export const REMOVE_TODO ="TODO.Remove"

export class AddTodo{
    readonly type = ADD_TODO;
    constructor(private payload:any){}
}

export class RemoveTodo{
    readonly type = REMOVE_TODO;
    constructor(private payload:any){}
}


