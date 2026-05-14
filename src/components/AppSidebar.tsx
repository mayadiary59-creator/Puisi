import { Link, useLocation } from "react-router-dom"
import { 
  Video, 
  Film, 
  Braces, 
  Sparkles, 
  BookOpen, 
  Feather, 
  Palette, 
  Camera, 
  Layout, 
  History, 
  Settings,
  Type,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Film as FilmIcon,
  CreditCard,
  Layers3,
  Maximize2,
  Minimize2,
  PenTool,
  Scroll
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"

import { sidebarMenus } from "@/src/utils/sidebar"

const iconMap: Record<string, React.ElementType> = {
  Video,
  Film: FilmIcon,
  Braces,
  Sparkles,
  BookOpen,
  Feather,
  Palette,
  Camera,
  Layout,
  History,
  Settings,
  Type,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  CreditCard,
  Layers3,
  Maximize2,
  Minimize2,
  PenTool,
  Scroll
};

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="border-r border-zinc-800 bg-[#0c0c0e]">
      <SidebarHeader className="p-6 pb-2 border-b-0">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-lg text-white">M</div>
          <h1 className="font-bold tracking-tight text-lg text-zinc-100">MasRiz<span className="text-indigo-400">Ai</span></h1>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {sidebarMenus.map((item) => {
                const Icon = iconMap[item.icon];
                const isActive = location.pathname === item.path || (location.pathname === '/' && item.path === '/image-video');
                
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      isActive={isActive} 
                      className="transition-colors !p-5 hover:bg-zinc-800/30"
                      render={item.path ? <Link to={item.path} className="flex gap-3 w-full" /> : <div className="flex gap-3 w-full cursor-pointer" />}
                    >
                      {Icon && <Icon className="w-5 h-5 shrink-0" />}
                      <span className="font-medium text-sm">{item.title}</span>
                    </SidebarMenuButton>
                    
                    {item.subItems && (
                      <SidebarMenuSub>
                        {item.subItems.map((subItem: any) => {
                          const SubIcon = subItem.icon ? iconMap[subItem.icon] : null;
                          return (
                            <SidebarMenuSubItem key={subItem.path || subItem.title}>
                              <SidebarMenuSubButton render={<Link to={subItem.path || '#'} />}>
                                {SubIcon && <SubIcon className="w-3 h-3 mr-2" />}
                                <span className="text-xs">{subItem.title}</span>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          );
                        })}
                      </SidebarMenuSub>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-zinc-800 bg-[#08080a] mt-auto">
        <div className="flex items-center gap-3 p-2">
          <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs text-indigo-400 shrink-0">M</div>
          <div className="flex-1 overflow-hidden">
            <p className="text-xs font-semibold text-zinc-200 truncate">MasRizAi</p>
            <p className="text-[10px] text-zinc-500 truncate">Pro Plan Active</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 shrink-0"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
