export function replaceQueryParam(query: string, param: string, value: string): string {
  const paramRegex = new RegExp(`\\$${param}`, 'g');
  return query.replace(paramRegex, `'${value}'`);
}

// Example usage:
// const query = "MATCH (people:People)-[:MANAGED_BY]->(manager:Account) WHERE manager.id = $managerId";
// const result = replaceQueryParam(query, 'managerId', '12345');
// console.log(result);
// Output: "MATCH (people:People)-[:MANAGED_BY]->(manager:Account) WHERE manager.id = '12345'"