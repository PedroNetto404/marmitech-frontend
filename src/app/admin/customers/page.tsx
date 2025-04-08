"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { CustomersApi } from "@/services/customers-api";
import { Customer } from "@/types/customer";

export default function AdminCustomersHomePage() {
  // Hooks de navegação (App Router)
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  // Filtros e ordenação
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const loadingToastRef = useRef<string | number | null>(null);

  const {
    data: customers = [],
    isError,
    isFetching,
  } = useQuery<Customer[]>({
    queryKey: [
      "customers",
      currentPage,
      itemsPerPage,
      filters,
      "id",
      "asc", //TODO: Implementar ordenação
    ],
    queryFn: () => CustomersApi.findAll(),
  });

  // Lida com notificações de carregamento, sucesso ou erro
  useEffect(() => {
    if (isFetching) {
      // Exibe o toast de "Carregando..." apenas uma vez
      loadingToastRef.current = toast.loading("Carregando clientes...");
    } else {
      // Ao terminar o carregamento, removemos o toast de loading
      if (loadingToastRef.current !== null) {
        toast.dismiss(loadingToastRef.current);
        loadingToastRef.current = null;
      }

      if (isError) {
        toast.error("Erro ao carregar clientes");
      } else {
        if (customers.length > 0) {
          toast.success("Clientes carregados com sucesso");
        } else {
          toast.warning("Nenhum cliente encontrado");
        }
      }
    }
  }, [isFetching, isError, customers]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(customers.length / itemsPerPage);

  return (
    <div className="p-6 space-y-4">
      {/* Seção de botões */}
      <div className="flex items-center justify-between">
        {/* Botão à esquerda */}
        <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
          Criar Novo Cliente
        </button>

        {/* Botões à direita */}
        <div className="space-x-2">
          <button className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700">
            Export CSV
          </button>
          <button className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700">
            Export PDF
          </button>
        </div>
      </div>

      {/* Seção de filtros */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          name="name"
          placeholder="Filtrar por nome"
          value={filters.name}
          onChange={handleFilterChange}
          className="px-2 py-1 border rounded"
        />
        <input
          type="text"
          name="email"
          placeholder="Filtrar por e-mail"
          value={filters.email}
          onChange={handleFilterChange}
          className="px-2 py-1 border rounded"
        />
        <input
          type="text"
          name="phone"
          placeholder="Filtrar por telefone"
          value={filters.phone}
          onChange={handleFilterChange}
          className="px-2 py-1 border rounded"
        />
        <button className="px-4 py-1 text-white bg-gray-700 rounded hover:bg-gray-800">
          Buscar
        </button>
      </div>

      {/* Tabela de Clientes */}
      <div className="overflow-y-auto" style={{ maxHeight: "50vh" }}>
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border border-gray-200">Nome</th>
              <th className="p-2 border border-gray-200">E-mail</th>
              <th className="p-2 border border-gray-200">Telefone</th>
              <th className="p-2 border border-gray-200">Endereço</th>
              <th className="p-2 border border-gray-200">Ações</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50">
                <td className="p-2 border border-gray-200">
                  {`${customer.firstName} ${customer.lastName}`}
                </td>
                <td className="p-2 border border-gray-200">{customer.email}</td>
                <td className="p-2 border border-gray-200">
                  {customer.phoneNumber}
                </td>
                <td className="p-2 border border-gray-200">
                  {`${customer.address.street}, ${customer.address.number} ${customer.address.complement}, ${customer.address.neighborhood}, ${customer.address.city}, ${customer.address.state}, ${customer.address.zipCode}, ${customer.address.country}`}
                </td>
                <td className="p-2 border border-gray-200">
                  <div className="relative">
                    <button className="px-2 py-1 text-white bg-gray-600 rounded hover:bg-gray-700">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                    {/* Exemplo de menu suspenso (lógica de exibir/ocultar fica a seu critério) */}
                    <div className="absolute right-0 z-10 hidden w-48 mt-2 origin-top-right bg-white border border-gray-200 rounded shadow-lg">
                      <a
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        onClick={() => router.push(`/admin/customers/${customer.id}`)}
                      >
                        Ver Detalhes
                      </a>
                      <a
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        onClick={() =>
                          router.push(`/admin/customers/edit/${customer.id}`)
                        }
                      >
                        Editar
                      </a>
                      <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                        Excluir
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
            {customers.length === 0 && (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">
                  Nenhum cliente encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Paginação */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePreviousPage}
            className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="px-4 py-2">
            Página {currentPage} de {Math.max(totalPages, 1)}
          </span>
          <button
            onClick={handleNextPage}
            className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
            disabled={currentPage * itemsPerPage >= customers.length}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="itemsPerPage" className="text-sm">
            Itens por página:
          </label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="px-2 py-1 border rounded"
          >
            <option value={2}>2</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
        </div>
      </div>
    </div>
  );
}
