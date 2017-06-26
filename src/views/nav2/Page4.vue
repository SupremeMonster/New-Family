<template>
<div style="margin-top:30px">
<el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture-card">

   


<el-button type="primary" @click="submitUpload">上传<i class="el-icon-upload el-icon--right"></i></el-button>

  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
<el-dialog v-model="dialogVisible" size="tiny">
  <img width="100%" :src="dialogImageUrl" alt="">
  
</el-dialog>

<center>
<a href="http://localhost:8081/static/3d.html">
<el-button   size="small" type="primary" icon="picture">3D照片墙</el-button>
</a></center>


</div>
</template>
<script>
  export default {
    data() {
      return {
        fileList2: [
        {
         url: 'http://localhost:8080/file/7',

         }, 
         
         { 
         url: 'http://localhost:8080/file/8'
         },
         
         { 
         url: 'http://localhost:8080/file/10'
         },
          { 
         url: 'http://localhost:8080/file/11'
         },{ 
         url: 'http://localhost:8080/file/12'
         },{ 
         url: 'http://localhost:8080/file/13'
         },{ 
         url: 'http://localhost:8080/file/14'
         },{ 
         url: 'http://localhost:8080/file/15'
         },
         { 
         url: 'http://localhost:8080/file/19'
         },
         { 
         url: 'http://localhost:8080/file/20'
         },
         { 
         url: 'http://localhost:8080/file/21'
         },
         { 
         url: 'http://localhost:8080/file/23'
         }
         
         ],


        dialogImageUrl: '',
        dialogVisible: false,
         loading:true
      };
    },
    methods: {
      handleRemove(file, fileList) {
           
          this.$message({
            type:'success',
            message:'删除成功！'
          })
          

        
      }, 
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      submitUpload() {
      }
      
    }
  }
</script>