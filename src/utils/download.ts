export function downloadFile(url: string){
  const a = document.createElement('a');
  a.href = url;
  a.download = 'MasRizAi';
  a.click();
}
