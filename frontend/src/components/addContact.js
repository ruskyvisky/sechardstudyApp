import React, { Component } from "react";
import { Formik } from "formik";
export default class AddContact extends Component {
  render() {
    return (
      <div>
        <h1 className="m-3">Add Contact</h1>
        <Formik
          initialValues={{
            name: "",
            address: "",
            phone: "",
            mobile_phone: "",
            email: "",
          }}
          validate={(values) => {
            const errors = {};
            if(!values.name){
             errors.name = "Name Required"     
            }
            if(!values.address){
              errors.address = "Address Required"
            }
            if(!values.phone){
              errors.phone = "Phone Required"
            }
            else if(values.phone.length > 11 || values.phone.length < 11 ){
              errors.phone = "Phone is wrong format."
            }
            if (!values.email) {
              errors.email=" Email Required"
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} method="POST" >
              <div className="mb-3">
                <label htmlFor="name" className="form-label mx-3">
                  Contact Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                />
                  {errors.name && touched.name && errors.name } 
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label mx-3">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={values.address}
                  onChange={handleChange}
                />
                {errors.address && touched.address && errors.address }
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label mx-3">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
                {errors.phone && touched.phone && errors.phone }
              </div>
              <div className="mb-3">
                <label htmlFor="mobile_phone" className="form-label mx-3">
                  Mobile Phone
                </label>
                <input
                  type="tel"
                  name="mobile_phone"
                  value={values.mobile_phone}
                  onChange={handleChange}
                />
                  {errors.mobile_phone && touched.mobile_phone && errors.mobile_phone }
              </div>
              <div className="mb-3">
                        <label htmlFor="email" className="form-label mx-3">
                          Email
                        </label>
                        <input type="mail" id="email" 
                        value={values.email}
                        onChange={handleChange}
                        />
                         {errors.email && touched.email && errors.email}
                      </div>
             
             
              <button type="submit" className="btn btn-success m-3" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}
