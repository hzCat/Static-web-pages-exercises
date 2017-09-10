<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal
}

ul {
  list-style: none
}

button,
input,
select,
textarea {
  margin: 0
}

html {
  box-sizing: border-box
}

*,
*:before,
*:after {
  box-sizing: inherit
}

img,
embed,
iframe,
object,
audio,
video {
  height: auto;
  max-width: 100%
}

iframe {
  border: 0
}

table {
  border-collapse: collapse;
  border-spacing: 0
}

td,
th {
  padding: 0;
  text-align: left
}
/* 初始化 */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1441px;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}
</style>
