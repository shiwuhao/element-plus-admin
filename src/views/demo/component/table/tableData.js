export function getBasicColumns() {
  return [
    {
      prop: 'id',
      label: 'ID',
      minWidth: '100',
    },
    {
      prop: 'name',
      label: '姓名',
      minWidth: '180',
    },
    {
      prop: 'age',
      label: '年龄',
      minWidth: '80',
    },
    {
      prop: 'no',
      label: '编号',
      minWidth: '100',
    },
    {
      prop: 'address',
      label: '地址',
      minWidth: '280',
    },
    {
      prop: 'created_at',
      label: '创建时间',
      minWidth: '150',
    },
    {
      prop: 'updated_at',
      label: '更新时间',
      minWidth: '200',
    },
  ];
}

export function getBasicData() {
  const tableData = [];
  for (let index = 0; index < 20; index++) {
    tableData.push({
      id: `${index}`,
      name: 'John Brown',
      age: `1${index}`,
      no: `${index + 10}`,
      address: '上海市普陀区金沙江路 1517 弄',
      created_at: new Date().toLocaleString(),
      updated_at: new Date().toLocaleString(),
    });
  }

  return tableData;
}

export function getTreeData() {
  const tableData = [];
  for (let index = 0; index < 20; index++) {
    tableData.push({
      id: `${index}`,
      name: 'John Brown',
      age: `1${index}`,
      no: `${index + 10}`,
      address: '上海市普陀区金沙江路 1517 弄',
      created_at: new Date().toLocaleString(),
      updated_at: new Date().toLocaleString(),
      children: [
        {
          id: `l2-${index}`,
          name: 'John Brown',
          age: `1${index}`,
          no: `${index + 10}`,
          address: '上海市普陀区金沙江路 1517 弄',
          created_at: new Date().toLocaleString(),
          updated_at: new Date().toLocaleString(),
        },
        {
          id: `l2-${index}`,
          name: 'John Brown',
          age: `1${index}`,
          no: `${index + 10}`,
          address: '上海市普陀区金沙江路 1517 弄',
          created_at: new Date().toLocaleString(),
          updated_at: new Date().toLocaleString(),
        }
      ]
    });
  }

  return tableData;
}