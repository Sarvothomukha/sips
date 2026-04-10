// ============================================================
// SIPS SHARED localStorage BRIDGE  (sips-data.js)
// ============================================================
// Key prefix
const SIPS = {
  KEY: {
    hero:          'sips_hero',
    admission:     'sips_admission',
    about:         'sips_about',
    teachers:      'sips_teachers',
    gallery:       'sips_gallery',
    announcements: 'sips_announcements',
    contact:       'sips_contact',
    settings:      'sips_settings',
    enquiries:     'sips_enquiries',
  },

  // ── defaults ──────────────────────────────────────
  DEFAULTS: {
    hero: {
      badge:    'Recognized by Govt. of Karnataka',
      title:    'Sarvothomukha International Public School',
      tagline:  'Where excellence knows no bounds. Best knowledge from all directions.',
      stat1val: '2018', stat1lbl: 'Founded',
      stat2val: 'K–10', stat2lbl: 'Grades Offered',
      stat3val: '100%', stat3lbl: 'Govt. Recognized',
      ctaText:  'Enquire for Admission',
    },
    admission: {
      show:    true,
      year:    '2026–2027',
      phone1:  '8088854101',
      phone2:  '7899454101',
      btnText: 'Apply Now →',
    },
    about: {
      trust:    'Sri Lakshmi Ranganathaswamy Education Trust (R.)',
      founded:  '2018',
      founder:  'Chikkaguddaiah',
      recognition: 'Recognized by Govt. of Karnataka',
      description: 'Welcome to Sarvothomukha International Public School. Founded in 2018 by Chikkaguddaiah. Recognized by the Government of Karnataka, our state-of-the-art facilities provide a nurturing environment for students to explore, learn, and grow.',
      timeStart: '9:30 AM',
      timeEnd:   '4:20 PM',
      imageUrl:  '../images/building.JPG',
      youtubeUrl:'https://www.youtube.com/@SarvothomukhaInternationalpubl/videos',
      subjects:  ['Kannada','English','Hindi','Mathematics','Science','Social Studies','Physical Education'],
      activities:['Music','Taekwondo','Computer Lab','Library'],
      features:  ['Qualified, Experienced & Dedicated Teachers','Wide & Ventilated Class Rooms','Individual Care & Attention for Every Child','Well-Equipped Toys & Modern Teaching Aids','Playground for Sports Activities','Co-Curricular Activities Year-Round','Computer Education Available','Vehicle Facility Provided'],
    },
    teachers: [
      { name:'Chikkaguddaiah', role:'President',  qual:'Founder & President' },
      { name:'Dr. Naveena C',  role:'Secretary',  qual:'B.E, M.Tech, Ph.D.' },
      { name:'Mrs. Divya S',   role:'Treasurer',  qual:'MBA' },
      { name:'Sowmya K',       role:'Head Madam', qual:'BA, B.Ed' },
    ],
    gallery: [
      {src:'../gallery/IMG-20230911-WA0001.jpg',alt:'School Memory',cat:'campus'},
      {src:'../gallery/IMG-20230911-WA0004.jpg',alt:'School Memory',cat:'events'},
      {src:'../gallery/spcrp.JPG',alt:'Sports',cat:'sports'},
      {src:'../gallery/IMG-20230911-WA0005.jpg',alt:'School Memory',cat:'events'},
      {src:'../gallery/IMG-20230911-WA0006.jpg',alt:'School Memory',cat:'events'},
      {src:'../gallery/IMG-20230911-WA0007.jpg',alt:'School Memory',cat:'events'},
      {src:'../gallery/IMG-20230911-WA0008.jpg',alt:'School Memory',cat:'events'},
      {src:'../gallery/IMG-20230911-WA0009.jpg',alt:'School Memory',cat:'events'},
      {src:'../gallery/IMG-20230911-WA0010.jpg',alt:'School Memory',cat:'events'},
      {src:'../gallery/IMG-20230911-WA0011.jpg',alt:'School Memory',cat:'events'},
      {src:'../gallery/sp1d.JPG',alt:'Sports Day',cat:'sports'},
      {src:'../gallery/sp2d.JPG',alt:'Sports Day',cat:'sports'},
      {src:'../gallery/sppl.JPG',alt:'Sports',cat:'sports'},
      {src:'../gallery/IMG-20230911-WA0012.jpg',alt:'School Memory',cat:'events'},
      {src:'../gallery/IMG-20230911-WA0013.jpg',alt:'School Memory',cat:'events'},
      {src:'../gallery/IMG-20230911-WA0014.jpg',alt:'School Memory',cat:'events'},
      {src:'../gallery/IMG-20230911-WA0015.jpg',alt:'School Memory',cat:'events'},
      {src:'../gallery/IMG-20230911-WA0029.jpg',alt:'School Memory',cat:'events'},
      {src:'../gallery/IMG-20230911-WA0017.jpg',alt:'School Memory',cat:'events'},
      {src:'../gallery/spps.JPG',alt:'Sports',cat:'sports'},
      {src:'../gallery/spsc.JPG',alt:'Campus',cat:'campus'},
      {src:'../gallery/IMG-20230911-WA0018.jpg',alt:'School Memory',cat:'events'},
      {src:'../gallery/IMG-20230911-WA0019.jpg',alt:'School Memory',cat:'events'},
      {src:'../gallery/IMG-20230911-WA0020.jpg',alt:'School Memory',cat:'events'},
      {src:'../gallery/IMG-20230911-WA0025.jpg',alt:'School Memory',cat:'events'},
      {src:'../gallery/IMG-20230911-WA0026.jpg',alt:'School Memory',cat:'events'},
      {src:'../gallery/IMG-20230911-WA0027.jpg',alt:'School Memory',cat:'events'},
      {src:'../gallery/spp.JPG',alt:'Sports',cat:'sports'},
      {src:'../gallery/spst.JPG',alt:'Sports',cat:'sports'},
      {src:'../gallery/IMG-20230911-WA0028.jpg',alt:'School Memory',cat:'events'},
      {src:'../gallery/IMG-20230911-WA0030.jpg',alt:'School Memory',cat:'events'},
      {src:'../gallery/IMG-20230911-WA0031.jpg',alt:'School Memory',cat:'events'},
      {src:'../gallery/IMG-20230911-WA0032.jpg',alt:'School Memory',cat:'events'},
      {src:'../gallery/IMG-20230911-WA0033.jpg',alt:'School Memory',cat:'events'},
      {src:'../images/school interor.jpg',alt:'School Interior',cat:'campus'},
      {src:'../gallery/anu1.JPG',alt:'Annualday',cat:'annualday'},
      {src:'../gallery/anu2.JPG',alt:'Annualday',cat:'annualday'},
      {src:'../gallery/anu3.JPG',alt:'Annualday',cat:'annualday'},
      {src:'../gallery/anu4.JPG',alt:'Annualday',cat:'annualday'},

    ],
    announcements: [
      {icon:'🎓',title:'Admissions Open 2026–2027',text:'Seats are filling fast! Contact 8088854101 or 7899454101 to secure your child\'s place.',date:'April 2, 2026'},
      {icon:'🏆',title:'Annual Sports Day 2026',text:'Annual Sports Day will be held on April 20, 2026. All students and parents are cordially invited.',date:'March 28, 2026'},
      {icon:'🌸',title:'Summer Vacation Notice',text:'Summer vacation begins May 15, 2026. School reopens June 10, 2026.',date:'March 20, 2026'},
    ],
    contact: {
      phone1:   '8088854101',
      phone2:   '7899454101',
      whatsapp: '',
      youtube:  'https://www.youtube.com/@SarvothomukhaInternationalpubl/videos',
      facebook: '',
      instagram:'',
      address:  'Karnataka, India',
      pincode:  '',
      timeStart:'9:30 AM',
      timeEnd:  '4:20 PM',
      workDays: 'Monday to Saturday',
    },
    settings: {
      siteTitle:   'Sarvothomukha International Public School',
      shortName:   'Sarvothomukha',
      primaryColor:'#6bc8ff',
      footer:      '© 2025 Sarvothomukha International Public School. All rights reserved. Powered by ABTS Technologies.',
      metaTitle:   'Sarvothomukha International Public School',
      metaDesc:    'Best school in Karnataka, recognized by Government of Karnataka.',
      metaKeywords:'school Karnataka, SIPS, international school',
    },
    enquiries: [],
  },

  // ── CRUD ──────────────────────────────────────────
  get(key) {
    try {
      const v = localStorage.getItem(this.KEY[key]);
      return v ? JSON.parse(v) : JSON.parse(JSON.stringify(this.DEFAULTS[key]));
    } catch(e) { return JSON.parse(JSON.stringify(this.DEFAULTS[key])); }
  },
  set(key, val) {
    try { localStorage.setItem(this.KEY[key], JSON.stringify(val)); return true; }
    catch(e) { return false; }
  },
  reset(key) { localStorage.removeItem(this.KEY[key]); },
  resetAll() { Object.values(this.KEY).forEach(k => localStorage.removeItem(k)); },
};
function submitEnquiry() {
  const name  = document.getElementById('fName').value.trim();
  const phone = document.getElementById('fPhone').value.trim();
  const email = document.getElementById('fEmail').value.trim();
  const type  = document.getElementById('fType').value;
  const msg   = document.getElementById('fMsg').value.trim();

  if (!name || !phone) {
    alert('Please enter your name and phone number.');
    return;
  }

  const enquiries = SIPS.get('enquiries');
  const now = new Date().toLocaleDateString('en-IN', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  enquiries.unshift({
    name, phone, email, type,
    msg,          // ← saves the message
    date: now,
    status: 'pending'
  });

  SIPS.set('enquiries', enquiries);

  // Show success, hide form
  document.getElementById('formContent').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
}