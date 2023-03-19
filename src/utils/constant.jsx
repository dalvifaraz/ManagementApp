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
