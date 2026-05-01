// Signup
async function signup() {
  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value
  });

  if (error) alert(error.message);
  else alert("Account created!");
}

// Login
async function login() {
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  });

  if (error) alert(error.message);
  else alert("Logged in!");
}