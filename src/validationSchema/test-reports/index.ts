import * as yup from 'yup';

export const testReportValidationSchema = yup.object().shape({
  name: yup.string().required(),
  result: yup.string().required(),
  date: yup.date().required(),
  patient_id: yup.string().nullable().required(),
  doctor_id: yup.string().nullable().required(),
  hospital_id: yup.string().nullable().required(),
});
