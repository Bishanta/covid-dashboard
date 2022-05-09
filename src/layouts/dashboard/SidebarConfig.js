// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill')
  },
  {
    title: 'COVID Positive',
    path: '/dashboard/covid-positive',
    icon: getIcon('eva:person-add-fill')
  },
  {
    title: 'COVID Deaths',
    path: '/dashboard/covid-deaths',
    icon: getIcon('eva:person-delete-fill')
  },
  {
    title: 'Login Page',
    path: '/login',
    icon: getIcon('eva:lock-fill')
  },
  {
    title: 'Register Page',
    path: '/register',
    icon: getIcon('eva:person-add-fill')
  }
];

export default sidebarConfig;
