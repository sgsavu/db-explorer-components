import React from "react"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({ className, ...rest}) => {
    return (
        <button
            className="db-explorer-button"
            {...rest}
        />
    )
}