document.querySelectorAll('[data-split]').forEach(h=>{let i=0;h.innerHTML=h.innerHTML.split(/(<[^>]+>)/).map(p=>p.startsWith('<')?p:p.split(' ').filter(Boolean).map(w=>`<span class="word"><span style="animation-delay:${(i++)*.07}s">${w}</span></span>`).join(' ')).join('')});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
document.querySelector('form').addEventListener('submit',e=>{e.preventDefault();e.target.innerHTML='<h3>Ďakujeme, ozveme sa Vám.</h3><p>(Ukážka formulára – v hotovej verzii chodia žiadosti priamo na Váš e-mail.)</p>'});
