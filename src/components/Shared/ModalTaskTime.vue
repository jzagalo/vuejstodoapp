<template>
    <div v-if="dueTimeProp">    
           <b-form-timepicker 
           :value="dueTime"  
            @input="$emit('update:dueTime', $event)"         
           type="time" 
           id="type-time"           
           placeholder="Task Date">
          </b-form-timepicker>
    </div> 
    
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ModalTaskName extends Vue {
    @Prop() private dueTime!: string;
    @Prop() private dueTimeProp!: Date;
    
}
</script>