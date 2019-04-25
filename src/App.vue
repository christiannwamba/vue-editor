<template>
  <div id="app">
    <Header/>
    <Editor/>
  </div>
</template>

<script>
import Editor from "./components/Editor";
import Header from "./components/Header";

export default {
  name: "app",
  components: {
    Header,
    Editor
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body,
html {
  margin: 0;
  padding: 0;
  font-family: "Rubik", sans-serif;
  background-color: whitesmoke;
}
.k-editor {
  height: 600px;
}
</style>
