import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux'
import {addTodo} from '../../store/rooteReducer.mjs'
import styles from './TodoForm.module.css';

function TodoForm() {
  const dispatch = useDispatch()
  
  return (
    <div className={styles.todoFormContainer}>
      <Formik
        initialValues={{ todoInput: '', }}
        /////////////////////////////////////
        validate={values => {
          const errors = {};
          if (!values.todoInput) {
            errors.todoInput = 'Required';
          } else if (values.todoInput.length < 5) {
            errors.todoInput = 'Must be 5 characters or more';
          }
          return errors;
        }}
        ////////////////////////////////////
        onSubmit={(values, { resetForm }) => {
          dispatch(addTodo(values.todoInput));
          resetForm(); // очищает поле
          //setSubmitting(false), если:
          //есть асинхронный код
          //ты делаешь fetch / axios
          //используешь setTimeout
          //сабмит длится во времени
          /* onSubmit={async (values, { setSubmitting }) => {
                await api.send(values);
                setSubmitting(false);
          }} */
          /* onSubmit={(values, { setSubmitting }) => {
               fetch(...).finally(() => {
               setSubmitting(false);
            });
          }} */
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="todoInput" />
            <ErrorMessage name="todoInput" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default TodoForm;