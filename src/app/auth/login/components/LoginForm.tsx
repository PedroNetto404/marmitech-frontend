'use client'

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Eye, EyeOff } from "lucide-react"

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [usernameOrEmail, setUsernameOrEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // autenticar com backend aqui
    window.location.href = "/admin";
  }

  return (
    <Card className="w-full max-w-md shadow-lg border border-muted">
      <CardHeader className="text-center">
        <img src="https://lovemarmitex.com.br/wp-content/uploads/2025/04/logo-marmitaria.png" alt="Marmitech" className="w-20 mx-auto mb-4" />
        <h1 className="text-xl font-semibold tracking-tight">Bem-vindo de volta</h1>
        <p className="text-sm text-muted-foreground">Entre para acessar o sistema</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="usernameOrEmail">Usuário ou Email</Label>
            <Input
              id="usernameOrEmail"
              type="text"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              placeholder="joao.silva ou joao@email.com"
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Senha</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-muted-foreground"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <Button type="submit" className="w-full">Entrar</Button>
          <div className="text-sm text-center text-muted-foreground">
            Ainda não tem conta?{" "}
            <Link href="/register" className="underline hover:text-primary">
              Cadastre-se
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
