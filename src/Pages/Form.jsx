import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log("form  data", values);
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .max(3, "Password must be 3 characters or less")
      .required("Required"),
  });

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues,
      onSubmit,
      validationSchema,
    });

  return (
    <div>
      <form className="col-md-4 container fw-bold mt-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            className="form-control "
            name="email"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
          />
          {touched.email && errors.email ? (
            <div className="text-danger">{errors.email} </div>
          ) : null}
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            className="form-control"
            name="password"
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
          />
          {touched.password && errors.password ? (
            <div className="text-danger">{errors.password} </div>
          ) : null}
        </div>

        <button type="submit" className="btn btn-primary ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
