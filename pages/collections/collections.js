/* Database */
import { collectionsDB } from '../../database/collectionsDB.js';

/* Components */
import { CollectionComponent } from '../../components/CollectionComponent.js';
import { EmptyList } from '../../components/EmptyList.js';

/* DOM Reference */
const collectionsList = document.querySelector('.page-collections-list');

/* Insert Collection Components into DOM Tree */
collectionsDB.map((collection) => {
  collectionsList.insertAdjacentHTML(
    'beforeend',
    CollectionComponent(collection.source, collection.title)
  );
});

/* DOM References */
const searchBarInputField = document.querySelector('.search-bar__input-field');
const collectionListItems = document.querySelectorAll(
  '.collections-list__item'
);

/* Collections List Length */
const originalListLength = collectionListItems.length;

/* Filter Components List by Search Input */
const handleSearchBarInput = (e) => {
  let searchBarInputText = '';
  searchBarInputText = e.target.value;

  collectionListItems.forEach((item) => {
    if (
      !item.innerText.toLowerCase().includes(searchBarInputText.toLowerCase())
    ) {
      item.classList.add('hide');
    } else {
      item.classList.remove('hide');
    }
  });

  /* Is Collection List Empty */
  const isCollectionListEmpty = () => {
    const emptyList = document.querySelector('.no-matches');
    let hiddenListLength = 0;

    collectionListItems.forEach((item) => {
      if (item.getAttribute('class').includes('hide')) {
        hiddenListLength++;
      }
    });

    if (hiddenListLength === originalListLength && !emptyList) {
      collectionsList.insertAdjacentHTML(
        'beforeend',
        EmptyList(searchBarInputText, 'Collections')
      );
    } else if (hiddenListLength < originalListLength) {
      emptyList.remove();
    }
  };

  isCollectionListEmpty();
};

/* Input Field Keyup Trigger Filtering Components */
searchBarInputField.addEventListener('keyup', handleSearchBarInput);
