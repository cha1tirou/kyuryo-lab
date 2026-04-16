# kyuryo-lab 自動化セットアップガイド

## 1. Google Search Console API の設定

### Step 1: GCPサービスアカウント作成
1. https://console.cloud.google.com/ にアクセス
2. プロジェクト選択（既存の secretary-ai-492700 でもOK、または新規作成）
3. 「IAM と管理」→「サービスアカウント」→「サービスアカウントを作成」
4. 名前: `kyuryo-lab-gsc` などで作成
5. 「キーを作成」→ JSON形式でダウンロード

### Step 2: Search Consoleに権限付与
1. https://search.google.com/search-console/ にアクセス
2. kyuryo-lab.com を選択
3. 「設定」→「ユーザーと権限」→「ユーザーを追加」
4. サービスアカウントのメールアドレスを入力（`xxx@project.iam.gserviceaccount.com`）
5. 権限: 「オーナー」または「確認済みユーザー」

### Step 3: .env.local に追加
```bash
# ダウンロードしたJSONから以下を取得して設定
GSC_CLIENT_EMAIL=xxx@kyuryo-lab-gsc.iam.gserviceaccount.com
GSC_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\nMIIEow...\n-----END RSA PRIVATE KEY-----"
GSC_SITE_URL=https://kyuryo-lab.com/
```

---

## 2. Mac mini cron 設定

### cronを設定する
```bash
crontab -e
```

以下を追加（月・木の朝8時に記事生成、日曜朝9時に分析・改善）:
```
# 週2回: 記事を1件自動生成
0 8 * * 1,4 cd /Users/unosoichiro/Downloads/kyuryo-lab && bash scripts/run-pipeline.sh >> scripts/pipeline.log 2>&1

# 週1回: GSC分析→改善実装
0 9 * * 0 cd /Users/unosoichiro/Downloads/kyuryo-lab && node scripts/analyze-and-improve.mjs >> scripts/analysis.log 2>&1
```

---

## 3. アフィリエイトクリック計測の確認

GA4（G-QXG9BQ33ME）で以下のカスタムイベントを確認できます:

**イベント名**: `affiliate_click`
**パラメータ**:
- `affiliate_name`: アフィリエイト広告のタイトル
- `affiliate_url`: クリックされたURL  
- `page_path`: どのページでクリックされたか

### GA4での確認方法
1. https://analytics.google.com/ にアクセス
2. 「レポート」→「リアルタイム」→「イベント」
3. または「探索」→「イベント名: affiliate_click」でフィルタ

---

## 4. 全自動化フロー（完成形）

```
毎週月・木 8:00
  → run-pipeline.sh
  → keywords.json から未処理キーワードを1件取得
  → Claude API で記事(.tsx)生成
  → TypeScriptチェック
  → git push → Vercel自動デプロイ

毎週日曜 9:00
  → analyze-and-improve.mjs
  → GSC APIからデータ取得
  → Claude APIで分析・改善提案生成
  → 優先度高の改善を自動実装
  → 新規キーワードをkeywords.jsonに追加
  → git push → Vercel自動デプロイ
  → scripts/reports/report-YYYY-MM-DD.json にレポート保存
```

---

## 5. バリューコマース/A8の成果確認

**自動追跡できること（GA4）**:
- どのページでアフィリエイトリンクがクリックされたか
- 何回クリックされたか
- どのデバイスからか

**手動確認が必要なこと**:
- 実際の成約・承認: バリューコマース/A8の管理画面で確認
- バリューコマース: https://aff.valuecommerce.ne.jp/report/
- A8: https://pub.a8.net/a8v2/media/reportAction.do

**クリック率の目安**:
- アフィリエイトクリック率 5%以上 → CTAが機能している
- クリック率 1%未満 → CTAの位置・デザイン・文言を見直す
