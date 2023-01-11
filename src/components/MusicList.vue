<template>
  <div class="list-song">
    <div v-for="(val, index) in dataMusic" :key="index">
      <div v-if="val.kind === 'song'" class="card card-song">
        <div class="media">
          <img class="cover-album" :src="val.artworkUrl100" alt="">
          <div class="media-body">
            <div class="artist">{{ val.artistName }}</div>
            <div class="title-song">{{ val.trackName }}</div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="badge badge-success badge-genre ml-2">
                <div class="text-genre">{{ val.primaryGenreName }}</div>
              </div>
              <div class="price">{{ val.trackPrice }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MusicList',
  props: {
    dataMusic: {
      type: Array,
      default: () => {
        return []
      },
    }
  }
}
</script>
<style>
.list-song {
  height: 520px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.card-song {
  width: 310px;
  height: 123px;
  margin: 36px 15px 20px;
  padding: 12px 12px 11px 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: #fff;
  margin-bottom: 20px;
}
.cover-album {
  border-radius: 10px;
  width: 100px;
  height: 100px;
  border: 1px solid #000;
}
.artist {
  height: 11px;
  margin: 5px 69px 5px 12px;
  font-size: 10px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.36px;
  color: #334155;
  text-align: left;
}
.title-song {
  width: 125px;
  height: 32px;
  margin: 5px 10px 27px 12px;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  color: #334155;
}
.badge-genre {
  height: 20px;
  padding: 5px 13px 4px;
  border-radius: 10px;
  background-color: #10b981;
}
.text-genre {
  height: 11px;
  font-size: 10px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.36px;
  color: #fff;
}
.price {
  margin: 1px 0 1px 6px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.43px;
  color: #f5b014;
}
</style>