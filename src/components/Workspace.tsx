export default function Workspace() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-6 max-w-full h-full">
      {/* Input Section */}
      <div className="lg:col-span-1 space-y-4 w-full flex flex-col">
        <div className="space-y-2 flex-1">
          <label className="text-[11px] uppercase font-bold text-zinc-500 tracking-wider">Base Prompt Description</label>
          <textarea
            className="w-full h-32 bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-sm focus:ring-1 focus:ring-indigo-500 outline-none resize-none placeholder-zinc-700 transition-all font-mono"
            placeholder="A cyberpunk street at night, neon reflections..."
          />
        </div>

        <div className="space-y-2">
          <label className="text-[11px] uppercase font-bold text-zinc-500 tracking-wider">Automated Keywords</label>
          <div className="flex flex-wrap gap-2 p-3 bg-zinc-900/30 border border-zinc-800 rounded-xl min-h-[50px] items-center">
            <span className="px-2 py-1 bg-zinc-800 rounded text-[10px] text-zinc-400 border border-zinc-700">Cinematic</span>
            <span className="px-2 py-1 bg-zinc-800 rounded text-[10px] text-zinc-400 border border-zinc-700">Cyberpunk</span>
            <span className="px-2 py-1 bg-zinc-800 rounded text-[10px] text-zinc-400 border border-zinc-700">Photorealistic</span>
            <input
              className="flex-1 bg-transparent text-sm outline-none placeholder-zinc-700 min-w-[120px] text-zinc-300 ml-1"
              placeholder="Add keyword..."
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[11px] uppercase font-bold text-zinc-500 tracking-wider">Reference Image/Video (Optional)</label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-zinc-800 border-dashed rounded-xl cursor-pointer bg-zinc-900/30 hover:bg-zinc-800/50 transition-colors">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-6 h-6 mb-2 text-zinc-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="text-xs text-zinc-500"><span className="font-semibold text-zinc-400">Click to upload</span> or drag and drop</p>
              </div>
              <input type="file" className="hidden" accept="image/*,video/*" />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[11px] uppercase font-bold text-zinc-500 tracking-wider">Aspect Ratio</label>
            <select className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-300 outline-none">
              <option>16:9 Cinematic</option>
              <option>9:16 Vertical</option>
              <option>1:1 Square</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] uppercase font-bold text-zinc-500 tracking-wider">Language & Generation Scenes</label>
            <select className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-300 outline-none mb-2">
              <option>English</option>
              <option>Indonesia</option>
              <option>Japanese</option>
            </select>
            <select className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-300 outline-none">
              <option>5 Scenes</option>
              <option>1 Scene</option>
              <option>10 Scenes</option>
            </select>
          </div>
        </div>

        <button className="w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 shadow-xl hover:bg-zinc-200 transition-all mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
          GENERATE PROJECT
        </button>
      </div>

      {/* Output/History Section */}
      <div className="lg:col-span-3 flex flex-col gap-4 max-lg:mt-8 min-h-[600px] h-full">
        <div className="flex-1 bg-zinc-900/40 rounded-2xl border border-zinc-800 overflow-hidden relative group min-h-[400px]">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
             <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 mb-3 hover:bg-white/20 transition-colors cursor-pointer">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-300"><polygon points="5 3 19 12 5 21 5 3"/></svg>
             </div>
             <p className="text-xs text-zinc-500 font-medium">Select a scene to preview</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end">
            <div>
              <p className="text-xs font-bold text-zinc-200">SCENE_01_CYBERPUNK_NIGHT.mp4</p>
              <p className="text-[10px] text-zinc-400">Runway Gen-2 • 1080p • 24fps</p>
            </div>
            <div className="flex gap-2">
               <button className="p-2 bg-white/10 hover:bg-white/20 transition-colors rounded border border-white/20 text-zinc-300"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg></button>
               <button className="p-2 bg-white/10 hover:bg-white/20 transition-colors rounded border border-white/20 text-zinc-300"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg></button>
            </div>
          </div>
        </div>

        <div className="h-40 flex flex-col gap-2 shrink-0">
          <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Recent Creations</p>
          <div className="grid grid-cols-4 gap-3 flex-1">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden flex flex-col items-center justify-center cursor-pointer hover:bg-zinc-800 transition-colors">
               <div className="w-6 h-6 rounded bg-indigo-500/20 mb-2 border border-indigo-500/30"></div>
               <p className="text-[8px] text-zinc-500 font-mono">#4291</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden flex flex-col items-center justify-center opacity-60 cursor-pointer hover:opacity-100 transition-opacity">
               <div className="w-6 h-6 rounded bg-zinc-800 mb-2"></div>
               <p className="text-[8px] text-zinc-600 font-mono">#4290</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden flex flex-col items-center justify-center opacity-60 cursor-pointer hover:opacity-100 transition-opacity">
               <div className="w-6 h-6 rounded bg-zinc-800 mb-2"></div>
               <p className="text-[8px] text-zinc-600 font-mono">#4289</p>
            </div>
            <div className="bg-zinc-800/20 hover:bg-zinc-800/40 transition-colors border border-dashed border-zinc-700 rounded-lg flex flex-col items-center justify-center cursor-pointer">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
