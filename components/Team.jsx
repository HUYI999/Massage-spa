
const people = [
  {
    name: "Lily（女）",
    role: "国家高级按摩师 · 精油放松/肩颈",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "Jack（男）",
    role: "运动康复师 · 运动按摩/筋膜放松",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop"
  }
];
export default function Team() {
  return (
    <section id="team" className="container py-14">
      <h2 className="section-title">技师团队</h2>
      <div className="mt-6 grid sm:grid-cols-2 gap-6">
        {people.map((p) => (
          <div key={p.name} className="rounded-2xl border bg-white overflow-hidden">
            <div className="aspect-[16/10] bg-cover bg-center" style={{ backgroundImage: `url(${p.img})` }} />
            <div className="p-5">
              <div className="text-lg font-semibold">{p.name}</div>
              <div className="text-sm text-neutral-600">{p.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
