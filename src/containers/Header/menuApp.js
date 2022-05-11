export const adminMenu = [
    { //hệ thống
        name: 'menu.admin.manage-user',
        menus: [
            {
                name: 'menu.admin.crud', link: '/system/user-manage',
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' }
                // ]
            },
            {
                name: 'menu.admin.crud-redux', link: '/system/user-redux',
            },
            {
                name: 'menu.admin.manage-doctor', link: '/system/user-doctor',
            },
            {
                name: 'menu.admin.manage-admin', link: '/system/user-admin',
            },
        ]
    },
];