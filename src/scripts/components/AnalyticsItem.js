export default class AnalyticsItem {
    constructor(
        data,
        tableRowTemplate,
        element
    ) {
        this._data = data;
        this._tableRowTemplate = tableRowTemplate;
        this._element = element;
        this._elementName = this._element.querySelector('.card-top__name');
        this._elementInfoText = this._element.querySelector('.card-top__info-text');
        this._elementState = this._element.querySelector('.card-top__state');
        this._elementDateFrom = this._element.querySelector('#date_from');
        this._elementDateTo = this._element.querySelector('#date_to');
        this._elementTable = this._element.querySelector('.item-info');
    }

    _getTableTemplate() {
        const element = this._tableRowTemplate.content.querySelector(".item-info__row").cloneNode(true);
        return element;
    }

    _addZeroToDate(num) {
        if (num >= 0 && num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    }

    _fillRowTableTemplate(data) {
        const rowTemplate = this._getTableTemplate();
        rowTemplate.querySelector(".item-info__begining").textContent = `${
            this._addZeroToDate(data.date.getDate())+'.'
            +this._addZeroToDate(data.date.getMonth())+'.'
            +this._addZeroToDate(data.date.getFullYear())+', '
            +this._addZeroToDate(data.date.getHours())+':'
            +this._addZeroToDate(data.date.getMinutes())
        }`;
        rowTemplate.querySelector(".item-info__type").innerHTML = `<span class="text-decoration_green">${data.status}</span>
                                                                    ${data.status_info}`;
        let workTextContent = '';
        data.works.forEach((work) => {
            workTextContent += `<h2 class="text-decoration__wrapper">
                <span class="text-decoration_bold">${work.bold}&nbsp;</span>
                ${work.regular}
            </h2>`
        });
        rowTemplate.querySelector(".item-info__work").innerHTML = workTextContent;
        rowTemplate.querySelector(".item-info__result").innerHTML = `<div class="text-decoration__wrapper">${data.result}</div>`;
        rowTemplate.querySelector(".item-info__user").innerHTML = `<span class="text-decoration_blue">${data.user}</span>`;
        return rowTemplate;
    }

    _setCalendars(button) {
        let now = new Date();
        this._elementDateFrom.value = now.toISOString().slice(0,16);
        switch (button.name) {
            case 'time-chip-day':
                now.setDate(now.getDate()+1);
                this._elementDateTo.value = now.toISOString().slice(0,16);
                break;
            case 'time-chip-week':
                now.setDate(now.getDate()+7);
                this._elementDateTo.value = now.toISOString().slice(0,16);
                break;
            case 'time-chip-2weeks':
                now.setDate(now.getDate()+14);
                this._elementDateTo.value = now.toISOString().slice(0,16);
                break;
            case 'time-chip-month':
                now.setMonth(now.getMonth()+1);
                this._elementDateTo.value = now.toISOString().slice(0,16);
                break;
            case 'time-chip-3month':
                now.setMonth(now.getMonth()+3);
                this._elementDateTo.value = now.toISOString().slice(0,16);
                break;
            case 'time-chip-halfyear':
                now.setMonth(now.getMonth()+6);
                this._elementDateTo.value = now.toISOString().slice(0,16);
                break;
            default:
                now.setDate(now.getDate()+1);
                this._elementDateTo.value = now.toISOString().slice(0,16);
                break;
        }
    }

    _setEventListeners() {
        const buttons = document.querySelectorAll(".time-chips__item");
        buttons.forEach((button) => {
            button.addEventListener('click', (event) => {
                buttons.forEach(but => but.classList.remove('time-chips__item_is-active'));
                event.target.classList.add('time-chips__item_is-active');
                this._setCalendars(event.target);
            });
        });
    }

    createAnalyticsItemElement() {
        this._elementName = this._data.name;
        this._elementInfoText = this._data.info_text;
        this._elementState = this._data.state;
        this._data.events.forEach((event) => {
            const row = this._fillRowTableTemplate(event);
            this._elementTable.appendChild(row);
        });

        this._setCalendars(this._element.querySelector('.time-chips__item_is-active'));
        this._setEventListeners();
    }
}