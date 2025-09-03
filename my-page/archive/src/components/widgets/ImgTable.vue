<script setup>
  defineProps({
    headers: {
      type: [],
      required: true
    },
    items: {
      type: [],
      required: true
    }
  })
</script>


<template>
  <v-app class="app-auto">
    <v-data-table
      :headers="headers"
      :items="items"
      item-value="title"
      hide-default-footer
      show-expand
    >
      <template v-slot:item.data-table-expand="{ internalItem, isExpanded, toggleExpand }">
        <v-btn
          :append-icon="isExpanded(internalItem) ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          :text="isExpanded(internalItem) ? 'Collapse' : 'More info'"
          class="text-none"
          color="medium-emphasis"
          size="small"
          variant="text"
          width="105"
          border
          slim
          @click="toggleExpand(internalItem)"
        ></v-btn>
      </template>

      <template v-slot:expanded-row="{ columns, item }">
        <tr>
          <td :colspan="columns.length" class="py-2">
            <v-sheet rounded="lg" border>
              <v-table density="compact">
                <tbody class="bg-surface-light">
                  <tr>
                    <th>Rating</th>
                    <th>Synopsis</th>
                    <th>Cast</th>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td class="py-2">
                      <v-rating
                        :model-value="item.details.rating"
                        color="orange-darken-2"
                        density="comfortable"
                        size="small"
                        half-increments
                        readonly
                      ></v-rating>
                    </td>
                    <td class="py-2">{{ item.details.synopsis }}</td>
                    <td class="py-2">{{ item.details.cast.join(', ') }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-sheet>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-app>
</template>

<style scoped>
.app-auto {
    min-height: 0;          /* 화면 전체를 덮지 않음 */
    background-color: #f5f5f5;
    padding: 16px;
    border-radius: 8px;
    height: 100vh;
}

</style>