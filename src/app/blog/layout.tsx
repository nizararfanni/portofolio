// di _app.js atau layout.js
import "highlight.js/styles/github-dark.css";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <article className="prose py-30  prose-headings:text-yellow-400 prose-strong:text-red-500 prose-em:text-blue-400 block">
        {children}
      </article>
    </div>
  );
}
