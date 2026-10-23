(function(){
  document.body.classList.remove('no-js');

  var WA_NUMBER = '255757755174';

  /* ---------- Swahili translations (English is the original text in the HTML) ---------- */
  var SW = {
    nav_about:'Kuhusu Sisi',nav_vision:'Dira Yetu',nav_founder:'Mwanzilishi',nav_structure:'Muundo',nav_projects:'Miradi',nav_site:'Picha za Site',nav_clients:'Wateja',nav_contact:'Wasiliana Nasi',
    hero_tag:'Ujenzi • Kazi za Kiraia • Uendelezaji Mali',
    hero_h1:'Tunajenga nyumba na maeneo <em>utakayodumu nayo maisha yote.</em>',
    hero_p:'BAPTA Engineering ni kampuni ya wakandarasi wa Ujenzi wa Majengo na Kazi za Kiraia iliyopo Arusha, na sasa inakua kuelekea uendelezaji wa mali. Roho yetu: "Kuwabakiza Wateja Maisha Yote."',
    hero_b1:'Tazama Miradi Yetu',btn_wa:'Wasiliana WhatsApp',btn_call:'Piga Simu Sasa',
    q1:'Ilianzishwa Arusha',q2:'CRB – Majengo',q3:'CRB – Kazi za Kiraia',q4:'Taasisi Wateja',
    about_badge:'Imesajiliwa na Bodi ya Usajili wa Wakandarasi ya Taifa',
    about_eye:'Kuhusu Kampuni',about_title:'Utendaji wa kuaminika, tunapanda hatua kwa hatua.',
    about_p1:'BAPTA Engineering ilianzishwa Arusha mwaka 2025 kama Wakandarasi wa Ujenzi wa Majengo na Kazi za Kiraia, na ilisajiliwa na Bodi ya Usajili wa Wakandarasi (CRB) katika Daraja la Tano.',
    about_p2:'Tangu wakati huo, imejihusisha zaidi na matengenezo ya majengo, ukarabati, ujenzi mpya na mara kwa mara ukarabati wa barabara na uuzaji wa vifaa vya ujenzi. Kutokana na utendaji wake wa kuaminika, imepanda hatua kwa hatua hadi sasa iko Daraja la Nne kwa Majengo na Daraja la Tano kwa Kazi za Kiraia. BAPTA sasa pia inaingia kwenye biashara ya uendelezaji mali.',
    t1:'Matengenezo ya majengo',t2:'Ukarabati',t3:'Ujenzi mpya',t4:'Ukarabati wa barabara',t5:'Uuzaji wa vifaa vya ujenzi',t6:'Uendelezaji mali',
    sv_eye:'Tunachofanya',sv_title:'Huduma kamili za ujenzi',
    sv_lead:'Kuanzia ufungaji wa bafu hadi ukarabati kamili na upanuzi wa majengo, kila mradi unakamilika kwa wakati, ndani ya bajeti na kwa viwango vya juu kabisa.',
    c1h:'Ujenzi Mpya',c1p:'Majengo ya makazi, ofisi na biashara yanayokamilishwa kuanzia mwanzo hadi mwisho.',
    c2h:'Matengenezo na Ukarabati',c2p:'Kazi za matengenezo kwa mkataba, ukarabati wa ofisi na majengo ya biashara.',
    c3h:'Barabara na Madaraja',c3p:'Ukarabati wa barabara na kazi za kiraia chini ya usajili wa CRB Daraja la V.',
    c4h:'Uendelezaji Mali',c4p:'BAPTA sasa inaingia kwenye biashara ya uendelezaji mali.',
    c5h:'Vifaa vya Ujenzi',c5p:'Uuzaji wa vifaa bora vya ujenzi kwa miradi mikubwa na midogo.',
    c6h:'Usanifu na Usimamizi wa Mradi',c6p:'Kila site husimamiwa kuanzia mwanzo hadi mwisho na msimamizi maalum wa site.',
    vi_eye:'Sisi Ni Nani',vi_title:'Dira Yetu na Roho Yetu',vi_h1:'Dira Yetu',vi_h2:'Roho Yetu',
    vi_p1:'Kila kitu tulicho nacho na kila tunachofanya kitaongozwa na roho ya "Kuwabakiza Wateja Maisha Yote". Hakuna jambo lolote tunalofanya lenye dharura au umuhimu kiasi cha kushindwa kutafakari kuridhika kwa mteja, Afya na Usalama, na Mazingira.',
    vi_p2:'Katika huduma zetu zote – kuanzia ukarabati hadi ujenzi mpya – tunatumia mtazamo wa kibinafsi na wa uwajibikaji, tukiweka msingi wa uhusiano wa kudumu katika kila mradi tunaoutekeleza.',
    f_tag:'Mwanzilishi na Mkurugenzi',f_eye:'Ujumbe kutoka kwa Mwanzilishi',f_title:'Imejengwa juu ya uaminifu, inakabidhiwa kwa fahari.',
    f_quote:'"Hatujengi kuta na paa tu. Tunajenga mahusiano ya kudumu. Mteja anapotuamini na nyumba au biashara yake, uaminifu huo ndio kitu cha thamani zaidi tunachokijenga."',
    f_p1:'BAPTA Engineering ilianza Arusha kwa ahadi rahisi: kufanya kazi kwa uaminifu, kumaliza kwa wakati, na kuweka site salama na safi. Hatua kwa hatua, utendaji wetu wa kuaminika umeikuza kampuni kutoka Daraja la Tano hadi Daraja la Nne kwa Majengo na Daraja la V kwa Kazi za Kiraia.',
    f_p2:'Leo tunapanuka kuelekea uendelezaji mali, tukiongozwa na roho moja: Kuwabakiza Wateja Maisha Yote.',
    fv1:'Uaminifu',fv2:'Ubora',fv3:'Usalama',fv4:'Kwa Wakati, Ndani ya Bajeti',f_role:'Mwanzilishi na Mkurugenzi',
    p_eye:'Wafanyakazi',p_title:'Watu wenye uzoefu, usimamizi imara wa miradi',
    p_p1:'Huduma za BAPTA zinatolewa na wafanyakazi wenye uzoefu na elimu ya juu, wataalamu wenye leseni, wasimamizi wa miradi na mafundi, wakisaidiwa na muungano wa washauri wataalamu wenye sifa za juu kutoka ndani na nje ya nchi.',
    p_p2:'Washauri wa muungano ni pamoja na Wasanifu Majengo, Wahandisi, Wakadiriaji Majenzi, Rasilimali Watu, Wataalamu Maalum, na mtandao wa Mafundi wenye sifa za kitaaluma, uzoefu na sifa nzuri, pamoja na uwezo wa kutoa huduma kwa wakati.',
    p_p3:'Mchanganyiko huu wa kipekee wa rasilimali kupitia usimamizi imara wa miradi ndio nguvu ya mafanikio ya kampuni.',
    tm_eye:'Timu Yetu',tm_title:'Muungano nyuma ya kila ujenzi',tm_lead:'Wataalamu wenye leseni, wasimamizi wa miradi na mafundi, wakisaidiwa na washauri kutoka ndani na nje ya nchi.',
    r1h:'Wasanifu Majengo',r1p:'Usanifu unaolingana na maono ya mteja',r2h:'Wahandisi',r2p:'Uhandisi wa miundo, kiraia na majengo',r3h:'Wakadiriaji Majenzi',r3p:'Ukadiriaji gharama na udhibiti wa bajeti',
    r4h:'Rasilimali Watu',r4p:'Wafanyakazi wenye ujuzi na salama',r5h:'Wataalamu Maalum',r5p:'Kazi na huduma maalum',r6h:'Mafundi',r6p:'Mtandao wa mafundi wenye sifa',
    o_eye:'Muundo wa Shirika',o_title:'Jinsi BAPTA inavyoundwa',o_board:'Bodi ya Wakurugenzi',o_ceo:'Rais na Mtendaji Mkuu',o_hr:'Rasilimali Watu',o_acc:'Hesabu',o_md:'Mkurugenzi Mkuu',
    o_ops:'Uendeshaji',o_proc:'Manunuzi',o_con:'Ujenzi',o_civil:'Kazi za Kiraia',o_spec:'Huduma na Kazi Maalum',o_bld:'Kazi za Majengo',o_pd:'Uendelezaji Mali',o_dd:'Usanifu na Uendelezaji',o_ms:'Masoko na Mauzo',
    e_eye:'Uzoefu wa Kampuni',e_title:'Sifa isiyo na kifani kwa huduma mbalimbali',
    e_p1:'Kama wakandarasi wakubwa wa ujenzi wa kitaifa, Bapta Engineering imejijengea sifa isiyo na kifani kwa huduma mbalimbali. Kuanzia matengenezo ya mkataba hadi miradi mipya ya ujenzi, barabara, madaraja, ukarabati wa ofisi hadi majengo ya biashara; Bapta Engineering imekuwa ikifanya kazi hizi kwa miaka saba iliyopita kupitia kampuni nyingi za ujenzi zilizokuwa zikipata uzoefu hadi kupata usajili wa kampuni. Kwa uzoefu huo tunaunda mazingira yanayolingana kikamilifu na maono ya mteja wetu.',
    e_p2:'Tunatoa huduma kamili ya ujenzi kwa wateja wetu. Site zote husimamiwa kimradi kuanzia mwanzo hadi mwisho na msimamizi maalum wa site husimamia kazi ya mafundi wetu. Mtazamo wetu wa kina unahakikisha kila mradi, kuanzia ufungaji wa bafu hadi ukarabati kamili na upanuzi wa miundo, unakamilika kwa wakati, ndani ya bajeti na kwa viwango vya juu kabisa.',
    e_p3:'Kama wajenzi makini, tunaamini mahali pa kazi pasafi ni muhimu kama umaliziaji wa mwisho, na tunajitahidi kuweka mahali petu pa kazi pasafi na salama.',
    pr_eye:'Miradi Yetu',pr_title:'Kazi tunazojivunia',pr_lead:'Mtazamo wa kazi za makazi, biashara na kiraia zilizokamilika na zinazoendelea.',
    fl_all:'Zote',fl_res:'Makazi',fl_com:'Biashara',fl_site:'Site',
    g1:'Jengo la Makazi la Ghorofa Mbili',g2:'Kazi za Msingi',g3:'Makazi ya Familia',g4:'Jengo la Ofisi na Ghala',g5:'Muundo wa Chuma',g6:'Msingi wa Mawe',g7:'Jengo la Ghorofa Nyingi',g8:'Ufungaji wa Vyoo',g9:'Jengo la Biashara',g10:'Nje ya Jengo la Biashara',g11:'Umaliziaji wa Ndani',g12:'Uchimbaji na Upimaji wa Site',
    sp_live:'Moja kwa moja kutoka site',sp_eye:'Maendeleo ya Site',sp_title:'Tazama kazi yetu ikichukua sura',sp_lead:'Picha halisi kutoka site yetu ya ujenzi ya sasa. Gusa picha yoyote kuiona kubwa.',
    sp1:'Jengo kuu – kuta, madirisha na kuezeka vimekamilika',sp2:'Jengo la pembeni – kazi za umaliziaji zinaendelea',sp3:'Kuta zilizopigwa lipu laini na rangi',sp4:'Msingi wa tanki la maji – hifadhi ya lita 5000',sp5:'Mbao za dari na misingi ya zege',sp6:'Eneo lenye ukuta wa uzio na taa za jua',
    sp_cta:'Panga kutembelea site kupitia WhatsApp',
    cp_eye:'Utiifu',cp_title:'Tumesajiliwa, tuna leseni na tunawajibika',cp_lead:'BAPTA imesajiliwa na Bodi ya Usajili wa Wakandarasi ya Taifa (CRB) na inapanda hatua kwa hatua kwa nguvu ya utendaji wa kuaminika.',
    cp1h:'Bodi ya Usajili wa Wakandarasi',cp1p:'Imesajiliwa kitaifa, ikianzia Daraja la Tano.',cp2h:'Majengo',cp2p:'Daraja la sasa la CRB kwa kazi za majengo.',cp3h:'Kazi za Kiraia',cp3p:'Daraja la sasa la CRB kwa kazi za kiraia.',
    cl_eye:'Wateja Wetu',cl_title:'Tunaaminiwa na taasisi kuu',cl_g1:'Serikali',cl_g2:'Taasisi za Kimataifa',cl_g3:'Huduma / Nishati',
    ct_eye:'Wasiliana Nasi',ct_title:'Tujenge nyumba au mradi wako ujao',ct_lead:'Tuambie unachofikiria nasi tutakujibu.',
    ph:'Simu',em:'Barua pepe',ad:'Anwani',ad_v:'Mitaa ya Kisongo Plot No. 6&7. Karibu na sokoni',
    fm_h:'Tutumie ujumbe',fm_name:'Jina lako',fm_phone:'Namba ya simu',fm_email:'Barua pepe',fm_msg:'Tuambie kuhusu mradi wako',
    s1:'Ujenzi mpya',s2:'Ukarabati / matengenezo',s3:'Kazi za barabara',s4:'Uendelezaji mali',s5:'Vifaa vya ujenzi',
    fm_send:'Tuma kupitia WhatsApp',fm_note:'Ujumbe wako utafunguka WhatsApp, tayari kutumwa.',ft:'Kuwabakiza Wateja Maisha Yote.'
  };

  /* WhatsApp prefilled messages */
  var WA_MSG = {
    en:{
      general:"Hello BAPTA Engineering 👋\n\nI found your website and I would like to know more about your building and construction services. Could you please get back to me?\n\nThank you.",
      visit:"Hello BAPTA Engineering 👋\n\nI saw the site photos on your website and I would like to book a site visit. Please let me know a suitable time.\n\nThank you.",
      form:function(d){return "Hello BAPTA Engineering 👋\n\nMy name is "+d.name+".\nService needed: "+d.service+(d.phone?"\nPhone: "+d.phone:"")+(d.email?"\nEmail: "+d.email:"")+"\n\nProject details:\n"+d.message+"\n\nThank you."}
    },
    sw:{
      general:"Habari BAPTA Engineering 👋\n\nNimeona website yenu na ningependa kujua zaidi kuhusu huduma zenu za ujenzi. Naomba mnijibu tafadhali.\n\nAsanteni.",
      visit:"Habari BAPTA Engineering 👋\n\nNimeona picha za site kwenye website yenu na ningependa kupanga kutembelea site. Naomba mnijulishe muda unaofaa.\n\nAsanteni.",
      form:function(d){return "Habari BAPTA Engineering 👋\n\nJina langu ni "+d.name+".\nHuduma ninayohitaji: "+d.service+(d.phone?"\nSimu: "+d.phone:"")+(d.email?"\nBarua pepe: "+d.email:"")+"\n\nMaelezo ya mradi:\n"+d.message+"\n\nAsanteni."}
    }
  };
  var SERVICE_SW = {'New construction':'Ujenzi mpya','Renovation / maintenance':'Ukarabati / matengenezo','Road works':'Kazi za barabara','Property development':'Uendelezaji mali','Building materials':'Vifaa vya ujenzi'};

  var lang = 'en';
  try{ lang = localStorage.getItem('bapta_lang') || 'en'; }catch(e){}

  var nodes = document.querySelectorAll('[data-i18n]');
  var phs = document.querySelectorAll('[data-i18n-ph]');
  nodes.forEach(function(n){ n.dataset.en = n.innerHTML; });
  phs.forEach(function(n){ n.dataset.en = n.getAttribute('placeholder'); });

  function waLink(kind){
    return 'https://wa.me/'+WA_NUMBER+'?text='+encodeURIComponent(WA_MSG[lang][kind||'general']);
  }
  function refreshWa(){
    document.querySelectorAll('.wa-link').forEach(function(a){
      a.href = waLink(a.dataset.wa || 'general');
    });
  }

  function setLang(l){
    lang = l;
    nodes.forEach(function(n){
      var k = n.dataset.i18n;
      n.innerHTML = (l==='sw' && SW[k]!==undefined) ? SW[k] : n.dataset.en;
    });
    phs.forEach(function(n){
      var k = n.dataset.i18nPh;
      n.setAttribute('placeholder', (l==='sw' && SW[k]) ? SW[k] : n.dataset.en);
    });
    document.documentElement.lang = l;
    document.querySelectorAll('.lang button').forEach(function(b){
      b.classList.toggle('active', b.dataset.lang===l);
    });
    document.title = l==='sw'
      ? 'BAPTA Engineering | Ujenzi, Kazi za Kiraia na Uendelezaji Mali'
      : 'BAPTA Engineering | Building, Civil Works & Property Development';
    refreshWa();
    try{ localStorage.setItem('bapta_lang', l); }catch(e){}
  }
  document.querySelectorAll('.lang button').forEach(function(b){
    b.addEventListener('click', function(){ setLang(b.dataset.lang); });
  });
  setLang(lang);

  /* ---------- Form -> WhatsApp ---------- */
  document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    var svc = document.getElementById('fService').value;
    var d = {
      name:document.getElementById('fName').value.trim(),
      phone:document.getElementById('fPhone').value.trim(),
      email:document.getElementById('fEmail').value.trim(),
      service: lang==='sw' ? (SERVICE_SW[svc]||svc) : svc,
      message:document.getElementById('fMsg').value.trim()
    };
    var url = 'https://wa.me/'+WA_NUMBER+'?text='+encodeURIComponent(WA_MSG[lang].form(d));
    window.open(url,'_blank','noopener');
  });

  /* ---------- Scroll reveal ---------- */
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
    });
  },{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

  /* ---------- Counter ---------- */
  var cio = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(!en.isIntersecting) return;
      var el = en.target, end = +el.dataset.count, t0 = null;
      function step(t){
        if(!t0) t0 = t;
        var p = Math.min((t-t0)/1600,1);
        el.textContent = Math.round(end*(1-Math.pow(1-p,3)));
        if(p<1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      cio.unobserve(el);
    });
  },{threshold:.6});
  document.querySelectorAll('.count').forEach(function(el){ cio.observe(el); });

  /* ---------- Nav shrink + back to top ---------- */
  var nav = document.getElementById('nav'), topBtn = document.getElementById('toTop');
  function onScroll(){
    var y = window.scrollY;
    nav.classList.toggle('small', y>60);
    topBtn.classList.toggle('show', y>600);
  }
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
  topBtn.addEventListener('click', function(){ window.scrollTo({top:0,behavior:'smooth'}); });

  /* close mobile menu after tapping a link */
  document.querySelectorAll('#menu a').forEach(function(a){
    a.addEventListener('click', function(){ document.getElementById('navtoggle').checked = false; });
  });

  /* ---------- Lightbox for site photos ---------- */
  var figs = Array.prototype.slice.call(document.querySelectorAll('#spGrid .sp'));
  var lb = document.getElementById('lb'), lbImg = document.getElementById('lbImg'), lbCap = document.getElementById('lbCap'), idx = 0;
  function openLb(i){
    idx = (i+figs.length)%figs.length;
    var f = figs[idx];
    lbImg.src = f.querySelector('img').src;
    lbImg.alt = f.querySelector('img').alt;
    lbCap.textContent = f.querySelector('figcaption').textContent;
    lb.classList.add('open'); lb.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
  }
  function closeLb(){ lb.classList.remove('open'); lb.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }
  figs.forEach(function(f,i){ f.addEventListener('click', function(){ openLb(i); }); });
  document.getElementById('lbClose').addEventListener('click', closeLb);
  document.getElementById('lbPrev').addEventListener('click', function(){ openLb(idx-1); });
  document.getElementById('lbNext').addEventListener('click', function(){ openLb(idx+1); });
  lb.addEventListener('click', function(e){ if(e.target===lb) closeLb(); });
  document.addEventListener('keydown', function(e){
    if(!lb.classList.contains('open')) return;
    if(e.key==='Escape') closeLb();
    if(e.key==='ArrowLeft') openLb(idx-1);
    if(e.key==='ArrowRight') openLb(idx+1);
  });
})();
