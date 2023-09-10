/* Database */
/* import { collectionsDB } from '../../../database/collectionsDB.js'; */

const collectionsDB = [
  {
    title: 'Decorative Arts & Crafts',
    src: '../../assets/images/collections/decorative-arts-crafts.jfif',
  },
  {
    title: 'American Impressionism',
    src: '../../assets/images/collections/american-impressionism.jfif',
  },
  {
    title: 'De Stijl',
    src: '../../assets/images/collections/de-stijl.jfif',
  },
  {
    title: 'Cubism',
    src: '../../assets/images/collections/cubism.jfif',
  },
  {
    title: 'American',
    src: '../../assets/images/collections/american.jfif',
  },
  {
    title: 'Greek Antiquities',
    src: '../../assets/images/collections/greek-antiquities.jfif',
  },
];

/* Components */
/* import { CollectionComponent } from '../../../components/CollectionComponent/CollectionComponent.js'; */
/* import { NoMatchesComponent } from '../../../components/NoMatchesComponent/NoMatchesComponents.js'; */

const CollectionComponent = (src, title) => {
  return /* html */ `
    <a class="CollectionComponent" href="#">
      <figure >
        <div class="item__image-wrapper">
          <img
            src=${src}
            alt=${title}
            style="width: 100%"
          />
        </div>
        <figcaption>${title}</figcaption>
      </figure>
    </a>
  `;
};

const NoMatchesComponent = (keyword, list) => {
  return /* html */ `
  <section class="NoMatchesComponent">
    <div class="no-matches__warning">No matches for '${keyword}...'<br />Try another keyword to search in ${list}.</div>
  </section>
  `;
};

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
const pageCollections = document.querySelector('.page-collections');

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
      pageCollections.insertAdjacentHTML(
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
