<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="2">
            <v-card class="pa-2" height="calc(100vh - 24px)">
              <v-list dense>
                <v-list-item-group
                    v-model="selectedItem"
                    color="primary"
                >
                  <v-list-item
                      v-for="(item, i) in items"
                      :key="i"
                      :to="item.to"
                  >
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
          <v-col cols="10">
            <router-view/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
  import Design from './index';

  export default Design;
</script>
