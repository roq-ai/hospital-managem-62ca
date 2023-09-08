import * as yup from 'yup';

export const patientValidationSchema = yup.object().shape({
  name: yup.string().required(),
  date_of_birth: yup.date().required(),
  gender: yup.string().required(),
  address: yup.string().required(),
  phone_number: yup.string().required(),
  hospital_id: yup.string().nullable().required(),
});
