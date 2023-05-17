import * as yup from 'yup';
import 'yup-phone';

export const schema = yup.object().shape({
  avatar: yup.string(),
  name: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required(),
  number: yup
    .string()
    .trim()
    // .matches(
    //   /^((\+)?(3)?(8)?[- ]?)?(\(?\d{3}\)?[- ]?)?\d{3}[- ]?\d{2}[- ]?\d{2}$/,
    //   'Phone number must be a valid phone number for region UA, digits and can contain spaces, dashes, parentheses and can start with +'
    // )
    .phone(
      'UA',
      true,
      'Phone number must be a valid phone number for region UA, digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

// +380 ХХ ХХХ ХХ ХХ
// +380-XX-XXX-XX-XX
// 380-XX-XXX-XX-XX
// 380 ХХ ХХХ ХХ ХХ
// `/^((\+)?(3)?(8)?[\- ]?)?(\(?\d{3}\)?[\- ]?)?\d{3}[\- ]?\d{2}[\- ]?\d{2}$/`
