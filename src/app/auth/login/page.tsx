import LoginForm from "./components/LoginForm"
import Image from "next/image"

export const metadata = {
  title: "Marmitech - Login",
  description: "Acesse sua conta na plataforma Marmitech",
}

export default function LoginPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {/* Lado esquerdo com imagem institucional */}
      <div className="hidden lg:flex items-center justify-center bg-gray-900">
        <div className="w-full h-full flex items-center justify-center p-8">
          <Image
            src="/images/marmitech.png"
            alt="Imagem institucional Marmitech"
            width={600}
            height={600}
            className="object-contain max-h-[90%] w-auto"
            priority
          />
        </div>
      </div>

      {/* Lado direito com o formulário de login */}
      <div className="flex items-center justify-center bg-white px-6 py-12 sm:px-8">
        <LoginForm />
      </div>
    </div>
  )
}