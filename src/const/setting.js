const dicData = [
  {
    label: '开启',
    value: 'true'
  }, 
  {
    label: '关闭',
    value: 'false'
  }
]
export const list = [
  {
    key: 'showTag',
    commit: 'SET_SHOWTAG'
  }, 
  {
    key: 'showTheme',
    commit: 'SET_SHOWTHEME'
  },  
  {
    key: 'showLock',
    commit: 'SET_SHOWLOCK'
  }, 
  {
    key: 'showFullScren',
    commit: 'SET_SHOWFULLSCREN'
  }, 
  {
    key: 'showSearch',
    commit: 'SET_SHOWSEARCH'
  }, 
]
export const option = (safe) => {
  const _safe = safe
  return {
    submitBtn: false,
    emptyBtn: false,
    column: [
      {
        label: '标签',
        prop: 'showTag',
        type: 'switch',
        span: 24,
        dicData: dicData,
        click: ({ column }) => {
          _safe.set(column.prop)
        }
      }, 
      // {
      //   label: '日志',
      //   prop: 'showDebug',
      //   type: 'switch',
      //   span: 24,
      //   dicData: dicData,
      //   click: ({ column }) => {
      //     _safe.set(column.prop)
      //   }
      // }, 
      {
        label: '主题',
        prop: 'showTheme',
        type: 'switch',
        span: 24,
        dicData: dicData,
        click: ({ column }) => {
          _safe.set(column.prop)
        }
      }, 
      {
        label: '主题色',
        prop: 'showColor',
        type: 'switch',
        span: 24,
        dicData: dicData,
        click: ({ column }) => {
          _safe.set(column.prop)
        }
      }, 
      {
        label: '全屏',
        prop: 'showFullScren',
        type: 'switch',
        span: 24,
        dicData: dicData,
        click: ({ column }) => {
          _safe.set(column.prop)
        }
      }, 
      {
        label: '锁屏',
        prop: 'showLock',
        type: 'switch',
        span: 24,
        dicData: dicData,
        click: ({ column }) => {
          _safe.set(column.prop)
        }
      }, 
      // {
      //   label: '缩放',
      //   prop: 'showCollapse',
      //   type: 'switch',
      //   span: 24,
      //   dicData: dicData,
      //   click: ({ column }) => {
      //     _safe.set(column.prop)
      //   }
      // }, 
      // {
      //   label: '顶部菜单',
      //   prop: 'showMenu',
      //   type: 'switch',
      //   span: 24,
      //   dicData: dicData,
      //   click: ({ column }) => {
      //     _safe.set(column.prop)
      //   }
      // }
    ]
  }
}
