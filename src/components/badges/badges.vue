<template>
  <div>

    <!-- Add Badge -->
    <form 
      @submit.prevent="addBadge"
    >
      <label>
        <h4>
          {{ formLabel }}
        </h4>
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
      <h4>
        {{ badgeText }}
      </h4>
    </div>

    <div class="mb-5">
      <badge 
        @clickBadge="clickBadge"
        v-for="(badge, id) in badges"
        :key="id"
        :badgeName="badge"
        :class="badgeClasses"
      />
    </div>

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
      inputClasses: ["mb-1", "pl-1"],
      // Button
      buttonText: "ADD",
      buttonClasses: ["btn", "btn-danger"],
      // Badges
      badgeText: "2) Click a Superhero",
      badgeClasses:["badge", "badge-pill", "badge-danger", "ml-1", "mr-1"],
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
      if (this.newBadge !== "") {
        this.badges.push(this.newBadge);
        this.newBadge = "";
      }
    },
    clickBadge(badgeName) {
      this.$emit("clickBadge", badgeName)
    }
  }
}
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}
label {
  margin-bottom: 0;
}
input {
  border-radius: 4px;
  font-size: 1.8rem;
}
.btn {
  font-size: 1.5rem;
  line-height: 1.0;
}
</style>