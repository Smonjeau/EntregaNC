<template>
  <v-app>
    <HeaderComponent/>

    <v-content>
      <v-container>
        <v-row>
          <v-col cols="5">
            <FormComponent @memberInsertion="reloadData"/>
          </v-col>
          <v-col cols="7">
            <MembersListComponent :items="items"/>
          </v-col>

        </v-row>
      </v-container>
    </v-content>

    <FooterComponent/>

  </v-app>

</template>

<script>
import FormComponent from "@/components/FormComponent";
import MembersListComponent from "@/components/MembersListComponent";
import axios from 'axios'
import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
export default {
  name:"Home",
  components: {HeaderComponent, FooterComponent, MembersListComponent, FormComponent},
  methods:{
    reloadData() {
      axios.get("/api/members").then(r=>{
        this.items = r.data
      })
          .catch(error => {
            console.log(error)
          })
    }
  },
  mounted() {
    this.reloadData()
  },
  data (){
    return {
        items: []
    }
  }
}
</script>
