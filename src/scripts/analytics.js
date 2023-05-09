import '../styles/styles.css';

import AnalyticsItem from './components/AnalyticsItem.js';
import Section from './components/Section.js';
import {analyticsItem} from './utils/constants.js';

const tableRowTemplate = document.querySelector('#info-item');
const analyticsPageElement = document.querySelector('.content-analytics');

const pageItem = new AnalyticsItem(analyticsItem, tableRowTemplate, analyticsPageElement);
pageItem.createAnalyticsItemElement();