import { useState } from "react"
import { Input } from "../../../../../Input"
import React from "react"
import "./index.css"

type Props = {
    onEdit?: (newValue: string) => void
    value: string
}

export const EditableCell: React.FC<Props> = ({ onEdit, value }) => {
    const [isEditing, setIsEditing] = useState(false)

    const onInputBlur: React.FocusEventHandler<HTMLInputElement> = e => {
        setIsEditing(false)

        const newValue = e.target.value
        if (newValue === value) { return }

        onEdit?.(newValue)
    }

    const onInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = e => {
        const key = e.key

        switch (key) {
        case "Enter":
            e.preventDefault()
            e.currentTarget.blur()
            break;
        case "Escape":
            setIsEditing(false)
            break;
        }
    }

    return (
        <td
            className={isEditing ? "db-explorer-input-cell" : "db-explorer-hoverable-cell"}
            onFocus={() => { setIsEditing(true) }}
            tabIndex={0}
        >
            {isEditing
                ? (
                    <Input
                        clickOnRender
                        defaultValue={value}
                        onBlur={onInputBlur}
                        onKeyDown={onInputKeyDown}
                        required
                        type="text"
                    />
                )
                : (
                    <div>
                        {value}
                    </div>
                )
            }
        </td>
    )
}
