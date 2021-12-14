import { Formik, Form, Field, FormikHelpers } from "formik"
import * as Yup from "yup"
import "./login.css"

interface FormValues {
  email: string
  password: string
}
const initialValues: FormValues = { email: "", password: "" }

const LoginValidation = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[A-Z]+/, "Needs onne uppercase character")
    .matches(/[a-z]+/, "Needs onne lowercase character")
    .matches(/\W|_/g, "Needs one special character")
    .matches(/\d+/, "Needs one number"),
})

const renderError = (message?: string) => {
  // if (!message) return null
  // return <p className='error-mesage'>{message}</p>
  return message ? <p className='error-message'>{message}</p> : null
}

const Login = () => (
  <div className='loginContainer'>
    <Formik
      initialValues={initialValues}
      validationSchema={LoginValidation}
      onSubmit={(
        values: FormValues,
        { setSubmitting }: FormikHelpers<FormValues>
      ) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 500)
      }}
    >
      {({ errors, isValid, dirty }) => {
        console.log(errors.password)

        return (
          <Form className='loginForm'>
            <div className='formField'>
              <label> Email</label>
              <Field
                id='email'
                name='email'
                type='text'
                placeholder='Enter your email'
                autoComplete='off'
                errors={errors}
                className={errors.email ? "errorInput" : "defaultInput "}
              />
              {renderError(errors.email)}
            </div>

            <div className='formField'>
              <label> Password</label>
              <Field
                id='password'
                name='password'
                type='password'
                placeholder='Enter your password'
                autoComplete='off'
                errors={errors}
                className={errors.password ? "errorInput" : "defaultInput"}
              />
              {renderError(errors.password)}
            </div>

            <button disabled={!(isValid && dirty)}>Signin</button>
          </Form>
        )
      }}
    </Formik>
  </div>
)

export default Login
