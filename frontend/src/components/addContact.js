import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
export default class AddContact extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-info text-light "
          type="button"
          data-toggle="modal"
          data-target="#addmodal"
        >
          {" "}
          Add New Contact
        </button>

        <div
          className="modal fade"
          id="addmodal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="addmodalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addmodal">
                  Add New Contact
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Formik
                  initialValues={{
                    name: "",
                    address: "",
                    phone: "",
                    mobile_phone: "",
                    email: "",
                  }}
                  validationSchema={Yup.object({
                    name: Yup.string().required("Name is required"),
                    address: Yup.string().required("Address is required"),
                    phone: Yup.string().required("Phone is required"),
                    mobile_phone: Yup.string().nullable(),
                    email: Yup.string().email(),
                  })}

                  onSubmit={(values,{setSubmitting,resetForm})=>{
                     console.log(values)
                  }}
                >
                  {({
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleSubmit,
                    handleReset,
                    handleChange,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label mx-3">
                          Contact Name
                        </label>
                        <input type="text" id="name" 
                        value={values.name}
                        onChange={handleChange}
                        />
                        {errors.name && touched.name (
                          <div className="input-feedback">test {errors.name}</div>
                        )}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="address" className="form-label mx-3">
                          Address
                        </label>
                        <input type="text" id="address" 
                        value={values.address}
                        onChange={handleChange}
                        />
                      </div>

                      <div className="mb-3">
                       
                        <label htmlFor="phone" className="form-label mx-3">
                          Phone
                        </label>
                        <input type="tel" name="phone" 
                         value={values.phone}
                         onChange={handleChange}
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="mobile_phone"
                          className="form-label mx-3"
                        >
                          
                          Mobile Phone
                        </label>
                        <input type="tel" name="mobile_phone" 
                        value={values.mobile_phone}
                        onChange={handleChange}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="email" className="form-label mx-3">
                          Email
                        </label>
                        <input type="mail" id="email" 
                        value={values.email}
                        onChange={handleChange}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary mx-3"
                disabled={!dirty || isSubmitting}
                >
                  Add
                </button>

                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                    </form>
                  )}
                </Formik>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
