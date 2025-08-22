
export default function Pricing() {
  return (
    <section id="pricing" className="bg-white border-y">
      <div className="container py-14">
        <h2 className="section-title">套餐与优惠</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="card">
            <div className="text-lg font-semibold">首次体验</div>
            <div className="mt-2 text-neutral-600 text-sm">任意60分钟项目</div>
            <div className="mt-4 text-3xl font-bold">$69</div>
            <a href="#booking" className="mt-6 btn btn-primary">立即预约</a>
          </div>
          <div className="card ring-2 ring-emerald-600">
            <div className="text-lg font-semibold">月度保养（4次）</div>
            <div className="mt-2 text-neutral-600 text-sm">60分钟×4 · 可转赠</div>
            <div className="mt-4 text-3xl font-bold">$259</div>
            <a href="#booking" className="mt-6 btn btn-primary">购买</a>
          </div>
          <div className="card">
            <div className="text-lg font-semibold">双人同行</div>
            <div className="mt-2 text-neutral-600 text-sm">同一时段两人预约</div>
            <div className="mt-4 text-3xl font-bold">9折</div>
            <a href="#booking" className="mt-6 btn btn-primary">预约</a>
          </div>
        </div>
      </div>
    </section>
  );
}
