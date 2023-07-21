import { Formik,Form, Field } from "formik";
import { Contract } from "../App";
import * as yup from "yup";
function FormCreate() {
    return (
        <>
            <h1>Create Contract</h1>
            <Formik
                initialValues={{ nameContract: "", email: "", phone: "", message: "" }}
                validationSchema={
                    yup.object({ nameContract: yup.string().required(), email: yup.string().matches("^[0-9A-Za-z+-]+@([0-9A-Za-z-]+)$") }) }
                    onSubmit={(values)=>{Contract.push({...values,id: Contract.length+1})}}
                    
            >
                <Form>
                    <div>
                        <label htmlFor="nameContract">Name</label>
                        <Field name="nameContract" id="nameContract"></Field>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field name="email" id="email"></Field>
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <Field name="phone" id="phone"></Field>
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <Field name="message" id="message"></Field>
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