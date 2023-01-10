import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
    className?: string
    disabled?: boolean
}

export const Button:React.FC<ButtonPropsType> = (props) => {
    const {name,callBack,className,disabled, ...otherProps} = props

    const onClickBtnCallBackHandler = () => {
        callBack()
    }

    return (
        <button onClick={onClickBtnCallBackHandler} className={className}>{name}</button>
    );
};

