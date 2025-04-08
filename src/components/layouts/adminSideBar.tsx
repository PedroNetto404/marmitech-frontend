"use client"
import {
  Home,
  UtensilsCrossed,
  Users,
  ChefHat,
  ClipboardList,
  LayoutGrid,
  UserCog
} from "lucide-react"
import { Sidebar } from "@/components/layouts/sideBar"

const items = [
  { href: "/", label: "Dashboard", icon: Home },
  { href: "/admin/orders", label: "Pedidos", icon: UtensilsCrossed },
  { href: "/admin/menu", label: "Cardápio do Dia", icon: ClipboardList },
  {
    href: "/admin/dishes",
    label: "Pratos",
    icon: ChefHat,
  },
  { href: "/admin/products", label: "Produtos", icon: LayoutGrid },
  { href: "/admin/customers", label: "Clientes", icon: Users },
  { href: "/admin/staff", label: "Colaboradores", icon: UserCog }
]

export function AdminSidebar() {
  return (
    <Sidebar
      links={items}
    />
  )
}
