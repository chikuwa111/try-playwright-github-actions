# try-playwright-github-actions

## ローカル

### セットアップ

ブラウザのバイナリのインストールを回避するためには環境変数の設定が必要です

参考: https://playwright.dev/#version=v1.4.2&path=docs%2Finstallation.md&q=skip-browser-downloads

```sh
$ PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD npm i
```

### 開発

以下は macOS でインストール済みの Google Chrome を使う場合です

```sh
# 走らせておく
$ npm run dev

# 実行
$ EXECUTABLE_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" npm run start
```
