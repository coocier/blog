import { ImageResponse } from 'next/og'

// 路由段配置
export const runtime = 'edge'

// 图片元数据
export const contentType = 'image/png'

// 生成图标的图像响应
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #ee8f86 0%, #005add 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '6px',
          position: 'relative',
        }}
      >
        {/* 主字母 C */}
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: 'white',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)',
          }}
        >
          C
        </div>
      </div>
    ),
    {
      width: 32,
      height: 32,
    }
  )
}