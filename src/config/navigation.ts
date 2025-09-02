import { NavigationConfig } from '@/types/navigation'
import {
  FaHome,
  FaUser,
  FaCode,
  FaLaptopCode,
  FaBook,
  FaLightbulb,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa'
import { allPosts } from 'contentlayer/generated'
import { createCategoryRoute } from '@/lib/routes'
import { BiSolidVideoRecording } from 'react-icons/bi'

// 获取每个分类的文章数量
const getCategoryCount = (category: string) => {
  return allPosts.filter((post) => post.category === category).length
}

export const navigation: NavigationConfig = {
  main: [
    { href: '/', label: '首页', icon: FaHome },
    { href: '/about', label: '关于我', icon: FaUser },
  ],
  posts: [
    {
      href: createCategoryRoute('dev'),
      label: '编程开发',
      icon: FaLaptopCode,
      count: getCategoryCount('dev'),
    },
    {
      href: createCategoryRoute('life'),
      label: '生活记录',
      icon: BiSolidVideoRecording,
      count: getCategoryCount('life'),
    },
    {
      href: createCategoryRoute('reading'),
      label: '阅读思考',
      icon: FaBook,
      count: getCategoryCount('reading'),
    },
    {
      href: createCategoryRoute('thoughts'),
      label: '人生随笔',
      icon: FaLightbulb,
      count: getCategoryCount('thoughts'),
    },
  ],
  projects: [
    { href: 'https://yangmei.2linescraft.xyz', label: '杨梅订单管家', icon: FaCode },
    { href: 'https://house-rental.2linescraft.xyz', label: '租房管家', icon: FaCode },
  ],
  online: [
    { href: 'https://github.com/coocier', label: 'GitHub', icon: FaGithub },
    {
      href: 'https://x.com/leecoocie',
      label: 'Twitter',
      icon: FaTwitter,
    },
  ],
}
