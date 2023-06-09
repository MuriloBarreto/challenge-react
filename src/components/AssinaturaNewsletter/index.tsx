import React from 'react';
import { useFormik } from 'formik';
import styles from './AssinaturaNewsletter.module.scss';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

interface MyFormValues {
  email: string;
}


export default function AssinaturaNewsletter() {
  const initialValues: MyFormValues = { email: '' };
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string().email('Não é um email valido').required('E-mail requerido')
    }),
    onSubmit: async (values: MyFormValues) => { 
      const service = process.env.REACT_APP_SERVICE?? '';
      const template = process.env.REACT_APP_TEMPLATE?? '';
      const api = process.env.REACT_APP_API_KEY?? '';
      try {
        await emailjs.send(
          service,
          template,
          {
            to_email: values.email,
            subject: 'casa verde'
          },
          api
        );
  
        alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${values.email}`);
      } catch (error) {
        console.error('Erro ao enviar o e-mail:', error);
      }
    },
  });
  return (
    <div className={styles.newsLetter}>
      <div className={styles.newsLetter__container}>
        <h1>
          Sua casa com as
          <strong>
            melhores <br /> plantas
          </strong>
        </h1>
        <p>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <input type="email" placeholder="Insira seu E-mail" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
        <button disabled={formik.errors.email ? true:false} type='submit'>Assinar Newsletter</button>
      </form>
      {formik.touched.email && formik.errors.email ? (<p className={styles.newsLetter__error}>{formik.errors.email}</p>): null}
    </div>
  );
}
