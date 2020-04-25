<template>
  <div>
    <stream
      :key="key"
      :src="videoId"
      controls
      poster
      :autoplay="autoPlay"
      style="width:100%; height:0; padding:0 0 55% 0;overflow: hidden;"
      @error="error"
    >
    </stream>
    <div v-if="reload">
      Busy encoding ...
      <a href="" @click.prevent="refresh">
        Reload
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CloudflareVideoPlayer",
  props: {
    videoId: {
      type: String,
      default: null
    },
    autoPlay: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      player: null,
      reload: false,
      key: 0
    };
  },
  mounted() {
    this.initPlayer();
  },
  beforeDestroy() {
    if (this.player) {
      this.player.destroy();
    }
  },
  methods: {
    refresh() {
      if (this.player) {
        this.player.destroy();
      }
      this.key++;
      this.reload = false;
      this.initPlayer();
    },
    error(err) {
      this.$emit("error", err);
      this.reload = true;
    },
    initPlayer() {
      const tag = document.createElement("script");
      tag.setAttribute(
        "src",
        `//embed.cloudflarestream.com/embed/r4xu.fla9.latest.js?video=${this.videoId}`
      );
      tag.setAttribute("id", "cloudflareplayer");
      tag.setAttribute("type", "text/javascript");
      tag.onload = () => {
        //this.loadPlayer()
      };
      document.head.appendChild(tag);
    }
  }
};
</script>

<style>
.vjs-error-display .vjs-modal-dialog-content {
  display: none;
}
</style>
