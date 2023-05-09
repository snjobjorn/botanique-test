// Константы для статики для FavoriteItem
export const favoriteItems = [
    {
        picture: './images/pics/pH.jpg',
        name: 'pH-метр Mettler-Toledo International, Inc. SevenCompact S220',
        status: 2,
        bell: 'bell_ring'
    },
    {
        picture: './images/pics/Спектр.jpg',
        name: 'Спектрофотометр Varian, Inc Cary 50 Bio',
        status: 2,
        bell: 'bell_ring'
    },
    {
        picture: './images/pics/Титратор.jpg',
        name: 'Титратор',
        status: 2,
        bell: 'bell_grey'
    },
    {
        picture: './images/pics/Коагулометр.jpg',
        name: 'Коагулометр Tcoag, KC 4 Delta',
        status: 2,
        bell: 'bell_muted'
    },
    {
        picture: './images/pics/Коагулометр.jpg',
        name: 'Коагулометр Tcoag, KC 4 Delta',
        status: 2,
        bell: 'bell_muted'
    },
];

// Константы для статики для AnalyticsItem
export const analyticsItem = {
    name: 'pH-метр Mettler-Toledo International, Inc. SevenCompact S220',
    info_text: 'S1.4.I14-9.001',
    state: '00-024004',
    events: [
        {
            date: new Date(2021, 10, 9, 15, 46, 0, 0),
            status: 'В работе',
            status_info: 'Измерение',
            user: 'morozovava',
            result: '',
            works: [
                {
                    bold: 'Образец/серия:',
                    regular: '000100057935_170000010325_0000251849'
                },
            ]
        },
        {
            date: new Date(2021, 10, 12, 12, 17, 0, 0),
            status: 'В работе',
            status_info: 'Калибровка',
            user: 'morozovava',
            result: 'Промывка с указанием вещества: Вещество Комментарий: тест успешности',
            works: [
                {
                    bold: 'Номер колонки:',
                    regular: 'Колонка 2'
                },
                {
                    bold: 'Образец:',
                    regular: 'Образец 2'
                },
                {
                    bold: 'Образец:',
                    regular: 'образец 1'
                },
                {
                    bold: 'Метод:',
                    regular: 'метов тестовый'
                },
                {
                    bold: 'Номер колонки:',
                    regular: 'Колонка 1'
                },
            ]
        }
    ]
}