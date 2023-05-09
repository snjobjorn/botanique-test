const sqlite3 = require('sqlite3').verbose();

// Константы для статики для FavoriteItem
const favoriteItems = [
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
const analyticsItem = {
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

const db = new sqlite3.Database('./main.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
});

// Создание таблицы с favorite items
sql_create_fav_items_table = `CREATE TABLE favoriteItems(picture, name, status, bell)`;
// db.run(sql_create_fav_items_table);

// Создание таблицы
sql_create_analytics_items_table = `CREATE TABLE analyticsItems(name, info_text, state, events)`;
// db.run(sql_create_analytics_items_table);

// Наполнение таблицы favorite items
sql_insert_items_table = `INSERT INTO favoriteItems(picture, name, status, bell) VALUES (?,?,?,?)`;
// favoriteItems.forEach(element => {
//     db.run(
//         sql_insert_items_table,
//         [element.picture, element.name, element.status, element.bell],
//         (err) => {
//             if (err) {
//                 console.error(err.message);
//             }
//         }
//     );
// });

// Наполнение таблицы analytics items
sql_insert_analytics_items_table = `INSERT INTO analyticsItems(name, info_text, state, events) VALUES (?,?,?,?)`;
db.run(
    sql_insert_analytics_items_table,
    [analyticsItem.name, analyticsItem.info_text, analyticsItem.state, JSON.stringify(analyticsItem.events)],
    (err) => {
        if (err) {
            console.error(err.message);
        }
    }
);

// Извлечение данных из favorite items
sql_select_items_table = `SELECT * FROM favoriteItems`;
db.all(
    sql_select_items_table,
    [],
    (err, rows) => {
        if (err) {
            console.error(err.message);
        }
        rows.forEach((row) => {
            console.log(row);
        });
    }
);

// Извлечение данных из analytics items
sql_select_analytics_items_table = `SELECT * FROM analyticsItems`;
db.all(
    sql_select_analytics_items_table,
    [],
    (err, rows) => {
        if (err) {
            console.error(err.message);
        }
        rows.forEach((row) => {
            console.log(row);
        });
    }
);

// Извлечение данных из analytics items
sql_select_analytics_items_table = `SELECT * FROM "main"."analyticsItems" WHERE name = 'pH-метр Mettler-Toledo International, Inc. SevenCompact S220'`;
db.get(
    sql_select_analytics_items_table,
    [],
    (err, row) => {
        if (err) {
            console.error(err.message);
        }
        console.log(row);
    }
);
