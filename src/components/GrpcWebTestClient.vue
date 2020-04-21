<template>
  <div class="grpc-web-test-client">
    <h1>{{ title }}</h1>
    <form @submit.prevent="run">
      <input v-model="server" placeholder="Enter server address" />
      <input :disabled="running" type="submit" value="Run" />
    </form>
    <pre><code><template v-for="line in log">{{ line }}</template></code></pre>
    <div class="error" v-if="error">
      <h4>ERROR:</h4>
      <pre><code>{{ error }}</code></pre>
    </div>
  </div>
</template>

<script>
import { ShoppingListServicePromiseClient } from "../generated/shopping_list_grpc_web_pb";

import {
  addItem,
  createShoppingList,
  deleteShoppingList,
  listItems,
  listShoppingLists,
  removeItem,
  setItemChecked
} from "../rpc";

import { mapMutations, mapState } from "vuex";

export default {
  name: "GrpcWebTestClient",
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      server: ""
    };
  },
  mounted() {
    this.server = `http://${window.location.hostname}:8080`;
  },
  computed: {
    ...mapState(["log", "error"])
  },
  methods: {
    ...mapMutations(["addToLog", "clearLog", "setError"]),
    run() {
      this.clearLog();
      this.setError(null);
      this.runRpcs();
    },
    async runRpcs() {
      this.running = true;

      try {
        const client = new ShoppingListServicePromiseClient(
          this.server,
          null,
          null
        );

        let name = null;
        let response = null;

        // Print existing shopping lists
        await this.printShoppingLists(client);

        // Create a new shopping list
        name = `Groceries-${Date.now()}`;
        this.addToLog(`Creating shopping list "${name}"`);
        const groceries = await createShoppingList(
          client,
          name,
          "Items for dinner and stacks"
        );

        // Add items to shopping list
        this.addToLog("Adding items...");
        const [bread, butter, cheese, tofu] = await Promise.all(
          ["Bread", "Butter", "Cheese", "Tofu"].map(async name => {
            return (await addItem(client, groceries, name)).getItem();
          })
        );

        // Check some items
        this.addToLog("Checking some items...");
        await setItemChecked(client, groceries, bread, true);
        await setItemChecked(client, groceries, butter, true);
        await setItemChecked(client, groceries, butter, false);
        await setItemChecked(client, groceries, cheese, true);

        // List items in the shopping list
        this.addToLog("Items:");
        response = await listItems(client, groceries);
        for (const item of response.getItemsList()) {
          this.addToLog(this.itemToString(item));
        }

        // Remove some items
        this.addToLog("Removing some items...");
        await Promise.all(
          [bread, tofu].map(item => {
            return removeItem(client, groceries, item);
          })
        );

        // List items in the shopping list
        this.addToLog("Items:");
        response = await listItems(client, groceries);
        for (const item of response.getItemsList()) {
          this.addToLog(this.itemToString(item));
        }

        // Create a new shopping list and add some items
        name = "Pet Supplies-" + Date.now();
        this.addToLog(`Creating shopping list ${name}`);
        const petSupplies = await createShoppingList(client, name);
        this.addToLog("Adding items...");
        await addItem(client, petSupplies, "Poop bags");
        const dogFood = (
          await addItem(client, petSupplies, "Dog food")
        ).getItem();
        await setItemChecked(client, petSupplies, dogFood, false);
        await setItemChecked(client, petSupplies, dogFood, true);
        response = await listItems(client, petSupplies);
        this.addToLog("Items:");
        for (const item of response.getItemsList()) {
          this.addToLog(this.itemToString(item));
        }

        // Delete shopping lists
        this.addToLog("Deleting shopping lists...");
        await Promise.all(
          [groceries, petSupplies].map(shoppingList => {
            return deleteShoppingList(client, shoppingList);
          })
        );

        // Print existing shopping lists
        await this.printShoppingLists(client);
      } catch (error) {
        this.setError(error);
      }

      this.running = false;
    },
    async printShoppingLists(client) {
      const response = await listShoppingLists(client);
      this.addToLog("Existing shopping lists:");
      const shoppingLists = response.getShoppingListsList();
      if (shoppingLists.length) {
        for (const shoppingList of shoppingLists) {
          const numItems = (
            await listItems(client, shoppingList)
          ).getItemsList().length;
          this.addToLog(`  ${shoppingList.getName()} (${numItems} items)`);
        }
      } else {
        this.addToLog("  (none)");
      }
    },
    itemToString(item) {
      const arr = ["  [", item.getChecked() ? "x" : " ", `] ${item.getName()}`];
      const str = arr.join("");
      return str;
    }
  }
};
</script>

<style scoped lang="scss">
.error {
  color: red;
}
</style>
