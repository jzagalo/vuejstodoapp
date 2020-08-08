<template>       
    <b-form @submit.prevent="onSubmit"  >
        <ModalTaskName :name.sync="taskToMessage.name" /> 
        <ModalDueDate :dueDate.sync="taskToMessage.dueDate" />
        <ModalTaskTime 
            :dueTime.sync="taskToMessage.dueTime"
            :dueTimeProp="taskToMessage.dueDate" />
    </b-form>  
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Getter, Action, Mutation } from 'vuex-class';
import ModalTaskName from '@/components/Shared/ModalTaskName.vue';
import ModalDueDate from '@/components/Shared/ModalDueDate.vue';
import ModalTaskTime from '@/components/Shared/ModalTaskTime.vue';

type TaskObject = { id: number; name: string; completed: boolean };

@Component({
  components: {   
    ModalTaskName,
    ModalDueDate,
    ModalTaskTime,
  }
})
export default class HelloWorld extends Vue {
  @Prop() private id!: string;
  @Prop() private task!: TaskObject;  
  @Getter('tasks/tasks') tasks!: object;
  @Action('tasks/updateTask') updateTask!: Function; 

  private showAddTask = false;
  private taskToMessage = {};
  private toggleComplete(task: TaskObject){
    task.completed =! task.completed;    
  }

  private resetModal(){
    this.taskToMessage = {
       name: '',
       dueDate: '',
       dueTime: '',
       completed: false,
    };
  }

  private handleOk(){
    console.log('ZZZZ');    
  }

  mounted(){
    this.taskToMessage = Object.assign({}, this.task);
    console.log(this.taskToMessage);
  }

}


</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  padding: 5px 0;
  width: 70%;
  margin:10px auto;
}

li.green, li.green span, li.green div {
  background: #d9f2a5;
  text-decoration: line-through;
}

li > div.container {
  width: 100% !important;
}

a {
  color: #42b983;
}

.custom-control{
  text-align: left;
}

.button-wrapper {
  text-align: right; 
  position: fixed; 
  bottom:30px; 
  right:50px; 
}

.button-wrapper .btn.btn-danger {
  box-shadow: 0 4px 17px 0 #1f2326b0;
}
</style>
