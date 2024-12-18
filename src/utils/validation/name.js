const yup = require('yup');

const MIN_NAME_LENGTH = 3;

const name = yup
  .string()
  .required('Name is required')
  .min(MIN_NAME_LENGTH, `Should contain at least ${MIN_NAME_LENGTH} symbols`)
  .matches(/^[A-Z]/, 'Name must start with an uppercase letter');

module.exports = {
  name,
  nameSchema: yup.object().shape({
    name,
  }),
};