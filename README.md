# botanique-test
#### Тестовое задание на стажировку в в Группу интеграции аппаратных платформ фармацевтической компании Biocad:

[Ссылка на реализованный проект](https://snjobjorn.github.io/botanique-test/main.html)

[Ссылка на макет Figma](https://www.figma.com/file/jefsQIoLKhYLzPy1jCHvrC/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-2022?type=design&t=TOcnpqOqWfTZe3lI-0)

Постранично:
- [main.html](https://snjobjorn.github.io/botanique-test/main.html)
- [analytics.html](https://snjobjorn.github.io/botanique-test/analytics.html)
- [error.html](https://snjobjorn.github.io/botanique-test/error.html)

##### Описание базового функционала:
- Роутинг между страницами main.html и analytics.js
- На странице analytics.html - изменение значений даты и времени в поле input (datetime-local) при клике на кнопки с временными промежутками
- Заполнение страниц содержимым при помощи JavaScript, для статики значения полей таблиц и элементов берутся из файла с константами. За заполнение каждым из значений отвечает свой класс (модуль).

## Frontend
#### Использованные технологии:
- HTML, CSS, Vanilla JavaScript
- Организация файловой структуры файлов стилей по методологии БЭМ
- Flexbox верстка
- ООП (объектно-ориентированное программирование)
- Code-design: "слабое связывание" между модулями с целью их дальнейшего возможного переиспользования

#### Сборка проекта при помощи Webpack:
Плагины: HtmlWebpackPlugin, CleanWebpackPlugin, MiniCssExtractPlugin, CopyPlugin.
А также использование Babel для адаптации верстки и кода под разные виды и версии браузеров (в том числе и под такие древние, как Internet Explorer).

## Backend
#### Использованные технологии:
- Связка Node.js и express.js
- Локальная база данных main.db и использование sqlite3 для работы с ней (кхм, представьте, что это MongoDB Atlas :D )

#### Структура бэкенда:
- Реализован базовый серверный роутинг
- Реализованы миддлвары: логирование и "раскрытие" папки public
- Реализация get-запросов к бэкенду для получения информации об отрисовываемых элементов из базы данных (актуально для динамики)
