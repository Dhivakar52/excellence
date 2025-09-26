export const USER_ROLES = {
  USER: 'user',
  MANAGER: 'manager',
  JURY: 'jury',
  PRESIDENT_UNIT: 'presidentUnit',
  PRESIDENT_LEVEL: 'presidentLevel',
  ADMIN: 'admin',
} as const;

export type UserRole = typeof USER_ROLES[keyof typeof USER_ROLES];


export const ROLE_PAGES: Record<UserRole, string[]> = {
  user: ['Home', 'Notifications', 'Self Nominations', 'My Nominations','Add Nomination'],
  manager: ['Home', 'Notifications', 'Self Nominations', 'My Nominations', 'Approvals','Add Nomination'],
  jury: ['Home', 'Notifications', 'Self Nominations', 'My Nominations','Add Nomination', 'Approvals', 'Business Jury'],
  presidentUnit: ['Home', 'Notifications', 'Self Nominations', 'My Nominations','Add Nomination', 'Approvals', 'President Unit'],
  presidentLevel: ['President Level'],
  admin: ['Home', 'Notifications', 'Self Nominations','Add Nomination', 'My Nominations', 'Approvals', 'Business Jury', 'President Unit', 'President Level','Award Management','Admin Setting'],
};
