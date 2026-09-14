function toggleChat(){
  const chat = document.getElementById('chat-marie');
  chat.style.display = chat.style.display === 'none' || chat.style.display === '' ? 'block' : 'none';
}
async function enviarChat(){
  const input = document.getElementById('inputChat');
  const caja = document.getElementById('mensajes-marie');
  const texto = input.value.trim();
  if(!texto) return;
  caja.innerHTML += `<div style='margin-bottom:8px'><b>Tú:</b> ${texto}</div>`;
  input.value = '';
  caja.scrollTop = caja.scrollHeight;
  try{
    const res = await fetch('/api/chat', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ mensaje: texto }) });
    const data = await res.json();
    caja.innerHTML += `<div style='margin-bottom:8px'><b>Marie:</b> ${data.respuesta}</div>`;
  }catch(e){ caja.innerHTML += `<div style='color:red'>Error, revisa API Key en Vercel</div>` }
  caja.scrollTop = caja.scrollHeight;
}
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('inputChat');
  if(input) input.addEventListener('keypress', (e)=>{ if(e.key==='Enter') enviarChat(); });
});