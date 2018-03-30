<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="less">
  @import "./style/normalize.css";

  #app {
    text-align: center;
  }

  body {
    font-family: 'Microsoft YaHei';
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background: transparent;
    opacity: .8;
  }

  ::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(54, 142, 224, 0.5);
    /*border: thin solid #fa9000;*/
    border-radius: 8px;
    -webkit-transition: background .25s linear;
  }

  ::-webkit-scrollbar-track {
    background: #F0F0F0;
    border: 1px solid #F0F0F0;
    box-shadow: none;
    border-radius: 0;
  }

  .el-dialog__header {
    background: #368ee0;
    .el-dialog__title {
      font-size: 16px;
      color: #fff;
    }
    .el-dialog__headerbtn .el-dialog__close {
      color: #fff;
    }
  }

  @media (max-width: 1366px) {
    .operate-dialog-form {
      padding: 10px;
      max-height: 380px;
      overflow-y: auto;
      overflow-x: hidden;
    }
  }

  @media (max-width: 1920px) and (min-width: 1367px) {
    .operate-dialog-form {
      padding: 10px;
      max-height: 500px;
      overflow-y: auto;
      overflow-x: hidden;
    }
  }
</style>
