<template>
  <div class="hello">
    <ul v-for="(task, index) in tasks" :key="index">
        <Task :task="task" :index="index" 
            :deleteTask = "deleteTask"
        />                                
    </ul>   
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Task from '@/views/Task.vue';

const taskData = [
  { 
    name: 'Go to Shop',
    dueDate: '2019/05/12',
    dueTime: '18:30'
  },
  { 
    name: 'Get bananas',
    dueDate: '2019/05/13',
    dueTime: '14:30'
  },
  { 
    name: 'Get Apples',
    dueDate: '2019/05/14',
    dueTime: '16:00'
  }
];

@Component({
  components: {
    Task,
  }
})
export default class HelloWorld extends Vue {
  private tasks: object[] = taskData;

  private deleteTask(index: number){
    this.tasks.splice(index, 1);
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
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
