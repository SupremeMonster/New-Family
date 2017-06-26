<template>
<div style="margin-top:30px;">
<div style="margin-left:30px">
<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" indent="70">

</el-tree>
</div>

<center><img style="margin-top:30px" src="../../assets/tree2.jpg"/>
</center>
</div>
</template>
<script>
  export default {
    data() {
      return {
        data: [{
          label: '太太',
          children:[{
              label:'爷爷和奶奶',
             children:[{
             label:'爸爸和妈妈',
             children:[{
              label:'我'
             }]
             },{
                
                label:'姑姑和姑妈',
                children:[{
                   label:'大姐姐和姐夫',
                   children:[{
                    label:'郑想想妹妹'
                   }]
                  },
                   {
                     label:'二姐姐和姐夫',
                     children:[{
                     label:'贝信宇弟弟'
                     }],
                   },
                   {
                   label:'王佳姐姐',
                   },
                   {label:'贝嘉怡妹妹'}
                ]
             },]
          },{
             label:'老爷爷和老奶奶',
             children:[{
                label:'丁丁叔叔和婶婶',
                children:[{
                label:'丁当弟弟'
                }]
             }]
          },{
             label:'二爷爷和二奶奶',
             children:[{
             label:'丁亮叔叔和婶婶',
             children:[{
             label:'丁可欣妹妹'
               }]
             }]
          },
          {
             label:'姑爷爷和姑奶奶',
             children:[{
             label:'东东叔叔和婶婶',
             children:[{
             label:'游亦添弟弟'
             }]
             }]
          }]},
          {
            label:'外婆和外公',
            children:[{
               label:'舅舅和舅母',
               children:[{
               label:'吴琼妹妹'
               }]
            },{
                label:'阿姨和姨爹',
                children:[{
                label:'丹丹姐姐',
              indent:50
                }]
            }]
          }
         ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
</script>

<style>


</style>