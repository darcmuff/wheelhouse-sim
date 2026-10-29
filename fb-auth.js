const U={uid:'sim-demo',email:'demo@example.com',displayName:'SIMULATION'};
export function getAuth(){return {currentUser:U}}
export function onAuthStateChanged(a,cb){setTimeout(()=>cb(U),30);return()=>{}}
export class GoogleAuthProvider{}
export async function signInWithPopup(){return {user:U}} export async function createUserWithEmailAndPassword(){return {user:U}} export async function signInWithEmailAndPassword(){return {user:U}} export async function sendPasswordResetEmail(){} export async function signOut(){alert('Simulation: sign-out disabled. Close the tab to leave.')}