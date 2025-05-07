<template>
  <div class="container">
    <h1>🎮 GameHouse 小游戏集合</h1>
    <div class="grid-container">
      <div class="game-card" v-for="game in games" :key="game.name">
        <img :src="game.cover" alt="cover" class="cover" />
        <h2>{{ game.name }}</h2>
        <p>{{ game.desc }}</p>
        <a :href="game.url" target="_blank" class="play-button">开始游戏</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: [
        {
          name: 'Flappy Bird',
          url: 'https://playcanv.as/p/JtL7ZBZc/',
          cover: 'https://img.cdn.jsdelivr.net/gh/leungwensen/svg-icon@master/dist/svg/logos/flappy-bird.svg',
          desc: '测试控制小鸟穿越管道障碍'
        },
        {
          name: '2048',
          url: 'https://play2048.co/',
          cover: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/2048_logo.svg',
          desc: '经典数字合成益智游戏'
        }
      ]
    }
  }
}
</script>

<style>
.container {
  padding: 20px;
  max-width: 1200px;
  margin: auto;
  font-family: Arial, sans-serif;
}
h1 {
  text-align: center;
  margin-bottom: 30px;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}
.game-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  padding: 16px;
  text-align: center;
  transition: transform 0.2s;
}
.game-card:hover {
  transform: translateY(-5px);
}
.cover {
  width: 100%;
  height: 160px;
  object-fit: contain;
  margin-bottom: 12px;
}
.play-button {
  display: inline-block;
  margin-top: 10px;
  background: #42b983;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.2s;
}
.play-button:hover {
  background: #369c70;
}
</style>
