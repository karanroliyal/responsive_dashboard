import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [

  {
    displayName: 'Dashboard',
    iconName: 'solar:atom-line-duotone',
    route: '/dashboard',
  },
  {
    displayName: 'Live Monitor',
    iconName: 'solar:widget-add-line-duotone',
    route: 'live-monitor',
  },
  {
    displayName: 'PGs',
    iconName: 'fluent:home-person-24-regular',
    route: 'properties',

  },
  {
    displayName: 'Pg Rooms',
    iconName: 'solar:screencast-2-line-duotone',
    route: 'pg-rooms',
  },
  {
    displayName: 'Tenents',
    iconName: 'mdi:account-group-outline',
    route: 'tenants',
  },
  {
    displayName: 'owners',
    iconName: 'solar:user-id-line-duotone',
    route: 'owners',
  },
  {
    displayName: 'Plan',
    iconName: 'solar:document-text-line-duotone',
       
        route: 'plans',
  },
  {
    displayName: 'Setting',
    iconName: 'solar:clapperboard-edit-line-duotone',
   
        route: 'setting',
  }

]


// https://icon-sets.iconify.design/solar/?icon-filter=home