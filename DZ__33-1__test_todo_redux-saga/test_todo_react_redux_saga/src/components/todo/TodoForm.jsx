import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux'
import {addTodoRequested} from '../../store/actions/actions'
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
          dispatch(addTodoRequested(values.todoInput));
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
        {({ isSubmitting, touched, errors }) => (
          <Form>
            <div className={styles.inputBlock}>
              <Field type="text" name="todoInput" data-testid="todo-input"/> <br />
              {touched.todoInput && errors.todoInput && (
                <div className={styles.error}>{errors.todoInput}</div>
              )}
            </div>
            <button type="submit" disabled={isSubmitting} data-testid="todo-add">
              Додати
            </button>

            {/* <ErrorMessage name="todoInput" component="div" /> */}
          </Form>

        )}
      </Formik>
    </div>
  )
}
export default TodoForm;