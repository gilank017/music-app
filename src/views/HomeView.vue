<template>
  <div class="d-flex justify-content-center">
    <div class="bg-home">
      <img src="../assets/music-logo.svg" alt="">
      <div class="btn-home">
        <input class="form-control-md form-music" type="text" v-model="formSearch" placeholder="Artist / Album / Title">
        <div class="btn-search">
          <div class="search" @click="searchMusic()">Search</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      formSearch: ''
    }
  },
  methods: {
    async searchMusic() {
      try {
        const response = await axios.get(`https://itunes.apple.com/search?term=${this.formSearch}&limit=6`)
        if (response.status === 200) {
          this.$store.state.name = this.formSearch
          this.$store.state.data = response.data.results
          this.$router.push('/music')
        }
      } catch(error) {
        console.log(error)
      }
    }
  }
}
</script>
<style>
.bg-home {
  width: 340px;
  height: 680px;
  padding: 256px 30px 26px;
  background-image: linear-gradient(153deg, #712bda, #a45deb 100%);
}
.form-music {
  width: 280px;
  height: 40px !important;
  margin: 219.2px 0 15px;
  border-radius: 20px !important;
  border: none !important;
  text-align: center;
}

.btn-search {
  width: 280px;
  height: 40px;
  padding: 13px 116px 11px 117px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}

.search {
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  color: #fff;
}

.title-search {
  width: 67px;
  height: 24px;
  margin: 9px 61px 31px 12px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.71px;
  color: #fff;
}
</style>
