/* Database */
import { collectionsDB } from '../../database/collectionsDB.js';

/* Components */
import { CollectionComponent } from '../../components/CollectionComponent.js';

/* DOM References */
const collectionsList = document.querySelector('.page-collections-list');

/* Insert Components into DOM Tree */
collectionsDB.map((collection) => {
  collectionsList.insertAdjacentHTML(
    'beforeend',
    CollectionComponent(collection.source, collection.title)
  );
});
