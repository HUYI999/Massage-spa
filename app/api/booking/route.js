
export async function POST(request) {
  try {
    const data = await request.json();
    // TODO: 在此处接入邮件或短信服务（如 Resend / Twilio），把 data 发送给店家与顾客
    console.log("[预约]", data);
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ ok: false, error: "Bad Request" }), { status: 400 });
  }
}
