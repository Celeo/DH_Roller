<template lang="pug">
  div#app.grey-text.text-lighten-2
    div.container.main-content
      h2
        strong.red-text Dark Heresy 
        | dice roller
        span(v-if="$store.getters.name !== ''")  - {{ $store.getters.name }}
      transition(name="fade" mode="out-in")
        router-view
</template>

<style lang="stylus">
html
  font-family 'Jim Nightshade', cursive !important

body
  display flex
  min-height 100vh
  flex-direction column

main
  flex 1 0 auto

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
  font-size 1.8rem

label
  font-size 1.5rem !important

input[type="text"]
  font-size 2.5rem !important

a
  cursor pointer

h2.nmb
  margin-bottom 0

.loading
  color gray

.pl
  margin-left 1rem

#right
  border-left 1px solid red

.input-field input[type=text]:focus + label
  color red !important

.input-field input[type=text]:focus
  border-bottom 1px solid red !important
  box-shadow 0 1px 0 0 red !important

.input-field input[type=text].valid
  border-bottom 1px solid red !important
  box-shadow 0 1px 0 0 red !important

.input-field input[type=text].invalid
  border-bottom 1px solid red !important
  box-shadow 0 1px 0 0 red !important

.input-field .prefix.active
  color red !important

.btn
  width 100%
</style>
