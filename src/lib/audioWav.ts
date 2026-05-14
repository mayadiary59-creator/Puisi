export function exportWAV(pcm16Data: Int16Array, sampleRate: number) {
  const buffer = new ArrayBuffer(44 + pcm16Data.length * 2);
  const view = new DataView(buffer);

  // RIFF chunk descriptor
  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + pcm16Data.length * 2, true);
  writeString(view, 8, 'WAVE');
  
  // FMT sub-chunk
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true); // Subchunk1Size
  view.setUint16(20, 1, true); // AudioFormat (PCM)
  view.setUint16(22, 1, true); // NumChannels
  view.setUint32(24, sampleRate, true); // SampleRate
  view.setUint32(28, sampleRate * 2, true); // ByteRate
  view.setUint16(32, 2, true); // BlockAlign
  view.setUint16(34, 16, true); // BitsPerSample
  
  // Data sub-chunk
  writeString(view, 36, 'data');
  view.setUint32(40, pcm16Data.length * 2, true);
  
  // Write PCM samples
  for (let i = 0; i < pcm16Data.length; i++) {
    view.setInt16(44 + i * 2, pcm16Data[i], true);
  }
  
  return buffer;
}

function writeString(view: DataView, offset: number, string: string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}
