import React from "react"
import styles from "./index.module.css"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({ className, ...rest}) => {
    return (
        <button
            className={styles.button + " " + className}
            {...rest}
        />
    )
}