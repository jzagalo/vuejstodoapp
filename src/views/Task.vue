<template>    
    <li @click="updateTask({ id: index,  updates: { completed: !task.completed }})">  
        <b-container>   
            <b-row>     
                <b-col cols="5" align-v="start">
                    <b-form-checkbox  v-model="task.completed">
                        <span>
                             {{ task.name }} 
                        </span>                       
                    </b-form-checkbox>  
                </b-col> 
                <b-col cols="7" align-v="end">
                    <span>
                        <b-icon-calendar variant="dark"></b-icon-calendar>
                        {{ task.dueDate | dateFormat }} 
                    </span>
                    <span>
                        <b-icon-clock variant="secondary"></b-icon-clock>
                        {{ task.dueTime }} 
                    </span> 
                    <span>                  
                        <b-icon icon="x-circle-fill" scale="1.5" variant="danger"  
                        @click="showDeletePopUp(index)"></b-icon> 
                     </span>
                    <span>
                        <b-icon 
                            icon="pencil" 
                            scale="1.5" 
                            variant="danger"
                            @click.stop="showEditTask = true"                            
                            ></b-icon>
                    </span>
                    <b-modal title="Add Todo"  v-model="showEditTask">
                        <EditTask :id="index" :task="task" />
                    </b-modal>     
                                               
                </b-col>        
            </b-row>
        </b-container>
    </li>    
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { State, Getter, Action, Mutation } from 'vuex-class';
import EditTask from '@/components/Shared/EditTask.vue';

@Component({
    components: {
        EditTask,
    },
    filters: {
    dateFormat: function(value: any){
      if(!value) return '';
      return value.toString().split("00:00:00")[0];
    },
  },
})
export default class Task extends Vue {
    @Prop() task!: object;
    @Prop() index!: number;
    @Prop() updateTask!: Function;
    @Getter('tasks/tasks') tasks!: object;
    @Action('tasks/deleteTask') deleteTask!: Function; 
     
    private showEditTask = false;

    private showDeletePopUp(id: string) {       
        this.$bvModal.msgBoxConfirm('Are you sure you want to delete ')
          .then(value => {
              if(value){
                  this.deleteTask(id);
              }           
          })
          .catch(err => {
             console.log(err.toString());
          })
    }  

    
}
</script>