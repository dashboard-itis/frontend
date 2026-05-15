import SidebarInfoCard from './SidebarInfoCard'

import { Sidebar } from '@/shared/ui/Sidebar'
import SidebarProfile, { roleAvatars } from '@/shared/ui/SidebarProfile'

const StudentSidebar = () => {
  //TODO: меняем моковые данные на данные с бэка
  const ratingPlace: number = 1
  const averageScore: number = 4.9

  const headerContent = (
    <>
      <SidebarProfile avatar={roleAvatars.student} fullName='Иванов Петров' />
      <SidebarInfoCard label='Место в рейтинге' value={ratingPlace} />
      <SidebarInfoCard label='Ваш средний балл' value={averageScore} />
    </>
  )

  return <Sidebar items={[]} headerContent={headerContent} showLogout={true} />
}
export default StudentSidebar
