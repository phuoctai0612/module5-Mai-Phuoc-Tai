import { Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from "yup";
import { getListTypeCustomer, getTypeCustomer } from "../service/typeCustomerService";
import { useState, useEffect } from "react";
import { createCustomer } from "../service/customerService";
function CreateCustomer() {
  const [typeCustomers, setTypeCustomers] = useState([])
  const getToDo = () => {
    (async () => {
      setTypeCustomers(await getListTypeCustomer())
    })()
  }
  useEffect(getToDo, [])
  return (
    <div>
      <meta charSet="UTF-8" />
      <title>Create Customer</title>
      <link rel="stylesheet" href="./css/create.css" />
      <div className="container">
        <Formik initialValues={{ name: "", dayOfBirth: "", gender: "", idCard: "", phoneNumber: "", email: "", address: "", typeCustomers: "" }}
          validationSchema={yup.object({
            name: yup.string().required(),
            dayOfBirth: yup.string().required(),
            gender: yup.string().required(),
            idCard: yup.string().required(),
            typeCustomers: yup.string().required(),
            phoneNumber: yup.string().required(),
            email: yup.string().required(),
            address: yup.string().required()
          })}
          onSubmit={(values) => {
            const getToDo = async () => {
              const type = await getTypeCustomer(values.typeCustomers);
              const obj = {
                ...values, typeCustomers: type
              }
             createCustomer(obj);
            }
          getToDo()
          }}
        >
          <div className="row">
            <h4>Account</h4>
            <Form>
              <div className="input-group ">
                <label htmlFor='name'>Name</label>
                <Field type="text" placeholder="Full Name" name="name" id="name" />
                <ErrorMessage component="div" name='name' className='text-red' />
                <div ><i className="fa fa-user" /></div>
              </div>
              <div className="input-group ">
                <label htmlFor='dayOfBirth'>Date Of Birth</label>
                <Field type="text" placeholder="Date Of Birth" name="dayOfBirth" id="dayOfBirth" />
                <ErrorMessage component="div" name='dayOfBirth' className='text-red' />
                <div ><i className="fa fa-user" /></div>
              </div>
              <div className="input-group ">
                <div>Giới tính :</div>
                <ErrorMessage component="div" name='gender' className='text-red' />
                <span style={{ float: 'left', marginLeft: '20px' }}> <Field type="radio" name="gender" value="Female" /> Female</span>
                <span style={{ float: 'left', marginLeft: '20px' }}> <Field type="radio" name="gender" value="Male" />Male</span>
              </div>
              <div className="input-group ">
                <label htmlFor='idCard'>Id Card</label>
                <Field type="text" placeholder="Id Card" name="idCard" id="idCard" />
                <ErrorMessage component="div" name='idCard' className='text-red' />
                <div ><i className="fa fa-user" /></div>
              </div>
              <div className="input-group ">
                <label htmlFor='phoneNumber'>Phone Number</label>
                <Field type="text" placeholder="Phone Number" name="phoneNumber" id="phoneNumber" />
                <ErrorMessage component="div" name='phoneNumber' className='text-red' />

                <div ><i className="fa fa-envelope" /></div>
              </div>
              <div className="input-group ">
                <label htmlFor='email'>Email</label>
                <Field type="email" placeholder="Email" name="email" id="email" />
                <ErrorMessage component="div" name='email' className='text-red' />
                <div ><i className="fa fa-key" /></div>
              </div>
              <div className="input-group ">
                <label htmlFor='typeCustomers'>Type Customer</label>
                <div className="input-group ">
                  <Field as="select" id="typeCustomers" name="typeCustomers">
                    <option value={""}>Type Customer</option>
                    {typeCustomers.length>0&&
                    typeCustomers.map((item, index) =>
                      <option key={`tc_${index}`} value={item.id}>{item.name}</option>
                    )}
                  </Field>
                </div>
                <div ><i className="fa fa-key" /></div>
              </div>
              <div className="input-group ">
                <label htmlFor='address'>Address</label>
                <Field type="text" placeholder="Address" name="address" id="address" />
                <ErrorMessage component="div" name='address' className='text-red' />
                <div ><i className="fa fa-key" /></div>
              </div>
              <button type="submit">Create</button>
            </Form>
          </div>
        </Formik>
      </div>
    </div>
  );
}
export default CreateCustomer;