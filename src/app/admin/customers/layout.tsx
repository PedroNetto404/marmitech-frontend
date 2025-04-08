export default function CustomerLayout({  children,
}: {
  children: React.ReactNode;
    }) {
    return (
        <div className="flex min-h-screen bg-background text-foreground">
            <main className="flex-1 p-6 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}