import React from 'react';
import '../Task/AddTasks.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const AddTask = (props) => {
  const initialValues = {
    title: '',
    timeStart: '',
    timeEnd: '',
  };
  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    timeStart: Yup.string().required('Required'),
    timeEnd: Yup.string().required('Required'),
  });
  const onSubmit = (values, { resetForm }) => {
    const taskData = {
      title: values.title,
      timeStart: values.timeStart,
      timeEnd: values.timeEnd,
    };
    props.addTask(taskData);
    resetForm({ values: '' });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount
    >
      {(formik) => {
        return (
          <Form className='form'>
            <div className='new-task_controls'>
              <div className='new-task_control'>
                <label>Task </label>
                <Field type='text' name='title' autoComplete='off' />
                <br></br>
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
                  <br></br>
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
                  <br></br>
                  <ErrorMessage name='timeEnd'>
                    {(msg) => <p className='error-text'>{msg}</p>}
                  </ErrorMessage>
                </div>
              </div>
            </div>
            <div className='new-task_actions'>
              <button type='submit' disabled={!formik.isValid}>
                Add Task
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddTask;
