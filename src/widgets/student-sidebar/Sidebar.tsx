import SidebarInfoCard from './SidebarInfoCard'

import { Sidebar } from '@/shared/ui/Sidebar'

const StudentSidebar = () => {
  //TODO: меняем моковые данные на данные с бэка
  const ratingPlace: number = 5
  const averageScore: number = 4.7

  const headerContent = (
    <>
      <SidebarInfoCard label='Место в рейтинге:' value={ratingPlace} />
      <SidebarInfoCard label='Ваш средний балл:' value={averageScore} />
    </>
  )

  return <Sidebar items={[]} headerContent={headerContent} showLogout={true} />
}

export default StudentSidebar
