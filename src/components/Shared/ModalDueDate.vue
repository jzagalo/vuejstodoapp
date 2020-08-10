<template >
    <div>  
        <b-form-datepicker 
        :value="dueDate" 
        @input="$emit('update:dueDate', $event)"
        
        placeholder="Task Date">
        </b-form-datepicker>
        <br/>
    </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';


@Component({ })
export default class ModalDueDate extends Vue {
    @Prop() private dueDate!: Date;

    
}
</script>