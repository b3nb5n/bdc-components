import React, { useState } from "react";

export interface OptionInputProps {
    type: 'option';
    name: string;
    label?: string;
    helpText?: string;
    required?: boolean;
    options: string[];
    multi?: boolean;
}

interface OptionInputState {
    
}

export const OptionInput: React.FC<OptionInputProps> = ({  }) => {
    const [ state, setState ] = useState<OptionInputState>()

    return (
        
    );
}