import "../Task/AddTasks.css"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { Task } from "../../common/interface/Task"
import { useUpdateTaskMutation } from "../../state/task/tasks-api"

interface EditTaskProps {
  curentTask: Task

  setEditing: (value: boolean) => void
}
const EditTask = ({
  curentTask: { id, title, timeStart, timeEnd },

  setEditing,
}: EditTaskProps) => {
  const [updateTask] = useUpdateTaskMutation()

  const savedValues = {
    id: id,
    title: title,
    timeStart: timeStart,
    timeEnd: timeEnd,
  }
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
        }
        updateTask(updatetaskData)
      }}
    >
      {(formik) => {
        return (
          <Form>
            <div className='edit-task_controls'>
              <div className='edit-task_control'>
                <label>Task </label>
                <Field type='text' name='title' autoComplete='off' />
                <br></br>
                <ErrorMessage name='title' />
              </div>
              <div className='timePicker'>
                <div className='edit-task_control'>
                  <label>Time Start</label>
                  <Field
                    type='time'
                    name='timeStart'
                    autoComplete='off'
                    style={{ marginRight: "20px" }}
                  />
                  <br></br>
                  <ErrorMessage name='timeStart' />
                </div>
                <div className='edit-task_control'>
                  <label>Time End</label>
                  <Field type='time' name='timeEnd' autoComplete='off' />
                  <br></br>
                  <ErrorMessage name='timeEnd' />
                </div>
              </div>
            </div>
            <div className='edit-task_actions'>
              <button type='submit'>Update Task</button>
              <button
                onClick={() => {
                  setEditing(false)
                }}
              >
                Cancel Update
              </button>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

export default EditTask
