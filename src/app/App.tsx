import { useState } from "react";
import { GlobalStyles } from "./GlobalStyles";
import { RawToDo, ToDoList } from "../entities/toDo/toDo";

export const App = () => {
    const [toDo, setToDo] = useState<RawToDo>({ text: "" });
    const [toDoList, setToDoList] = useState<ToDoList>([]);

    const getId = (): number => {
        const rawId = new Date().getMilliseconds();
        const isUnique = !!toDoList.filter((toDo) => toDo.id === rawId);
        return isUnique ? rawId : rawId + 0.1;
    };

    const inputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
        setToDo((prev) => ({ ...prev, text: event.target.value }));

    const addToDoButtonOnClickHanlder = (event: React.MouseEvent) => {
        event.preventDefault();
        setToDoList((prev) => [...prev, { ...toDo, checked: false, id: getId() }]);
    };

    const deleteToDoButtonOnClickHandler = (id: number) => () => setToDoList(toDoList.filter((toDo) => toDo.id !== id));

    const checkToDoButtonOnClickHandler = (id: number) => () =>
        setToDoList(toDoList.map((toDo) => (toDo.id === id ? { ...toDo, checked: !toDo.checked } : toDo)));

    return (
        <>
            <GlobalStyles />

            <div>
                <form>
                    <input onChange={inputOnChangeHandler} type="text" />
                    <button onClick={addToDoButtonOnClickHanlder}>add</button>
                </form>
                <ul>
                    {toDoList.map((toDo) => (
                        <li key={toDo.id}>
                            <p>{toDo.text}</p>
                            <p>{toDo.checked ? "Checked" : "Not checked"}</p>
                            <div>
                                <button onClick={deleteToDoButtonOnClickHandler(toDo.id)}>del</button>
                                <button onClick={checkToDoButtonOnClickHandler(toDo.id)}>check</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};
