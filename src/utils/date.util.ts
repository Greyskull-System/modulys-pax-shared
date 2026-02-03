/**
 * Retorna a data atual no timezone de São Paulo
 */
export function nowBrazil(): Date {
  return new Date(
    new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }),
  );
}

/**
 * Formata data para exibição no padrão brasileiro
 */
export function formatDateBR(date: Date): string {
  return date.toLocaleDateString('pt-BR');
}

/**
 * Formata data e hora para exibição no padrão brasileiro
 */
export function formatDateTimeBR(date: Date): string {
  return date.toLocaleString('pt-BR');
}

/**
 * Retorna o primeiro dia do mês
 */
export function getFirstDayOfMonth(date: Date = new Date()): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

/**
 * Retorna o último dia do mês
 */
export function getLastDayOfMonth(date: Date = new Date()): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

/**
 * Calcula a diferença em dias entre duas datas
 */
export function diffInDays(start: Date, end: Date): number {
  const diffTime = Math.abs(end.getTime() - start.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Calcula a diferença em meses entre duas datas
 */
export function diffInMonths(start: Date, end: Date): number {
  return (
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth())
  );
}
