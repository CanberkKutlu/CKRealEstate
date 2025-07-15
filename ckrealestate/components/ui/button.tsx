export default function Button({ children, onClick, size }: { children: React.ReactNode; onClick?: () => void; size?: string }) {
  const sizeClass = size === "sm" ? "px-2 py-1 text-sm" : "px-4 py-2";
  return (
    <button onClick={onClick} className={`bg-blue-600 text-white rounded-xl hover:bg-blue-700 ${sizeClass}`}>
      {children}
    </button>
  );
}
