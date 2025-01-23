import { NavigationItem } from './NavigationItem'
import { NavigationSection as NavSectionType } from '@/types/navigation'

interface NavigationSectionProps {
  section: NavSectionType
}

export function NavigationSection({ section }: NavigationSectionProps) {
  const { title, items } = section

  return (
    <div>
      <h4 className="px-2 pt-5 pb-2 text-sm font-semibold text-gray-1000 text-opacity-40 dark:text-white">
        {title}
      </h4>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.href} className="flex items-stretch space-x-1">
            <NavigationItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  )
} 