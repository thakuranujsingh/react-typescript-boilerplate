import { Button, TextField, styled } from "@mui/material"
import { useUserContext } from "../context/UserContext"
import { IUser } from "../interfaces/User.type";
import React, { FC, useState } from "react";

const FormDiv = styled(("div"))({
    marginBottom: "40px"
})

const Form = styled("form")({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px"
})

const InputField = styled(TextField)({
    marginBottom: "20px"
})

export const AddNewUser: FC = () => {
    const { addNewUser } = useUserContext()!
    const [state, setState] = useState<IUser>({
        id: Math.floor(Math.random() * 100),
        city: "",
        company: "",
        email: "",
        name: ""
    })

    const onChangeHandler = (e: any) => {
        const { name, value } = e.target as any;
        console.log(name, value);
        setState({
            ...state,
            [name]: value
        })
    }

    const formHandler = (e: any) => {
        e.preventDefault()

        addNewUser(state)
    }




    return (
        <FormDiv>
            <h2>Add new user</h2>
            <Form>
                <InputField
                    name="name"
                    label="name"
                    InputProps={{
                        required: true
                    }}
                    fullWidth
                    onChange={onChangeHandler}
                />
                <InputField
                    name="email"
                    label="email"
                    InputProps={{
                        required: true
                    }}
                    fullWidth
                />
                <InputField
                    name="city"
                    label="city"
                    InputProps={{
                        required: true
                    }}
                    fullWidth
                    onChange={onChangeHandler}
                />
                <InputField
                    name="company"
                    label="company"
                    InputProps={{
                        required: true
                    }}
                    fullWidth
                    onChange={onChangeHandler}
                />
                <Button color="secondary" type="submit" onClick={formHandler}>Add User</Button>
            </Form>
        </FormDiv>
    )

}