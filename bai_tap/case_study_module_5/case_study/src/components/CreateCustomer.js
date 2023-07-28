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
      <div className="container1">
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
              <div className="input-group input-group-icon">
                <label htmlFor='name'>Name</label>
                <Field type="text" placeholder="Full Name" name="name" id="name" />
                <ErrorMessage component="div" name='name' className='text-red' />
                <div ><i className="fa fa-user" /></div>
              </div>
              <div className="input-group input-group-icon">
                <label htmlFor='dayOfBirth'>Date Of Birth</label>
                <Field type="text" placeholder="Date Of Birth" name="dayOfBirth" id="dayOfBirth" />
                <ErrorMessage component="div" name='dayOfBirth' className='text-red' />
                <div ><i className="fa fa-user" /></div>
              </div>
              <div className="input-group input-group-icon">
                <div>Giới tính :</div>
                <ErrorMessage component="div" name='gender' className='text-red' />
                <span style={{ float: 'left', marginLeft: '20px' }}> <Field type="radio" name="gender" value="Female" /> Female</span>
                <span style={{ float: 'left', marginLeft: '20px' }}> <Field type="radio" name="gender" value="Male" />Male</span>
              </div>
              <div className="input-group input-group-icon">
                <label htmlFor='idCard'>Id Card</label>
                <Field type="text" placeholder="Id Card" name="idCard" id="idCard" />
                <ErrorMessage component="div" name='idCard' className='text-red' />
                <div ><i className="fa fa-user" /></div>
              </div>
              <div className="input-group input-group-icon">
                <label htmlFor='phoneNumber'>Phone Number</label>
                <Field type="text" placeholder="Phone Number" name="phoneNumber" id="phoneNumber" />
                <ErrorMessage component="div" name='phoneNumber' className='text-red' />

                <div ><i className="fa fa-envelope" /></div>
              </div>
              <div className="input-group input-group-icon">
                <label htmlFor='email'>Email</label>
                <Field type="email" placeholder="Email" name="email" id="email" />
                <ErrorMessage component="div" name='email' className='text-red' />
                <div ><i className="fa fa-key" /></div>
              </div>
              <div className="input-group input-group-icon">
                <label htmlFor='typeCustomers'>Type Customer</label>
                <div className="input-group input-group-icon">
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
              <div className="input-group input-group-icon">
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
<div id="addEmployeeModal" className="modal fade">
<div className="modal-dialog">
  <div className="modal-content">
    <form>
      <div className="modal-header">
        <h4 className="modal-title">Add Employee</h4>
        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
      </div>
      <div className="modal-body">
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea className="form-control" required defaultValue={""} />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" className="form-control" required />
        </div>
      </div>
      <div className="modal-footer">
        <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
        <input type="submit" className="btn btn-success" defaultValue="Add" />
      </div>
    </form>
  </div>
</div>
</div>