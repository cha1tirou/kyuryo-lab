#!/bin/bash
# kyuryo-lab Daily Agent cron wrapper
# crontab例: 0 7 * * * ~/Downloads/kyuryo-lab/scripts/daily-agent.sh >> ~/Downloads/kyuryo-lab/scripts/logs/cron.log 2>&1

set -e
REPO_DIR="$(dirname "$0")/.."
cd "$REPO_DIR"

echo "================================================"
echo "🤖 daily-agent start: $(date)"
echo "================================================"

if [ -f ".env.local" ]; then
  export $(grep -v '^#' .env.local | xargs -d '\n')
fi

git pull origin main --rebase --quiet 2>/dev/null || true

node scripts/daily-agent.mjs

echo "================================================"
echo "✅ daily-agent done: $(date)"
echo "================================================"
