export default class FavoriteItem {
    constructor(
        data,
        itemTemplate
    ) {
        this._data = data;
        this._itemTemplate = itemTemplate;
        this._element = this._getTemplate();
        this._elementImage = this._element.querySelector('.fav-section__picture-img');
        this._elementName = this._element.querySelector('.fav-section__name');
        this._elementStatus = this._element.querySelector('.card-top__state-setter');
        this._elementBell = this._element.querySelector('.fav-section__bell-img');
    }

    _getTemplate() {
        const element = this._itemTemplate.querySelector(".fav-section__row").cloneNode(true);
        return element;
    }

    createTableElement() {
        this._elementImage.src = this._data.picture;
        this._elementImage.alt = this._data.name;
        this._elementName.textContent = this._data.name;
        this._elementStatus.value = this._data.status;
        this._elementBell.src = this._setBellImg(this._data.bell);
        this._elementBell.alt = this._setBellImg(this._data.bell);
        return this._element;
    }

    _setBellImg(bellType) {
        switch (bellType) {
            case 'bell_ring':
                return "./images/icons/bell_ring.svg";
            case 'bell_grey':
                return "./images/icons/bell_grey.svg";
            case 'bell_muted':
                return "./images/icons/bell_muted.svg";
            default:
                return "./images/icons/bell_grey.svg";
        }
    }
}