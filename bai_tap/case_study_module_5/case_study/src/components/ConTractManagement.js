import { getListContract } from "../service/contractService"
import {useState,useEffect} from "react"
   function ConTractManagement() {
     const [contracts,setContracts]=useState([])
     const getToDo =()=>{
      (async()=>{
        setContracts(await getListContract())
     })()
     }
     useEffect(getToDo,[])
console.log(contracts);
      return (
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Bootstrap CRUD Data Table for Database with Modal Form</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="%PUBLIC_URL%/css/employee-management.css" />
          <div className="container-xl">
            <div className="table-responsive">
              <div className="table-wrapper">
                <div className="table-title">
                  <div className="row">
                    <div className="col-sm-6">
                      <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                      <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons"></i> <span>Add New Employee</span></a>
                      <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons"></i> <span>Delete</span></a>
                    </div>
                  </div>
                </div>
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>
                        <span className="custom-checkbox">
                          <input type="checkbox" id="selectAll" />
                          <label htmlFor="selectAll" />
                        </span>
                      </th>
                      <th>Id Booking</th>
                      <th>Date Start</th>
                      <th>Date End</th>
                      <th>Deposit</th>
                      <th>Totatl</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contracts.map((item,index)=>
                   
                    <tr key={index}>
                      <td>
                        <span className="custom-checkbox">
                          <input type="checkbox"  name="options[]" defaultValue={1} />
                          <label htmlFor="checkbox1" />
                        </span>
                      </td>
                      <td>{item.idBooking}</td>
                      <td>{item.dateStart}</td>
                      <td>{item.dateEnd}</td>
                      <td>{item.deposit}</td>
                      <td>{item.total}</td>
                      <td>
                        <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                      </td>
                    </tr>
                    )} 
                   
                  </tbody>
                </table>
                <div className="clearfix">
                  <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                  <ul className="pagination">
                    <li className="page-item disabled"><a href="#">Previous</a></li>
                    <li className="page-item"><a href="#" className="page-link">1</a></li>
                    <li className="page-item"><a href="#" className="page-link">2</a></li>
                    <li className="page-item active"><a href="#" className="page-link">3</a></li>
                    <li className="page-item"><a href="#" className="page-link">4</a></li>
                    <li className="page-item"><a href="#" className="page-link">5</a></li>
                    <li className="page-item"><a href="#" className="page-link">Next</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Edit Modal HTML */}
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
          {/* Edit Modal HTML */}
          <div id="editEmployeeModal" className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">
                <form>
                  <div className="modal-header">
                    <h4 className="modal-title">Edit Employee</h4>
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
                    <input type="submit" className="btn btn-info" defaultValue="Save" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Delete Modal HTML */}
          <div id="deleteEmployeeModal" className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">
                <form>
                  <div className="modal-header">
                    <h4 className="modal-title">Delete Employee</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  </div>
                  <div className="modal-body">
                    <p>Are you sure you want to delete these Records?</p>
                    <p className="text-warning"><small>This action cannot be undone.</small></p>
                  </div>
                  <div className="modal-footer">
                    <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                    <input type="submit" className="btn btn-danger" defaultValue="Delete" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
    export default  ConTractManagement;
