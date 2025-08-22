
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-white">
      <div className="container py-8 text-sm text-neutral-500 flex flex-col md:flex-row items-center justify-between gap-3">
        <div>© {year} 舒心按摩馆 · ABN 00 000 000 000</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-neutral-700">隐私政策</a>
          <a href="#" className="hover:text-neutral-700">服务条款</a>
        </div>
      </div>
      <a href="#booking" className="fixed bottom-5 right-5 rounded-full shadow-2xl bg-emerald-600 text-white px-5 py-3 font-medium hover:bg-emerald-700">预约</a>
    </footer>
  );
}
