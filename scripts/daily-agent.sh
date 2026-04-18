#!/bin/bash
# kyuryo-lab Daily Agent cron wrapper
# crontab: 0 7 * * * ~/Downloads/kyuryo-lab/scripts/daily-agent.sh >> ~/Downloads/kyuryo-lab/scripts/logs/cron.log 2>&1

# cronはPATHが狭いのでnodeとgitのパスを明示的に追加
export PATH="/usr/local/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/bin:/bin:$PATH"

# git認証情報を明示的に設定（cronからpushできるよう）
export HOME="/Users/unosoichiro"
export GIT_CONFIG_GLOBAL="/Users/unosoichiro/.gitconfig"

REPO_DIR="$(dirname "$0")/.."
cd "$REPO_DIR"

mkdir -p scripts/logs

echo "================================================"
echo "🤖 daily-agent start: $(date)"
echo "================================================"

# .env.local 読み込み（macOS対応・絶対パス指定）
ENV_FILE="/Users/unosoichiro/Downloads/kyuryo-lab/.env.local"
if [ -f "$ENV_FILE" ]; then
  while IFS= read -r line; do
    [[ "$line" =~ ^#.*$ ]] && continue
    [[ -z "$line" ]] && continue
    export "$line"
  done < "$ENV_FILE"
  echo "✅ .env.local loaded"
else
  echo "⚠ .env.local not found: $ENV_FILE"
fi

git pull origin main --rebase --quiet 2>/dev/null || true

node scripts/daily-agent.mjs

echo "================================================"
echo "✅ daily-agent done: $(date)"
echo "================================================"
