import { Vue } from 'vue-property-decorator';

const state = {
  tasks: {     
    'ID1': {    
        name: 'Go to Shop',
        completed: true,  
        dueDate:'2019/05/12',
        dueTime: '10:30'  
    },
    'ID2':{        
        name: 'Get bananas',
        completed: false,
        dueDate:'2019/05/13',
        dueTime: '14:00'     
    },
    'ID3':{       
        name: 'Get Apples',
        completed: false, 
        dueDate:'2019/05/14',
        dueTime: '16:00'  
    }
  }
}

const mutations = {
    updateTask(state: any, payload: any){
        Object.assign(state.tasks[payload.id], payload.updates);
    },
    deleteTask(state: any, id: string){        
        Vue.delete(state.tasks, id);
    },
    addTask(state: any, payload: any){
        Vue.set(state.tasks, payload.id, payload.task);
    },
} 

const actions = {
    updateTask({ commit }: {commit: Function}, payload: object){        
        commit("updateTask", payload);  
    },
    deleteTask({ commit }: {commit: Function}, id: string){        
        commit("deleteTask", id);  
    },
    addTask({ commit}: { commit: Function}, task: object){
        const keysArr = Object.keys(state.tasks);
        const keyLength = keysArr.length;
        const lastKey = keysArr[keyLength -1].split('').pop();        
        const newID = 'ID'+ (Number(lastKey) + 1);      
        
        commit('addTask', { id: newID, task: task });
    }
}

const getters = {
    tasks: (state: any) => {
        return state.tasks;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}