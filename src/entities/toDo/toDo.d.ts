export type ToDo = RawToDo & { text: string; checked: boolean; id: number };
export type ToDoList = ToDo[];

export type RawToDo = {
    text: string;
};
