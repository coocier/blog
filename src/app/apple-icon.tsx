import { ImageResponse } from 'next/og'

// 路由段配置
export const runtime = 'edge'

// 图片元数据
export const contentType = 'image/png'
export const size = {
    width: 180,
    height: 180,
}

// 生成 Apple Touch Icon
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
                    borderRadius: '22%',
                    position: 'relative',
                    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)',
                }}
            >
                {/* 背景装饰圆环 */}
                <div
                    style={{
                        position: 'absolute',
                        width: '80%',
                        height: '80%',
                        border: '2px solid rgba(255,255,255,0.1)',
                        borderRadius: '50%',
                    }}
                />
                
                {/* 主字母 C */}
                <div
                    style={{
                        fontSize: 90,
                        fontWeight: 700,
                        color: 'white',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                        position: 'relative',
                        zIndex: 2,
                    }}
                >
                    C
                </div>
                
                {/* 左上角光效 */}
                <div
                    style={{
                        position: 'absolute',
                        top: 20,
                        left: 25,
                        width: 30,
                        height: 30,
                        background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
                        borderRadius: '50%',
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    )
}