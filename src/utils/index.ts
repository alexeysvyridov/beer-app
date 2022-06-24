export const addUnderscore = (query: string):string => {
  if (!query) return '';

  return query.trim().split('').reduce((acc, value) => {
    if (value === ' ') {
      acc += '_'
    } else {
      acc += value;
    }

    return acc;
  }, '')
} 