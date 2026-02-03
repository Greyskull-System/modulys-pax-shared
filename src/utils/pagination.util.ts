import { IPaginatedResult } from '../interfaces/paginated-result.interface';

export function paginate<T>(
  data: T[],
  total: number,
  page: number,
  limit: number,
): IPaginatedResult<T> {
  const totalPages = Math.ceil(total / limit);

  return {
    data,
    meta: {
      total,
      page,
      limit,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    },
  };
}

export function calculateSkip(page: number, limit: number): number {
  return (page - 1) * limit;
}
