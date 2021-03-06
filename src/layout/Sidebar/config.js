/**
 * 路由配置表
 */

export default [
    // 典型案例
    {
        "id": "application",
        "name": "典型案例",
        "location": "/application",
        "menustatus": "Y",
        "parentid": null,
        "icon": "uf uf-9square-2",
        "target": "",
        "urltype": "url",
        "children": [{
            "id": "app01",
            "name": "简单单表示例",
            "location": "/templates/simple-table",
            "menustatus": "Y",
            "parentid": null,
            "icon": "uf uf-9square-2",
            "target": "",
            "urltype": "url",
            "children": [],
            "sort": 1,
            "openview": "curpage",
            "category": "engine"
        },{
            "id": "app02",
            "name": "简单多选表格示例",
            "location": "/templates/select-table",
            "menustatus": "Y",
            "parentid": null,
            "icon": "uf uf-9square-2",
            "target": "",
            "urltype": "url",
            "children": [],
            "sort": 1,
            "openview": "curpage",
            "category": "engine"
        },{
            "id": "app03",
            "name": "简单分页表格示例",
            "location": "/templates/pagination-table",
            "menustatus": "Y",
            "parentid": null,
            "icon": "uf uf-9square-2",
            "target": "",
            "urltype": "url",
            "children": [],
            "sort": 1,
            "openview": "curpage",
            "category": "engine"
        },{
            "id": "app04",
            "name": "可编辑表格示例",
            "location": "/templates/card-table",
            "menustatus": "Y",
            "parentid": null,
            "icon": "uf uf-9square-2",
            "target": "",
            "urltype": "url",
            "children": [],
            "sort": 1,
            "openview": "curpage",
            "category": "engine"
        },{
            "id": "app05",
            "name": "复杂表单注册",
            "location": "/templates/complex-form",
            "menustatus": "Y",
            "parentid": null,
            "icon": "uf uf-9square-2",
            "target": "",
            "urltype": "url",
            "children": [],
            "sort": 1,
            "openview": "curpage",
            "category": "engine"
        },{
            "id": "app07",
            "name": "流程组件示例",
            "location": "/templates/bpm-table",
            "menustatus": "Y",
            "parentid": null,
            "icon": "uf uf-9square-2",
            "target": "",
            "urltype": "url",
            "children": [],
            "sort": 1,
            "openview": "curpage",
            "category": "engine"
        }],
        "sort": 1,
        "openview": "curpage",
        "category": "engine"
    },
    // 订单管理
    {
        "id": "application2",
        "name": "订单管理",
        "location": "/application",
        "menustatus": "Y",
        "parentid": null,
        "icon": "uf uf-files-o",
        "target": "",
        "urltype": "url",
        "children": [{
            "id": "app011",
            "name": "订单列表",
            "location": "/order/managelist",
            "menustatus": "Y",
            "parentid": null,
            "icon": "uf uf-9square-2",
            "target": "",
            "urltype": "url",
            "children": [],
            "sort": 1,
            "openview": "curpage",
            "category": "engine"
        },{
            "id": "app021",
            "name": "送货单",
            "location": "/order/delivery",
            "menustatus": "Y",
            "parentid": null,
            "icon": "uf uf-9square-2",
            "target": "",
            "urltype": "url",
            "children": [],
            "sort": 1,
            "openview": "curpage",
            "category": "engine"
        },{
            "id": "app031",
            "name": "角色管理",
            "location": "/system/rolelist",
            "menustatus": "Y",
            "parentid": null,
            "icon": "uf uf-9square-2",
            "target": "",
            "urltype": "url",
            "children": [],
            "sort": 1,
            "openview": "curpage",
            "category": "engine"
        },
        // {
        //     "id": "app041",
        //     "name": "计划申请",
        //     "location": "/interimplan/planapply",
        //     "menustatus": "Y",
        //     "parentid": null,
        //     "icon": "uf uf-9square-2",
        //     "target": "",
        //     "urltype": "url",
        //     "children": [],
        //     "sort": 1,
        //     "openview": "curpage",
        //     "category": "engine"
        // },{
        //     "id": "app051",
        //     "name": "资源调查表",
        //     "location": "/resource/research",
        //     "menustatus": "Y",
        //     "parentid": null,
        //     "icon": "uf uf-9square-2",
        //     "target": "",
        //     "urltype": "url",
        //     "children": [],
        //     "sort": 1,
        //     "openview": "curpage",
        //     "category": "engine"
        // },{
        //     "id": "app061",
        //     "name": "人员管理",
        //     "location": "/system/person-manage",
        //     "menustatus": "Y",
        //     "parentid": null,
        //     "icon": "uf uf-9square-2",
        //     "target": "",
        //     "urltype": "url",
        //     "children": [],
        //     "sort": 1,
        //     "openview": "curpage",
        //     "category": "engine"
        // },{
        //     "id": "app071",
        //     "name": "合同管理",
        //     "location": "/contract/manage",
        //     "menustatus": "Y",
        //     "parentid": null,
        //     "icon": "uf uf-9square-2",
        //     "target": "",
        //     "urltype": "url",
        //     "children": [],
        //     "sort": 1,
        //     "openview": "curpage",
        //     "category": "engine"
        // }
    ],
        "sort": 1,
        "openview": "curpage",
        "category": "engine"
    },
    // 供应商管理
    {
        "id": "application3",
        "name": "供应商管理",
        "location": "/application",
        "menustatus": "Y",
        "parentid": null,
        "icon": "uf uf-3dot-c-o",
        "target": "",
        "urltype": "url",
        "children": [{
            "id": "app301",
            "name": "供应商注册",
            "location": "/supplier/register",
            "menustatus": "Y",
            "parentid": null,
            "icon": "uf uf-9square-2",
            "target": "",
            "urltype": "url",
            "children": [],
            "sort": 1,
            "openview": "curpage",
            "category": "engine"
        },{
            "id": "app302",
            "name": "供应商管理",
            "location": "/supplier/list",
            "menustatus": "Y",
            "parentid": null,
            "icon": "uf uf-9square-2",
            "target": "",
            "urltype": "url",
            "children": [],
            "sort": 1,
            "openview": "curpage",
            "category": "engine"
        }],
        "sort": 1,
        "openview": "curpage",
        "category": "engine"
    },
    // 图表示例
    {
        "id": "application4",
        "name": "图表示例",
        "location": "/application",
        "menustatus": "Y",
        "parentid": null,
        "icon": "uf uf-histogram-s-o-2",
        "target": "",
        "urltype": "url",
        "children": [{
            "id": "app401",
            "name": "柱状图示例",
            "location": "/examples/bar",
            "menustatus": "Y",
            "parentid": null,
            "icon": "uf uf-9square-2",
            "target": "",
            "urltype": "url",
            "children": [],
            "sort": 1,
            "openview": "curpage",
            "category": "engine"
        },{
            "id": "app402",
            "name": "折线图示例",
            "location": "/examples/line",
            "menustatus": "Y",
            "parentid": null,
            "icon": "uf uf-9square-2",
            "target": "",
            "urltype": "url",
            "children": [],
            "sort": 1,
            "openview": "curpage",
            "category": "engine"
        },{
            "id": "app403",
            "name": "饼状折线图示例",
            "location": "/examples/bar-line",
            "menustatus": "Y",
            "parentid": null,
            "icon": "uf uf-9square-2",
            "target": "",
            "urltype": "url",
            "children": [],
            "sort": 1,
            "openview": "curpage",
            "category": "engine"
        },{
            "id": "app404",
            "name": "饼状图示例",
            "location": "/examples/pie",
            "menustatus": "Y",
            "parentid": null,
            "icon": "uf uf-9square-2",
            "target": "",
            "urltype": "url",
            "children": [],
            "sort": 1,
            "openview": "curpage",
            "category": "engine"
        },{
            "id": "app405",
            "name": "雷达图示例",
            "location": "/examples/radar",
            "menustatus": "Y",
            "parentid": null,
            "icon": "uf uf-9square-2",
            "target": "",
            "urltype": "url",
            "children": [],
            "sort": 1,
            "openview": "curpage",
            "category": "engine"
        }],
        "sort": 1,
        "openview": "curpage",
        "category": "engine"
    },
    // 应用组件示例
    {
        "id": "application5",
        "name": "应用组件示例",
        "location": "/application",
        "menustatus": "Y",
        "parentid": null,
        "icon": "uf uf-3dot-c-o",
        "target": "",
        "urltype": "url",
        "children": [{
            "id": "app501",
            "name": "附件管理",
            "location": "/examples/upload",
            "menustatus": "Y",
            "parentid": null,
            "icon": "uf uf-9square-2",
            "target": "",
            "urltype": "url",
            "children": [],
            "sort": 1,
            "openview": "curpage",
            "category": "engine"
        },{
            "id": "app502",
            "name": "富文本编辑器",
            "location": "/examples/editor",
            "menustatus": "Y",
            "parentid": null,
            "icon": "uf uf-9square-2",
            "target": "",
            "urltype": "url",
            "children": [],
            "sort": 1,
            "openview": "curpage",
            "category": "engine"
        },{
            "id": "app503",
            "name": "星期选择",
            "location": "/examples/week-picker",
            "menustatus": "Y",
            "parentid": null,
            "icon": "uf uf-9square-2",
            "target": "",
            "urltype": "url",
            "children": [],
            "sort": 1,
            "openview": "curpage",
            "category": "engine"
        },{
            "id": "app504",
            "name": "删除确认模态框",
            "location": "/examples/del-modal",
            "menustatus": "Y",
            "parentid": null,
            "icon": "uf uf-9square-2",
            "target": "",
            "urltype": "url",
            "children": [],
            "sort": 1,
            "openview": "curpage",
            "category": "engine"
        },{
            "id": "app505",
            "name": "查询面板示例",
            "location": "/examples/search-panel",
            "menustatus": "Y",
            "parentid": null,
            "icon": "uf uf-9square-2",
            "target": "",
            "urltype": "url",
            "children": [],
            "sort": 1,
            "openview": "curpage",
            "category": "engine"
        },{
            "id": "app506",
            "name": "表格编辑示例",
            "location": "/examples/edit-table",
            "menustatus": "Y",
            "parentid": null,
            "icon": "uf uf-9square-2",
            "target": "",
            "urltype": "url",
            "children": [],
            "sort": 1,
            "openview": "curpage",
            "category": "engine"
        },{
            "id": "app507",
            "name": "form表单示例",
            "location": "/examples/form-validate",
            "menustatus": "Y",
            "parentid": null,
            "icon": "uf uf-9square-2",
            "target": "",
            "urltype": "url",
            "children": [],
            "sort": 1,
            "openview": "curpage",
            "category": "engine"
        }],
        "sort": 1,
        "openview": "curpage",
        "category": "engine"
    },
    // 参照组件示例
    {
        "id": "application6",
        "name": "参照组件示例",
        "location": "/application",
        "menustatus": "Y",
        "parentid": null,
        "icon": "uf uf-3dot-c-o",
        "target": "",
        "urltype": "url",
        "children": [{
            "id": "app601",
            "name": "穿梭框参照",
            "location": "/examples/ref-transfer-example",
            "menustatus": "Y",
            "parentid": null,
            "icon": "uf uf-9square-2",
            "target": "",
            "urltype": "url",
            "children": [],
            "sort": 1,
            "openview": "curpage",
            "category": "engine"
        },{
            "id": "app602",
            "name": "多过滤项参照",
            "location": "/examples/ref-multile-example",
            "menustatus": "Y",
            "parentid": null,
            "icon": "uf uf-9square-2",
            "target": "",
            "urltype": "url",
            "children": [],
            "sort": 2,
            "openview": "curpage",
            "category": "engine"
        }],
        "sort": 1,
        "openview": "curpage",
        "category": "engine"
    }
]