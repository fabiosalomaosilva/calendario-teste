import { ButtonHTMLAttributes } from "react";
import Tooltip from "../Tooltip";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'sm' | 'lg';
    color?: 'primary' | 'secondary' | 'danger' | 'warning';
    cssclass?: string;
}

export default function Button(props: ButtonProps) {
    let textClass = '';
    switch (props.size) {
        case 'sm':
            textClass = 'h-8 px-8 mw-36 font-sm';
            break;
        case 'lg':
            textClass = 'h-12 px-8 mw-60';
            break;
        default:
            textClass = 'h-12 px-8 mw-60';
    }
    switch (props.color) {
        case 'primary':
            textClass += ' bg-primary text-white hover:bg-primaryLight';
            break;
        case 'secondary':
            textClass += ' bg-secondary text-white hover:bg-secondaryLight';
            break;
        case 'danger':
            textClass += ' bg-danger text-white hover:bg-dangerLight';
            break;

        case 'warning':
            textClass += ' bg-warning text-white hover:bg-warningLight';
            break;

        default:
            textClass += ' bg-primary text-white hover:bg-primaryLight';
            break;
    }
    const total = `${props.className} ${textClass} outline-none rounded-full hover:scale-[0.98] transition-all ease-in-out ${props.cssclass}`;
    return (
        <button
            className={total}
            type="button"
            {...props}
        ></button>

    )
}