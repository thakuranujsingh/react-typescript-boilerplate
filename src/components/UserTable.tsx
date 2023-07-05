import styled from "@emotion/styled"
import React from "react"
import { useUserContext } from "../context/UserContext"


const Table = styled("table")({
    borderCollapse: "collapse",
    "& td, & th": {
        border: "1px solid #000",
        padding: "2px 10px"
    },
    "& th": {
        textAlign: "center"
    }
})



export const UserTable = () => {
    const { users } = useUserContext()!;
    return (
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td><a href={`mailto: ${user.email}`}>{user.email}</a></td>
                        <td>{user?.address?.city}</td>
                        <td>{user?.company?.name}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
