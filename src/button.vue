<template>
  <button class="c-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <c-icon class="icon loading" v-if="loading" name="loading"></c-icon>
    <c-icon class="icon" v-if="icon && !loading" :name="icon"></c-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
    props:{
      icon:{
        type:String,
        default:''
      },
      iconPosition:{
        type:String,
        default:'left',
        validator(value){
          return value === 'left' || value === 'right'
        }
      },
      loading:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style scoped lang="scss">
  @keyframes spin {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
  .loading{
    animation: spin 2s infinite linear;
  }
  
  .c-button{
    font-size: var(--font-size);
    height:var(--button-height);
    padding:0 1em;
    border-radius: var(--border-radius);
    border:1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: top;
    &:hover{
      border-color:var(--border-color-hover);
    }
    &:active{
      background: var(--button-active-bg);
    }
    &:focus{
      outline: none;
    }
    >.icon{
      order:1;
      margin-right:.1em;
    }
    >.content{
      order:2;
    }
    &.icon-right{
      >.icon{
        order:2;
        margin-left:.1em;
        margin-right:0;
      }
      >.content{
        order:1;
      }
    }
  }

</style>