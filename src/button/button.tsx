import React, { useState } from "react";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core";

interface ButtonProps {
    name: string
    label?: string
    icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>
    action: () => Promise<void> | void
}

export const Button: React.FC<ButtonProps> = ({ name, label, icon, action }) => {
    const [ state, setState ] = useState()

    return (
        
    );
}