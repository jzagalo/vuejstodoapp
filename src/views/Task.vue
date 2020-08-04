<template>
    <li>
        <div>
           {{ task.name }} 
           {{index}} 
            <small> {{ task.dueDate }} @ {{ task.dueTime }} </small>
            <button @click="deleteTask(index)">X</button>
        </div>
    </li>    
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Task extends Vue {
    @Prop() task!: object;
    @Prop() index!: number;
    @Prop() deleteTask!: Function;

    private mounted(){
        console.log(this.task);
    }
}
</script>