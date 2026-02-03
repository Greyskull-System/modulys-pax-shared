/**
 * Interface para pontos de extensão.
 * Permite que módulos externos adicionem comportamentos em pontos específicos.
 */
export interface IExtensionPoint<TInput, TOutput = TInput> {
  /**
   * Nome único do ponto de extensão
   */
  readonly name: string;

  /**
   * Executa todas as extensões registradas
   */
  execute(input: TInput): Promise<TOutput>;
}

/**
 * Interface para uma extensão que se conecta a um ponto de extensão
 */
export interface IExtension<TInput, TOutput = TInput> {
  /**
   * Nome da extensão
   */
  readonly name: string;

  /**
   * Prioridade de execução (menor = primeiro)
   */
  readonly priority: number;

  /**
   * Empresas para as quais esta extensão está ativa (vazio = todas)
   */
  readonly companyIds?: string[];

  /**
   * Processa o input e retorna o output
   */
  process(input: TInput): Promise<TOutput> | TOutput;

  /**
   * Verifica se a extensão deve ser executada
   */
  shouldExecute?(input: TInput, companyId: string): boolean;
}

/**
 * Hooks disponíveis para extensão
 */
export type ExtensionHook =
  // Employee hooks
  | 'employee.beforeCreate'
  | 'employee.afterCreate'
  | 'employee.beforeUpdate'
  | 'employee.afterUpdate'
  | 'employee.beforeDelete'
  // Vacation hooks
  | 'vacation.beforeCalculate'
  | 'vacation.afterCalculate'
  | 'vacation.beforeApprove'
  | 'vacation.afterApprove'
  // Payroll hooks
  | 'payroll.beforeGenerate'
  | 'payroll.afterGenerate'
  | 'payroll.beforeClose'
  | 'payroll.afterClose';
