export async function retryGenerate(
  fn: () => Promise<any>,
  retries = 3
): Promise<any> {
  try {
    return await fn();
  } catch(err){
    if(retries <= 0) throw err;
    return retryGenerate(fn, retries - 1);
  }
}
