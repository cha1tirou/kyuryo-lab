#!/bin/bash
set -e
cd "$(dirname "$0")"

# sitemap.tsのバックティックエスケープを修正
python3 << 'PYEOF'
content = open('app/sitemap.ts', 'r').read()

# エスケープされたバックティックを戻す
fixed = content.replace('\\`', '`')

if fixed == content:
    print("SKIP: sitemap.ts already correct (no escaped backticks)")
else:
    open('app/sitemap.ts', 'w').write(fixed)
    print("DONE: Fixed escaped backticks in sitemap.ts")
PYEOF

git add app/sitemap.ts
git diff --cached --stat
git commit -m "fix: unescape backticks in sitemap.ts"
git push origin main
echo "🚀 Fix pushed!"
