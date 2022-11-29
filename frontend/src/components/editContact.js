import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Field } from "formik";
export default function EditContact(props) {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const initialState = {
    name: "",
    address: "",
    phone: "",
    mobile_phone: "",
    email: "",
  };
  const [data, setData] = useState(initialState);
  const { name, address, phone, mobile_phone, email } = data;
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getSingleContact(id);
    }
  }, [id]);
  const getSingleContact = async (id) => { // ONLY SİNGLE CONTACT FETCH
    const res = await axios.get(`http://localhost:5000/api/${id}`);

    if (res.status === 200) {
      setData({ ...res.data });
    }
  };

  const uptadeContact = async (data, id) => {  // UPTADE METHOD
    try {
      const res = await axios.put(`http://localhost:5000/api/${id}`, data);
      if (res.status === 202) {
        toast.success("Contact uptated");
        setError(null);
        navigate("/");
      }
    } catch (error) {
      setError(error);
    }
  };

  const getErrorView = () => {
    return (
      <div>
        <h1>Name or phone must be unique!</h1>
        <button className="btn btn-danger " onClick={() => navigate("/")}>
          Try again
        </button>
      </div>
    );
  };
  const editContact = () => {
    return (
      <Formik
        initialValues={{
          name: name,
          address: address,
          phone: phone,
          mobile_phone: mobile_phone,
          email: email,
        }}
        enableReinitialize={true}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Name Required";
          }
          if (!values.address) {
            errors.address = "Address Required";
          }
          if (!values.phone) {
            errors.phone = "Phone Required";
          } else if (values.phone.length > 11 || values.phone.length < 11) {
            errors.phone = "Phone is wrong format.";
          }
          if (!values.email) {
            errors.email = " Email Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(async () => {
            try {
              await uptadeContact(values, id);
            } catch (err) {
              setError(err);
            }

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
        }) => (
          <div className="container">
            <form onSubmit={handleSubmit} method="PUT">
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label htmlFor="name">Name</label>
                  <Field id="name" name="name" className="form-control" />
                  {errors.name}
                </div>
              </div>

              <div className="form-group col-md-12">
                <label htmlFor="address">Address</label>
                <Field id="address" name="address" className="form-control" />
                {errors.address}
              </div>

              <div className="form-row">
                <div className="form-group col-md-12">
                  <label htmlFor="phone">Phone</label>
                  <Field id="phone" name="phone" className="form-control" />
                  {errors.phone}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-12">
                  <label htmlFor="mobilephone">Mobile Phone</label>
                  <Field
                    id="mobile_phone"
                    name="mobile_phone"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-12">
                  <label htmlFor="email">Email</label>
                  <Field id="email" name="email" className="form-control" />
                  {errors.email}
                </div>
              </div>

              <input
                type="submit"
                className="btn btn-danger btn-block my-3"
                value="Edit Contact"
              />
            </form>
          </div>
        )}
      </Formik>
    );
  };
  return <div>{error ? getErrorView() : editContact()}</div>;
}
