<template>
    <div>    
        <b-form-input :value="name"  
            @input="$emit('update:name', $event)" 
             placeholder="Task Name"  >
        </b-form-input>
        <br/>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ModelTaskName extends Vue{
    @Prop() private name!: string;
    
}
</script>