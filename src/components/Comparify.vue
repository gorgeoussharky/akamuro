Vue.component('comparify', {
  props:{
    value: { default: 50 },
    step: { default: '.1' }
  },
  template:`#compare-template`,
  data(){
    return {
      width: null,
      compareWidth: this.value,
    }
  },
  watch:{
    value(){
      this.compareWidth= this.value
    }
  },
  mounted(){
    this.width = this.getContainerWidth();
  },
  methods:{
    handleInput(e){
      this.compareWidth = e.target.value
      this.$emit('input', e.target.value)
    },
    handleResize(){
      const w = this.getContainerWidth();
      if(w === this.width)
        return;
      this.width = w
      console.log(this.width)
    },
    getContainerWidth(){
      return window.getComputedStyle(this.$el,null).getPropertyValue('width')
    },
  }
})

new Vue({
  el:'.app'
})