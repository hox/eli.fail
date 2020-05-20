<template>
  <div id="app">
    <div class="bg-image"></div>
    <div class="content">
      <img id="pfp" src="./assets/pfp.jpg" />
      <div class="info">
        <span id="name">Elias Hernandez</span>
        <span id="bio">Backend Developer</span>
      </div>
      <InformationSection />
    </div>
    <div class="footer">
      <span id="copyrightnotice">
        &copy; Elias Hernandez 2019-2020 |
        <a
          href="https://github.com/NerdEli/eli.fail/"
          target="_blank"
        >Github</a>
      </span>
    </div>
  </div>
</template>

<script>
import InformationSection from "./components/InformationSection.vue";

export default {
  name: "App",
  components: {
    InformationSection
  }
};
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  overflow: hidden;

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-bottom: 2vh;
    #pfp {
      border-radius: 50%;
      height: 20vh;
    }

    .info {
      margin: 3vh;

      #name {
        font-size: 4vh;
        display: block;
        margin-bottom: 1vh;
        letter-spacing: -2px;
      }

      #bio {
        display: block;
        font-size: 2vh;
      }
    }
  }
  .footer {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 1vh;
  }
}
</style>

<style lang="less">
@import url("https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap");
@blur-amount: 4px;
@text-color: #fff;

* {
  box-sizing: border-box;
  font-family: "Share Tech Mono", monospace;
}

html,
body {
  height: 100%;
  margin: 0;
  color: @text-color;
}

.bg-image {
  background-image: url("./assets/bg.jpg");
  filter: blur(@blur-amount);
  -webkit-filter: blur(@blur-amount);
  height: 100%;
  transform: scale(1.05);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

a {
  text-decoration: none;
  color: @text-color;
}

a:hover {
  text-decoration: underline;
}
</style>
