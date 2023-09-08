import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  date: yup.date().required(),
  time: yup.date().required(),
  doctor_id: yup.string().nullable().required(),
  patient_id: yup.string().nullable().required(),
  hospital_id: yup.string().nullable().required(),
});
