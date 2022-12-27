import React from 'react';
import { FaExclamationCircle } from "react-icons/fa";

export interface TooltipProps {
    text: string;
}

export default function Tooltip(props: TooltipProps) {
    return (
        <i className="tooltip">
            <span>{props.text}</span>
            <FaExclamationCircle className="h-3 w-3 text-orange-600 -mt-6" />
        </i>
    );
}