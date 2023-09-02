/* Database */
import { collectionsDB } from '../../database/collectionsDB.js';

/* Components */
import { CollectionComponent } from '../../components/CollectionComponent/CollectionComponent.js';
import { NoMatchesComponent } from '../../components/NoMatchesComponent/NoMatchesComponents.js';

/* DOM Reference */
const collectionsList = document.querySelector('.page-collections-list');

/* Insert Collection Components into DOM Tree */
collectionsDB.map((collection) => {
  const { src, title } = collection;

  collectionsList.insertAdjacentHTML(
    'beforeend',
    CollectionComponent(src, title)
  );
});

/* DOM References */
const searchBarInputField = document.querySelector('.search-bar__input-field');
const collectionListItems = document.querySelectorAll('.CollectionComponent');

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
  const isAllCollectionComponentHidden = () => {
    const noMatchesComponent = document.querySelector('.NoMatchesComponent');
    let hiddenListLength = 0;

    collectionListItems.forEach((item) => {
      if (item.getAttribute('class').includes('hide')) {
        hiddenListLength++;
      }
    });

    if (hiddenListLength === originalListLength && !noMatchesComponent) {
      collectionsList.insertAdjacentHTML(
        'beforeend',
        NoMatchesComponent(searchBarInputText, 'Collections')
      );
    } else if (noMatchesComponent && hiddenListLength < originalListLength) {
      noMatchesComponent.remove();
    }
  };

  isAllCollectionComponentHidden();
};

/* Input Field Keyup Trigger Filtering Components */
searchBarInputField.addEventListener('keyup', handleSearchBarInput);
