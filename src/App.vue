<template lang="pug">
  div#app
    div.container
      router-view
</template>

<style lang="stylus">
body
  display flex
  min-height 100vh
  flex-direction column

main
  flex 1 0 auto

::-webkit-scrollbar
  width 17px

::-webkit-scrollbar-track
  background-color #333

::-webkit-scrollbar-thumb
  background-color #666666

::-webkit-scrollbar-thumb:hover
  background-color gray

.fade-enter-active, .fade-leave-active
  transition opacity .3s

.fade-enter, .fade-leave-active
  opacity 0

h2.page_title
  margin-top 5px
  border-bottom 1px solid black

.card-panel > p
  margin 0
  margin 0

.clearfix::after
  content ""
  display block
  clear both

.row
  margin-bottom 0 !important

.container > .row
  margin-top 20px

ul.circle > li
  list-style-type circle

.modal-bottom-tall
  max-height 100% !important
  height 75% !important

div.main-content
  font-size 1.5rem

a
  cursor pointer
</style>
