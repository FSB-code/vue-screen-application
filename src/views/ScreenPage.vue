<template>
    <v-app id="inspire">
    <v-content>
      <v-container fluid v-if="currentScreens.length">
        <v-row align="center" justify="center" >
          <span >SCREEN {{currentScreens[shiftScreen].date}}</span> 
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="1">
            <v-btn icon color="black" @click="prevScreen" :disabled="!this.shiftScreen">
              <v-icon x-large>mdi-arrow-left</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="8" >
              <v-img id="coordinateClick" @load="getCoordinates" :src="require(`../assets/shot${showedScreen}.png`)">
                <v-icon x-large :style="{position:'absolute', color: 'orange',top: coordinates.y + 'px', left: coordinates.x + 'px' }">mdi-plus</v-icon>
              </v-img>
          </v-col>
          <v-col cols="2"> 
            <v-card class="mx" outlined>
              <v-list-item class="headline mb-1">Date:</v-list-item>
              <v-list-item>{{screenDate}}</v-list-item>
              <v-list-item>{{screenTime}}</v-list-item>
              <v-list-item class="headline mb-1">Click</v-list-item>  
              <v-list-item >X: {{currentScreens[shiftScreen].data.x}} Y: {{currentScreens[shiftScreen].data.y}}</v-list-item> 
            </v-card>
          </v-col>
          <v-col cols="1">
            <v-btn icon color="black"  @click="nextScreen" :disabled="disablRightScreen">
              <v-icon x-large>mdi-arrow-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
           <v-col cols="1">
            <v-btn icon color="black" @click="prevScreens" :disabled="!this.shiftScreens">
              <v-icon large>mdi-arrow-left</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="10">
            <v-row>
                <v-col cols="2" v-for="(screen,index) in showedScreens" :key="index">
                  <v-img :src="require(`../assets/shot${screen.date}.png`)" 
                  :class="{frame : currentScreens.length > 1 ? 
                  currentScreens[shiftScreen].date  === showedScreens[index].date :
                  allScreens[shiftScreen].date === showedScreens[index].date}" 
                  @click="shiftScreen = index + shiftScreens">
                  </v-img>
                </v-col>
            </v-row>
          </v-col>
          <v-col cols="1">
            <v-btn icon color="black" @click="nextScreens" :disabled="disablRightScreens">
              <v-icon large>mdi-arrow-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    </v-app>
</template>

<script>
import {mapGetters,mapActions,mapMutations} from 'vuex'
export default {
  name: 'screenPage',
  data() {
    return {
      shiftScreen: 0,
      shiftScreens: 0,
      screenCol:6,
      coordinates: {
          x: 0,
          y: 0
      },
    }
  },
  computed: {...mapGetters(["allScreens","loaded","currentScreens"]),
      showedScreen() {
        return this.currentScreens.length > 1 ? this.currentScreens[this.shiftScreen].date : this.allScreens[this.shiftScreen].date 
      },
      showedScreens() {
        return this.currentScreens.length > 1 ? 
        this.currentScreens.slice(this.shiftScreens, this.shiftScreens + this.screenCol) : 
        this.allScreens.slice(this.shiftScreens, this.shiftScreens + this.screenCol)
      },
      disablRightScreen() {
        return this.shiftScreen >= this.currentScreens.length-1
      },
      disablRightScreens() {
        return this.shiftScreens >= this.currentScreens.length - this.screenCol
      },
      screenDate() {
        return new Date(this.currentScreens[this.shiftScreen].date).toLocaleDateString()
      },
      screenTime() {
        return new Date(this.currentScreens[this.shiftScreen].date).toLocaleTimeString() //.slice(0,-3)
      }
  },
  methods: {
    ...mapMutations(['UPDATE_CURRENTSCREENS']),
    updateScreens: async function(screensId){
      await this.loaded; 
      const fewArr = screensId.split(',')
      const rangeArr = fewArr.map(el => el.split('-'))
      const loadedArr = this.allScreens.filter(el => rangeArr.some(
        item => item[0] <= el.date && (item[1] || item[0]) >= el.date))
      this.UPDATE_CURRENTSCREENS(loadedArr) 
      if(this.currentScreens.length ==1) {
        this.UPDATE_CURRENTSCREENS(this.allScreens)
        this.shiftScreen = this.allScreens.findIndex(item => item.date == screensId) 
        this.shiftScreen >= this.allScreens.length - this.screenCol ? this.shiftScreens = this.shiftScreen - 5 : this.shiftScreens = this.shiftScreen
      }
    },
    prevScreen () {
      if(this.shiftScreen) {
        this.shiftScreen--
      } 
    },
    nextScreen () {
      if(!this.disablRightScreen) {
        this.shiftScreen++
      } 
    },
    prevScreens() {
      if(this.shiftScreens) {
        this.shiftScreens--;
      }
    },
    nextScreens() {
      if(!this.disablRightScreens) {
        this.shiftScreens++
      }
    },
    getCoordinates() {
      const loadedImage = new Image()
      loadedImage.src = require(`../assets/shot${this.currentScreens[this.shiftScreen].date}.png`)
      const currentWidth = document.getElementById("coordinateClick").getBoundingClientRect().width
      const currentHeight = document.getElementById("coordinateClick").getBoundingClientRect().height
      const jsonWidth = this.currentScreens[this.shiftScreen].data.x
      const jsonHeight = this.currentScreens[this.shiftScreen].data.y
      return loadedImage.onload = () => {
      this.coordinates.x = (jsonWidth * currentWidth) / loadedImage.width
      this.coordinates.y = (jsonHeight *currentHeight) / loadedImage.height 
      }
    },
  },
  watch: { 
     '$route.params.screensId': {
        handler: 'updateScreens',
        immediate: true,
      }
  }
}
</script>

<style scoped>
.frame {
  height: 100%;
  border: 4px solid red
}
</style>
