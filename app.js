(()=>{'use strict';
const paths={
tooth:'<path d="M12 4C8.6 2 4.1 3.6 3.5 8.2c-.8 5.2 2.8 11.8 5.2 11.8 2 0 1.5-6.3 3.3-6.3s1.3 6.3 3.3 6.3c2.4 0 6-6.6 5.2-11.8C19.9 3.6 15.4 2 12 4Z"/>',
sparkle:'<path d="m12 2 1.9 7.1L21 11l-7.1 1.9L12 20l-1.9-7.1L3 11l7.1-1.9L12 2ZM19 17l.8 2.3L22 20l-2.2.7L19 23l-.8-2.3L16 20l2.2-.7L19 17Z"/>',
braces:'<rect x="2.8" y="6" width="7" height="12" rx="2.2"/><rect x="14.2" y="6" width="7" height="12" rx="2.2"/><path d="M6.3 9v6M17.7 9v6M2 12h20M9.8 12h4.4"/>',
roots:'<path d="M12 4C8.5 2 4.5 3.5 4 8c-.6 5.3 2.5 12 5 12 2 0 1.1-7 3-7s1 7 3 7c2.5 0 5.6-6.7 5-12-.5-4.5-4.5-6-8-4Z"/><path d="m8 9 2 2m6-2-2 2"/>',
smile:'<circle cx="12" cy="12" r="9"/><path d="M8 14c2.2 2.9 5.8 2.9 8 0M8.3 9h.01M15.7 9h.01"/>',
droplet:'<path d="M12 2c3.3 5 7 8.6 7 12a7 7 0 0 1-14 0c0-3.4 3.7-7 7-12Z"/><path d="M9 16a3 3 0 0 0 3 3"/>',
implant:'<path d="M7 3h10l2 5-7 4-7-4 2-5ZM8 14h8M9 17h6M11 20h2M12 12v11"/>',
bridge:'<path d="M3 8c2-4 5-5 9-4 4-1 7 0 9 4l-3 11h-4l-2-5-2 5H6L3 8Z"/><path d="M7 5v10m10-10v10"/>',
family:'<circle cx="8" cy="7" r="3"/><circle cx="17" cy="9" r="2.3"/><path d="M2 20v-4a6 6 0 0 1 12 0v4M13.5 20v-4a4 4 0 0 1 8 0v4"/>'
};
const icon=n=>'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(paths[n]||paths.tooth)+'</svg>';
const items=[
{title:'Scaling & Polishing',group:'everyday',price:'RM80 – RM150',description:'A fresh start for healthier teeth and gums.',icon:'sparkle',form:'Scaling & Polishing'},
{title:'Braces & Orthodontics',group:'smile',price:'RM4,500 – RM6,000',description:'A personalised journey to your confident smile.',icon:'braces',form:'Braces / Orthodontics'},
{title:'Wisdom Tooth Removal',group:'advanced',price:'RM550 – RM1,500',description:'Careful assessment and treatment for troublesome wisdom teeth.',icon:'tooth',form:'Wisdom Tooth Removal'},
{title:'Dental Fillings',group:'everyday',price:'RM50 – RM180',description:'Restore teeth and keep your smile feeling its best.',icon:'smile',form:'Tooth Filling'},
{title:'Teeth Whitening',group:'smile',price:'RM250 – RM1,000',description:'Explore professional options for a brighter smile.',icon:'droplet',form:'Teeth Whitening'},
{title:'Root Canal Treatment',group:'advanced',price:'RM600 – RM900',description:'Treatment options to help preserve an affected tooth.',icon:'roots',form:'Root Canal Treatment'},
{title:'Crowns & Bridges',group:'advanced',price:'RM650 – RM1,200',description:'Restore the strength and function of your smile.',icon:'bridge',form:'Other / Not sure yet'},
{title:'Dental Veneers',group:'smile',price:'RM250 / unit',description:'Explore options to refine your smile naturally.',icon:'sparkle',form:'Veneers'},
{title:'Implant Enquiries',group:'advanced',price:'Ask for consultation',description:'Discuss tooth replacement choices and suitability.',icon:'implant',form:'Dental Implant Consultation'},
{title:'Family Dental Care',group:'everyday',price:'Ask for consultation',description:'Check-ups and considerate care for every age.',icon:'family',form:'Dental check-up / Consultation'}];
const grid=document.getElementById('service-grid');
function render(group='all'){const list=items.filter(item=>group==='all'||item.group===group);grid.innerHTML=list.map((v,i)=>'<article class="service-card"><div class="service-top"><div class="service-glyph">'+icon(v.icon)+'</div><span class="service-index">'+String(i+1).padStart(2,'0')+' / '+String(list.length).padStart(2,'0')+'</span></div><h3>'+v.title+'</h3><p>'+v.description+'</p><div class="service-bottom"><span class="service-price">'+v.price+'</span><button class="enquire" type="button" data-service="'+v.form+'" aria-label="Enquire about '+v.title+'">Enquire <span aria-hidden="true">↗</span></button></div></article>').join('');
grid.querySelectorAll('[data-service]').forEach(button=>button.addEventListener('click',()=>{document.getElementById('service').value=button.dataset.service;document.getElementById('booking').scrollIntoView({behavior:'smooth'});if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)setTimeout(()=>document.getElementById('name').focus({preventScroll:true}),650);else document.getElementById('name').focus({preventScroll:true});}));}
render();
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});render(button.dataset.filter)}));
const nav=document.getElementById('nav-links'),menu=document.getElementById('hamburger');
menu.addEventListener('click',()=>{const opened=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(opened));menu.setAttribute('aria-label',opened?'Close navigation':'Open navigation')});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}});
const dateInput=document.getElementById('date'),today=new Date(),year=today.getFullYear(),month=String(today.getMonth()+1).padStart(2,'0'),day=String(today.getDate()).padStart(2,'0');
dateInput.min=year+'-'+month+'-'+day;
document.getElementById('year').textContent=year;
document.getElementById('booking-form').addEventListener('submit',e=>{
e.preventDefault();const form=e.currentTarget;if(!form.reportValidity())return;const d=new FormData(form);
const name=String(d.get('name')||'').trim(),phone=String(d.get('phone')||'').trim();if(!name||!phone){alert('Please enter your name and phone number.');return}
const date=String(d.get('date')||'');if(date<dateInput.min){alert('Please choose today or a future date.');return}
const niceDate=new Date(date+'T12:00:00').toLocaleDateString('en-MY',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
const lines=['Hi The Dental House Kluang, I would like to enquire about a dental appointment.','','Name: '+name,'Phone: '+phone,'Treatment: '+d.get('service'),'Preferred date: '+niceDate,'Preferred time: '+d.get('time'),'Notes: '+(String(d.get('notes')||'').trim()||'None'),'','Please advise the available appointment slots. Thank you!'];
const link='https://wa.me/601110609594?text='+encodeURIComponent(lines.join('\n'));const tab=window.open(link,'_blank','noopener,noreferrer');if(!tab)window.location.href=link;
});
})();