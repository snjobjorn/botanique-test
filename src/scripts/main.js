import '../styles/styles.css';

import FavoriteItem from './components/FavoriteItem.js';
import Section from './components/Section.js';
import {favoriteItems} from './utils/constants.js';

const favItemTemplate = document.querySelector('#item').content;
const favItemsTable = document.querySelector('.fav-section__table');

function createItem(itemData) {
  const favItem = new FavoriteItem(itemData, favItemTemplate);
  return favItem.createTableElement();
}

const section = new Section(
    {
      renderer: (data) => {
        section.addItem(createItem(data));
      },
    },
    favItemsTable
  );

section.renderItems(favoriteItems);