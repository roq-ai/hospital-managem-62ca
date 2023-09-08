import { UserInterface } from 'interfaces/user';
import { PatientInterface } from 'interfaces/patient';
import { HospitalInterface } from 'interfaces/hospital';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  date: any;
  time: any;
  doctor_id: string;
  patient_id: string;
  hospital_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  patient?: PatientInterface;
  hospital?: HospitalInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  doctor_id?: string;
  patient_id?: string;
  hospital_id?: string;
}
