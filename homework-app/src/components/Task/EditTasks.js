import '../Task/AddTasks.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
const EditTask = (props) => {
  const { id, title, timeStart, timeEnd } = props.curentTask;
  // console.log(props.curentTask);
  const savedValues = {
    id: id,
    title: title,
    timeStart: timeStart,
    timeEnd: timeEnd,
  };
  return (
    <Formik
      initialValues={savedValues}
      enableReinitialize={true}
      onSubmit={(values) => {
        const updatetaskData = {
          id: values.id,
          title: values.title,
          timeStart: values.timeStart,
          timeEnd: values.timeEnd,
        };
        props.updateTask(id, updatetaskData);
      }}
    >
      {(formik) => {
        console.log('formik props', formik);
        return (
          <Form>
            <div className='new-task_controls'>
              <div className='new-task_control'>
                <label>Task </label>
                <Field type='text' name='title' autoComplete='off' />
                <br></br>
                <ErrorMessage name='title' />
              </div>
              <div className='new-task_control'>
                <label>Time Start</label>
                <Field type='time' name='timeStart' autoComplete='off' />
                <br></br>
                <ErrorMessage name='timeStart' />
              </div>
              <div className='new-task_control'>
                <label>Time End</label>
                <Field type='time' name='timeEnd' autoComplete='off' />
                <br></br>
                <ErrorMessage name='timeEnd' />
              </div>
            </div>
            <div className='new-task_actions'>
              <button type='submit'>Update Task</button>
              <button
                onClick={() => {
                  props.setEditing(false);
                }}
              >
                Cancel Update
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default EditTask;
