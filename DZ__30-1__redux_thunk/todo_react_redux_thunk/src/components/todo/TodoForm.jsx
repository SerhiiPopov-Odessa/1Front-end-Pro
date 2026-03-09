import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux'
import { addTodoThunk } from '../../store/thunks';
import styles from './TodoForm.module.css';
import clsx from "clsx";

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
          dispatch(addTodoThunk(values.todoInput));
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
                  <Form className="w-[90%] xl:w-[50%] flex flex-wrap items-center gap-4" >
                    <div className={clsx("flex-1 min-w-[200px]",styles.inputBlock)}>
                      <Field type="text" name="todoInput" className="w-full border rounded px-3 py-2"/> 
                    </div>
                    <button type="submit" disabled={isSubmitting} className="px-6 py-2 bg-blue-500 text-white rounded shrink-0 flex items-center justify-center">
                      Submit
                    </button>
                    {touched.todoInput && errors.todoInput && (
                      <div className={clsx("basis-full text-red-500 text-sm",styles.error)}>{errors.todoInput}</div>
                    )}
        
                    {/* <ErrorMessage name="todoInput" component="div" /> */}
                  </Form>
        
                )}
      </Formik>
    </div>
  )
}
export default TodoForm;