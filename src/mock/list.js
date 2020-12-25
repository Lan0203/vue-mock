import Mock from 'mockjs';

  const result = []

  for (let i = 1; i < 100; i++) {
    const tmpKey = i
    result.push({
      key: tmpKey,
      id: tmpKey,
      no: 'No ' + tmpKey,
      description: '这是一段描述',
      callNo: Mock.mock('@integer(1, 999)'),
      status: Mock.mock('@integer(0, 3)'),
      updatedAt: Mock.mock('@datetime'),
      editable: false
    })
  }

  export default {
    getTableList: config =>{
      return {
        code: 200,
        data: result,
        msg: '获取列表成功'
      }
    },
  }  