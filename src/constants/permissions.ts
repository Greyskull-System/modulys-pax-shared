export const PERMISSIONS = {
  // Users
  USERS_VIEW: 'users:view',
  USERS_CREATE: 'users:create',
  USERS_EDIT: 'users:edit',
  USERS_DELETE: 'users:delete',

  // Roles
  ROLES_VIEW: 'roles:view',
  ROLES_CREATE: 'roles:create',
  ROLES_EDIT: 'roles:edit',
  ROLES_DELETE: 'roles:delete',

  // Employees
  EMPLOYEES_VIEW: 'employees:view',
  EMPLOYEES_CREATE: 'employees:create',
  EMPLOYEES_EDIT: 'employees:edit',
  EMPLOYEES_DELETE: 'employees:delete',

  // Benefits
  BENEFITS_VIEW: 'benefits:view',
  BENEFITS_CREATE: 'benefits:create',
  BENEFITS_EDIT: 'benefits:edit',
  BENEFITS_DELETE: 'benefits:delete',

  // Vacations
  VACATIONS_VIEW: 'vacations:view',
  VACATIONS_CREATE: 'vacations:create',
  VACATIONS_EDIT: 'vacations:edit',
  VACATIONS_APPROVE: 'vacations:approve',

  // Payroll
  PAYROLL_VIEW: 'payroll:view',
  PAYROLL_CREATE: 'payroll:create',
  PAYROLL_EDIT: 'payroll:edit',
  PAYROLL_APPROVE: 'payroll:approve',
} as const;

export type PermissionCode = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];

// Grupos de permissões por módulo
export const PERMISSION_GROUPS = {
  CORE: [
    PERMISSIONS.USERS_VIEW,
    PERMISSIONS.USERS_CREATE,
    PERMISSIONS.USERS_EDIT,
    PERMISSIONS.USERS_DELETE,
    PERMISSIONS.ROLES_VIEW,
    PERMISSIONS.ROLES_CREATE,
    PERMISSIONS.ROLES_EDIT,
    PERMISSIONS.ROLES_DELETE,
  ],
  HR: [
    PERMISSIONS.EMPLOYEES_VIEW,
    PERMISSIONS.EMPLOYEES_CREATE,
    PERMISSIONS.EMPLOYEES_EDIT,
    PERMISSIONS.EMPLOYEES_DELETE,
    PERMISSIONS.BENEFITS_VIEW,
    PERMISSIONS.BENEFITS_CREATE,
    PERMISSIONS.BENEFITS_EDIT,
    PERMISSIONS.BENEFITS_DELETE,
    PERMISSIONS.VACATIONS_VIEW,
    PERMISSIONS.VACATIONS_CREATE,
    PERMISSIONS.VACATIONS_EDIT,
    PERMISSIONS.VACATIONS_APPROVE,
    PERMISSIONS.PAYROLL_VIEW,
    PERMISSIONS.PAYROLL_CREATE,
    PERMISSIONS.PAYROLL_EDIT,
    PERMISSIONS.PAYROLL_APPROVE,
  ],
} as const;
