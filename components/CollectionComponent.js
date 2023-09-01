export const CollectionComponent = (src, title) => {
  return /* html */ `
    <a href="#">
      <figure class="collections-list__item">
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
