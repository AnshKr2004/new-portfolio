import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = "" }: Props) {
  return (
    <div
      className={`glass rounded-2xl p-6 transition-all duration-300 hover:border-accent/30 ${className}`}
    >
      {children}
    </div>
  );
}
