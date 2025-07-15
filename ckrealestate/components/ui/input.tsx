export default function Input({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className="border rounded-xl p-2 w-full" {...props} />;
}
