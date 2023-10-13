interface sidebarIterface{
  name:string;
  path:string;
  icon:string;
}
const sidebarItem:sidebarIterface[] = [
    {
      name:'dashboard',
      path:'dashboard',
      icon: 'mdi-home-outline',
    },
    {
      name:'prostpects',
      path:'prostpects',
      icon: 'mdi-account-group',
    },
    {
      name:'abonnements',
      path:'abonnements',
      icon: 'mdi-home-outline',
    },   {
      name:'products',
      path:'products',
      icon: 'mdi-home-outline',
    }

  ]

  export default sidebarItem
