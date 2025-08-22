
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white" />
      <div className="container py-16 md:py-24 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              放松、复原、充电<br/>让身体回到最舒服的状态
            </h1>
            <p className="mt-5 text-neutral-600 max-w-prose">
              位于市中心的专业按摩理疗门店，提供中式推拿、运动按摩、足部理疗与精油放松。
              线上预约，准时到店，无需等待。
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#booking" className="btn btn-primary">在线预约</a>
              <a href="#services" className="btn btn-outline">查看服务</a>
            </div>
            <div className="mt-6 text-sm text-neutral-500">
              营业时间：周一–周日 10:00–20:00 · 预约优先 · 可开发票
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-[url('https://images.unsplash.com/photo-1600334129128-685c5582fd5a?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center shadow-2xl"/>
          </div>
        </div>
      </div>
    </section>
  );
}
