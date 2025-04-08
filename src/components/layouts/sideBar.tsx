"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight, Menu } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface SidebarLink {
  href: string
  icon: React.ElementType
  label: string
  sublinks?: SidebarLink[]
}

interface SidebarProps {
  links: SidebarLink[]
}

export function Sidebar({ links }: SidebarProps) {
  const [open, setOpen] = useState<Record<string, boolean>>({})
  const [collapsed, setCollapsed] = useState(false)

  const toggleSection = (label: string) => {
    setOpen((prev) => ({ ...prev, [label]: !prev[label] }))
  }

  const toggleSidebar = () => setCollapsed((prev) => !prev)

  return (
    <TooltipProvider delayDuration={300}>
      <nav className={`flex flex-col h-full p-4 space-y-1 text-sm transition-all duration-300 ${collapsed ? "w-20" : "w-64"}`}>
        {/* Logo + toggle */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex justify-center w-full">
            <img
              src="/logo.png"
              alt="Company Logo"
              className={`rounded-full transition-all duration-300 ${collapsed ? "w-10 h-10" : "w-16 h-16"}`}
            />
          </div>
          {!collapsed && (
            <button onClick={toggleSidebar} className="p-1 ml-auto text-muted-foreground hover:text-foreground">
              <Menu className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Menu links */}
        {links.map((link, index) => (
          <div key={index}>
            <div className="flex items-center justify-between">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={link.href} className="flex-1">
                    <Button
                      variant="ghost"
                      className={`w-full justify-start ${collapsed ? "p-2" : ""}`}
                    >
                      <link.icon className="w-5 h-5 mr-2" />
                      {!collapsed && link.label}
                    </Button>
                  </Link>
                </TooltipTrigger>
                {collapsed && <TooltipContent side="right">{link.label}</TooltipContent>}
              </Tooltip>

              {!collapsed && link.sublinks && (
                <button
                  type="button"
                  onClick={() => toggleSection(link.label)}
                  className="p-1 text-muted-foreground hover:text-foreground"
                >
                  {open[link.label] ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
              )}
            </div>

            {!collapsed && link.sublinks && open[link.label] && (
              <div className="ml-6 mt-1 space-y-1">
                {link.sublinks.map((sublink, subIndex) => (
                  <Tooltip key={subIndex}>
                    <TooltipTrigger asChild>
                      <Link href={sublink.href}>
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-muted-foreground hover:text-foreground"
                        >
                          <sublink.icon className="w-4 h-4 mr-2" />
                          {sublink.label}
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    {collapsed && <TooltipContent side="right">{sublink.label}</TooltipContent>}
                  </Tooltip>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </TooltipProvider>
  )
}