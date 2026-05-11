# ILLUSION — первая версия сайта

Сайт-визитка для шоу **ILLUSION**.
Меню-бар сделан по референсу с homescreen-обвязкой (Menu / ? / Contact us),
а кнопка **Menu** разворачивает выпадающий список из 6 страниц с зигзаг-смещением
и stagger-анимацией.

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
├── index.html        Главный экран
├── about.html        О шоу
├── events.html       Ближайшие события
├── merch.html        Мерч
├── media.html        Медиа
├── reviews.html      Отзывы
├── assets/
│   ├── styles.css    homescreen + menu-open + zigzag + адаптив
│   └── script.js     toggle меню + stagger-анимация
├── fonts/            (опционально) TT-Ricks-Trial-*.ttf
├── img/              (опционально) homepage-bg.jpg
├── .nojekyll
└── README.md
```

## Шрифты и фон

CSS ссылается на:

- `fonts/TT-Ricks-Trial-Bold.ttf`
- `fonts/TT-Ricks-Trial-Medium.ttf`
- `fonts/TT-Ricks-Trial-Regular.ttf`
- `fonts/TT-Ricks-Trial-Variable.ttf`
- `img/homepage-bg.jpg`

Если этих файлов нет — сайт упадёт на системный sans-serif и сплошной
оранжевый фон `#EB4700`. Просто положи нужные файлы в соответствующие папки.

## Адаптивность

- `>720px` — десктоп: nav-кнопки `15vw`, шрифт `3.2vw`, зигзаг 11/22vw.
- `≤720px` — мобила: кнопки шире (`30vw`), шрифт `5vw`, зигзаг 5/30vw.

## Запуск локально

```bash
python3 -m http.server 8080
```

И открыть <http://localhost:8080/>.

## Деплой на GitHub Pages

1. Запушить ветку `main` в `kuinque/magic_site`.
2. **Settings → Pages → Source** → `Deploy from a branch`, ветка `main`, папка `/ (root)`.
3. Сайт откроется на `https://kuinque.github.io/magic_site/`.

`.nojekyll` в корне уже отключает Jekyll, так что `assets/` и `fonts/`
подхватятся без сюрпризов.
