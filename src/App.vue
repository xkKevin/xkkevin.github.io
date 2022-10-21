<template>
  <div id="app">
    <el-container>
      <el-header class="isFixed">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          active-text-color="#2962ff"
        >
          <el-menu-item index="1">About Me</el-menu-item>
          <el-menu-item index="2">Experience</el-menu-item>
          <el-menu-item index="3">Publications</el-menu-item>
        </el-menu>
      </el-header>
      <div style="margin-bottom: 52px"></div>
      <el-container id="C1" class="panel">
        <el-aside style="padding-top: 30px">
          <el-image
            style="width: 180px"
            :src="require('@/assets/img/photo.jpg')"
          ></el-image>
          <div
            style="
              font-family: Montserrat, sans-serif;
              font-size: 1.75em;
              margin: 10px 0;
            "
          >
            Kai Xiong (熊凯)
          </div>
          <div style="font-size: 1rem; font-weight: 300; line-height: 1.25">
            <div>Zhejiang University</div>
            <el-row type="flex" style="margin-bottom: 10px" justify="center">
              <a class="icon" href="mailto:kaixiong@zju.edu.cn"
                ><font-awesome-icon icon="fa-solid fa-envelope"
              /></a>
              <a
                class="icon"
                href="https://scholar.google.com/citations?user=3-4NyVAAAAAJ"
                ><font-awesome-icon icon="fa-solid fa-graduation-cap"
              /></a>
              <a class="icon" href="https://github.com/xkkevin"
                ><font-awesome-icon icon="fa-brands fa-github"
              /></a>
            </el-row>
          </div>
          <div></div>
        </el-aside>
        <el-main>
          <div class="intro">
            <div class="welcome">
              Welcome! <font-awesome-icon icon="fa-solid fa-hands-clapping" />
            </div>
            I am a Ph.D. student of Com­puter Sci­ence at the State Key Lab of
            CAD&CG, Zhejiang University, under the supervision of
            <a href="http://www.ycwu.org/">Prof. Yingcai Wu</a>. I am also a
            member of <a href="https://zjuidg.org/">ZJUIDG Group</a>. I received
            my bachelor's degree in Computer Science from Xidian University. My
            main research interests center on
            <strong>visual analytics</strong> and
            <strong>data wrangling</strong>. I am particularly interested in how
            to assist data workers in understanding the process of data
            transformations.
            <p style="text-align: right; padding-right: 10px">
              "It is only with the heart that one can see rightly; what is
              essential is invisible to the eye."
              <br />
              —— <i>The Little Prince</i>
            </p>
          </div>
        </el-main>
      </el-container>
      <el-container id="C2" class="panel">
        <el-aside>
          <div class="panel-title">Experience</div>
        </el-aside>
        <el-main>
          <div class="block" style="text-align: left">
            <el-timeline>
              <el-timeline-item
                placement="top"
                v-for="(ei, index) in experience"
                :key="index"
                :icon="ei.icon"
                :type="ei.type"
                :color="ei.color"
                :size="ei.size"
                :timestamp="ei.timestamp"
              >
                <el-card>
                  <div slot="header">
                    <strong>{{ ei.header }}</strong>
                  </div>
                  <div v-html="ei.content"></div>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-main>
      </el-container>
      <el-container id="C3" class="panel">
        <el-aside>
          <div class="panel-title">Publications</div>
        </el-aside>
        <el-main>
          <el-card
            class="box-card"
            v-for="(ai, index) in articles"
            :key="index"
          >
            <el-row>
              <el-col :span="7">
                <el-image
                  :src="ai.image"
                  :preview-src-list="[ai.image]"
                ></el-image>
              </el-col>
              <el-col
                :span="17"
                style="text-align: left; padding: 8px 0 0 28px"
              >
                <div class="title">{{ ai.title }}</div>
                <div class="sub-title">{{ ai.subtitle }}</div>
                <div v-html="ai.authors" class="author"></div>
                <div class="journal">
                  <span>{{ ai.journal }}</span
                  >, <span>{{ ai.year }}</span>
                </div>
                <div>
                  <span
                    v-for="(value, key, obj_index) in ai.info"
                    :key="obj_index"
                  >
                    [
                    <a :href="value" v-if="key === 'paper'"
                      ><font-awesome-icon icon="fa-solid fa-file" />
                      {{ key | toFirstUpper }}</a
                    >
                    <a :href="value" v-if="key === 'video'"
                      ><font-awesome-icon icon="fa-solid fa-video" />
                      {{ key | toFirstUpper }}</a
                    >
                    <a :href="value" v-if="key === 'demo'"
                      ><font-awesome-icon icon="fa-solid fa-cube" />
                      {{ key | toFirstUpper }}</a
                    >
                    <a :href="value" v-if="key === 'github'"
                      ><font-awesome-icon icon="fa-brands fa-github" />
                      {{ key | toFirstUpper }}</a
                    >
                    ]
                  </span>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-main>
      </el-container>
      <el-footer class="panel">
        <div style="padding-top: 20px; font-size: 15px">
          © 2022 by Kai Xiong. All Rights Reserved.
        </div>
      </el-footer>
      <el-backtop title="Back to Top"> </el-backtop>
    </el-container>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.isFixed {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
}

.isFixed .el-menu-item {
  font-size: 18px;
}

.el-header {
  padding: 0px !important;
}

body {
  min-width: 1200px;
}

.isFixed .el-menu,
.panel {
  transition: all 0.6s;
}

@media (max-width: 20000px) {
  .isFixed .el-menu,
  .panel {
    padding: 0 19%;
  }
}

@media (max-width: 2200px) {
  .isFixed .el-menu,
  .panel {
    padding: 0 15%;
  }
}

@media (max-width: 2000px) {
  .isFixed .el-menu,
  .panel {
    padding: 0 8%;
  }
}

@media (max-width: 1800px) {
  .isFixed .el-menu,
  .panel {
    padding: 0 5%;
  }
}

@media (max-width: 1500px) {
  .isFixed .el-menu,
  .panel {
    padding: 0 1%;
  }
}

@media (max-width: 1380px) {
  .isFixed .el-menu,
  .panel {
    padding: 0 0%;
  }
}

.intro {
  font-size: 1.23em;
  font-weight: 300;
  line-height: 1.6;
  margin-top: 10px;
  text-align: left;
  font-family: inherit;
}

.box-card {
  /* width: 1000px; */
  margin: 35px auto;
  /* margin-bottom: 35px; */
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.sub-title {
  font-size: 22px;
  font-weight: bold;
}

.author {
  color: #7f7f7f;
  font-size: 18px;
  line-height: 1.6;
  margin-top: 8px;
}

.journal {
  font-style: italic;
  font-size: 17px;
  margin: 10px 0;
}

.welcome {
  font-family: didot-w01-italic, serif;
  letter-spacing: 0.12em;
  font-size: 50px;
  font-weight: bold;
  font-style: italic;
}

a {
  text-decoration: none;
  color: #2962ff;
  font-weight: bold;
}
a:hover {
  text-decoration: underline;
}

a.icon {
  font-size: 32px;
  margin: 5px 7px;
}

a.icon:hover {
  /* font-size: 40px; 这样会导致页面下移*/
  transform: scale(1.1);
}

.panel:nth-child(even) {
  background-color: #f7f7f7;
}

.panel:nth-child(odd) {
  background-color: #ffffff;
}

.panel-title {
  font-family: didot-w01-italic, serif;
  letter-spacing: 0.02em;
  font-size: 42px;
  font-weight: bold;
  padding-top: 20px;
}

.panel .el-timeline {
  padding-left: 50px;
}

.el-timeline-item {
  padding: 10px 0 !important;
  font-size: 20px;
}

.el-timeline-item__timestamp {
  font-size: 16px !important;
}

.panel .el-timeline-item__node--large {
  left: -16px;
  width: 21px;
  height: 21px;
}

.panel .el-timeline-item__tail {
  position: absolute;
  left: -7px;
  height: 100%;
  border-left: 3px solid #e4e7ed;
}
</style>

<script>
export default {
  data() {
    return {
      activeIndex: null,
      navPosi: [0],
      experience: [
        {
          header: "Ph.D. Student",
          content:
            "College of Computer Science and Technology, Zhejiang University",
          timestamp: "Sept. 2020 - Present ● Hangzhou, China",
          size: "large",
          color: "#2962ff",
        },
        {
          header: "Research Intern",
          content:
            '<a href="https://jianwei.zjvis.net/">Jianwei Group</a>, <a href="http://www.zhejianglab.com/">Zhejiang Lab</a>',
          timestamp: "Apr. 2020 - Present ● Hangzhou, China",
          size: "large",
          color: "#2962ff",
        },
        {
          header: "Postgraduate Student",
          content: "School of Software Technology, Zhejiang University",
          timestamp: "Sept. 2019 - Jun. 2020 ● Ningbo, China",
          size: "large",
        },
        {
          header: "Undergraduate Student",
          content:
            "School of Computer Science and Technology, Xidian University",
          timestamp: "Aug. 2015 - Jun. 2019 ● Xi'an, China",
          size: "large",
        },
      ],
      articles: [
        {
          title:
            "Revealing the Semantics of Data Wrangling Scripts With COMANTICS",
          authors:
            "<b>Kai Xiong</b>, Zhongsu Luo, Siwei Fu, Yongheng Wang, Mingliang Xu, Yingcai Wu",
          journal:
            "IEEE Transactions on Visualization and Computer Graphics (IEEE VIS)",
          year: 2022,
          image: require("@/assets/img/comantics.png"),
          info: {
            paper: "/papers/comantics.pdf",
            video: "https://youtu.be/acVSqJQ3jnQ",
          },
        },
        {
          title: "Visualizing the Semantics of Data Wrangling Scripts",
          subtitle: "数据整理脚本语义的可视化",
          authors:
            "Zhongsu Luo, <b>Kai Xiong</b>, Siwei Fu, Yongheng Wang, Hujun Bao, Yingcai Wu",
          journal:
            "Journal of Computer-Aided Design & Computer Graphics (China VIS)",
          year: 2022,
          image: require("@/assets/img/ChangeVis.jpg"),
          info: {
            paper: "/papers/ChangeVis.pdf",
            video: "#",
            demo: "https://changevis.github.io/",
          },
        },
        {
          title: "Visualizing the Scripts of Data Wrangling with SOMNUS",
          authors:
            "<b>Kai Xiong</b>, Siwei Fu, Guoming Ding, Zhongsu Luo, Rong Yu, Wei Chen, Hujun Bao, Yingcai Wu",
          journal: "IEEE Transactions on Visualization and Computer Graphics",
          year: 2022,
          // image: '@/assets/img/somnus.png',
          image: require("@/assets/img/somnus.png"),
          info: {
            paper: "/papers/somnus.pdf",
            video: "https://youtu.be/fQ-eN_4vhso",
            github: "https://github.com/xkKevin/Somnus",
          },
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.debounce(600)();
    });
  },
  filters: {
    toFirstUpper: (value) => {
      return value.slice(0, 1).toUpperCase() + value.slice(1);
    },
  },
  methods: {
    calPanelPosi() {
      let sumHeight = 0;
      for (let i = 1; i <= 3; i++) {
        sumHeight += document.querySelector(`#C${i}`).scrollHeight;
        this.navPosi.push(sumHeight);
      }
    },
    handleSelect(key) {
      if (this.navPosi.length <= 1) {
        this.calPanelPosi();
      }
      // console.log(key, keyPath);
      // https://daily-dev-tips.com/posts/vanilla-javascript-element-scrollintoview/#view-this-smooth-scroll-example-on-codepen
      // document.querySelector(`#${key}`).scrollIntoView({behavior: "smooth"});
      window.scrollTo({
        behavior: "smooth",
        top: Math.floor(
          this.navPosi[key - 1]
          // document.querySelector(`#C${key}`).getBoundingClientRect().top -
          //   document.body.getBoundingClientRect().top -
          //   54
        ),
      });
    },
    debounce(delay) {
      let timer = null;
      let that = this;
      return function () {
        clearTimeout(timer);
        timer = setTimeout(that.windowScroll, delay);
      };
    },
    windowScroll() {
      // 滚动条距离页面顶部的距离
      // 以下写法原生兼容
      if (this.navPosi.length <= 1) {
        this.calPanelPosi();
      }
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.navPosi.find((val, index) => {
        if (scrollTop < val) {
          this.activeIndex = index.toString();
          return true;
        }
      });
    },
  },
};
</script>