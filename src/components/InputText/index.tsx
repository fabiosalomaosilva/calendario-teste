import { InputHTMLAttributes } from "react";
import Tooltip from "../Tooltip";

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    tooltip?: string;
    colSpan?: number;
    error?: string | undefined;
    touched?: boolean | undefined;
}

export default function InputText(props: InputTextProps) {
    let cols = '';
    let border = 'border-gray-300';

    if (props.colSpan) {
        cols = `col-span-1 md:col-span-${props.colSpan}`;
    }
    if (props.colSpan) {
        border = ` col-span-1 md:col-span-${props.colSpan}`;
    }

    return (
        <div className={`my-2 ${cols}`}>
            <div className='h-4 flex flex-row mb-2 gap-1'>
                <label
                    htmlFor={props.id}
                    className='text-sm font-semibold text-gray-700'
                >
                    {props.label}
                </label>
                {props.tooltip != null && props.tooltip.length > 0 && (
                    <Tooltip text={props.tooltip} />
                )}
            </div>
            <input
                className={`w-full border-[1px] ${border} px-3 py-2 rounded-md text-md outline-none active:outline-none focus:border-teal-300 focus:ring-2 focus:ring-teal-100`}
                {...props}
            />
            {props.error && props.touched ? (
                <div className='text-xs ml-2 text-red-400'>{props.error}</div>
            ) : null}
        </div>)
}