import { EditableCell } from "./EditableCell"
import { RECORD_TABLE_ACTION, RecordAction } from "../consts"
import React from "react"
import "./index.css"

type Props = {
    onRowAction: (action: RecordAction) => void
    row: Record<string, string>
}

export const Row: React.FC<Props> = ({
    onRowAction, 
    row 
}) => {
    const columns = Object.keys(row)
    const values = Object.values(row)

    return (
        <tr>
            {values.map((value, columnIndex) =>
                <EditableCell
                    onEdit={newValue => onRowAction({ action: RECORD_TABLE_ACTION.DUPLICATE, columnName: columns[columnIndex], columnValue: newValue, record: row})}
                    key={columnIndex}
                    value={value}
                />
            )}
            <td className="db-explorer-hoverable-cell" onClick={() => onRowAction({ action: RECORD_TABLE_ACTION.DUPLICATE, record: row})}>
                <div className="db-explorer-duplicate-button">
                    ⎘
                </div>
            </td>
            <td className="db-explorer-hoverable-cell" onClick={() => onRowAction({ action: RECORD_TABLE_ACTION.DELETE, record: row})}>
                ❌
            </td>
        </tr>
    )
}
