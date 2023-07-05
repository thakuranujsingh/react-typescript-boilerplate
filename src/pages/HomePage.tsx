import styled from "@emotion/styled"
import React from "react"
import { UserTable } from "../components/UserTable"
import { AddNewUser } from "../components/AddNewUser"

const Main = styled("main")({
    fontsize: 14
})

const Container = styled("div")({
    maxWidth: "1200px",
    margin: "auto",
    padding: "0 20px"
})

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



const HomePage = () => {
    return (
        <Main>
            <Container>
                <AddNewUser />
                <UserTable />
            </Container>
        </Main>
    )
}

export default HomePage