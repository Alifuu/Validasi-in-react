import React from 'react';
import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const MyForm = () => {
  return (




    <div >
        <h1>Validasi In React JS</h1>
        <Formik
         initialValues={{
            email: '',
            password: ''
         }}
         validationSchema={Yup.object({
            email: Yup.string().email('invalid email').required('Required'),
            password: Yup.string().required('Required').min(8, 'Minimal 8 huruf'),

         })}onSubmit={(values, {setSubmitting})=>{
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false);
            }, 400);
         }}
        >
            <Form>
                <div className='email'>
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                </div>
                <div className='pw'>
                <label htmlFor="password">password</label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
                </div>

                <button className='submit' type="submit">Submit</button>
            </Form>
        </Formik>
    </div>
  )
}

export default MyForm