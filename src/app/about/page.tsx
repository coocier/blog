import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import {
  FaRobot,
  FaGithub,
  FaTwitter,
  FaWeixin,
  FaNodeJs,
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiMongodb,
  SiJavascript,
  SiReact,
} from 'react-icons/si'
import {
  GiBoxCutter,
  GiFishing,
  GiGardeningShears,
  GiHiking,
} from 'react-icons/gi'
import { HiMail } from 'react-icons/hi'
import { BsGear } from 'react-icons/bs'
import { Container } from '@/components/common/Container'

const meta = {
    title: '关于我 - Slow is smooth, smooth is fast',
    description: '前端开发工程师，兴趣广泛，终身学习者，不定时更新文章，欢迎订阅！',
    url: `${WEBSITE_HOST_URL}/about`,
}

export const metadata: Metadata = {
    metadataBase: new URL(WEBSITE_HOST_URL),
    title: meta.title,
    description: meta.description,
    openGraph: {
        title: meta.title,
        description: meta.description,
        url: meta.url,
        type: 'website',
    },
    twitter: {
        title: meta.title,
        description: meta.description,
        card: 'summary_large_image',
    },
    alternates: {
        canonical: meta.url,
    },
}

const skills = [
    { icon: SiJavascript, name: 'JavaScript', color: 'text-red-500' },
    { icon: SiReact, name: 'React', color: 'text-blue-500' },
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-600' },
    { icon: SiNextdotjs, name: 'Next.js', color: 'text-gray-800 dark:text-gray-200' },
    { icon: FaNodeJs, name: 'Nodejs', color: 'text-green-500' },
    { icon: BsGear, name: 'Workflow', color: 'text-blue-500' },
    { icon: FaRobot, name: 'Agent', color: 'text-emerald-500' },
]

const interests = [
    {
        icon: GiHiking,
        title: '户外徒步',
        description: '享受户外新鲜空气的同时又能锻炼身体'
    },
    {
        icon: GiFishing,
        title: '钓鱼',
        description: '台钓路亚均有涉猎'
    },
    {
        icon: GiBoxCutter,
        title: '木作',
        description: '木艺创作有时候和写代码很相似'
    },
    {
        icon: GiGardeningShears,
        title: '园艺',
        description: '园艺是一门需要投入时间和精力的事情'
    },
]

const contacts = [
    {
        icon: FaWeixin,
        name: '微信',
        value: 'mondoura',
        color: 'text-green-500',
    },
    {
        icon: FaGithub,
        name: 'GitHub',
        value: 'coocier',
        link: 'https://github.com/coocier',
        color: 'text-gray-800 dark:text-gray-200',
    },
    {
        icon: FaTwitter,
        name: 'Twitter',
        value: '@leecoocie',
        link: 'https://twitter.com/leecoocie',
        color: 'text-blue-400',
    },
    {
        icon: HiMail,
        name: '邮件',
        value: 'leecoocie@gmail.com',
        link: 'mailto:leecoocie@gmail.com',
        color: 'text-red-500',
    },
]

export default function About() {
    return (
        <Container size="md">
            <div className="py-12 sm:py-16 lg:py-20">
                {/* 头部介绍 */}
                <div>
                    <h1 className="py-2 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
                      Slow is smooth, smooth is fast
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                        👋 你好！我是一名前端开发工程师，目前辞职在家做独立开发，React + TypeScript + Node.js + MongoDB 是我的主要技术栈，整套技术闭环让我能独立把产品从 0 推到线上。
                      同时在平面设计上也有些许经验，Adobe XD / Sketch / Photoshop 熟练，能独立输出 UI 组件、海报与运营物料
                    </p>
                </div>

                {/* 技术栈 */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">技术栈</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        我专注于构建高性能、高并发、高稳定性的系统。同时具备全栈开发能力，能够独立完成项目开发。
                    </p>
                    <div className="mt-8 flex flex-wrap gap-6">
                        {skills.map((skill) => (
                            <div key={skill.name} className="flex items-center gap-2">
                                <skill.icon className={`h-6 w-6 ${skill.color}`} />
                                <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 兴趣爱好 */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">兴趣爱好</h2>
                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                        {interests.map((interest) => (
                            <div
                                key={interest.title}
                                className="group rounded-2xl bg-white/50 p-6 shadow-md transition-all hover:shadow-xl dark:bg-gray-800/50"
                            >
                                <interest.icon className="h-8 w-8 text-blue-500" />
                                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                                    {interest.title}
                                </h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-400">
                                    {interest.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 博客目的 */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">关于博客</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        这里是我的数字花园，记录日常学习和思考的内容。你可以找到关于编程技术、产品设计、人生思考的文章，
                        也可以看到我的阅读笔记和生活随想。希望这些内容能够帮助到你，也欢迎与我交流讨论。
                    </p>
                </div>

                {/* 联系方式 */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">联系方式</h2>
                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                        {contacts.map((contact) => (
                            <div key={contact.name} className="flex items-center gap-4">
                                <contact.icon className={`h-6 w-6 ${contact.color}`} />
                                <div className="flex flex-col">
                                    <span className="text-sm text-gray-500 dark:text-gray-400">{contact.name}</span>
                                    {contact.link ? (
                                        <a
                                            href={contact.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
                                        >
                                            {contact.value}
                                        </a>
                                    ) : (
                                        <span className="text-gray-900 dark:text-gray-100">{contact.value}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/*/!* 订阅提示 *!/*/}
                {/*<div className="mt-16">*/}
                {/*    <div className="rounded-2xl bg-blue-50 p-6 dark:bg-blue-900/20">*/}
                {/*        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">*/}
                {/*            📬 免费订阅我的 AI 周刊*/}
                {/*        </h3>*/}
                {/*        <p className="mt-2 text-blue-800 dark:text-blue-200">*/}
                {/*            每周精选高质量的 AI 文章，帮助你跟上人工智能的最新发展。已有超过 3000 位读者订阅，欢迎加入我们！*/}
                {/*        </p>*/}
                {/*        <a*/}
                {/*            href="https://www.bestblogs.dev/#subscribe"*/}
                {/*            target="_blank"*/}
                {/*            rel="noopener noreferrer"*/}
                {/*            className="mt-4 inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"*/}
                {/*        >*/}
                {/*            立即订阅*/}
                {/*        </a>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </Container>
    )
}
