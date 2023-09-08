import axios from 'axios';
import queryString from 'query-string';
import { PatientInterface, PatientGetQueryInterface } from 'interfaces/patient';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPatients = async (query?: PatientGetQueryInterface): Promise<PaginatedInterface<PatientInterface>> => {
  const response = await axios.get('/api/patients', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPatient = async (patient: PatientInterface) => {
  const response = await axios.post('/api/patients', patient);
  return response.data;
};

export const updatePatientById = async (id: string, patient: PatientInterface) => {
  const response = await axios.put(`/api/patients/${id}`, patient);
  return response.data;
};

export const getPatientById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/patients/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePatientById = async (id: string) => {
  const response = await axios.delete(`/api/patients/${id}`);
  return response.data;
};
