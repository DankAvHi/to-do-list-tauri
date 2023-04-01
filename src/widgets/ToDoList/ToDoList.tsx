import { useState } from "react";
import { RawToDo, ToDoList as ToDoListType } from "../../entities/toDo/toDo";
import { Button } from "../../shared";
import { ToDoListStyles as S } from "./ToDoList.styles";

export const ToDoList = () => {
    const [toDo, setToDo] = useState<RawToDo>({ text: "" });
    const [toDoList, setToDoList] = useState<ToDoListType>([]);

    const getId = (): number => {
        const rawId = new Date().getMilliseconds();
        const isUnique = !!toDoList.filter((toDo) => toDo.id === rawId);
        return isUnique ? rawId : rawId + 0.1;
    };

    const inputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
        setToDo((prev) => ({ ...prev, text: event.target.value }));

    const addToDoButtonOnClickHanlder = (event: React.MouseEvent) => {
        event.preventDefault();
        if (toDo.text.length < 1) return;
        setToDoList((prev) => [...prev, { ...toDo, checked: false, id: getId() }]);
    };

    const deleteToDoButtonOnClickHandler = (id: number) => () => setToDoList(toDoList.filter((toDo) => toDo.id !== id));

    const checkToDoButtonOnClickHandler = (id: number) => () =>
        setToDoList(toDoList.map((toDo) => (toDo.id === id ? { ...toDo, checked: !toDo.checked } : toDo)));

    return (
        <S.ToDoList>
            <S.Form>
                <S.Input onChange={inputOnChangeHandler} type="text" />
                <Button onClick={addToDoButtonOnClickHanlder}>
                    <S.AddIcon />
                </Button>
            </S.Form>
            <S.List>
                {toDoList.map((toDo) => (
                    <S.Item key={toDo.id}>
                        <p>{toDo.text}</p>
                        <p>{toDo.checked ? "Checked" : "Not checked"}</p>
                        <div>
                            <button onClick={deleteToDoButtonOnClickHandler(toDo.id)}>del</button>
                            <button onClick={checkToDoButtonOnClickHandler(toDo.id)}>check</button>
                        </div>
                    </S.Item>
                ))}
            </S.List>
        </S.ToDoList>
    );
};
