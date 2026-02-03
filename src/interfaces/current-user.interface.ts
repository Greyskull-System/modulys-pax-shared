export interface ICurrentUser {
  id: string;
  email: string;
  name: string;
  companyId: string;
  branchId?: string;
  roleId: string;
  isAdmin: boolean;
  permissions: string[];
}
