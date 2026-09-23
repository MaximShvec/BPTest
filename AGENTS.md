<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Правила проекта Balance Pay (web)
- ГЛАВНОЕ: это перенос статических html в React 1:1, не редизайн. На десктопе (эталон 1512px) каждое значение из инлайн-стилей исходника — padding, gap, radius, цвет, font-size/line-height, letter-spacing, font-feature-settings, max-width, min-height, размеры медиа, тени, порядок блоков — переносится в точности. Не «улучшать», не округлять до токенов, не унифицировать отступы между страницами. Если компонент не покрывает значение из исходника — добавить проп/вариант с точным значением, а не подогнать исходник под компонент.
- Мобильных макетов нет: для <1200 действуют правила PLAN.md 0.4 (меняются только колонки, гаттеры и крупная типографика; цвета, радиусы, порядок блоков — как на десктопе).
- SVG (иконки, логотип, пипка) копировать дословно из исходников в src/components/icons; не перерисовывать, не брать из библиотек.
- Приёмка страницы: `npm run visual:diff /<route> <file>.html` на 1512 — diff просмотрен, различия только в допустимых местах (плейсхолдеры → Media, замены #-ссылок, шапка/футер если для страницы они по плану отличаются). Расхождения в размерах/отступах/цветах — дефект.
- Стек: Next.js App Router + TypeScript + CSS Modules. Без Tailwind и UI-библиотек. Новые зависимости не добавлять без явного указания.
- Все тексты, ссылки, URL медиа — только из content/ru/**/*.json. В компонентах нет захардкоженных строк (кроме aria-label служебных элементов).
- Страница = массив секций (sections[] с type). Новая секция = папка src/components/sections/<Name>/ с Component.tsx, schema.ts, styles.module.css и регистрацией в registry.ts.
- Тексты из исходных html переносить дословно, включая плейсхолдеры в квадратных скобках вида [ИМЯ], [СУММА].
- Плейсхолдеры картинок вида [ФОТО ...] → в контенте media: {"placeholder":"ФОТО ...","ratio":"4/5"}.
- Ссылки: внутренние начинаются с '/', используем карту маршрутов из F:\work\BPLandings\PLAN.md раздел 0.6. Заглушки #f1, #signup и т.п. заменять на реальные маршруты (#signup → /signup, #login → /login, #demo и #contact → /contacts, #blog → /blog, #security → /security, #fees-personal → /fees, #fees-business → /business-fees, #affiliate → /referral, #payouts → /business-payments, #cards → /cards, #personal → /personal, #business → /business, #exchange → /exchange). Якоря внутри страницы оставлять якорями.
- Стили: токены из src/styles/tokens.css, классы типографики из globals.css — но если значение в исходнике отличается от класса/токена, в CSS Module секции пишется точное значение из исходника. Никаких !important и селекторов [style*=...]. Инлайн-стили из html переводить в CSS Modules один в один (не копировать в атрибут style JSX).
- Адаптив обязателен: брейкпоинты mobile <768, tablet 768–1199, desktop >=1200. Сетка 12 → 6/12 → 1. Типографика по классам .h1/.h2/... (размеры уже адаптивные). Никакого горизонтального скролла. Тач-цели >= 44px. Правила подробно: PLAN.md раздел 0.4.
- Проверка каждой задачи: npm run lint && npm run typecheck && npm run content:check && npm run build; затем открыть страницу в браузере на ширинах 390, 768, 1024, 1440 и сделать скриншоты; сравнить с исходным html на 1440 (исходники: `npx serve ../BalancePayLandingsNew -l 5050`, для Old: `npx serve ../BalancePayLandingsOld -l 5051`).
- Не переписывать существующие компоненты «под себя» — расширять пропсами. Не трогать другие страницы, кроме тех, что в задаче.
- Коммит после задачи: `git commit -m "step N: ..."`.

## Попиксельная сверка

Команда (из `web/`):

```
npm run visual:diff -- /<route> <sourceFile> [--old] [--mask "header,footer"]
```

- Next.js должен уже быть на http://localhost:3000 (`npm run dev`). Если порт закрыт, скрипт завершается с ошибкой.
- Статика исходников поднимается сама, если порт свободен: New — `npx serve ../BalancePayLandingsNew -l 5050`; Old (`--old`) — `npx serve ../BalancePayLandingsOld -l 5051`.
- Для Old перед снимком выставляется `sessionStorage bp_demo_session=1` (иначе `Main.dc.html` редиректит на `index.html`).
- Viewport 1512×900, `networkidle`, `document.fonts.ready`, анимации отключены, видео на паузе на первом кадре.
- Снимки: `.screens/src/<slug>.png`, `.screens/impl/<slug>.png`, `.screens/diff/<slug>.png`. В консоль печатаются процент отличающихся пикселей и высоты обеих страниц.
- `--mask "header,footer"` закрашивает эти области серым на обоих снимках (страницы New, где шапка и футер осознанно из Old).
- Каталог `.screens/` в `.gitignore`.
