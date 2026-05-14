export async function generateVideo(imageUrl: string){
  const response = await fetch(
    "https://api.runwayml.com/v1/generate",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_RUNWAY_API}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image: imageUrl,
        motion: "cinematic movement"
      })
    }
  );
  return response.json();
}
