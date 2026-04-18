#!/bin/bash
# kyuryo-lab Daily Agent cron wrapper
# crontab: 0 7 * * * ~/Downloads/kyuryo-lab/scripts/daily-agent.sh >> ~/Downloads/kyuryo-lab/scripts/logs/cron.log 2>&1

# cronはPATHが狭いのでnodeのパスを明示的に追加
export PATH="/usr/local/bin:/opt/homebrew/bin:/opt/homebrew/sbin:$PATH"

REPO_DIR="$(dirname "$0")/.."
cd "$REPO_DIR"

mkdir -p scripts/logs

echo "================================================"
echo "🤖 daily-agent start: $(date)"
echo "================================================"

# .env.local 読み込み（macOS対応: xargs -d は使わない）
if [ -f ".env.local" ]; then
  while IFS= read -r line; do
    [[ "$line" =~ ^#.*$ ]] && continue
    [[ -z "$line" ]] && continue
    export "$line"
  done < .env.local
fi

git pull origin main --rebase --quiet 2>/dev/null || true

node scripts/daily-agent.mjs

echo "================================================"
echo "✅ daily-agent done: $(date)"
echo "================================================"
