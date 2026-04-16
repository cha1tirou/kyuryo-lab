#!/bin/bash
# kyuryo-lab 記事自動生成 cron スクリプト
# Mac miniの ~/Downloads/kyuryo-lab で実行
#
# crontab設定例（週2回、月曜と木曜の朝8時に実行）:
#   0 8 * * 1,4 /Users/unosoichiro/Downloads/kyuryo-lab/scripts/run-pipeline.sh >> /Users/unosoichiro/Downloads/kyuryo-lab/scripts/pipeline.log 2>&1

set -e

REPO_DIR="$(dirname "$0")/.."
cd "$REPO_DIR"

echo "================================================"
echo "🚀 kyuryo-lab pipeline start: $(date)"
echo "================================================"

# .envファイルがあれば読み込む（ANTHROPIC_API_KEY用）
if [ -f ".env.local" ]; then
  export $(grep -v '^#' .env.local | xargs)
fi

# 最新コードを取得
echo "📥 git pull..."
git pull origin main

# npmパッケージを確認
if [ ! -d "node_modules" ]; then
  echo "📦 npm install..."
  npm install
fi

# 記事を1件生成してpush
echo "📝 記事生成中..."
node scripts/generate-article.mjs

echo "✅ pipeline done: $(date)"
echo "================================================"
