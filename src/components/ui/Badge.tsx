interface Props {
  label: string;
  className?: string;
}

export default function Badge({ label, className = "" }: Props) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20 ${className}`}
    >
      {label}
    </span>
  );
}
