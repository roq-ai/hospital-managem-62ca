import * as yup from 'yup';

export const medicineValidationSchema = yup.object().shape({
  name: yup.string().required(),
  quantity: yup.number().integer().required(),
  expiry_date: yup.date().required(),
  manufacturer: yup.string().required(),
  hospital_id: yup.string().nullable().required(),
});
