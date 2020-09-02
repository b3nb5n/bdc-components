import React, { useState } from "react";

export interface AttachmentInputProps {
    type: 'attachment';
    name: string;
    label?: string;
    helpText?: string;
    required?: boolean;
    multi?: boolean;
    acceptedTypes?: string[];
}

interface AttachmentmentInputState {
    
}

export const AttachmentmentInput: React.FC<AttachmentmentInputProps> = ({  }) => {
    const [ state, setState ] = useState<AttachmentmentInputState>()

    return (
        
    );
}