// Atelier Console Authentication System
// Supabase Auth connection layer
// Add your public Supabase URL and anon key in the configuration below.
// Never place the service role key in this file.

const SUPABASE_URL = 'https://wbcflulqaokpuejvwvyh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiY2ZsdWxxYW9rcHVlanZ3dnloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU5NjE5MjUsImV4cCI6MjEwMTUzNzkyNX0.d-r8Yk386tjBbwdTlX-Pd5-SnTu92e_3GAm24ha_6Nw';

const loginForm = document.getElementById('login-form');
const loginRoom = document.getElementById('login-room');
const consoleRoom = document.getElementById('console-room');
const message = document.getElementById('auth-message');
const logoutButton = document.getElementById('logout');

let supabaseClient = null;

function showConsole() {
  loginRoom?.classList.add('hidden');
  consoleRoom?.classList.remove('hidden');
}

function showLogin() {
  loginRoom?.classList.remove('hidden');
  consoleRoom?.classList.add('hidden');
}

function initSupabase() {
  if (window.supabase && SUPABASE_URL !== 'YOUR_SUPABASE_URL') {
    supabaseClient = window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_ANON_KEY
    );
  }
}

loginForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!supabaseClient) {
    message.textContent = 'Supabase credentials are waiting to be connected.';
    return;
  }

  const email = document.getElementById('email')?.value;
  const password = document.getElementById('password')?.value;

  const { error } = await supabaseClient.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    message.textContent = error.message;
    return;
  }

  const { data: { user } } = await supabaseClient.auth.getUser();

if (!user) {
  message.textContent = "User verification failed.";
  return;
}

const { data: profile, error: profileError } = await supabaseClient
  .from('profiles')
  .select('*')
  .eq('id', user.id)
  .single();

if (profileError || !profile) {
  message.textContent = "Profile not found.";
  return;
}

console.log("Logged in user:", user);
console.log("Profile:", profile);

if (profile.role !== "owner") {
  message.textContent = "Access level insufficient.";
  return;
}

message.textContent = `Welcome ${profile.role} back to the Atelier.`;
showConsole();
});

logoutButton?.addEventListener('click', async () => {
  await supabaseClient?.auth.signOut();
  showLogin();
});

initSupabase();

if (supabaseClient) {
  console.log("Supabase connected successfully");
} else {
  console.error("Supabase failed to initialize");
}

showLogin();

console.log('Atelier Authentication System ready');
