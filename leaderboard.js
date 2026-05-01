async function loadLeaderboard() {
  const { data, error } = await supabase
    .from("players")
    .select("*")
    .order("score", { ascending: false });

  const board = document.getElementById("leaderboard");
  board.innerHTML = "";

  data.forEach((p, i) => {
    board.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${p.name}</td>
        <td>${p.score}</td>
      </tr>
    `;
  });
}

loadLeaderboard();