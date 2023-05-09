const express = require('express');
const path = require('path');
const morgan = require('morgan');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./main.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
});

const app = express();

const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, 'public', `${page}.html`);

// Создание сервера и реализация базового роутинга
app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});

// Миддлвары: логирование и "раскрытие" папки public
app.use(express.static('public'));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// Обозначение get запросов к API
app.get('/api/get_favorite_items', (req, res) => {
    sql_select_items_table = `SELECT * FROM favoriteItems`;
    db.all(
        sql_select_items_table,
        [],
        (err, rows) => {
            if (err) {
                console.error(err.message);
            }
            const items = [];
            rows.forEach((row) => {
                items.push(row);
            });
            res.send(items);
        }
    );
});

app.get('/api/get_analytics_items', (req, res) => {
    sql_select_analytics_items_table = `SELECT * FROM analyticsItems`;
    db.all(
        sql_select_analytics_items_table,
        [],
        (err, rows) => {
            if (err) {
                console.error(err.message);
            }
            const items = [];
            rows.forEach((row) => {
                items.push(row);
            });
            res.send(items);
        }
    );
});

// Get запрос к базе данных для поиска по полю name
app.get('/api/get_analytics_items/:name', (req, res) => {
    sql_select_analytics_items_table = `SELECT * FROM "main"."analyticsItems" WHERE name = '${req.params.name}'`;
    db.get(
        sql_select_analytics_items_table,
        [],
        (err, row) => {
            if (err) {
                console.error(err.message);
            }
            if (!row) {
                res.send('no data found');
            }
            res.send(row);
        }
    );
});

// Базовый роутинг
app.get('/main', (req, res) => {
    res.sendFile(createPath('main'));
});

app.get('/analytics', (req, res) => {
    res.sendFile(createPath('analytics'));
});

app.get('/', (req, res) => {
    res.redirect('/main');
});

app.use((req, res) => {
    res
        .status(404)
        .sendFile(createPath('error'));
});