<template>
<div style="margin-top:30px">
<el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove"
  :file-list="items"
  list-type="picture-card">

<el-button type="primary" @click="submitUpload">上传<i class="el-icon-upload el-icon--right"></i></el-button>

  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
<el-dialog v-model="dialogVisible" size="tiny">
<ul v-for="item in items" >
<li>
  <img width="100%" :src="items.url" alt="">
  </li>
  </ul>
</el-dialog>

<!-- <center>
<a href="http://localhost:8081/static/3d.html">
<el-button   size="small" type="primary" icon="picture">3D照片墙</el-button>
</a></center> -->


</div>
</template>
<script>
  export default {
    data() {
      return {
        items: [       
         ],
        dialogImageUrl: '',
        dialogVisible: false,
         loading:true
      };
    },
    methods: {
      getImage(){
        this.$http.get('http://localhost:8080/showImg').then((res)=>{
            this.items=res.body;
        }).catch(err=>{
            this.$message({
            type:'error',
            message:'参数错误！'
          })
           console.log(err);
        })
      },
      handleRemove(file, fileList) {
           let id=file.id;
           this.$http.get(`http://localhost:8080/deleteImg/${id}`).then((res)=>{
            this.$message({
            type:'success',
            message:'删除成功！'
          })
        }).catch(err=>{
           console.log(err)
        })  
      }, 
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      submitUpload() {



      }
      
    },
mounted:function(){
  this.getImage();
}

  }
</script>