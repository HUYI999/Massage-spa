
export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="container py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold text-xl">舒心按摩馆</a>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#services" className="hover:text-emerald-600">服务项目</a>
          <a href="#pricing" className="hover:text-emerald-600">价格</a>
          <a href="#team" className="hover:text-emerald-600">技师团队</a>
          <a href="#booking" className="hover:text-emerald-600">在线预约</a>
          <a href="#contact" className="hover:text-emerald-600">联系/地址</a>
        </nav>
        <a href="#booking" className="btn btn-outline border-emerald-600 text-emerald-700">立即预约</a>
      </div>
    </header>
  );
}
