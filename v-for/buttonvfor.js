const ConditionalRendering = {
    data() {
    return {
      type: "",
      options: ['A', 'B', 'C'],
    }
    },
    methods: {
      setOption(input){
        this.type = input
      }
    }
    }
    
    Vue.createApp(ConditionalRendering).mount('#conditional-rendering')