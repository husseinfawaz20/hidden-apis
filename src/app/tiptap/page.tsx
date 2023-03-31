"use client";
import React from "react";
import { FormikContextType, FormikValues, useFormik } from "formik";
import TipTap from "./TipTap";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      description: "",
    },
    onSubmit: (values: any) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate: (values) => {
      let errors: any = {};

      if (!values.name) {
        errors.name = "Required!";
      }

      if (!values.description) {
        errors.description = "Required!";
      }

      if (!values.email) {
        errors.email = "Required!";
      } else if (
        !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
          values.email
        )
      ) {
        errors.email = "Invalid email format!";
      }

      return errors;
    },
  });
  // console.log(formik.values);
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">
          Name &nbsp;
          {formik.errors.name && <div className="error">{formik.errors.name}</div>}
        </label>
        <input id="name" type="text" placeholder="Name" onChange={formik.handleChange} value={formik.values.name} />
        <br />
        <br />
        <label htmlFor="email">
          Email &nbsp;
          {formik.errors.email && <div className="error">{formik.errors.email}</div>}
        </label>
        <input id="email" type="email" placeholder="Email" onChange={formik.handleChange} value={formik.values.email} />

        <br />

        <label htmlFor="name">
          Description &nbsp;
          {formik.errors.description && <div className="error">{formik.errors.description}</div>}
        </label>

        <TipTap form={formik} name={"description"} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;
