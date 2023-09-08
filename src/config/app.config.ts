interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['System Administrator', 'Doctor', 'Pharmacist', 'Nurse'],
  tenantName: 'Hospital',
  applicationName: 'Hospital Management ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read the availability of doctors',
    'Manage appointments',
    'Read test reports',
    'Read medication records',
  ],
  ownerAbilities: ['Manage hospital records', 'Invite Doctors, Pharmacists, and Nurses to join the application'],
};
