export const EmptyList = (keyword, list) => {
  return /* html */ `
    <div class="no-matches">No matches for '${keyword}...'<br />Try another keyword to search in ${list}.</div>
  `;
};
