<template>
  <div>

    <!-- Add Badge -->
    <form 
      @submit.prevent="addBadge"
    >
      <label>
        <h2>
          {{ formLabel }}
        </h2>
      </label>
      <br>
      <input 
        v-model="newBadge"
        type="text" 
        :placeholder="placeholder"
        :class="inputClasses" 
      >
      <br>
      <button 
        :class="buttonClasses"
      >
        {{ buttonText }}
      </button>
    </form>
  
    <!-- Badges -->
    <div>
      <h2>
        {{ badgeText }}
      </h2>
    </div>
    <badge 
      @clickBadge="clickBadge"
      v-for="(badge, id) in badges"
      :key="id"
      :badgeName="badge"
      :class="badgeClasses"
    />

  </div>
</template>

<script>
import badge from './badge'

export default {
  data() {
    return {
      // Input
      formLabel: "1) Add a Superhero",
      placeholder: "ex. Spider-Man ",
      inputClasses: [],
      // Button
      buttonText: "ADD",
      buttonClasses: [],
      // Badges
      badgeText: "2) Click a Superhero",
      badgeClasses:[],
      newBadge: "",
      badges: [
        "Batman",
        "Superman",
        "Wonder Woman"
      ],
    }
  },
  components: {
    badge
  },
  methods: {
    addBadge() {
      this.badges.push(this.newBadge);
      this.newBadge = "";
    },
    clickBadge(e) {
      this.$emit("clickBadge", badgeName)
    }
  }
}
</script>

<style scoped>

</style>