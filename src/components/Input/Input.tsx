import React, {ChangeEvent, FC} from 'react';
import s from './Input.module.css'

type InputPropsType = {
    placeholder: string
    value: string
    setValue: (value: string) => void
}

export const Input: FC<InputPropsType> = (props) => {
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.setValue(e.currentTarget.value)
    }
    return (
        <div>
            <input value={props.value} onChange={onChangeHandler} className={s.input} placeholder={props.placeholder}/>
        </div>
    );
};

