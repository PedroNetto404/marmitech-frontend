"use client"

import { AlertTriangle } from "lucide-react"
// Importe as bibliotecas de gráficos
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

// Exemplo de dados estáticos para exibir no gráfico de faturamento do dia
const dataFaturamentoDia = [
  { name: "08h", valor: 150 },
  { name: "09h", valor: 280 },
  { name: "10h", valor: 350 },
  { name: "11h", valor: 420 },
  { name: "12h", valor: 560 },
  { name: "13h", valor: 380 },
]

// Exemplo de dados estáticos para exibir no gráfico de faturamento da semana
const dataFaturamentoSemana = [
  { dia: "Seg", valor: 1200 },
  { dia: "Ter", valor: 1700 },
  { dia: "Qua", valor: 900 },
  { dia: "Qui", valor: 2200 },
  { dia: "Sex", valor: 3100 },
  { dia: "Sáb", valor: 500 },
  { dia: "Dom", valor: 800 },
]

// Exemplo de dados estáticos para custos
const dataCustos = [
  { categoria: "Insumos", valor: 800 },
  { categoria: "Embalagens", valor: 400 },
  { categoria: "Entrega", valor: 300 },
]

// Exemplo de dados estáticos para pedidos
const dataPedidos = [
  { hora: "08h", pedidos: 5 },
  { hora: "09h", pedidos: 9 },
  { hora: "10h", pedidos: 7 },
  { hora: "11h", pedidos: 15 },
  { hora: "12h", pedidos: 20 },
  { hora: "13h", pedidos: 10 },
]

export default function AdminHomePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Bem-vindo ao Painel Administrativo</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Utilize o menu lateral para navegar pelas diferentes seções do painel.
        </p>
      </div>

      <div className="flex items-center p-4 text-white bg-red-600 rounded">
        <AlertTriangle className="w-5 h-5 mr-2" />
        <span>O sistema está em desenvolvimento e algumas telas podem não funcionar de forma adequada.</span>
      </div>

      {/* Faturamento do Dia */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold">Faturamento do Dia</h2>
        </CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dataFaturamentoDia}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="valor" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Faturamento da Semana */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold">Faturamento da Semana</h2>
        </CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dataFaturamentoSemana}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dia" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="valor" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Custos */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold">Custos</h2>
        </CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dataCustos}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="categoria" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="valor" fill="#ff7300" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Pedidos */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold">Pedidos</h2>
        </CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dataPedidos}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hora" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pedidos" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
