
"use client";
import { useState } from "react";

const services = [
  { title: "中式推拿", mins: 60 },
  { title: "运动按摩", mins: 60 },
  { title: "足部理疗", mins: 45 },
  { title: "精油放松", mins: 60 },
];

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "", phone: "", service: "中式推拿 60min", date: "", time: "", notes: ""
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error("提交失败");
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setForm({ name: "", phone: "", service: "中式推拿 60min", date: "", time: "", notes: "" });
    } catch (err) {
      setError(err.message || "网络错误");
    }
  }

  return (
    <section id="booking" className="bg-emerald-50/60">
      <div className="container py-14">
        <h2 className="section-title">在线预约</h2>
        <p className="mt-2 text-neutral-600">
          提交后我们会电话/短信确认。亦可致电 <a href="tel:0400-000-000" className="underline">0400 000 000</a>。
        </p>
        <form onSubmit={handleSubmit} className="mt-6 grid md:grid-cols-2 gap-5">
          <div>
            <label className="text-sm text-neutral-600">姓名</label>
            <input required name="name" value={form.name} onChange={handleChange}
              className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600" placeholder="您的姓名" />
          </div>
          <div>
            <label className="text-sm text-neutral-600">手机号</label>
            <input required name="phone" value={form.phone} onChange={handleChange}
              className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600" placeholder="04xx xxx xxx" />
          </div>
          <div>
            <label className="text-sm text-neutral-600">选择项目</label>
            <select name="service" value={form.service} onChange={handleChange}
              className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600">
              {services.map((s) => (
                <option key={s.title} value={`${s.title} ${s.mins}min`}>{s.title} · {s.mins}min</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-neutral-600">日期</label>
              <input required type="date" name="date" value={form.date} onChange={handleChange}
                className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600" />
            </div>
            <div>
              <label className="text-sm text-neutral-600">时间</label>
              <input required type="time" name="time" value={form.time} onChange={handleChange}
                className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600" />
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-neutral-600">备注（可选）</label>
            <textarea name="notes" value={form.notes} onChange={handleChange}
              className="mt-1 w-full min-h-[100px] rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600"
              placeholder="如偏好技师/肩颈腰背重点等" />
          </div>
          <div className="md:col-span-2 flex items-center gap-4">
            <button type="submit" className="btn btn-primary">提交预约</button>
            {sent && <span className="text-emerald-700 text-sm">预约已提交，我们将尽快联系你确认（示例后端）。</span>}
            {error && <span className="text-red-600 text-sm">{error}</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
