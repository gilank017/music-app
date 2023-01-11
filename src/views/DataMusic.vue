<template>
  <div class="d-flex justify-content-center">
    <div class="music-list">
      <div class="bar d-flex justify-content-between">
        <img class="pointer" src="../assets/menu.svg" alt="">
        <img class="pointer" src="../assets/ngmusic.svg" alt="">
        <img class="pointer" @click="openModal()" src="../assets/search.svg" alt="">
      </div>
      <div class="result d-flex justify-content-center result-list">
        <div class="text-result">Search result for :</div>
        <div class="value-result">{{ resultName }}</div>
      </div>
      <music-list v-if="resultMusic.length > 0" :dataMusic="resultMusic"/>
      <div v-else class="no-data">
        No Data Found
      </div>
    </div>
    <div class="modal modal-search fade" id="modal-search" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        
        <div class="modal-content">
          <div class="button-close">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <img src="../assets/close-button.svg" alt="">
            </button>
          </div>
          <div class="body-search">
            <div class="title-modal">Search</div>
            <input class="form-control-md music-search-form" type="text" v-model="formSearch" placeholder="Artist / Album / Title">
            <div class="btn-search btn-search-bg">
              <div class="search" @click="searchMusic()">Search</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import MusicList from '@/components/MusicList.vue'
export default {
  components: { MusicList },
  name: 'ngMusic',
  data() {
    return {
      formSearch: ''
    }
  },
  computed: {
    resultName() {
      return this.$store.state.name
    },
    resultMusic() {
      return this.$store.state.data
    }
  },
  mounted() {
    console.log(this.resultMusic)
  },
  methods: {
    openModal() {
      // eslint-disable-next-line
      $('#modal-search').modal('show')
    },
    async searchMusic() {
      try {
        const response = await axios.get(`https://itunes.apple.com/search?term=${this.formSearch}&limit=6`)
        if (response.status === 200) {
          this.$store.state.name = this.formSearch
          this.$store.state.data = response.data.results
          // eslint-disable-next-line
          $('#modal-search').modal('hide')
        }
      } catch(error) {
        console.log(error)
      }
    }
  }

}
</script>
<style>
.pointer {
  cursor: pointer;
}
.music-list {
  width: 340px;
  height: 790px;
  padding: 0 0 28px;
  background-color: #f8fafc;
}
.bar {
  width: 340px;
  height: 60px;
  margin: 0 0 39px;
  padding: 18px 15px 22.2px;
  box-shadow: 0 0 6px 0 rgba(148, 77, 230, 0.75);
  background-image: linear-gradient(100deg, #712bda, #a45deb 100%);
}
.result-list {
  margin-bottom: 38px;
}
.text-result {
  width: 119px;
  height: 16px;
  margin: 3px 10px 2px 0;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  color: #334155;
}
.value-result {
  width: 91px;
  height: 21px;
  margin: 0 0 0 10px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.64px;
  color: var(--purple);
}
.modal {
  width: 340px !important;
  height: 680px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
}

.modal-backdrop {
  width: 340px !important;
  height: 680px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
}

.button-close {
  position: absolute;
  top: -20px;
  right: 20px;
}

.modal-content {
  height: 600px;
  background-color: transparent !important;
  border: none !important;
}

.close {
  color: #ffff !important;
  text-shadow: none !important;
  opacity: 1 !important;
}

.body-search {
  position: absolute;
  top: 50%;
  transform: translate(-50%);
  left: 50%;
}
.title-modal {
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.71px;
  color: #fff;
}
.music-search-form {
  width: 280px;
  height: 40px !important;
  margin: 20px 0 15px;
  border-radius: 20px !important;
  border: none !important;
  text-align: center;
}
.btn-search-bg {
  background-color: #a45deb;
}
</style>