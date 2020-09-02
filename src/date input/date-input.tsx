import React, { useState } from "react";

export interface DateInputProps {
    type: 'date';
    name: string;
    label?: string;
    helpText?: string;
    required?: boolean;
    time?: boolean;
}

interface DateInputState {
    
}

export const DateInput: React.FC<DateInputProps> = ({  }) => {
    const [ state, setState ] = useState<DateInputState>()

    return (
        
    );
}