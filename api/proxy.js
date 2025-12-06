export default async function handler(req, res) {
  const target = "https://downdetector.com/";

  const upstream = await fetch(target);
  let html = await upstream.text();

  // --- iframe ブロック系 JavaScript を削除 ---
  html = html.replace(/if\s*\(\s*window\.top\s*!==\s*window\.self[\s\S]*?\}/g, "");
  html = html.replace(/location\.href\s*=\s*['"].*?['"]/g, "// removed redirect");

  // --- セキュリティヘッダー除去 ---
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.send(html);
}
