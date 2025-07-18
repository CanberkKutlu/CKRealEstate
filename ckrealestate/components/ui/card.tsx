export default function Card({ children }: { children: React.ReactNode }) {
  return <div className="border rounded-xl shadow-md bg-white">{children}</div>;
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
