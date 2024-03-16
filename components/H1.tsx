export default function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-3xl lg:text-6xl tracking-tight font-bold">
      {children}
    </h1>
  );
}
