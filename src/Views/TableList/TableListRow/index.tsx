import React from "react"
import { TABLE_LIST_ACTION, TableAction } from "../const"
import { Button } from "../../../Button"
import "./index.css"

export type TableListRowProps = {
    onTableAction: (data: TableAction) => void
    tableName: string
}

export const TableListRow: React.FC<TableListRowProps> = ({
    onTableAction,
    tableName
}) => {
    return (
        <div className="db-explorer-table-row">
            <Button onClick={() => onTableAction({ action: TABLE_LIST_ACTION.SELECT, tableName })}>
                {tableName}
            </Button>
            <div>
                <Button onClick={() => onTableAction({ action: TABLE_LIST_ACTION.DUPLICATE, tableName })}>
                    ⎘
                </Button>
                <Button onClick={() => onTableAction({ action: TABLE_LIST_ACTION.DELETE, tableName })}>
                    ❌
                </Button>
            </div>
        </div>
    )
}
