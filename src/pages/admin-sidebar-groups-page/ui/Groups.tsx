// import { Button, Typography } from 'antd'
// import React, { useState, useEffect } from 'react'
//
// const { Title } = Typography
//
// const GROUPS = ['11-400', '11-401', '11-402']
//
// const Groups = () => {
//   const [selectedGroup, setSelectedGroup] = useState<string | null>(null)
//
//   useEffect(() => {
//     const saved = localStorage.getItem('admin_group')
//     if (saved) setSelectedGroup(saved)
//   }, [])
//
//   const handleSelect = (group: string) => {
//     setSelectedGroup(group)
//     localStorage.setItem('admin_group', group)
//   }
//
//   return (
//     <div style={{ maxWidth: 700, margin: '0 auto' }}>
//       <Title level={3}>Выбор группы</Title>
//
//       <div style={{ display: 'flex', gap: 12 }}>
//         {GROUPS.map((g) => (
//           <Button key={g} type={selectedGroup === g ? 'primary' : 'default'} onClick={() => handleSelect(g)}>
//             {g}
//           </Button>
//         ))}
//       </div>
//     </div>
//   )
// }
//
// export default Groups
