// Atelier Console Authentication Framework
// Supabase authentication wiring foundation.
// Supabase URL and anon key will be connected through secure configuration.

const loginForm = document.getElementById('login-form');
const loginRoom = document.getElementById('login-room');
const consoleRoom = document.getElementById('console-room');
const message = document.getElementById('auth-message');
const logoutButton = document.getElementById('logout');

function showConsole() {
  loginRoom?.classList.add('hidden');
  consoleRoom?.classList.remove('hidden');
}

function showLogin() {
  loginRoom?.classList.remove('hidden');
  consoleRoom?.classList.add('hidden');
}

loginForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Supabase signInWithPassword() will be connected here.
  // This placeholder keeps the UI ready without exposing credentials.
  message.textContent = 'Authentication system ready for Supabase connection.';
});

logoutButton?.addEventListener('click', () => {
  showLogin();
});

showLogin();

console.log('Atelier Authentication framework ready');