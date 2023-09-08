import { HospitalInterface } from 'interfaces/hospital';
import { GetQueryInterface } from 'interfaces';

export interface MedicineInterface {
  id?: string;
  name: string;
  quantity: number;
  expiry_date: any;
  manufacturer: string;
  hospital_id: string;
  created_at?: any;
  updated_at?: any;

  hospital?: HospitalInterface;
  _count?: {};
}

export interface MedicineGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  manufacturer?: string;
  hospital_id?: string;
}
