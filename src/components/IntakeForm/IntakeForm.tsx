// Copyright 2022 Ryan Diaz - All rights reserved
// the form component itself

import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./styles/form.scss";
import {
  withFormik,
  FormikProps,
  FormikErrors,
  Form,
  Field,
  ErrorMessage,
} from "formik";
import {
  AccountNameValidationResult,
  isValidUsername,
} from "./helpers/account-validation-facade";
import {
  TwitchAccount,
  TwitterAccount,
} from "./helpers/providers/account-providers";

interface SimpleFormProps {
  shouldValidate: boolean;
}

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  twitterHandle: string;
  twitchHandle: string;
}

// formik inner form
const InnerForm = (props: FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting } = props;
  const [shouldValidate, setShouldValidate] = useState(false);
  return (
    <div className="form">
      <Form>
        <img src="/resources/header-logo.png" alt="a cute chinchilla (probs)" />

        <div className="fieldWrapper">
          <div className="labelTag">First Name</div>
          <Field type="text" name="firstName" placeholder="John" />
          <br />
          {touched.firstName && errors.firstName && (
            <div className="errorMessage">{errors.firstName}</div>
          )}
        </div>

        <div className="fieldWrapper">
          <div className="labelTag">Last Name</div>
          <Field type="text" name="lastName" placeholder="Doe" />
          <br />
          {touched.lastName && errors.lastName && (
            <div className="errorMessage">{errors.lastName}</div>
          )}
        </div>

        <div className="fieldWrapper">
          <div className="labelTag">Email Address</div>
          <Field type="email" name="email" placeholder="email@email.com" />
          <br />
          {touched.email && errors.email && (
            <div className="errorMessage">{errors.email}</div>
          )}
        </div>

        <div className="fieldWrapper">
          <div className="labelTag">Company Name</div>
          <Field type="text" name="companyName" placeholder="Company Name" />
          <br />
          {touched.companyName && errors.companyName && (
            <div className="errorMessage">{errors.companyName}</div>
          )}
        </div>

        <div className="fieldWrapper">
          <div className="labelTag">Twitter Username</div>
          <Field
            type="text"
            name="twitterHandle"
            placeholder="twitteraccount"
            validate={async (value: any) => {
              if (shouldValidate) {
                const twitterResult: AccountNameValidationResult =
                  await isValidUsername(TwitterAccount, value);
                if (!twitterResult.accountExists) {
                  return twitterResult.errorMessage;
                }
              }
            }}
          />
          <br />
          {touched.twitterHandle && errors.twitterHandle && (
            <div className="errorMessage">{errors.twitterHandle}</div>
          )}
        </div>

        <div className="fieldWrapper">
          <div className="labelTag">Twitch Username</div>
          <Field
            type="text"
            name="twitchHandle"
            placeholder="twitchhandle"
            validate={async (value: any) => {
              if (shouldValidate) {
                const twitchResult: AccountNameValidationResult =
                  await isValidUsername(TwitchAccount, value);
                if (!twitchResult.accountExists) {
                  return twitchResult.errorMessage;
                }
              }
            }}
          />
          <br />
          {touched.twitchHandle && errors.twitchHandle && (
            <div className="errorMessage">{errors.twitchHandle}</div>
          )}
        </div>

        <br />
        <button
          type="submit"
          disabled={isSubmitting}
          className="submitButton"
          onClick={() => setShouldValidate(true)}
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

const IntakeForm = withFormik<{}, FormValues>({
  // if there was a need for any props to be populated conditionally
  mapPropsToValues: (props) => {
    return {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      twitterHandle: "",
      twitchHandle: "",
    };
  },

  // basic - real-time form validation here
  validate: async (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};

    if (!values.firstName) {
      errors.firstName = "First name is required";
    }

    if (!values.lastName) {
      errors.lastName = "Last name is required";
    }

    if (!values.email) {
      errors.email = "Email address is required";
    }

    if (!values.companyName) {
      errors.companyName = "Email address is required";
    }

    return errors;
  },

  // just logging values to the console for now
  // then redirect to submission success /submitted
  handleSubmit: (values) => {
    console.log(values);
    return <Navigate to="/submitted" />;
  },
})(InnerForm);

export default IntakeForm;
