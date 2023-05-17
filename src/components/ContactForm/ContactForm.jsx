import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import 'yup-phone';
import { schema } from 'shared/schemaYup';
// redux
import { addContact } from 'redux/contacts/contacts-operations';

import { BsFillTelephoneFill, BsPersonFill } from 'react-icons/bs';
import { IoMdPersonAdd } from 'react-icons/io';

import {
  Form,
  FormField,
  FieldFormik,
  ErrorMessage,
  StyledButton,
  LabelWrapper,
  LabelSpan,
} from './ContactForm.styled';

const initialValues = { name: '', number: '' };

export const ContactForm = () => {
  const dispatch = useDispatch();

  const onAddContact = data => {
    dispatch(addContact(data));
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        onAddContact({ ...values });
        resetForm();
      }}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <FormField>
          <LabelWrapper>
            <BsPersonFill />
            <LabelSpan>Name</LabelSpan>
          </LabelWrapper>
          <FieldFormik type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name" component="span" />
        </FormField>
        <FormField>
          <LabelWrapper>
            <BsFillTelephoneFill />
            <LabelSpan>Phone Number</LabelSpan>
          </LabelWrapper>
          <FieldFormik
            type="tel"
            name="number"
            placeholder="+38-050-123-45-67"
          />
          <ErrorMessage name="number" component="span" />
        </FormField>
        <StyledButton type="submit">
          <IoMdPersonAdd size="16" />
          Add contact
        </StyledButton>
      </Form>
    </Formik>
  );
};
