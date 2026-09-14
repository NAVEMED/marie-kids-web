// api/chat.js - Esto habla con NexoRouter de forma segura
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({error: 'Solo POST'});

  const { mensaje } = req.body;

  const response = await fetch("https://api.nexorouter.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.NEXOROUTER_API_KEY}`
    },
    body: JSON.stringify({
      model: "kimi-k2.6",
      messages: [
        { role: "system", content: "Eres la asesora de Marie Kids Perú, vendes ropa para niños. Responde super corto, amable, con emojis. Precios S/45 a S/89. Siempre pregunta talla y distrito para delivery a todo el Perú." },
        { role: "user", content: mensaje }
      ]
    })
  });

  const data = await response.json();
  return res.status(200).json({ respuesta: data.choices?.[0]?.message?.content || "Ups, intenta de nuevo 😊" });
}