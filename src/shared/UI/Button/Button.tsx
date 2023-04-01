import { ButtonStyles as S } from "./Button.styles";

export const Button = (props: React.ComponentPropsWithoutRef<"button">) => {
    const { children, ...buttonProps } = props;
    return <S.Button {...buttonProps}>{children}</S.Button>;
};
