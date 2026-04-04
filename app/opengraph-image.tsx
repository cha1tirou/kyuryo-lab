import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = '給料ラボ | 給与計算ツール'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'white',
            borderRadius: '32px',
            padding: '60px 80px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          }}
        >
          <div
            style={{
              fontSize: '72px',
              fontWeight: 700,
              color: '#334155',
              marginBottom: '16px',
            }}
          >
            給料ラボ
          </div>
          <div
            style={{
              fontSize: '28px',
              color: '#64748b',
              marginBottom: '32px',
            }}
          >
            kyuryo-lab.com
          </div>
          <div
            style={{
              display: 'flex',
              gap: '24px',
            }}
          >
            {['残業代計算', '手取り計算', '時給換算', '営業日計算'].map(
              (label) => (
                <div
                  key={label}
                  style={{
                    background: '#f1f5f9',
                    borderRadius: '12px',
                    padding: '12px 24px',
                    fontSize: '20px',
                    color: '#475569',
                    fontWeight: 500,
                  }}
                >
                  {label}
                </div>
              )
            )}
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            fontSize: '18px',
            color: '#94a3b8',
          }}
        >
          無料で使える給与計算ツール集
        </div>
      </div>
    ),
    { ...size }
  )
}
