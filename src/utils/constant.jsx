export const MainScreen = {
  mainScreenTitle: 'Management Application',
  AppList: [
    {
      id: 'attendance',
      name: 'Attendance',
      uri: require('../images/react_logo.png'),
      navigation: 'Attendance',
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
  ],
};

export const AttendanceScreen = {
  attendanceScreenTitle: 'Attendance',
};

export const NavigationRoutes = {
  Attendance: 'Attendance',
  IRCTC: 'Irctc',
  Default: 'Default',
};
