
const services = [
  { title: "中式推拿", desc: "缓解酸痛、促进血液循环", mins: 60, price: 79 },
  { title: "运动按摩", desc: "放松筋膜、提升关节灵活度", mins: 60, price: 89 },
  { title: "足部理疗", desc: "足底反射区放松与循环改善", mins: 45, price: 59 },
  { title: "精油放松", desc: "舒缓身心、释放压力", mins: 60, price: 95 },
];
export default function Services() {
  return (
    <section id="services" className="container py-14">
      <h2 className="section-title">服务项目</h2>
      <p className="mt-2 text-neutral-600">经典项目一览——可在预约时选择时长与偏好技师。</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.title} className="card hover:shadow-md transition">
            <div className="text-lg font-semibold">{s.title}</div>
            <div className="mt-1 text-sm text-neutral-600">{s.desc}</div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-2xl font-bold">${s.price}</span>
              <span className="text-sm text-neutral-500">/{s.mins}min</span>
            </div>
            <a href="#booking" className="mt-5 inline-block btn btn-primary">预约此项目</a>
          </div>
        ))}
      </div>
    </section>
  );
}
