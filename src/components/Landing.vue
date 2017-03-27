<template lang="pug">
  div
    br
    div.row
      div.col.s4
        div.input-field
          input(v-model="name" type="text" id="name")
          label(for="name") Enter your name
    button.btn.red(:class="{ disabled: name === '' }" @click="login") Enter
      i.material-icons.right send
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    login() {
      this.$store.commit('SET_NAME', this.name)
      this.$router.push({ name: 'Roller' })
    }
  },
  created() {
    this.$store.commit('SET_NAME', '')
  }
}
</script>
