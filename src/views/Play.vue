<template>
  <div class="play-container">
    <!-- 左侧广告 -->
    <aside class="ad left-ad" v-if="!isMobile">广告位</aside>

    <!-- 游戏区 -->
    <main class="game-frame">
      <iframe
        v-if="game"
        :src="game.url"
        frameborder="0"
        allowfullscreen
        class="iframe"
      ></iframe>
    </main>

    <!-- 右侧广告 -->
    <aside class="ad right-ad" v-if="!isMobile">广告位</aside>
  </div>
</template>

<script>
import games from '../games.js'

export default {
  data() {
    return {
      game: null,
      isMobile: false
    }
  },
 mounted() {
  const gameId = parseInt(this.$route.params.gameId)
  console.log('Game ID:', gameId)  // 调试输出，检查是否正确
  if (!isNaN(gameId) && games[gameId]) {
    this.game = games[gameId]
    console.log('Game URL:', this.game.url)  // 调试输出，检查游戏的 URL 是否正确
  } else {
    console.error('无效的游戏 ID 或者游戏数据不存在')
  }
  this.checkMobile()
  window.addEventListener('resize', this.checkMobile)
}
,
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 768
    }
  }
}
</script>

<style scoped>
.play-container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.ad {
  width: 15%;
  min-width: 120px;
  background: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
}

.game-frame {
  flex: 1;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* 移动端处理 */
@media (max-width: 768px) {
  .play-container {
    flex-direction: column;
  }

  .ad {
    display: none;
  }

  .iframe {
    height: calc(100vh - 20px); /* 移除广告高度 */
  }
}
</style>
