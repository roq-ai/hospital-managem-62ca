import axios from 'axios';
import queryString from 'query-string';
import { MedicineInterface, MedicineGetQueryInterface } from 'interfaces/medicine';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMedicines = async (
  query?: MedicineGetQueryInterface,
): Promise<PaginatedInterface<MedicineInterface>> => {
  const response = await axios.get('/api/medicines', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createMedicine = async (medicine: MedicineInterface) => {
  const response = await axios.post('/api/medicines', medicine);
  return response.data;
};

export const updateMedicineById = async (id: string, medicine: MedicineInterface) => {
  const response = await axios.put(`/api/medicines/${id}`, medicine);
  return response.data;
};

export const getMedicineById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/medicines/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteMedicineById = async (id: string) => {
  const response = await axios.delete(`/api/medicines/${id}`);
  return response.data;
};
