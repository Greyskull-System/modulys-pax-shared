import { IExtension, ExtensionHook } from './extension.interface';

/**
 * Registro global de extensões.
 * Gerencia todas as extensões registradas para cada hook.
 */
export class ExtensionRegistry {
  private static extensions: Map<ExtensionHook, IExtension<unknown, unknown>[]> = new Map();

  /**
   * Registra uma extensão para um hook
   */
  static register<TInput, TOutput = TInput>(
    hook: ExtensionHook,
    extension: IExtension<TInput, TOutput>,
  ): void {
    if (!this.extensions.has(hook)) {
      this.extensions.set(hook, []);
    }

    const hookExtensions = this.extensions.get(hook)!;
    hookExtensions.push(extension as IExtension<unknown, unknown>);

    // Ordena por prioridade
    hookExtensions.sort((a, b) => a.priority - b.priority);
  }

  /**
   * Executa todas as extensões de um hook
   */
  static async execute<TInput, TOutput = TInput>(
    hook: ExtensionHook,
    input: TInput,
    companyId: string,
  ): Promise<TOutput> {
    const hookExtensions = this.extensions.get(hook) || [];
    
    let result = input as unknown as TOutput;

    for (const extension of hookExtensions) {
      // Verifica se a extensão é para esta empresa
      if (extension.companyIds && extension.companyIds.length > 0) {
        if (!extension.companyIds.includes(companyId)) {
          continue;
        }
      }

      // Verifica se deve executar
      if (extension.shouldExecute && !extension.shouldExecute(result, companyId)) {
        continue;
      }

      // Executa a extensão
      result = await extension.process(result) as TOutput;
    }

    return result;
  }

  /**
   * Lista todas as extensões de um hook
   */
  static list(hook: ExtensionHook): IExtension<unknown, unknown>[] {
    return this.extensions.get(hook) || [];
  }

  /**
   * Remove uma extensão
   */
  static unregister(hook: ExtensionHook, extensionName: string): void {
    const hookExtensions = this.extensions.get(hook);
    if (!hookExtensions) return;

    const index = hookExtensions.findIndex((e) => e.name === extensionName);
    if (index !== -1) {
      hookExtensions.splice(index, 1);
    }
  }
}
