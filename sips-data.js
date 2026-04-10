// ============================================================
// SIPS FIREBASE BRIDGE  (sips-data.js)
// All pages import this to read/write data from Firebase
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAAt8LnNdmvLKcueO-8M6c79BnAinL3Eek",
  authDomain: "sips-school.firebaseapp.com",
  projectId: "sips-school",
  storageBucket: "sips-school.firebasestorage.app",
  messagingSenderId: "575432490147",
  appId: "1:575432490147:web:8d8d3ba63de9a9b9265316"
};

const app  = initializeApp(firebaseConfig);
const db   = getFirestore(app);
const auth = getAuth(app);

const DEFAULTS = {
  hero:{badge:'Recognized by Govt. of Karnataka',title:'Sarvothomukha International Public School',tagline:'Where excellence knows no bounds.',stat1val:'2018',stat1lbl:'Founded',stat2val:'PreKG–Class 10',stat2lbl:'Grades Offered',stat3val:'100%',stat3lbl:'Govt. Recognized',ctaText:'Enquire for Admission'},
  admission:{show:true,year:'2026–2027',phone1:'8088854101',phone2:'7899454101',btnText:'Apply Now →'},
  about:{trust:'Sri Lakshmi Ranganathaswamy Education Trust (R.)',founded:'2018',founder:'Chikkaguddaiah',recognition:'Recognized by Govt. of Karnataka',description:'Welcome to Sarvothomukha International Public School.',timeStart:'9:30 AM',timeEnd:'4:00 PM',imageUrl:'../images/building.JPG',youtubeUrl:'https://www.youtube.com/channel/UCAlCk_tKREJD3knRC2QBtkw',subjects:['Kannada','English','Hindi','Mathematics','Science','Social Studies','Physical Education'],activities:['Music','Taekwondo','Computer Lab','Library'],features:['Qualified & Dedicated Teachers','Wide & Ventilated Class Rooms','Individual Care for Every Child','Playground for Sports','Computer Education','Vehicle Facility']},
  teachers:[{name:'Chikkaguddaiah',role:'President',qual:'Founder & President'},{name:'Dr. Naveena C',role:'Secretary',qual:'B.E, M.Tech, Ph.D.'},{name:'Mrs. Divya S',role:'Treasurer',qual:'MBA'},{name:'Sowmya K',role:'Head Madam',qual:'BA, B.Ed'}],
  gallery:[{src:'./gallery/IMG-20230911-WA0001.jpg',alt:'School Memory',cat:'campus'},{src:'../gallery/spcrp.JPG',alt:'Sports',cat:'sports'}],
  announcements:[{icon:'🎓',title:'Admissions Open 2026–2027',text:'Seats filling fast! Call 8088854101.',date:'April 2, 2026'}],
  contact:{phone1:'8088854101',phone2:'7899454101',whatsapp:'',youtube:'https://www.youtube.com/channel/UCAlCk_tKREJD3knRC2QBtkw',facebook:'',instagram:'',address:'#9 1st cross, GajananaNagar, Hegganahalli cross, Bengaluru-560091, Karnataka, India',pincode:'',timeStart:'9:30 AM',timeEnd:'4:00 PM',workDays:'Monday to Saturday'},
  settings:{siteTitle:'Sarvothomukha International Public School',shortName:'Sarvothomukha',primaryColor:'#6bc8ff',footer:'© 2025 Sarvothomukha International Public School. All rights reserved. Powered by ABTS Technologies.',metaTitle:'Sarvothomukha International Public School',metaDesc:'Best school in Karnataka.',metaKeywords:'school Karnataka, SIPS'},
  enquiries:[],
};

const _cache = {};

export const SIPS = {
  async get(key) {
    if (_cache[key] !== undefined) return _cache[key];
    try {
      const snap = await getDoc(doc(db, 'sipsData', key));
      if (snap.exists()) { _cache[key] = snap.data().value; return _cache[key]; }
    } catch(e) { console.warn('SIPS.get:', e); }
    const def = JSON.parse(JSON.stringify(DEFAULTS[key]));
    _cache[key] = def;
    return def;
  },

  async set(key, val) {
    try {
      await setDoc(doc(db, 'sipsData', key), { value: val });
      _cache[key] = val;
      return true;
    } catch(e) { console.error('SIPS.set:', e); return false; }
  },

  async resetAll() {
    for (const key of Object.keys(DEFAULTS)) {
      const def = JSON.parse(JSON.stringify(DEFAULTS[key]));
      await this.set(key, def);
    }
  },

  auth,
  signIn: (email, pass) => signInWithEmailAndPassword(auth, email, pass),
  signOut: () => signOut(auth),
  onAuthChange: cb => onAuthStateChanged(auth, cb),
};

export default SIPS;
