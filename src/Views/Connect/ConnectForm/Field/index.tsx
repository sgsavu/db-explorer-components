import React from "react"
import { Input, InputProps } from "../../../../Input"
import "./index.css"

export type FieldProps = InputProps & {
  label: string
}

export const Field: React.FC<FieldProps> = ({
    id,
    label,
    ...rest
}) => {
    return (
        <div className="db-explorer-field">
            <label htmlFor={id}>{label}:</label>
            <Input
                {...rest}
                id={id}
            />
        </div>
    )
}
