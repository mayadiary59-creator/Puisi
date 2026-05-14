import { LucideIcon } from 'lucide-react';

export const sidebarMenus = [
  {
    title: "Image to Video",
    icon: "Video",
    path: "/image-video"
  },
  {
    title: "Text to Video",
    icon: "Film",
    path: "/text-video"
  },
  {
    title: "JSON Prompt",
    icon: "Braces",
    path: "/json-prompt"
  },
  {
    title: "Master Prompt",
    icon: "Sparkles",
    path: "/master-prompt"
  },
  {
    title: "Story Narration",
    icon: "BookOpen",
    path: "/story"
  },
  {
    title: "Poetry & Quotes",
    icon: "Feather",
    path: "/poetry"
  },
  {
    title: "Poster & Typography",
    icon: "Palette",
    path: "/design"
  },
  {
    title: "AI Photography",
    icon: "Camera",
    path: "/photo"
  },
  {
    title: "Templates",
    icon: "Layout",
    path: "/templates",
    subItems: [
      { title: "Modern Minimal", path: "/templates/modern" },
      { title: "Dark Mode", path: "/templates/dark" },
      { title: "Aesthetic", path: "/templates/aesthetic" },
    ]
  },
  {
    title: "Posisi Teks",
    icon: "PenTool",
    subItems: [
      { title: "Rata Kiri", path: "/posisi/kiri", icon: "AlignLeft" },
      { title: "Tengah", path: "/posisi/tengah", icon: "AlignCenter" },
      { title: "Rata Kanan", path: "/posisi/kanan", icon: "AlignRight" },
      { title: "Rata Penuh", path: "/posisi/penuh", icon: "AlignJustify" },
      { title: "Layout Cinematic", path: "/posisi/cinematic", icon: "Film" },
      { title: "Layout Kartu", path: "/posisi/kartu", icon: "CreditCard" },
      { title: "Teks Mengambang", path: "/posisi/mengambang", icon: "Layers3" },
    ]
  },
  {
    title: "Ukuran Teks",
    icon: "Scroll",
    subItems: [
      { title: "XS", path: "/ukuran/xs", icon: "Minimize2" },
      { title: "S", path: "/ukuran/s", icon: "Minimize2" },
      { title: "M", path: "/ukuran/m", icon: "Maximize2" },
      { title: "L", path: "/ukuran/l", icon: "Maximize2" },
      { title: "XL", path: "/ukuran/xl", icon: "Maximize2" },
      { title: "XXL", path: "/ukuran/xxl", icon: "Maximize2" },
      { title: "Otomatis", path: "/ukuran/otomatis", icon: "Settings" },
    ]
  },
  {
    title: "Font",
    icon: "Type",
    subItems: [
      { title: "Poppins", path: "/font/poppins", icon: "Type" },
      { title: "Playfair", path: "/font/playfair", icon: "Type" },
      { title: "Lora", path: "/font/lora", icon: "Type" },
      { title: "Cinzel", path: "/font/cinzel", icon: "Type" },
      { title: "Montserrat", path: "/font/montserrat", icon: "Type" },
      { title: "Great Vibes", path: "/font/great-vibes", icon: "Type" },
      { title: "Merriweather", path: "/font/merriweather", icon: "Type" },
      { title: "Roboto", path: "/font/roboto", icon: "Type" },
    ]
  },
  {
    title: "History",
    icon: "History",
    path: "/history"
  },
  {
    title: "Settings",
    icon: "Settings",
    path: "/settings"
  }
];
