export async function handleGenerate(){
  try {
    console.log("Generating...");
    // Mocking an API call
    const result = { success: true, message: "Generated successfully" };
    console.log(result);
    return result;
  } catch(err){
    console.error(err);
    throw err;
  }
}
