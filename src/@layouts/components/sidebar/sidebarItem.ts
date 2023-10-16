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
      path:'subscriptions',
      icon: ' mdi-plus-network',
    },   {
      name:'users',
      path:'users',
      icon: 'mdi-account',
    }

  ]

  export default sidebarItem
