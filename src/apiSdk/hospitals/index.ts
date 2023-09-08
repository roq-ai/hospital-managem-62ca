import axios from 'axios';
import queryString from 'query-string';
import { HospitalInterface, HospitalGetQueryInterface } from 'interfaces/hospital';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getHospitals = async (
  query?: HospitalGetQueryInterface,
): Promise<PaginatedInterface<HospitalInterface>> => {
  const response = await axios.get('/api/hospitals', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createHospital = async (hospital: HospitalInterface) => {
  const response = await axios.post('/api/hospitals', hospital);
  return response.data;
};

export const updateHospitalById = async (id: string, hospital: HospitalInterface) => {
  const response = await axios.put(`/api/hospitals/${id}`, hospital);
  return response.data;
};

export const getHospitalById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/hospitals/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteHospitalById = async (id: string) => {
  const response = await axios.delete(`/api/hospitals/${id}`);
  return response.data;
};
