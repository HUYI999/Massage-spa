
export const metadata = {
  title: "舒心按摩馆 | Newcastle 中式推拿 · 运动按摩 · 足部理疗",
  description: "专业按摩理疗门店，提供中式推拿、运动按摩、足部理疗与精油放松。在线预约，准时到店，无需等待。",
};
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className="bg-neutral-50 text-neutral-900">
        {children}
      </body>
    </html>
  );
}
