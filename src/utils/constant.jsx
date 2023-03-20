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
  continue: 'Continue',
  staffName: 'Staff Name:',
  status: 'Status: Not Marked!',
  total: 'Total',
  advance: 'Advance',
  balance: 'Balance',
  staffDetails: [
    {
      id: 1,
      name: 'ABC XYZ',
      balance: 0,
      advance: 4000,
    },
    {
      id: 2,
      name: 'ABC XYZ',
      balance: 0,
      advance: 2000,
    },
    {
      id: 3,
      name: 'ABC XYZ',
      balance: 500,
      advance: 0,
    },
    {
      id: 4,
      name: 'ABC XYZ',
      balance: 1000,
      advance: 0,
    },
    {
      id: 5,
      name: 'ABC XYZ',
      balance: 0,
      advance: 3230,
    },
  ],
  contactNumberLabel: 'Enter Staff Contact Number:',
  nameLabel: 'Enter Staff Name:',
  namePlaceHolder: 'Enter Full Name',
  contactPlaceHolder: 'Phone Number',
};
export const AttendanceScreenConstant = {
  title: 'Attendance Details',
};
export const SettingsScreenConstant = {
  title: 'Settings',
};

export const NavigationRoutes = {
  Main: 'Main',
  AttendanceHome: 'AttendanceHome',
  IRCTC: 'Irctc',
  Default: 'Default',
  Components: 'Components',
};
