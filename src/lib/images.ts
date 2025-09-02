// 分类映射
export const CATEGORY_MAP = {
  dev: '编程技术',
  life: '生活记录',
  reading: '阅读思考',
  thoughts: '人生随笔',
} as const

// 默认的封面图片
export const DEFAULT_COVERS = {
  dev: '/images/covers/dev.jpg',
  life: '/images/covers/life.jpg',
  reading: '/images/covers/reading.jpg',
  thoughts: '/images/covers/thoughts.jpg',
} as const

// 根据分类获取封面图片
export function getRandomCover(category: keyof typeof DEFAULT_COVERS): string {
  return DEFAULT_COVERS[category] || DEFAULT_COVERS.dev
}

// 获取分类的中文名称
export function getCategoryName(category: keyof typeof CATEGORY_MAP): string {
  return CATEGORY_MAP[category] || category
} 