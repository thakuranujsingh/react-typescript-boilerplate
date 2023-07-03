import { CircularProgress, styled } from "@mui/material"
import React from "react"
import { Outlet } from "react-router-dom"



const Main = styled("main")({})

export const MainLayout = () => {
    return (
        <Main>
            <React.Suspense fallback={<CircularProgress />}>
                <Outlet />
            </React.Suspense>
        </Main>
    )
}