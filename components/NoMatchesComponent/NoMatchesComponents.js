export const NoMatchesComponent = (keyword, list) => {
  return /* html */ `
  <section class="NoMatchesComponent">
    <div class="no-matches__warning">No matches for '${keyword}...'<br />Try another keyword to search in ${list}.</div>
  </section>
  `;
};
