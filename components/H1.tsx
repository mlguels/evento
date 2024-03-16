import { twMerge } from "tailwind-merge";

type H1Props = {
  children: React.ReactNode;
  className?: string;
};

export default function H1({ children, className }: H1Props) {
  return (
    <h1
      className={twMerge(
        "text-3xl lg:text-6xl tracking-tight font-bold",
        className
      )}
    >
      {children}
    </h1>
  );
}
