export const MainScreen = {
  mainScreenTitle: 'Management Application',
  AppList: [
    {
      id: 'attendance',
      name: 'Attendance',
      uri: require('../images/react_logo.png'),
      navigation: 'AttendanceHome',
    },
    {
      id: 'billPayment',
      name: 'Bill',
      uri: require('../images/react_logo.png'),
      navigation: 'Default',
    },
    {
      id: 'data',
      name: 'Data',
      uri: require('../images/react_logo.png'),
      navigation: 'Default',
    },
    {
      id: 'irctc',
      name: 'IRCTC',
      uri: require('../images/react_logo.png'),
      navigation: 'Irctc',
    },
    {
      id: 'components',
      name: 'COMPONENTS',
      uri: require('../images/react_logo.png'),
      navigation: 'Components',
    },
    {
      id: 'dummy',
      name: 'Dummy',
      uri: require('../images/react_logo.png'),
      //add navigation in future
      navigation: 'Default',
    },
  ],
};

export const AttendanceScreen = {
  attendanceScreenTitle: 'AttendanceHome',
};

export const StaffScreenConstant = {
  title: 'Staff Details',
  addStaff: 'Add Staff',
  paymentLog: 'Payment Log',
  continue: 'Continue',
  staffName: 'Staff Name:',
  status: 'Status: Not Marked!',
  total: 'Total',
  advance: 'Advance',
  balance: 'Balance',
  totalBalance: 'Total Balance :',
  makePayment: 'Make Payment',
  staffDetails: [
    {
      id: 1,
      name: 'ABC XYZ',
      balance: 0,
      advance: 4000,
      status: 'absent',
    },
    {
      id: 2,
      name: 'QAZ PLM',
      balance: 0,
      advance: 2000,
      status: 'halfday',
    },
    {
      id: 3,
      name: 'WSX OJN',
      balance: 500,
      advance: 0,
      status: '',
    },
    {
      id: 4,
      name: 'EDC IJN',
      balance: 1000,
      advance: 0,
      status: 'present',
    },
    {
      id: 5,
      name: 'RFV UHB',
      balance: 0,
      advance: 3230,
      status: '',
    },
    {
      id: 6,
      name: 'TGB YHN',
      balance: 0,
      advance: 0,
      status: 'present',
    },
  ],
  contactNumberLabel: 'Enter Staff Contact Number:',
  nameLabel: 'Enter Staff Name:',
  namePlaceHolder: 'Enter Full Name',
  contactPlaceHolder: 'Phone Number',
};
export const AttendanceScreenConstant = {
  title: 'Attendance Details',
  staffDetails: 'Staff Details',
  nameLabel: 'Name',
  notMarked: 'not marked*',
  present: 'Present',
  absent: 'Absent',
  halfDay: 'Half-Day',
  reset: 'Reset',
};
export const SettingsScreenConstant = {
  title: 'Settings',
  list: [
    {id: 1, name: 'Help'},
    {id: 2, name: 'About'},
    {id: 3, name: 'Contact'},
    {id: 4, name: 'Language'},
    {id: 5, name: 'Theme'},
    {id: 6, name: 'Profile'},
  ],
};

export const NavigationRoutes = {
  Main: 'Main',
  AttendanceHome: 'AttendanceHome',
  IRCTC: 'Irctc',
  Default: 'Default',
  Components: 'Components',
};
