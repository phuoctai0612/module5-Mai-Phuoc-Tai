import { Formik,Form, Field, ErrorMessage } from "formik";
import { Contract } from "../App";
import * as yup from "yup";
import {useNavigate} from "react-router";
function FormCreate() {
    const navigate= useNavigate();
    return (
        <>
            <h1>Create Contract</h1>
            <Formik
                initialValues={{ nameContract: "", email: "", phone: "", message: "" }}
                validationSchema={
                    yup.object({ nameContract: yup.string().required(), email: yup.string().required().email(),phone: yup.string().required(),message: yup.string().required() }) }
                    onSubmit={( values )=>{Contract.push({ ...values ,id: Contract.length+1})
                navigate("/list");
                }}
                    
            >
                <Form>
                    <div>
                        <label htmlFor="nameContract">Name</label>
                        <Field name="nameContract" id="nameContract" type="text"></Field>
                        <ErrorMessage name="nameContract" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field name="email" id="email" type="text"></Field>
                        <ErrorMessage name="email" />

                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <Field name="phone" id="phone" type="text"></Field>
                        <ErrorMessage name="phone" />

                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <Field name="message" id="message" type="text"></Field>
                        <ErrorMessage name="message" />

                    </div>
                    <div>
                        <button type="submit">Create</button>
                    </div>
                </Form>
            </Formik>
        </>
        
    )
}

export default FormCreate;