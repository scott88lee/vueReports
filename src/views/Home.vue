<template>
  <div class="home">
    <div class="ui container">
        <div class="ui top attached segment">
            <h1>Mandarin Orchard</h1>
        </div>
        <div class="ui bottom attached tabular menu">
            <a class="item active">
              Transactions
            </a>
            <a class="item">
              <router-link to="/insights">Insights</router-link>
            </a>
            <a class="item">
              <router-link to="/charts">Charts</router-link>
            </a>
        </div>
        <h1>Table display is: {{ tableDisplay }}</h1>
        <button v-on:click="ajaxReq">Load</button>
        <button v-on:click="shouter">Debug</button><hr>
        
        <table>
          <thead><tr>
            <th>id</th>
            <th>mode</th>
            <th>amount</th>
          </tr></thead>
          <tbody>
            <tr v-for="tx in transactions">
            <td>{{ tx.id }}</td>
            <td>{{ tx.mode }}</td>
            <td>{{ tx.amount }}</td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableDisplay: false,
      transactions: [
        { id: "asd", amount: 12, mode: "card" },
        { id: "h3d", amount: 22, mode: "card", thing: "hey" }
      ]
    };
  },
  methods: {
    ajaxReq() {
      this.transactions = [];
      let result = this.transactions;
      console.log(result);
      let req = new XMLHttpRequest();
      req.open("GET", "http://localhost:3000/transactions");
      req.onload = function() {
        let temp = JSON.parse(req.responseText);
        for (let i = 0; i < temp.length; i++) {
          result.push(temp[i]);
        }
      };
      req.send();
    },
    shouter: function() {
      console.log(this.transactions);
      this.transactions.push({ id: "another" });
    }
  }
};
</script>
