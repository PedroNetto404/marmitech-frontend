export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-muted">
        <div className="w-full max-w p-6">{children}</div>
      </main>
    )
  }
  