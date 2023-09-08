import { AppointmentInterface } from 'interfaces/appointment';
import { MedicineInterface } from 'interfaces/medicine';
import { PatientInterface } from 'interfaces/patient';
import { TestReportInterface } from 'interfaces/test-report';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface HospitalInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  appointment?: AppointmentInterface[];
  medicine?: MedicineInterface[];
  patient?: PatientInterface[];
  test_report?: TestReportInterface[];
  user?: UserInterface;
  _count?: {
    appointment?: number;
    medicine?: number;
    patient?: number;
    test_report?: number;
  };
}

export interface HospitalGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
