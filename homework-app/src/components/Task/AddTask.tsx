import "../Task/AddTasks.css"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

import { useLazyAddTaskQuery } from "../../state/task/tasks-api"

interface MyFormValues {
  title: string
  timeStart: string
  timeEnd: string
}

const AddTask = () => {
  const [addTask] = useLazyAddTaskQuery()
  const initialValues: MyFormValues = {
    title: "",
    timeStart: "",
    timeEnd: "",
  }

  const titleRegex = /^[aA-zZ\s]+$/
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .matches(titleRegex, "Only alphabets are allowed")
      .min(8, "Minimum length is 8")
      .max(30, "Max length is 15")
      .required("Required"),
    timeStart: Yup.string().required("Required"),
    timeEnd: Yup.string().required("Required"),
  })
  const onSubmit = (values: MyFormValues, { resetForm }: any) => {
    const taskData = {
      title: values.title,
      timeStart: values.timeStart,
      timeEnd: values.timeEnd,
    }
    addTask(taskData)
    resetForm({ values: "" })
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount
      validateOnChange={true}
    >
      {({ isValid }) => {
        return (
          <Form className='form'>
            <div className='new-task_controls'>
              <div className='new-task_control'>
                <label>Task </label>
                <Field type='text' name='title' autoComplete='off' />
                <ErrorMessage name='title'>
                  {(msg) => <p className='error-text'>{msg}</p>}
                </ErrorMessage>
              </div>
              <div className='timePicker'>
                <div className='new-task_control'>
                  <label>Time Start</label>
                  <Field
                    type='time'
                    name='timeStart'
                    autoComplete='off'
                    className='timeInput'
                  />
                  <ErrorMessage name='timeStart'>
                    {(msg) => <p className='error-text'>{msg}</p>}
                  </ErrorMessage>
                </div>
                <div className='new-task_control'>
                  <label>Time End</label>
                  <Field
                    type='time'
                    name='timeEnd'
                    autoComplete='off'
                    className='timeInput'
                  />
                  <ErrorMessage name='timeEnd'>
                    {(msg) => <p className='error-text'>{msg}</p>}
                  </ErrorMessage>
                </div>
              </div>
            </div>
            <div className='new-task_actions'>
              <button type='submit' disabled={!isValid}>
                Add Task
              </button>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

export default AddTask
