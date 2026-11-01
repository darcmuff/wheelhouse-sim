const EMPTY=/[?&]empty=1/.test(location.search);const K=EMPTY?'wh-sim-db-empty':'wh-sim-db-v1';
let DB;try{DB=JSON.parse(sessionStorage.getItem(K))}catch(e){} if(!DB)DB=EMPTY?{wheels:[],trades:[],optlegs:[]}:JSON.parse(JSON.stringify(window.__SIMDATA));
const save=()=>{try{sessionStorage.setItem(K,JSON.stringify(DB))}catch(e){}};
export function getFirestore(){return {}} export function doc(db,...p){return {p}}
export function collection(db,...p){return p[p.length-1]}
export async function setDoc(d,data){const c=d.p[d.p.length-2],id=d.p[d.p.length-1];const a=DB[c]=DB[c]||[];const i=a.findIndex(x=>x.id===id);const v=JSON.parse(JSON.stringify({...data,id:data.id??id}));if(i>=0)a[i]=v;else a.push(v);save();}
export async function deleteDoc(d){const c=d.p[d.p.length-2],id=d.p[d.p.length-1];DB[c]=(DB[c]||[]).filter(x=>x.id!==id);save();}
export async function getDocsFromServer(c){return {docs:(DB[c]||[]).map(x=>({id:x.id,data:()=>JSON.parse(JSON.stringify(x))}))}}