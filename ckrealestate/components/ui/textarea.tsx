export default function Textarea({ ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className="border rounded-xl p-2 w-full" {...props} />;
}
