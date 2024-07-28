<script>
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Card from 'primevue/card'

import ThemeSwitcher from '@/components/ThemeSwitcher.vue'

import { ref } from 'vue'

export default {
  components: {
    DataTable,
    Column,
    Card,
    ThemeSwitcher
  },
  setup() {
    const products = ref([
      { code: 'A1', name: 'Apple', category: 'Fruit', quantity: 5 },
      { code: 'B1', name: 'Banana', category: 'Fruit', quantity: 10 },
      { code: 'O1', name: 'Orange', category: 'Fruit', quantity: 15 },
      { code: 'C1', name: 'Carrot', category: 'Vegetable', quantity: 20 },
      { code: 'T1', name: 'Tomato', category: 'Vegetable', quantity: 25 }
    ])

    return {
      products
    }
  }
}
</script>

<template>
  <h1 class="mb-3 text-4xl text-primary">Home Page</h1>
  <ThemeSwitcher />

  <Card>
    <template #title>
      <h2>Fruit list</h2>
    </template>

    <template #content>
      <DataTable :value="products">
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </DataTable>
    </template>
  </Card>
</template>
