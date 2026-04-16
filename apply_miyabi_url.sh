#!/bin/bash
set -e
cd "$(dirname "$0")"

python3 << 'PYEOF'
content = open('lib/affiliates.ts', 'r').read()

if 'ck.valuecommerce.ne.jp' in content:
    print("SKIP: already updated")
else:
    old = '''  jobsTaishoku: {
    href: "https://jobs1.jp/",  // TODO: バリューコマーストラッキングURL（13,241円）
    icon: "💨",
    label: "PR・退職代行",
    title: "退職代行Jobsで安心・確実に退職",
    description: "弁護士監修で未払い残業代の請求もサポート。会社と直接話さずに退職可能。24時間365日受付。",
    ctaText: "退職代行Jobsを見てみる",
    note: "弁護士監修・費用27,000円",
  },'''
    new = '''  jobsTaishoku: {
    href: "https://ck.valuecommerce.ne.jp/servlet/referral?sid=2999025&pid=881512136",  // バリューコマース：弁護士法人みやびの退職代行（16,500円）提携済み
    icon: "⚖️",
    label: "PR・弁護士による退職代行",
    title: "弁護士法人みやびの退職代行で確実に退職",
    description: "弁護士が直接対応。未払い残業代・慰謝料の請求も一緒に依頼できます。会社と直接話さずに退職可能。",
    ctaText: "弁護士法人みやびを見てみる",
    note: "弁護士法人運営・全国対応",
  },'''
    content = content.replace(old, new)
    open('lib/affiliates.ts', 'w').write(content)
    print("DONE: lib/affiliates.ts updated with みやび VC tracking URL")
PYEOF

git add lib/affiliates.ts
git status --short
git commit -m "feat: set 弁護士法人みやび退職代行 VC tracking URL (16,500円/件)

- lib/affiliates.ts jobsTaishoku.href をバリューコマーストラッキングURLに差し替え
- sid=2999025 / pid=881512136
- CTAテキストもみやびに合わせて更新"
git push origin main
echo "🚀 Push完了！"
