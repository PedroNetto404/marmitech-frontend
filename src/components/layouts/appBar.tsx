import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { AvatarImage } from "@radix-ui/react-avatar"

export function Appbar() {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <h1 className="text-lg font-semibold">Painel da Marmitaria</h1>

      <DropdownMenu>
        <DropdownMenuTrigger>
                  <Avatar>
                      <AvatarImage src="/profile_picture.jpeg" alt="User profile picture" />
            <AvatarFallback>FN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Perfil</DropdownMenuItem>
          <DropdownMenuItem>Sair</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
