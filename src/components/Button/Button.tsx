import React, {FC} from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    children?: React.ReactNode
    callBack: () => void
}

export const Button: FC<ButtonPropsType> = ({children, ...props}) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return <button className={s.button} onClick={onClickHandler}>{children}</button>
};

