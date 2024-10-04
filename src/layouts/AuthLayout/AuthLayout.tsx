import '@/styles/globals.css';

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-auth flex h-screen items-center justify-center">
      <div className="mx-auto max-w-xl px-3">{children}</div>
    </main>
  );
};
