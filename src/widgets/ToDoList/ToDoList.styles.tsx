import styled from "styled-components";
import { AddIcon, CardStyles, Input } from "../../shared";

export const ToDoListStyles = {
    ToDoList: styled.div`
        padding: 12px;

        display: flex;
        flex-direction: column;
        gap: 24px;
    `,

    Form: styled.form`
        ${CardStyles}

        display:flex;
        align-items: center;
        gap: 12px;
    `,

    Input: styled(Input)`
        width: 100%;

        font-size: 1.25rem;
    `,

    AddIcon: styled(AddIcon)`
        width: 32px;
        height: 32px;
    `,

    List: styled.ul`
        display: flex;
        flex-direction: column;
        gap: 12px;
    `,
    Item: styled.li`
        ${CardStyles}
    `,
};
