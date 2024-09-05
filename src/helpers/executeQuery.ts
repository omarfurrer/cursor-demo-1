export function executeQueries(queries: string[]): Promise<void[]> {
  const executeQuery = (query: string): Promise<void> => {
    return new Promise((resolve) => {
      console.log(`Executing query: ${query}`);
      setTimeout(() => {
        console.log("Query execution completed");
        resolve();
      }, 1000);
    });
  };

  return Promise.all(queries.map(executeQuery));
}
