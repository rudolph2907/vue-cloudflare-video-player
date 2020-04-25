# Vue Cloudflare Video Player

A simple Vue wrapper component for Cloudflare Stream Video Player

Cloudflare Video Stream: https://www.cloudflare.com/products/cloudflare-stream/

Reference: Cloudflare Player API: https://developers.cloudflare.com/stream/video-playback/player-api/

```
npm install vue-cloudflare-video-player
```

OR

```
yarn add vue-cloudflare-video-player
```

## Install globally:

```
import Vue from 'vue'
import CloudflareVideoPlayer from 'vue-cloudflare-video-player'

Vue.use(CloudflareVideoPlayer)
```

## Usage:

```
<CloudflareVideoPlayer :video-id="5d5bc37ffcf54c9b82e996823bffbb81" :autoplay="true" />
```

**video-id** - the video ID returned after uploading to Cloudflare Stream

**autoplay** (Default: false) - If the player should autoplay

This is very basic for what I needed. Feel free to message me or do push a pull request to add more functionality
