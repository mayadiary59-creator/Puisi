export function generatePrompt(data: any){
  return JSON.stringify({
    character: {
      gender: data.gender,
      style: data.style,
      camera: data.camera
    },
    lighting: data.lighting,
    ratio: data.ratio,
    quality: data.quality
  }, null, 2);
}
