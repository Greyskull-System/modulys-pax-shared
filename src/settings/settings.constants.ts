/**
 * Códigos de configurações do sistema
 * Centralizados aqui para evitar typos e facilitar autocomplete
 * 
 * SETTINGS = Configurações simples (valores, parâmetros)
 * FEATURES = Funcionalidades que podem ser habilitadas/desabilitadas
 * BUSINESS_RULES = Regras de negócio customizáveis (estratégias)
 */
export const SETTINGS = {
  // ============ CORE ============
  CORE: {
    TIMEZONE: 'core.timezone',
    DATE_FORMAT: 'core.date_format',
    CURRENCY: 'core.currency',
  },

  // ============ HR ============
  HR: {
    // Férias
    VACATION_INCLUDE_DSR: 'hr.vacation.include_dsr',
    VACATION_ADVANCE_DAYS: 'hr.vacation.advance_days',
    VACATION_MIN_DAYS: 'hr.vacation.min_days',
    VACATION_MAX_SPLIT: 'hr.vacation.max_split',

    // Folha de pagamento
    PAYROLL_CUTOFF_DAY: 'hr.payroll.cutoff_day',
    PAYROLL_PAYMENT_DAY: 'hr.payroll.payment_day',
    PAYROLL_OVERTIME_RATE: 'hr.payroll.overtime_rate',
    PAYROLL_NIGHT_SHIFT_RATE: 'hr.payroll.night_shift_rate',

    // Funcionários
    EMPLOYEE_REGISTRATION_PREFIX: 'hr.employee.registration_prefix',
    EMPLOYEE_AUTO_REGISTRATION: 'hr.employee.auto_registration',
  },
} as const;

/**
 * Feature Flags - Funcionalidades que podem ser habilitadas/desabilitadas por empresa
 * 
 * Estrutura: modulo.funcionalidade ou modulo.funcionalidade.subfuncionalidade
 * 
 * Exemplo de uso no código:
 *   if (await settingsService.isFeatureEnabled(companyId, FEATURES.HR.EMPLOYEES)) {
 *     // Mostra menu de funcionários
 *   }
 */
export const FEATURES = {
  // ============ CORE ============
  CORE: {
    // Funcionalidades principais
    MULTI_BRANCH: 'core.multi_branch',             // Suporte a múltiplas filiais
    TWO_FACTOR_AUTH: 'core.two_factor_auth',       // Autenticação 2FA
    AUDIT_LOG: 'core.audit_log',                   // Log de auditoria detalhado
    API_ACCESS: 'core.api_access',                 // Acesso via API externa
  },

  // ============ HR - RECURSOS HUMANOS ============
  HR: {
    // Funcionalidades de alto nível (cada uma é um "submódulo")
    EMPLOYEES: 'hr.employees',                     // Gestão de funcionários
    VACATIONS: 'hr.vacations',                     // Gestão de férias
    PAYROLL: 'hr.payroll',                         // Folha de pagamento
    BENEFITS: 'hr.benefits',                       // Benefícios (VT, VR, etc)
    TIMESHEET: 'hr.timesheet',                     // Controle de ponto
    RECRUITMENT: 'hr.recruitment',                 // Recrutamento e seleção
    TRAINING: 'hr.training',                       // Treinamentos

    // Subfuncionalidades de Funcionários
    EMPLOYEES_DOCUMENTS: 'hr.employees.documents', // Upload de documentos
    EMPLOYEES_HISTORY: 'hr.employees.history',     // Histórico de alterações
    EMPLOYEES_DEPENDENTS: 'hr.employees.dependents', // Cadastro de dependentes

    // Subfuncionalidades de Férias
    VACATIONS_APPROVAL_FLOW: 'hr.vacations.approval_flow', // Fluxo de aprovação
    VACATIONS_CALENDAR: 'hr.vacations.calendar',   // Calendário de férias
    VACATIONS_COLLECTIVE: 'hr.vacations.collective', // Férias coletivas

    // Subfuncionalidades de Folha
    PAYROLL_AUTO_CALCULATE: 'hr.payroll.auto_calculate', // Cálculo automático
    PAYROLL_PAYSLIP: 'hr.payroll.payslip',         // Holerite online
    PAYROLL_ESOCIAL: 'hr.payroll.esocial',         // Integração eSocial

    // Subfuncionalidades de Benefícios
    BENEFITS_VT: 'hr.benefits.vt',                 // Vale transporte
    BENEFITS_VR: 'hr.benefits.vr',                 // Vale refeição/alimentação
    BENEFITS_HEALTH: 'hr.benefits.health',         // Plano de saúde
    BENEFITS_DENTAL: 'hr.benefits.dental',         // Plano odontológico

    // Portal do funcionário
    EMPLOYEE_SELF_SERVICE: 'hr.employee_self_service', // Portal do colaborador
  },

  // ============ FINANCIAL - FINANCEIRO ============
  FINANCIAL: {
    ACCOUNTS_PAYABLE: 'financial.accounts_payable',     // Contas a pagar
    ACCOUNTS_RECEIVABLE: 'financial.accounts_receivable', // Contas a receber
    CASH_FLOW: 'financial.cash_flow',                   // Fluxo de caixa
    BANK_RECONCILIATION: 'financial.bank_reconciliation', // Conciliação bancária
    INVOICING: 'financial.invoicing',                   // Faturamento
    COST_CENTER: 'financial.cost_center',               // Centro de custo
  },

  // ============ FLEET - FROTA ============
  FLEET: {
    VEHICLES: 'fleet.vehicles',                    // Cadastro de veículos
    MAINTENANCE: 'fleet.maintenance',              // Manutenção
    FUEL: 'fleet.fuel',                            // Abastecimento
    DRIVERS: 'fleet.drivers',                      // Motoristas
    TRACKING: 'fleet.tracking',                    // Rastreamento
    ROUTES: 'fleet.routes',                        // Rotas
  },

  // ============ STOCK - ESTOQUE ============
  STOCK: {
    PRODUCTS: 'stock.products',                    // Cadastro de produtos
    MOVEMENTS: 'stock.movements',                  // Movimentações
    INVENTORY: 'stock.inventory',                  // Inventário
    PURCHASE_ORDERS: 'stock.purchase_orders',      // Pedidos de compra
  },
} as const;

/**
 * Códigos de regras de negócio (para estratégias)
 */
export const BUSINESS_RULES = {
  // ============ HR ============
  HR: {
    VACATION_CALCULATION: 'hr.vacation.calculation',
    VACATION_VALIDATION: 'hr.vacation.validation',
    PAYROLL_CALCULATION: 'hr.payroll.calculation',
    PAYROLL_INSS_CALCULATION: 'hr.payroll.inss_calculation',
    PAYROLL_IRRF_CALCULATION: 'hr.payroll.irrf_calculation',
    OVERTIME_CALCULATION: 'hr.overtime.calculation',
  },
} as const;
