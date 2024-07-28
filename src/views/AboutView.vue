<script>
import PrimeButton from 'primevue/button'
import Card from 'primevue/card'
import PrimeSelect from 'primevue/select'
import ToggleSwitch from 'primevue/toggleswitch'
import { ref } from 'vue'

export default {
  components: {
    PrimeSelect,
    ToggleSwitch,
    PrimeButton,
    Card
  },
  setup() {
    const cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ]

    const selectedCity = ref(null)
    const checked = ref(false)

    return {
      cities,
      selectedCity,
      checked
    }
  }
}
</script>

<template>
  <h1 class="mb-5 text-4xl text-primary">This is an about page</h1>

  <div>
    <p class="mb-1 text-xl">Select a city:</p>
    <PrimeSelect
      v-model="selectedCity"
      :options="cities"
      optionLabel="name"
      placeholder="Select a City"
      class="w-full md:w-56"
    />
    <p v-if="selectedCity" class="mt-2">Selected City: {{ selectedCity.name }}</p>
  </div>

  <div class="mb-5">
    <p class="mt-5 mb-1 text-xl">Show card:</p>
    <ToggleSwitch v-model="checked" class="w-12 h-6" />
  </div>

  <Card style="width: 25rem; overflow: hidden" v-if="checked">
    <template #header>
      <img alt="user header" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" />
    </template>
    <template #title>Advanced Card</template>
    <template #subtitle>Card subtitle</template>
    <template #content>
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
        repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa
        ratione quam perferendis esse, cupiditate neque quas!
      </p>
    </template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <PrimeButton label="Cancel" severity="secondary" outlined class="w-full" />
        <PrimeButton label="Save" class="w-full" />
      </div>
    </template>
  </Card>
</template>