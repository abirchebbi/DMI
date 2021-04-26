import { Grid, } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import Controls from "../../../Components/controls/Controls";
import { UseForm, Foorm } from '../../../Components/UseForm';
import * as userService from "../../../services/userServices";

const statutItems = [
    { id: 'activé', title: 'Activé' },
    { id: 'bloqué', title: 'Bloqué' },
]

const initialFValues = {
    id: 0,
    fullName: '',
    login: '',
    password: '',
    statut: 'activé',
    role: '',
}

export default function Form(props) {
    const {addOrEdit,recordForEdit }= props
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('login' in fieldValues)
            temp.login = fieldValues.login.length ? "" : "This field is required."
        if ('password' in fieldValues)
            temp.password = fieldValues.password.length > 5 ? "" : "Minimum 6 numbers required."
        if ('role' in fieldValues)
            temp.role = fieldValues.role.length !== 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm

    } = UseForm(initialFValues, true, validate);
    useEffect(() =>
    {
        if (recordForEdit !== null)
           setValues({...recordForEdit})
     }, [recordForEdit])
    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            addOrEdit(values,resetForm);
        }
    }
    return (
        <Foorm onSubmit={handleSubmit} >
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <Controls.Input
                        label="Login"
                        name="login"
                        value={values.login}
                        onChange={handleInputChange}
                        error={errors.login}
                    />
                    <Controls.Input
                        label="Password"
                        name="password"
                        value={values.password}
                        onChange={handleInputChange}
                        error={errors.password}

                    />


                </Grid>
                <Grid item xs={6}>

                    <Controls.Select
                        label='Role'
                        name='role'
                        value={values.role}
                        onChange={handleInputChange}
                        options={userService.getTypeCollection()}
                        error={errors.role}
                    />
                    <Controls.RadioGroup
                        name="statut"
                        label="Statut"
                        value={values.statut}
                        onChange={handleInputChange}
                        items={statutItems}
                    />

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>

            </Grid>
        </Foorm>
    )
}
