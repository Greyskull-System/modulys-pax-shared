/**
 * Interface base para todas as estratégias de negócio.
 * Cada estratégia recebe um contexto e retorna um resultado.
 */
export interface IStrategy<TContext, TResult> {
  /**
   * Nome único da estratégia (usado para registro e lookup)
   */
  readonly name: string;

  /**
   * Descrição da estratégia
   */
  readonly description: string;

  /**
   * Executa a estratégia
   */
  execute(context: TContext): Promise<TResult> | TResult;

  /**
   * Valida se a estratégia pode ser executada com o contexto dado
   */
  canExecute?(context: TContext): boolean;
}

/**
 * Contexto base que toda estratégia recebe
 */
export interface IStrategyContext {
  companyId: string;
  branchId?: string;
  config?: Record<string, unknown>;
}

/**
 * Metadata de uma estratégia registrada
 */
export interface IStrategyMetadata {
  name: string;
  description: string;
  module: string;
  ruleCode: string;
  isDefault: boolean;
}
