import { PatientInterface } from 'interfaces/patient';
import { UserInterface } from 'interfaces/user';
import { HospitalInterface } from 'interfaces/hospital';
import { GetQueryInterface } from 'interfaces';

export interface TestReportInterface {
  id?: string;
  name: string;
  result: string;
  date: any;
  patient_id: string;
  doctor_id: string;
  hospital_id: string;
  created_at?: any;
  updated_at?: any;

  patient?: PatientInterface;
  user?: UserInterface;
  hospital?: HospitalInterface;
  _count?: {};
}

export interface TestReportGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  result?: string;
  patient_id?: string;
  doctor_id?: string;
  hospital_id?: string;
}
