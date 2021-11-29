export const getSampleData = () =>
  fetch('https://holgergp.builtwithdark.com/league-table').then((res) =>
    res.json()
  );
