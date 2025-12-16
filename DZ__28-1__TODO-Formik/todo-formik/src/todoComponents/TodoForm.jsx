import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './TodoForm.module.css';

function TodoForm({ addTodo }) {
  /* const [text, setText] = useState('');
  const onSabmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  }; */
  return (
    <div className={styles.todoFormContainer}>
      {/* <form className="" onSubmit={onSabmitHandler}>
        <input placeholder="Enter new todo" type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit" className="">Send</button>
      </form> */}

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
          addTodo(values.todoInput);
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