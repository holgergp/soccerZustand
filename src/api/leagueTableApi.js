export const getSampleData = () =>
  fetch('https://holgergp.builtwithdark.com/league-table')
    .then((res) => res.json())
    .then((res) => res.map((t) => ({ ...t, editing: true })));
