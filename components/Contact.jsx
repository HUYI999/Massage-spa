
export default function Contact() {
  return (
    <section id="contact" className="container py-14">
      <h2 className="section-title">联系与到店</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
        <div className="card">
          <div className="text-lg font-semibold">门店信息</div>
          <ul className="mt-3 text-sm text-neutral-700 space-y-2">
            <li>地址：Shop 1, 123 King St, Newcastle NSW</li>
            <li>电话：<a href="tel:0400-000-000" className="underline">0400 000 000</a>（可短信）</li>
            <li>营业：周一–周日 10:00–20:00</li>
            <li>停车：门口2小时街边停车 · 附近停车场步行3分钟</li>
          </ul>
        </div>
        <div className="rounded-2xl overflow-hidden border bg-white">
          <iframe
            title="map"
            className="w-full h-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13292.945!2d151.77!3d-32.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b7314f1f7b0146f%3A0x0000000000000000!2sNewcastle%20NSW!5e0!3m2!1sen!2sau!4v1710000000000">
          </iframe>
        </div>
      </div>
    </section>
  );
}
