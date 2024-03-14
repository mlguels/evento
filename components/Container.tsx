export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        flex
        flex-col
        max-w-7xl
        mx-auto
        min-h-screen
        bg-white/[2%]
      "
    >
      {children}
    </div>
  );
}
