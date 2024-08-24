import { FormEventHandler } from "react"
import { Field } from "./Field"
import { SQLConnectionInfo } from "./const"
import React from "react"
import { Button } from "../../../Button"

export type ConnectFormProps = {
    onConnect: (connectionInfo: SQLConnectionInfo) => void
}

export const ConnectForm: React.FC<ConnectFormProps> = ({ onConnect }) => {
    const onSubmit: FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault()

        const formData = new FormData(e.target as HTMLFormElement)
        const formEntries = Object.fromEntries(formData.entries()) as SQLConnectionInfo

        onConnect({...formEntries, type: 'mysql'})
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <Field
                    defaultValue="127.0.0.1"
                    id='host'
                    label='Host'
                    name='host'
                    required
                />

                <Field
                    defaultValue="3306"
                    id='port'
                    label='Port'
                    name='port'
                    required
                />

                <Field
                    id='dbName'
                    label='DB Name'
                    name='dbName'
                    required
                />

                <Field
                    defaultValue="root"
                    id='user'
                    label='User'
                    name='user'
                    required
                />

                <Field
                    id='password'
                    label='Password'
                    name='password'
                    type='password'
                    required
                />

                <div>
                    <Button type='submit'>Connect</Button>
                </div>
            </form>
        </>
    )
}