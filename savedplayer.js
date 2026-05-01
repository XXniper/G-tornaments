async function register() {
  const { data: userData } = await supabase.auth.getUser();

  if (!userData.user) {
    alert("Login first!");
    return;
  }

  const { error } = await supabase
    .from("players")
    .insert([{
      name: name.value,
      playerid: playerid.value,
      region: region.value,
      score: Number(score.value),
      user_email: userData.user.email
    }]);

  if (error) alert(error.message);
  else {
    alert("Registered!");
    loadLeaderboard();
  }
}