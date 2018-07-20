<template>
  <div class="c-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "button-group",
    mounted(){
      console.log(this.$el.children)
      for(let node of this.$el.children){
        console.log(node)
        if(node.nodeName.toLowerCase()!=='button'){
          console.warn('该组件子元素应均为button')
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .c-button-group{
    display: inline-flex;
    vertical-align: top;
    >.c-button{
      border-radius: 0;
      &:not(:first-child){
        margin-left:-1px;
      }
      &:first-child{
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-child{
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      &:hover{
        position: relative;
        z-index: 1;
      }
    }
  }
</style>