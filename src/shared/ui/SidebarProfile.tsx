import styles from './SidebarProfile.module.css'

import adminAvatar from '@/shared/assets/avatars/admin.png'
import curatorAvatar from '@/shared/assets/avatars/curator.png'
import studentAvatar from '@/shared/assets/avatars/student.png'

export const roleAvatars = {
  admin: adminAvatar,
  curator: curatorAvatar,
  student: studentAvatar,
}

interface SidebarProfileProps {
  avatar: string
  fullName?: string
}

const SidebarProfile = ({ avatar, fullName }: SidebarProfileProps) => {
  return (
    <div className={styles.profile}>
      {/* <img src={avatar} alt='Avatar' className={styles.avatar} /> */}
      {fullName && <div className={styles.userName}>{fullName}</div>}
    </div>
  )
}

export default SidebarProfile
