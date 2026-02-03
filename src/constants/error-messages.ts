export const ERROR_MESSAGES = {
  // Auth
  INVALID_CREDENTIALS: 'Credenciais inválidas',
  UNAUTHORIZED: 'Não autorizado',
  TOKEN_EXPIRED: 'Token expirado',
  TOKEN_INVALID: 'Token inválido',
  
  // Generic
  NOT_FOUND: 'Registro não encontrado',
  ALREADY_EXISTS: 'Registro já existe',
  INVALID_DATA: 'Dados inválidos',
  OPERATION_FAILED: 'Operação falhou',
  
  // Company/Branch
  COMPANY_NOT_FOUND: 'Empresa não encontrada',
  BRANCH_NOT_FOUND: 'Filial não encontrada',
  BRANCH_REQUIRED: 'Filial é obrigatória',
  
  // Permission
  PERMISSION_DENIED: 'Sem permissão para esta ação',
  ROLE_NOT_FOUND: 'Cargo não encontrado',

  // Employee
  EMPLOYEE_NOT_FOUND: 'Funcionário não encontrado',
  EMPLOYEE_ALREADY_EXISTS: 'Funcionário já cadastrado',
  INVALID_CPF: 'CPF inválido',
  DUPLICATE_CPF: 'CPF já cadastrado',
  DUPLICATE_REGISTRATION: 'Matrícula já cadastrada',
} as const;

export type ErrorMessageKey = keyof typeof ERROR_MESSAGES;
