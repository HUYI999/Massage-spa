/** @type {import('next').NextConfig} */
const isGhActions = process.env.GITHUB_ACTIONS === 'true';
const repoName = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split('/')[1]
  : '';
const basePath = isGhActions ? `/${process.env.BASE_PATH || repoName}` : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',              // 关键：静态导出，适配 GitHub Pages
  images: { unoptimized: true }, // 关闭 next/image 优化，便于导出
  basePath,                      // GitHub Pages 默认路径 /<repo>
  assetPrefix: basePath ? basePath + '/' : undefined,
  trailingSlash: true,           // 对 GH Pages 友好
};

module.exports = nextConfig;

"use client";
import { useEffect } from "react";

// TODO: 将此替换为你的 Calendly 链接，例如：https://calendly.com/your-handle/30min
const CALENDLY_URL = "https://calendly.com/your-handle/30min";

export default function BookingForm() {
  // 动态加载 Calendly 的 CSS & JS
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      try { document.head.removeChild(link); } catch {}
      try { document.body.removeChild(script); } catch {}
    };
  }, []);

  function openCalendly(e) {
    e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank");
    }
  }

  return (
    <section id="booking" className="bg-emerald-50/60">
      <div className="container py-14">
        <h2 className="section-title">在线预约</h2>
        <p className="mt-2 text-neutral-600">
          点击下方按钮或使用嵌入日历选择时间。亦可致电 {" "}
          <a href="tel:0400-000-000" className="underline">0400 000 000</a>。
        </p>

        <div className="mt-6 flex items-center gap-4">
          <a onClick={openCalendly} href="#" className="btn btn-primary">打开预约弹窗</a>
          <a href={CALENDLY_URL} target="_blank" className="btn btn-outline">在新页预约</a>
        </div>

        {/* 内嵌式 Calendly 小部件 */}
        <div className="mt-8 rounded-2xl border bg-white p-2">
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY_URL}
            style={{ minWidth: 320, height: 760 }}
          />
        </div>
      </div>
    </section>
  );
}

export const metadata = {
  title: "舒心按摩馆 | Newcastle 中式推拿 · 运动按摩 · 足部理疗",
  description: "专业按摩理疗门店，提供中式推拿、运动按摩、足部理疗与精油放松。在线预约，准时到店，无需等待。",
};
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <head />
      <body className="bg-neutral-50 text-neutral-900">{children}</body>
    </html>
  );
}

/**
 * GitHub Pages 静态导出禁用此路由。
 * 不导出任何 HTTP 方法，避免 Next 将其识别为 Route Handler。
 */
export {};

# 舒心按摩馆 · GitHub Pages 部署（Next.js 静态导出 + Calendly）

本项目已适配 **GitHub Pages**（静态导出）与 **Calendly** 在线预约，无需后端。

## 开发
```bash
npm install
npm run dev
```

## 生产构建（本地）
```bash
npm run build && npx next export
# 生成静态文件在 ./out
```

## GitHub Pages 部署（推荐）
1. 推送到 GitHub：
```bash
git init
git add .
git commit -m "init for gh-pages"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```
2. 新建工作流 **.github/workflows/gh-pages.yml**（复制下方完整内容）：
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm install
      - run: npm run build && npx next export
        env:
          GITHUB_ACTIONS: true
          # 可选：设置 BASE_PATH（不设置则自动使用仓库名作为 basePath）
          # BASE_PATH: your-repo-name
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```
3. 仓库 **Settings → Pages → Build and deployment** 选择 **GitHub Actions**。
4. Actions 跑完后，访问地址形如：`https://<用户名>.github.io/<仓库名>/`。

> 如需绑定自定义域名：在仓库 Settings → Pages → Custom domain 中配置，或在 `public/` 下添加 `CNAME` 文件（内容为你的域名）。

## Calendly 集成
- 在 `components/BookingForm.jsx` 顶部设置 `CALENDLY_URL`（例：`https://calendly.com/your-handle/30min`）。
- 页面已内置两个入口：
  - 「打开预约弹窗」：调用 Calendly 弹窗
  - **内嵌小部件**：直接在页面显示可选时段

## 重要说明
- 本项目已启用 `output: 'export'`，**不再使用 /api 路由**；GitHub Pages 不支持 Next.js 服务器端能力。
- 如需短信/邮件通知、支付等后端功能，建议使用 **Vercel** 或自有服务器。
- 构建时将自动根据 GitHub 仓库名设置 `basePath` 和 `assetPrefix`，适配 `https://<用户名>.github.io/<仓库名>/` 访问路径。
