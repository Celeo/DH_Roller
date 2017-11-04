<template lang="pug">
  div
    div.row
      div.col.m2
        button.btn.red.darken-2(@click="roll(100)" v-bind:class="{ disabled: !initialDataLoaded }") 1d100
        br
        button.btn.red.darken-2(@click="roll(10)" v-bind:class="{ disabled: !initialDataLoaded }") 1d10
        br
        button.btn.red.darken-2(@click="roll(6)" v-bind:class="{ disabled: !initialDataLoaded }") 1d6
        br
        button.btn.red.darken-2(@click="roll(5)" v-bind:class="{ disabled: !initialDataLoaded }") 1d5
      div.col.m10#right
        div(v-if="initialDataLoaded")
          div(v-if="rolls.length > 0")
            div(v-for="roll in orderedRolls")
              span.grey-text.text-lighten-3
                span(v-bind:class="{ 'yellow-text text-darken-2': roll.user === name }") {{ roll.user }} rolled a 
                span.red-text {{ roll.value }} 
                span(v-bind:class="{ 'yellow-text text-darken-2': roll.user === name }") at {{ roll.timestamp | dt }} on a d{{ roll.dice }}
          div(v-else)
            p No rolls have been made
        p.loading.pl(v-else) Loading data ...
</template>

<script>
import moment from 'moment'
import { getRoll } from '../util'
import { db } from '../firebase'


export default {
  firebase: {
    rolls: {
      source: db.ref('rolls/'),
      readyCallback() {
        this.initialDataLoaded = true
      }
    }
  },
  data() {
    return {
      initialDataLoaded: false
    }
  },
  computed: {
    orderedRolls() {
      return this.rolls.sort((a, b) => b.timestamp - a.timestamp)
    },
    name() {
      return this.$store.getters.name
    }
  },
  methods: {
    roll(max) {
      const roll = {
        user: this.name,
        value: getRoll(max),
        dice: max,
        timestamp: parseInt(moment().format('x'))
      }
      this.$firebaseRefs.rolls.push(roll)
    }
  },
  filters: {
    dt(s) {
      return moment(s).format('h:mm:ss')
    }
  }
}
</script>
