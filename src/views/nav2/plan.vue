
<template>
  <div style="margin-top:30px">
    <div style="margin-bottom:10px;">
      
      <span>计划:</span>
      <el-input v-model="query.plan" size="small" style="width:200px;"></el-input>

<span>参与者:</span>
      <el-input v-model="query.user" size="small" style="width:200px;"></el-input>

      <el-button @click='search'icon='search'>查询</el-button>
      
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="编号" width='70'>
      </el-table-column>
      <el-table-column prop="plan" label="计划" width="200">
      </el-table-column>
      <el-table-column prop="user" label="参与者" width="150">
      </el-table-column>
      <el-table-column prop="start" label="开始时间" width='188'>
        <template scope="scope">
          {{parseDate(scope.row.start)}}
</template>
      </el-table-column>
      <el-table-column prop="end" label="结束时间" width='188'>
<template scope="scope">
   {{parseDate(scope.row.end)}}
</template>
      </el-table-column>

      <el-table-column label="操作" width="310">
<template scope="scope">
  <el-button size="small" @click="checkState(scope.$index, scope.row)" icon="warning">查看状态</el-button>
  <el-button size="small" @click="handleEdit(scope.$index, scope.row)" icon='edit'>
    编辑</el-button>
  <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)"  icon='delete'>删除</el-button>
</template>
      </el-table-column>
    </el-table>
    <div style="margin-top:30px">
    <el-button @click='dialogVisible = true'icon='edit'>添加新的计划</el-button>

    <el-button @click="handleDownload"  icon="document" >导出Excel表格</el-button>

</div>
    <el-dialog title="新增" v-model="dialogVisible" size="tiny">
      <el-form ref="form" :model="plan" >
  <el-form-item label="计划" label-width="80px">
    <el-input v-model="plan.plan"></el-input>
  </el-form-item>
  <el-form-item label="参与者" label-width="80px">
    <el-input v-model="plan.user"></el-input>
  </el-form-item>
  <el-form-item label="开始时间" label-width="80px">
    <el-col>
      <el-date-picker type="datetime" placeholder="选择日期" v-model="plan.start" style="width: 100%;"></el-date-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="结束时间" label-width="80px">
    <el-col>
      <el-date-picker type="datetime" placeholder="选择日期" v-model="plan.end" style="width: 100%;"></el-date-picker>
    </el-col>
  </el-form-item>
</el-form>
    <el-button @click="dialogVisible = false" class="btn">取 消</el-button>
    <el-button type="primary" @click="addRecord" class="btn">确 定</el-button>
  </span>
</el-dialog>

<el-dialog title="修改" v-model="updateVisible" size="tiny">
      <el-form ref="form" :model="updatePlan" >
  <el-form-item label="计划" label-width="80px">
    <el-input v-model="updatePlan.plan"></el-input>
  </el-form-item>
  <el-form-item label="参与者" label-width="80px">
    <el-input v-model="updatePlan.user"></el-input>
  </el-form-item>
  <el-form-item label="开始时间" label-width="80px">
    <el-col>
      <el-date-picker type="datetime" placeholder="选择日期" v-model="updatePlan.start" style="width: 100%;"></el-date-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="结束时间" label-width="80px">
    <el-col>
      <el-date-picker type="datetime" placeholder="选择日期" v-model="updatePlan.end" style="width: 100%;"></el-date-picker>
    </el-col>
  </el-form-item>
</el-form>
  
   <el-button @click="dialogVisible = false" class="btn">取 消</el-button>
    <el-button type="primary" @click="changeRecord" class="btn">确 定</el-button>
    
  </span>


  </el-dialog>
<el-dialog title="任务状态" v-model="stateVisiable" size="tiny">
  <span >
{{state}}
  </span>
  <span slot="footer" class="dialog-footer">

    <el-button type="primary" @click="stateVisiable = false">确 定</el-button>
  </span>
</el-dialog>


  </div>
</template>

<script>
  import util from '../../common/js/util'
  import {
    getData
  } from '../../api/api';
  
  export default {
    data() {
      return {
        tableData: [
          
        ],
        startTime: '',
        EndTime: '',
       
        stateVisiable:false,
        dialogVisible: false,
        updateVisible: false,
        plan: {//新增
          plan: '',
          user: '',
          start: '',
          end: ''
        },
        query:{//查询
         
         plan:'',
         user:''
        },
         updatePlan: {//修改
          id:'',
          plan: '',
          user: '',
          start: '',
          end: ''
        },
      
           state:'',
       
      }
  
    },
  
    methods: {

     checkState(index,row){
         this.stateVisiable =true;
        
         this.plan = row;
      
         if(this.plan.start<new Date()&&this.plan.end>new Date()){
               this.state="进行中"
                }
        else if(this.plan.end<new Date()){
                this.state="已过期"
          }

          else{
           this.state="待进行"
       }   
        this.plan=''
     },
   

      getTableData() {
          this.$http.get('http://localhost:8080/public/plan/user').then((res)=>{
            this.tableData=res.data;
            console.log(this.tableData)
          }).catch(err=>{
          this.$message({
          type:'error',
          message:'参数错误！'
            })
          })
      },
      search(){
           if(this.query.plan==''||this.query.user==''){
           this.$message({
            type: 'error',
            message: '请输入查询条件!'
          });
      }else{
       this.$http.get('http://localhost:8080/public/plan/user/'+this.query.plan+'/'+this.query.user).then((res)=>{

        this.tableData=res.data;
        this.$message({
            type: 'success',
            message: '查询成功!'
          });
       }).catch(err=>{
           this.$message({
            type: 'error',
            message: '计划不存在!'
          });
       });
       }
      },
       changeRecord(){
          let param=this.updatePlan;
          if(this.updatePlan.user==''||this.updatePlan.plan==''){
          this.$message({
            type: 'error',
            message: '请添加任务和参与者!'
          });
        }else

        if(this.updatePlan.start>=this.updatePlan.end||this.updatePlan.start<=new Date()){
        this.$message({
            type: 'error',
            message: '开始时间不能等于或者晚于结束时间且不能早于当前时间!'
          });
        }else{
             this.$http.put('http://localhost:8080/public/plan/user', param).then((err) => {
          this.$message({
            type: 'success',
            message: '操作成功!'
          });
              this.getTableData();
        }).catch((err) => {
          console.log(err);
          this.$message({
            type: 'error',
            message: '操作失败!'
          });
        });
        
        this.updateVisible =false;
        this.dialogVisible = false;
            }
       },

      addRecord() {
        let url = this.dialogVisible  ? '' : '';
        let param=this.plan;
        if(this.plan.user==''||this.plan.plan==''){
          this.$message({
            type: 'error',
            message: '请添加任务和参与者!'
          });
        }else

        if(this.plan.start>this.plan.end||this.plan.start<new Date()){
        this.$message({
            type: 'error',
            message: '开始时间不能晚于结束时间且不能早于当前时间!'
          });
        }else{
        this.$http.post('http://localhost:8080/public/plan/user', param).then((err) => {
          this.$message({
            type: 'success',
            message: '操作成功!'
          });
              this.getTableData();
        }).catch((err) => {
          console.log(err);
          this.$message({
            type: 'error',
            message: '操作失败!'
          });
        });
        this.updateVisible =false;
        this.dialogVisible = false;
}
      },
      handleEdit(index, row) {
        this.updateVisible =true;
        
  
      this.updatePlan = row;


      },
      handleDelete(index, row) {
        this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.delete('http://localhost:8080/public/plan/user/'+row.id,row).then((res) => {
            this.$message({
              type: 'success',
              message: '删除成功!',
               
            });
            this.getTableData();
          }).catch((err) => {
            this.$message({
              type: 'error',
              message: '删除失败!'
            });
          });
         
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },

handleDownload() {
      require.ensure([], () => {
        const { export_json_to_excel } = require('../../vendor/Export2Excel');
        const tHeader = ['编号', '计划', '参与者', '开始时间', '结束时间'];
         



        const filterVal = ['id', 'plan', 'user', 'start', 'end'];
        const list = this.tableData;
        const data = this.formatJson(filterVal, list);
        export_json_to_excel(tHeader, data, '家庭计划表');
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    
  },











      parseDate: function(value) {
        let date = new Date(value);
        return date.getFullYear() + '-' + (date.getMonth() + 1 > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1)) + "-" +
          (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) + " " +
          (date.getHours() > 9 ? date.getHours() : "0" + date.getHours()) + ":" +
          (date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()) + ":" +
          (date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds());
      },
    },
    created: function() {
      this.getTableData();
       
     
    }
  }
</script>

<style lang="css" scope>
  .btn {
    margin: 0 auto;
  }
</style>>
