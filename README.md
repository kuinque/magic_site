# ILLUSION — первая версия сайта

Первая версия сайта-визитки для шоу **ILLUSION**.
Это голый каркас — только меню-бар, связывающий 6 страниц. Без стилей.

Демо: [kuinque.github.io/magic_site](https://kuinque.github.io/magic_site/)

## Страницы

| Файл           | Раздел              |
| -------------- | ------------------- |
| `index.html`   | Главный экран       |
| `about.html`   | О шоу               |
| `events.html`  | Ближайшие события   |
| `merch.html`   | Мерч                |
| `media.html`   | Медиа               |
| `reviews.html` | Отзывы              |

## Структура

```
├── index.html
├── about.html
├── events.html
├── merch.html
├── media.html
├── reviews.html
├── .nojekyll
└── README.md
```

## Запуск локально

```bash
python3 -m http.server 8080
```

Открыть <http://localhost:8080/>.

## Деплой на GitHub Pages

1. Запушить ветку `main` в `kuinque/magic_site`.
2. **Settings → Pages → Source** → `Deploy from a branch`, ветка `main`, папка `/ (root)`.
3. Сайт будет доступен по адресу `https://kuinque.github.io/magic_site/`.
