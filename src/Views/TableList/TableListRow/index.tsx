import React from "react"
import { TABLE_LIST_ACTION, TableAction } from "../const"
import styles from "./index.module.css"
import { Button } from "../../../Button"

export type TableListRowProps = {
    onTableAction: (data: TableAction) => void
    tableName: string
}

export const TableListRow: React.FC<TableListRowProps> = ({
    onTableAction,
    tableName
}) => {
    return (
        <div className={styles.entry}>
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
