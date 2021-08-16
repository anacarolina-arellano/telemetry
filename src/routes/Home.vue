//Copyright (C) 2021 Ana Carolina Arellano Alvarez //template of the page
<template>
  <section class="sales-container">
    <div class="sales-form">
      <h2>Sales Form</h2>
      <form>
        <v-text-field
          v-model="newFormID"
          label="Form ID"
          :rules="['Required']"
        ></v-text-field>
        <v-text-field
          v-model="employeeName"
          label="Employee's Name"
          :rules="['Required']"
        ></v-text-field>

        <v-text-field
          v-model="clientName"
          label="Client's Name"
          :rules="['Required']"
        ></v-text-field>

        <h3>Product to be picked</h3>
        <v-row class="my-row">
          <v-text-field
            v-model="productId"
            class="product"
            label="Product Id"
          ></v-text-field>
          <v-text-field
            v-model="quantity"
            class="product"
            label="Quantity"
          ></v-text-field>
        </v-row>
        <v-row class="my-row">
          <v-text-field
            v-model="productId2"
            class="product"
            label="Product Id"
          ></v-text-field>
          <v-text-field
            v-model="quantity2"
            class="product"
            label="Quantity"
          ></v-text-field>
        </v-row>
        <v-btn class="mr-4 my-btn" @click="submit">
          Generate Order
        </v-btn>
        <v-btn @click="clear" class="my-btn"> clear </v-btn>
      </form>
    </div>

    <div class="retrieve">
      <h2>Retrieve a form from Firestore</h2>
      <p>Enter a form ID (working on terminal with curl http://localhost:5001/warehouseapp-288c9/us-central1/getForm)</p>
      <form>
        <v-text-field
          v-model="formID"
          label="Form ID"
          :rules="['Required']"
        ></v-text-field>
        <v-btn class="mr-4 my-btn" @click="search">
          Search
        </v-btn>
      </form>
    </div>
  </section>
</template>
<script>
import Controller from '@/mixins/controller'

class Sales extends Controller {
  constructor (name, subComponentList = []) {
    super(name, subComponentList)
    this.vm = {
      newFormID: 0,
      employeeName: '',
      clientName: '',

      productId: 0,
      quantity: 0,
      productId2: 0,
      quantity2: 0,

      formID: 0
    }
  }

  submit () {
    //check that at least one product was added
    if (this.employeeName && this.clientName) {
      if (
        (this.productId && this.quantity) ||
        (this.productId2 && this.quantity2)
      ) {
        const newSale = {
          newFormID: this.newFormID,
          employeeName: this.employeeName,
          clientName: this.clientName,
          productId: this.productId,
          quantity: this.quantity,
          productId2: this.productId2,
          quantity2: this.quantity2
        }
        this.$store.dispatch('submitSalesForm', newSale)

        this.clear()
      } else {
        alert('At least one product should be registered')
      }
    } else {
      alert('Please fill the requiered fields')
    }
  }
  clear () {
    this.newFormID = 0
    this.employeeName = ''
    this.clientName = ''
    this.productId = 0
    this.quantity = 0
    this.productId2 = 0
    this.quantity2 = 0
  }
  search () {
    this.$store.dispatch('searchForm')
  }
}
export default new Sales('Sales')
</script>

<style scoped>
h2 {
  text-align: center;
}
h3 {
  text-align: left;
  font-size: 22px;
  margin-top: 25px;
  font-weight: bold;
}
.sales-container {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
.my-btn {
  margin-top: 40px;
  margin-bottom: 50px;
  margin-right: 35px;
}
.my-row {
  display: inline;
  flex-direction: row;
}
.product {
  display: inline-block;
  width: 40%;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
