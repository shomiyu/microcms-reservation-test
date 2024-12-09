# microcms-reservation-test with Astro

▼ デモ
[microCMSで予約フォームを作ろう](https://microcms-reservation.netlify.app/)

▼詳細
[microCMSでカレンダー型予約フォームを作りました【Astro.js】](https://zenn.dev/shomiyu/articles/31191724b5e242)

▼ 機能

- Astro.js
- microCMS
- Reset CSS (ress)
- Sass
- Vue.js
- Google Fonts
- 日時フォーマット（date-fns-tz）

## 🚀 Setup

モジュールインストール

```zsh
$ npm install
```

## 📚 microCMS との接続

`.env`の設定とmicroCMS側のスキーマ設定が必要。

### .env設定

`.env.template`をコピーして`.env`を作成し、サービスドメインとAPIキーを入れる。

```
MICROCMS_SERVICE_DOMAIN=<YOUR_SERVICE>
MICROCMS_API_KEY=<YOUR_KEY_VALUE>
```

### microCMS APIスキーマ設定

microCMSのお知らせAPIスキーマは以下を想定。同じように設定すれば立ち上がる。

#### カスタムフィールド

endpoint: reservation
| フィールド ID | 表示名 | 種類 |
| :------------ | :-------------------------------------------- | :----------------- |
| entryTime | 時間 | テキストフィールド |

endpoint: entryDate
| フィールド ID | 表示名 | 種類 |
| :------------ | :-------------------------------------------- | :----------------- |
| entryDate | 受付日 | 日時 |
| entryTimes | 受付時間 | 繰り返し - entryTime |

#### APIスキーマ

endpoint: reservation
type: オブジェクト形式

| フィールド ID | 表示名     | 種類                 |
| :------------ | :--------- | :------------------- |
| entryMonth    | 受付月     | 日時                 |
| entryDates    | 受付日一覧 | 繰り返し - entryDate |

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
