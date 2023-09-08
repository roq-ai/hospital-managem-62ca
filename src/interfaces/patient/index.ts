import { AppointmentInterface } from 'interfaces/appointment';
import { TestReportInterface } from 'interfaces/test-report';
import { HospitalInterface } from 'interfaces/hospital';
import { GetQueryInterface } from 'interfaces';

export interface PatientInterface {
  id?: string;
  name: string;
  date_of_birth: any;
  gender: string;
  address: string;
  phone_number: string;
  hospital_id: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  test_report?: TestReportInterface[];
  hospital?: HospitalInterface;
  _count?: {
    appointment?: number;
    test_report?: number;
  };
}

export interface PatientGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  gender?: string;
  address?: string;
  phone_number?: string;
  hospital_id?: string;
}
