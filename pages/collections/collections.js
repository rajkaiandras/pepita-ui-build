/* Database */
import { collectionsDB } from '../../database/collectionsDB.js';

/* Components */
import { CollectionComponent } from '../../components/CollectionComponent.js';

/* DOM References */
const collectionsList = document.querySelector('.page-collections-list');
const searchBarInputField = document.querySelector('.search-bar__input-field');

/* Insert Components into DOM Tree */
collectionsDB.map((collection) => {
  collectionsList.insertAdjacentHTML(
    'beforeend',
    CollectionComponent(collection.source, collection.title)
  );
});

/* Reference for Components List Items */
const collectionListItems = document.querySelectorAll(
  '.collections-list__item'
);

/* Filter Components List by Search Input */
const handleSearchBarInput = (e) => {
  let searchBarInputText = '';
  searchBarInputText = e.target.value.toLowerCase();

  collectionListItems.forEach((item) => {
    if (!item.innerText.toLowerCase().includes(searchBarInputText)) {
      item.classList.add('hide');
    } else {
      item.classList.remove('hide');
    }
  });
};

/* Input Field Keyup Event Listener */
searchBarInputField.addEventListener('keyup', handleSearchBarInput);
