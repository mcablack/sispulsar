// Just a mock data

export const constantRoutes = [
  {
    path: '/redirect',
    component: 'Layout',
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: 'views/redirect/index'
      }
    ]
  },
  {
    path: '/login',
    component: 'views/login/index',
    meta: { hidden: true }
  },
  {
    path: '/auth-redirect',
    component: 'views/login/auth-redirect',
    meta: { hidden: true }
  },
  {
    path: '/404',
    component: 'views/error-page/404',
    meta: { hidden: true }
  },
  {
    path: '/401',
    component: 'views/error-page/401',
    meta: { hidden: true }
  },
  {
    path: '',
    component: 'Layout',
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: 'views/dashboard/index',
        name: 'Dashboard',
        meta: {
          title: 'dashboard',
          icon: 'dashboard',
          affix: true
        }
      }
    ]
  },
  {
    path: '/documentation',
    component: 'Layout',
    children: [
      {
        path: 'index',
        component: 'views/documentation/index',
        name: 'Documentation',
        meta: {
          title: 'documentation',
          icon: 'documentation',
          affix: true
        }
      }
    ]
  }
]

export const asyncRoutes = [
  // {
  //   path: '/permission',
  //   component: 'Layout',
  //   redirect: '/permission/index',
  //   meta: {
  //     title: 'permission',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'],
  //     alwaysShow: true
  //   },
  //   children: [
  //     {
  //       path: 'page',
  //       component: 'views/permission/page',
  //       name: 'PagePermission',
  //       meta: {
  //         title: 'pagePermission',
  //         roles: ['admin']
  //       }
  //     },
  //     {
  //       path: 'directive',
  //       component: 'views/permission/directive',
  //       name: 'DirectivePermission',
  //       meta: {
  //         title: 'directivePermission'
  //       }
  //     },
  //     {
  //       path: 'role',
  //       component: 'views/permission/role',
  //       name: 'RolePermission',
  //       meta: {
  //         title: 'rolePermission',
  //         roles: ['admin']
  //       }
  //     }
  //   ]
  // },
  {
    path: '/components',
    component: 'Layout',
    redirect: 'noredirect',
    name: 'ComponentDemo',
    meta: {
      title: 'components',
      icon: 'component'
    },
    children: [
      {
        path: 'tinymce',
        component: 'views/components-demo/tinymce',
        name: 'TinymceDemo',
        meta: { title: 'tinymce' }
      },
      {
        path: 'markdown',
        component: 'views/components-demo/markdown',
        name: 'MarkdownDemo',
        meta: { title: 'markdown' }
      },
      {
        path: 'json-editor',
        component: 'views/components-demo/json-editor',
        name: 'JsonEditorDemo',
        meta: { title: 'jsonEditor' }
      },
      {
        path: 'split-pane',
        component: 'views/components-demo/split-pane',
        name: 'SplitPaneDemo',
        meta: { title: 'splitPane' }
      },
      {
        path: 'avatar-upload',
        component: 'views/components-demo/avatar-upload',
        name: 'AvatarUploadDemo',
        meta: { title: 'avatarUpload' }
      },
      {
        path: 'dropzone',
        component: 'views/components-demo/dropzone',
        name: 'DropzoneDemo',
        meta: { title: 'dropzone' }
      },
      {
        path: 'sticky',
        component: 'views/components-demo/sticky',
        name: 'StickyDemo',
        meta: { title: 'sticky' }
      },
      {
        path: 'count-to',
        component: 'views/components-demo/count-to',
        name: 'CountToDemo',
        meta: { title: 'countTo' }
      },
      {
        path: 'mixin',
        component: 'views/components-demo/mixin',
        name: 'ComponentMixinDemo',
        meta: { title: 'componentMixin' }
      },
      {
        path: 'back-to-top',
        component: 'views/components-demo/back-to-top',
        name: 'BackToTopDemo',
        meta: { title: 'backToTop' }
      },
      {
        path: 'draggable-dialog',
        component: 'views/components-demo/draggable-dialog',
        name: 'DraggableDialogDemo',
        meta: { title: 'draggableDialog' }
      },
      {
        path: 'draggable-select',
        component: 'views/components-demo/draggable-select',
        name: 'DraggableSelectDemo',
        meta: { title: 'draggableSelect' }
      },
      {
        path: 'draggable-list',
        component: 'views/components-demo/draggable-list',
        name: 'DraggableListDemo',
        meta: { title: 'draggableList' }
      },
      {
        path: 'draggable-kanban',
        component: 'views/components-demo/draggable-kanban',
        name: 'DraggableKanbanDemo',
        meta: { title: 'draggableKanban' }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    meta: { hidden: true }
  }
]
