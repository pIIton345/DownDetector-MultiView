export default async function handler(req, res) {
  const target = "https://downdetector.com/";

  const response = await fetch(target);
  const body = await response.text();

  // iframe拒否ヘッダー除去
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.send(body);
}