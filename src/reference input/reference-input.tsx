import React from "react";

export interface ReferenceInputProps {
    type: 'reference';
    name: string;
    label?: string;
    helpText?: string;
    required?: boolean;
    collection: string;
    multi?: boolean;
}

export const ReferenceInput: React.FC<ReferenceInputProps> = ({  }) => {

    return (
        
    );
}