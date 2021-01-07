import React from 'react'
import { Formik, Form, yupToFormErrors } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

import { Box, Button, Container, Grid, Link, TextField, Typography, makestyles } from '@material-ui/core'
import Page from '../../components/Page'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        height: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    }
}))

function FormikTemplate() {
    const classes = useStyles()
    
    const singleDropdownOptions = [
        {key: 'Select an option', value:''},
        {key: 'Option 1', value: 'option1'},
        {key: 'Option 2', value: 'option2'}
    ]

    const multiDropdownOptions = [
        {key: 'Select an option', value:''},
        {key: 'Option 1', value: 'moption1'},
        {key: 'Option 2', value: 'moption2'},
        {key: 'Option 3', value: 'moption3'},
        {key: 'Option 4', value: 'moption4'}
    ]

    const radioOptions = [
        {key: 'Select an option', value:''},
        {key: 'Option 1', value: 'roption1'},
        {key: 'Option 2', value: 'roption2'},
        {key: 'Option 3', value: 'roption3'},
        {key: 'Option 4', value: 'roption4'}
    ]
    
    const checkboxOptions = [
        {key: 'Select an option', value:''},
        {key: 'Option 1', value: 'cboption1'},
        {key: 'Option 2', value: 'cboption2'},
        {key: 'Option 3', value: 'cboption3'},
        {key: 'Option 4', value: 'cboption4'}
    ]


    const initialValues = {
        // email:'',
        // password:'',
        // firstName:'',
        // date: new Date(),
        // toggle:[],
        // autocomplete:[],
        // checkboxOption: [],
    }

    const validationSchema = Yup.object({
        // email: Yup.string().required('I need an email address'),
        // checkboxOption: Yup.array().required('Required'),
        // dateTime: Yup.date().required('Required').nullable()
    })


    const onSubmit = (values, {setSubmitting}) => {
        console.log('Form data', values)
    }

    return (
        <Page className={classes.root} title="Default Form Title" >
            <Box display="flex" flexDirection="column" height="100%" justifyContent="center" >
                <Container maxWidth="sm">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {formik => (
                            <Form>
                                <Typography variant="h4">Form Title goes here </Typography>
                                <Box margin={3}>
                                    <FormikControl control='input' type='email' label='Email' name='email' title='Generic Title' />
                                </Box>
                                <Box margin={3}>
                                    <FormikControl control='textArea'  label='Description' name='description' title='Generic Title' />
                                </Box>
                                <Box margin={3}>
                                    <FormikControl control='select1'  label='Select one' name='selectOption' title='Generic Title' options={singleDropdownOptions}/>
                                </Box>
                                <Box margin={3}>
                                    <FormikControl control='select2'  label='Select many' name='selectOptions' title='Generic Title' options={multiDropdownOptions} />
                                </Box>
                                <Box margin={3}>
                                    <FormikControl control='radio'  label='Radio Topic' name='radioOptions' options={radioOptions} />
                                </Box>
                                <Box margin={3}>
                                    <FormikControl control='checkbox'  label='Checkbox Topic' name='checkboxOption' options={checkboxOptions}/>
                                </Box>
                                <Box margin={3}>
                                    <FormikControl control='date'  label='Pick a date' name='dueDate' />
                                </Box>
                                <Button fullWidth variant="contained" color="primary" disabled={isSubmitting} onClick={onSubmit}>Submit</Button>
                            </Form>
                        )}
                    </Formik>
                </Container>
            </Box>
        </Page>
    )
}

export default FormikTemplate
