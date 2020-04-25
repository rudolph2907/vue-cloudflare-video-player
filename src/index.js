import CloudflareVideoPlayer from './CloudflareVideoPlayer.vue'

export default {
  install(Vue, options) {
    Vue.component('cloudflare-video-player', CloudflareVideoPlayer)
  },
}
