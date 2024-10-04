import { Navbar } from '@/components/Navbar';

export const ApplicationLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="relative flex h-screen flex-col">
      <Navbar />
      <main className="container mx-auto max-w-7xl flex-grow px-6 pt-10">
        {children}
      </main>
    </div>
  );
};
