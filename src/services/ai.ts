import { GoogleGenAI, Type, Modality } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generatePoetry(
  keyword: string,
  contentType: string,
  genre: string,
  nice: string,
  value: string,
  reading: string,
  language: string
): Promise<{ title: string; content: string; author: string }> {
  const prompt = `You are a professional ${language !== "Acak (Default)" ? language : "Indonesian"} poet.
Generate an original ${contentType} about "${keyword}".
Style: ${genre !== "Acak (Default)" ? genre : "Sufi"}
Mood: ${nice !== "Acak (Default)" ? nice : "Kontemplatif"}
Theme/Value: ${value !== "Acak (Default)" ? value : "Spiritual"}
Reading: ${reading !== "Acak (Default)" ? reading : "Puitis"}
Format: JSON only.
{ "title": "string", "content": "string", "author": "string" }`;

  console.log(`Generating poetry for: ${keyword}`);

  const maxRetries = 2;
  let delay = 1000; // Reduced initial delay

  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.8,
        },
      });

      const text = response.text || "{}";
      
      // Extract JSON from potential markdown wrapping
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      const jsonString = jsonMatch ? jsonMatch[0] : text;

      return JSON.parse(jsonString);
    } catch (error: any) {
      if (error?.status === 429 && i < maxRetries - 1) {
        console.warn(`Rate limited (429), retrying in ${delay}ms... (Attempt ${i + 1}/${maxRetries})`);
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2; // Exponential backoff
        continue;
      }
      console.error("Error in generatePoetry:", error);
      throw new Error("Gagal menghasilkan konten. Mohon coba lagi.");
    }
  }
  throw new Error("Gagal menghasilkan konten setelah beberapa kali percobaan.");
}

export async function generateAudio(text: string, voiceName: string = 'Kore'): Promise<Uint8Array | null> {
  const prompt = `Read the following poem expressively:\n\n${text}`;
  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-tts-preview",
    contents: [{ parts: [{ text: prompt }] }],
    config: {
      responseModalities: [Modality.AUDIO],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName },
        },
      },
    },
  });

  const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  if (!base64Audio) return null;

  const binaryString = window.atob(base64Audio);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export async function generateImage(prompt: string, poemTitle?: string, poemContent?: string): Promise<string | null> {
  let finalPrompt = prompt;
  if (poemTitle && poemContent) {
    finalPrompt = `Create an artistic image that incorporates the following title and poem text:
Title: ${poemTitle}
Poem: ${poemContent}

Please integrate the text stylishly into the image according to the description: ${prompt}`;
  }

  const maxRetries = 2;
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await ai.models.generateContent({
        model: "imagen-3.0-generate-002",
        contents: finalPrompt,
      });

      const base64Image = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Image) {
        return `data:image/png;base64,${base64Image}`;
      }
      throw new Error("No image data in response");
    } catch (error) {
      console.error(`Error in generateImage (Attempt ${i + 1}/${maxRetries}):`, error);
      if (i === maxRetries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  return null;
}
