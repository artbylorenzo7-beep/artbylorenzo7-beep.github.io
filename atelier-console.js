// Atelier Console Authentication System
// Supabase Auth connection layer
// Add your public Supabase URL and anon key in the configuration below.
// Never place the service role key in this file.

const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

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

  message.textContent = 'Welcome back to the Atelier.';
  showConsole();
});

logoutButton?.addEventListener('click', async () => {
  await supabaseClient?.auth.signOut();
  showLogin();
});

initSupabase();
showLogin();

console.log('Atelier Authentication System ready');
