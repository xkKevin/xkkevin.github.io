<template>
  <div id="app">
    <el-container>
      <el-header class="isFixed">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
          active-text-color="#2962ff">
          <el-menu-item index="1">About Me</el-menu-item>
          <el-menu-item index="2">News</el-menu-item>
          <el-menu-item index="3">Experience</el-menu-item>
          <el-menu-item index="4">Publication</el-menu-item>
        </el-menu>
      </el-header>
      <div style="margin-bottom: 52px"></div>
      <div id="C1" class="panel">
        <div class="p_aside" style="padding-top: 30px">
          <el-image style="width: 180px" :src="require('@/assets/img/kai.jpg')"></el-image>
          <div style="
              font-family: Montserrat, sans-serif;
              font-size: 1.75em;
              margin: 10px 0;
            ">
            Kai Xiong (熊凯)
          </div>
          <div style="font-size: 1rem; font-weight: 300; line-height: 1.25">
            <!-- <div>Zhejiang University</div> -->
            <el-row type="flex" style="margin-bottom: 10px" justify="center">
              <a class="icon" href="mailto:kaixiong@zju.edu.cn"><font-awesome-icon icon="fa-solid fa-envelope" /></a>
              <a class="icon" href="https://scholar.google.com/citations?user=3-4NyVAAAAAJ"><font-awesome-icon
                  icon="fa-solid fa-graduation-cap" /></a>
              <a class="icon" href="https://github.com/xkkevin"><font-awesome-icon icon="fa-brands fa-github" /></a>
            </el-row>
          </div>
          <div></div>
        </div>
        <div class="p_main">
          <div class="intro">
            <div class="welcome">
              Welcome! <font-awesome-icon icon="fa-solid fa-hands-clapping" />
            </div>
            <!-- I am a Ph.D. candidate of Com­puter Sci­ence at the State Key Lab of CAD&CG, Zhejiang University -->
            I am a <strong>Data Science Researcher</strong> at the NLP Department of <strong>Hexin Flush Information
              Network Co., Ltd.</strong>, based in Hangzhou, China.
            I earned my Ph.D. in Computer Science from Zhejiang University, under the supervision of <a
              href="http://www.ycwu.org/">Prof. Yingcai Wu</a>,
            and was also a member of <a href="https://zjuidg.org/">ZJUIDG Group</a>. I received my
            bachelor's degree in Computer Science from Xidian University.

            From February to September 2024, I was a visiting Ph.D. student at Monash University, Australia, working
            under the guidance of Assoc. Prof. Michael Wybrow.

            <br>

            My research interests focus on <strong>visual analytics</strong> and <strong>data wrangling</strong>.
            In particular, I am interested in helping data workers better understand the process of data
            transformation and enhance data quality.

            <p style="text-align: right; padding-right: 15px">
              "It is only with the heart that one can see rightly; what is
              essential is invisible to the eye."
              <br />
              —— <i>The Little Prince</i>
            </p>
          </div>
        </div>
      </div>
      <div id="C2" class="panel">
        <div class="d_margin"></div>
        <div class="p_aside">
          <div class="panel-title">News</div>
        </div>
        <div class="p_main">
          <div v-for="(ni, index) in news" :key="index" style="margin-bottom: 12px;">
            <div style="display: inline-block; width: 128px; vertical-align: top;">
              {{ ni.date }}
            </div>
            <div style="display: inline-block; width: calc(100% - 128px);">
              <div style="margin-right: 15px">
                <span v-html="ni.text"></span>
                <span>&nbsp;
                  <span v-for="(value, key, obj_index) in ni.info" :key="obj_index" style="display: inline-block;">
                    [ <a :href="value">{{ key }}</a> ]&nbsp;
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div style="height: 8px; margin-top:20px;"></div>
        </div>
      </div>
      <div id="C3" class="panel">
        <div class="d_margin"></div>
        <div class="p_aside">
          <div class="panel-title">Experience</div>
        </div>
        <div class="p_main">
          <div class="block" style="text-align: left">
            <el-timeline>
              <el-timeline-item placement="top" v-for="(ei, index) in experience" :key="index" :icon="ei.icon"
                :type="ei.type" :color="ei.color" :size="ei.size" :timestamp="ei.timestamp">
                <div>
                  <div class="experience_pos">
                    <el-card>
                      <div slot="header">
                        <strong>{{ ei.header }}</strong>
                      </div>
                      <div v-html="ei.content"></div>
                    </el-card>
                  </div>
                  <div class="experience_pos_icon">
                    <el-image :src="ei.icon" :preview-src-list="experience.map(ele => ele.icon)"></el-image>
                  </div>
                </div>
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
        <div class="d_margin"></div>
      </div>
      <div id="C4" class="panel">
        <div class="d_margin"></div>
        <div class="p_aside">
          <div class="panel-title">Publication</div>
        </div>
        <div class="p_main">
          <el-card class="box-card" v-for="(ai, index) in articles" :key="index">
            <el-row>
              <el-col :span="7" v-if="ai.image">
                <el-image :src="ai.image" :preview-src-list="articles.map(ele => ele.image).filter(i => i)">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline">&nbsp;None</i>
                  </div>
                </el-image>
              </el-col>
              <el-col :span="ai.image ? 17 : 24" style="text-align: left; padding: 8px 0 0 28px">
                <div class="title">{{ ai.title }}</div>
                <div class="sub-title">{{ ai.subtitle }}</div>
                <div v-html="ai.authors" class="author"></div>
                <div class="journal">
                  <span>{{ ai.journal }}</span>, <span>{{ ai.year }}</span>
                </div>
                <div>
                  <span v-for="(value, key, obj_index) in ai.info" :key="obj_index">
                    [
                    <a :href="value" v-if="key === 'DOI'"><font-awesome-icon icon="fa-solid fa-book" />
                      {{ key | toFirstUpper }}</a>
                    <a :href="value" v-if="key === 'paper'"><font-awesome-icon icon="fa-solid fa-file" />
                      {{ key | toFirstUpper }}</a>
                    <a :href="value" v-if="key === 'video'"><font-awesome-icon icon="fa-solid fa-video" />
                      {{ key | toFirstUpper }}</a>
                    <a :href="value" v-if="key === 'demo'"><font-awesome-icon icon="fa-solid fa-cube" />
                      {{ key | toFirstUpper }}</a>
                    <a :href="value" v-if="key === 'github' || key === 'code'"><font-awesome-icon
                        icon="fa-brands fa-github" />
                      {{ key | toFirstUpper }}</a>
                    <a :href="value" v-if="key === 'material'"><font-awesome-icon icon="fa-regular fa-folder-open" />
                      {{ key | toFirstUpper }}</a>
                    <a :href="value" v-if="key === 'slide'"><font-awesome-icon icon="fa-solid fa-file-powerpoint" />
                      {{ key | toFirstUpper }}</a>
                    ]
                  </span>
                </div>
                <!-- 奖项标注 -->
                <div v-if="ai.award" class="award">
                  🏆&nbsp;&nbsp;<span>{{ ai.award }}</span>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </div>
      <el-footer class="panel">
        <div style="padding-top: 20px; font-size: 15px">
          © <span>{{ new Date().getFullYear() }}</span> by Kai Xiong. All Rights Reserved.
        </div>
      </el-footer>
      <el-backtop title="Back to Top"> </el-backtop>
    </el-container>
  </div>
</template>

<style>
.isFixed .el-menu-item {
  padding: 0 13px;
}

/* #C3 .el-card__body {
  padding: 5px 15px;
} */

.experience_pos {
  display: inline-block;
  width: calc(100% - 105px);
  margin-right: 11px;
  /* vertical-align: super; */
  /* height: 40px;
  line-height: 40px; */
}

.experience_pos_icon {
  display: inline-block;
  /* float: right; */
  width: 92px;
  vertical-align: 1ch;
  /* margin-top: 15px; */
  /* margin-right: 1px; */
}

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
  min-width: 500px;
}

.d_margin {
  margin: 30px 0;
}

.isFixed .el-menu,
.panel {
  transition: all 0.5s;
}

.panel {
  padding-top: 10px;
}

.panel .p_aside {
  display: inline-block;
  width: 300px;
  vertical-align: top;
}

.panel .p_main {
  display: inline-block;
  width: calc(100% - 300px);
  vertical-align: top;
}

.panel .box-card {
  margin-left: 35px;
}

.panel .el-timeline {
  padding-left: 45px;
}

.panel .award {
  background-color: #fff7f7;
  border: 1px solid #f56c6c;
  border-radius: 6px;
  padding: 4px 8px;
  font-size: 13px;

  position: absolute;
  bottom: -5px;
  right: -2px;
  color: #f56c6c;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.intro {
  font-size: 1.24em;
  font-weight: 300;
  line-height: 1.6;
  margin: 13px;
  text-align: left;
  font-family: inherit;
}

.panel .box-card {
  /* width: 1000px; */
  /* margin: 35px auto; */
  margin-top: 10px;
  margin-bottom: 35px;
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
  letter-spacing: 0.1em;
  font-size: 45px;
  font-weight: bold;
  font-style: italic;
  margin-top: 25px;
}

.p_main {
  text-align: left;
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
  margin-bottom: 26px;
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
    padding: 0 10%;
  }
}

@media (max-width: 1800px) {

  .isFixed .el-menu,
  .panel {
    padding: 0 8%;
  }
}

@media (max-width: 1600px) {

  .isFixed .el-menu,
  .panel {
    padding: 0 5%;
  }
}

@media (max-width: 1300px) {

  .isFixed .el-menu,
  .panel {
    padding: 0 1%;
  }
}

@media (max-width: 1080px) {

  .isFixed .el-menu,
  .panel {
    padding: 0 2%;
  }

  .panel .p_aside {
    display: block;
    width: 100%;
  }

  .panel .p_main {
    display: block;
    width: 100%;
  }

  .panel .box-card {
    margin-left: 0;
  }

  .panel .el-timeline {
    padding-left: 10px;
  }

  .welcome {
    margin-top: 0;
  }
}
</style>

<script>
export default {
  data() {
    return {
      activeIndex: null,
      navPosi: [0],
      news: [
        {
          date: "Mar, 2025",
          text: `🎉🎉 The work “<b>TableCanoniser: Interactive Grammar-Powered Transformation of Messy, Non-Relational Tables to Canonical Tables</b>”, conducted during my research visit at Monash University, has been recognized with an <a href="https://programs.sigchi.org/chi/2025/program/content/189019">Honorable Mention Award</a> 🏆 at ACM CHI 2025!`,
        },
        {
          date: "Dec 30, 2024",
          text: `Successfully graduated with a Ph.D. 🎓 in Computer Science from Zhejiang University.`,
        },
        {
          date: "Apr 23-26, 2024",
          text: `Attend the <a href="https://pacificvis.github.io/pvis2024/">IEEE 17th Pacific Visualization Conference</a> at Keio University, Tokyo, Japan, and present my latest paper titled "<b>JsonCurer: Data Quality Management for JSON Based on an Aggregated Schema</b>" at the conference.`,
        },
        {
          date: "Feb 26, 2024",
          text: `Fly to Melbourne and engage in a seven-month exchange program as a visiting Ph.D. student under the guidance of <a href="https://users.monash.edu/~mwybrow/">Assoc. Prof. Michael Wybrow</a> at Monash University.`
        },
        {
          date: "Oct 22-27, 2023",
          text: `Attend the <a href="https://ieeevis.org/year/2023/welcome">IEEE VIS 2023 Conference</a> in Melbourne, Australia.`,
        },
        {
          date: "Nov 22, 2022",
          text: `Deliver a speech titled "<b>Understanding the Semantics of Data Wrangling Scripts</b>" at the Visualization session of the 15th <a href="http://china-r.org/">China-R Conference</a>.`,
          info: {
            "Talk": "https://www.bilibili.com/video/BV1t3411f7Ra",
            "Slide": "/news/china-r-talk.pdf",
          }
        },
      ],
      experience: [
        {
          header: "Data Science Researcher",
          content:
            "NLP Department, <a href='https://www.10jqka.com.cn/'>Hexin Flush Information Network Co., Ltd.</a>",
          icon: require("@/assets/img/pos/ths.png"),
          timestamp: "Jan. 2025 - Present ● Hangzhou, China",
          size: "large",
          color: "#2962ff",
        },
        {
          header: "Ph.D. Student",
          content:
            "State Key Lab of CAD&CG, College of Computer Science and Technology, Zhejiang University",
          icon: require("@/assets/img/pos/zju.jpeg"),
          timestamp: "Sept. 2020 - Dec. 2024 ● Hangzhou, China",
          size: "large",
          // color: "#2962ff",
        },
        {
          header: "Visiting Ph.D. Student",
          content:
            "<a href='https://www.monash.edu/it/hcc/embodied-visualisation'>Embodied Visualisation Research Group</a>, Faculty of Information Technology, Monash University",
          icon: require("@/assets/img/pos/monash.jpg"),
          timestamp: "Feb. 2024 - Sept. 2024 ● Melbourne, Australia",
          size: "large",
          // color: "#2962ff",
        },
        {
          header: "Research Intern",
          content:
            '<a href="https://jianwei.zjvis.net/">Jianwei Group</a>, Big Data Intelligence Research Center, <a href="http://www.zhejianglab.com/">Zhejiang Lab</a>',
          icon: require("@/assets/img/pos/zjl.jpeg"),
          timestamp: "Apr. 2020 - Nov. 2022 ● Hangzhou, China",
          size: "large",
          // color: "#2962ff",
        },
        {
          header: "Postgraduate Student",
          content: "School of Software Technology, Zhejiang University",
          icon: require("@/assets/img/pos/zju.jpeg"),
          timestamp: "Sept. 2019 - Jun. 2020 ● Ningbo, China",
          size: "large",
        },
        {
          header: "Interdisciplinary Research Collaboration",
          content:
            "Epilepsy Center, Department of Neurology, Second Affiliated Hospital Zhejiang University School of Medicine",
          icon: require("@/assets/img/pos/sahzju.jpeg"),
          timestamp: "Jan. 2019 - Aug. 2020 ● Hangzhou, China",
          size: "large",
        },
        {
          header: "Undergraduate Student",
          content:
            "School of Computer Science and Technology, Xidian University",
          icon: require("@/assets/img/pos/xdu.jpeg"),
          timestamp: "Aug. 2015 - Jun. 2019 ● Xi'an, China",
          size: "large",
        },
      ],
      articles: [
        {
          title:
            "TableCanoniser: Interactive Grammar-Powered Transformation of Messy, Non-Relational Tables to Canonical Tables",
          authors:
            "<b>Kai Xiong</b>, Cynthia A Huang, Michael Wybrow, Yingcai Wu",
          journal:
            "ACM Conference on Human Factors in Computing Systems (CHI)",
          year: 2025,
          image: require("@/assets/img/TableCanoniser.png"),
          award: "Honorable Mention",
          info: {
            DOI: "https://doi.org/10.1145/3706598.3714321",
            paper: "/papers/TableCanoniser.pdf",
            demo: "https://tablecanoniser.github.io/",
            code: "https://github.com/TableCanoniser/TableCanoniser.github.io"
          },
        },
        {
          title:
            "HYPNOS: Interactive Data Lineage Tracing for Data Transformation Scripts",
          authors:
            "Xiwen Cai, Xiaodong Ge, <b>Kai Xiong</b>, Shuainan Ye, Di Weng, Ke Xu, Datong Wei, Jiang Long, Yingcai Wu",
          journal:
            "IEEE Transactions on Visualization and Computer Graphics",
          year: 2025,
          image: require("@/assets/img/HYPNOS.png"),
          info: {
            DOI: "https://doi.org/10.1109/TVCG.2025.3552091",
            paper: "/papers/HYPNOS.pdf"
          },
        },
        {
          title:
            "CodeLin: An in situ visualization method for understanding data transformation scripts",
          authors:
            "Xiwen Cai, <b>Kai Xiong</b>, Zhongsu Luo, Di Weng, Shuainan Ye, Yingcai Wu",
          journal:
            "Visual Informatics",
          year: 2025,
          image: require("@/assets/img/CodeLin.png"),
          info: {
            DOI: "https://doi.org/10.1016/j.visinf.2025.03.002",
            paper: "/papers/CodeLin-pre-proof.pdf"
          },
        },
        {
          title:
            "Ferry: Toward Better Understanding of Input/Output Space for Data Wrangling Scripts",
          authors:
            "Zhongsu Luo, <b>Kai Xiong</b>, Jiajun Zhu, Ran Chen, Xinhuan Shu, Di Weng, Yingcai Wu",
          journal:
            "IEEE Transactions on Visualization and Computer Graphics (IEEE VIS)",
          year: 2025,
          image: require("@/assets/img/Ferry.jpg"),
          info: {
            DOI: "https://doi.org/10.1109/TVCG.2024.3456328",
            paper: "/papers/Ferry.pdf",
            video: "https://www.youtube.com/watch?v=C0yhkKGlj7k",
          },
        },
        {
          title:
            "JsonCurer: Data Quality Management for JSON Based on an Aggregated Schema",
          authors:
            "<b>Kai Xiong</b>, Xinyi Xu, Siwei Fu, Di Weng, Yongheng Wang, Yingcai Wu",
          journal:
            "IEEE Transactions on Visualization and Computer Graphics (IEEE PacificVis)",
          year: 2024,
          image: require("@/assets/img/JsonCurer.png"),
          info: {
            DOI: "https://doi.org/10.1109/TVCG.2024.3388556",
            paper: "/papers/jsoncurer.pdf",
            code: "https://github.com/changevis/JsonCurer",
          },
        },
        {
          title:
            "Revealing the Semantics of Data Wrangling Scripts With COMANTICS",
          authors:
            "<b>Kai Xiong</b>, Zhongsu Luo, Siwei Fu, Yongheng Wang, Mingliang Xu, Yingcai Wu",
          journal:
            "IEEE Transactions on Visualization and Computer Graphics (IEEE VIS)",
          year: 2023,
          image: require("@/assets/img/comantics.png"),
          info: {
            DOI: "https://doi.org/10.1109/TVCG.2022.3209470",
            paper: "/papers/comantics.pdf",
            video: "https://youtu.be/acVSqJQ3jnQ",
            slide: "/slides/comantics.pptx",
          },
        },
        {
          title: "Visualizing the Semantics of Data Wrangling Scripts",
          subtitle: "数据整理脚本语义的可视化",
          authors:
            "Zhongsu Luo, <b>Kai Xiong</b>, Siwei Fu, Yongheng Wang, Hujun Bao, Yingcai Wu",
          journal:
            "Journal of Computer-Aided Design & Computer Graphics (ChinaVIS)",
          year: 2023,
          image: require("@/assets/img/ChangeVis.jpg"),
          info: {
            paper: "/papers/ChangeVis.pdf",
            video: "https://youtu.be/qiMpa6M-jwk",
            demo: "https://changevis.github.io/",
            slide: "/slides/changevis.pptx",
          },
        },
        {
          title: "Visualizing the Scripts of Data Wrangling with SOMNUS",
          authors:
            "<b>Kai Xiong</b>, Siwei Fu, Guoming Ding, Zhongsu Luo, Rong Yu, Wei Chen, Hujun Bao, Yingcai Wu",
          journal: "IEEE Transactions on Visualization and Computer Graphics (IEEE TVCG)",
          year: 2022,
          // image: '@/assets/img/somnus.png',
          image: require("@/assets/img/somnus.png"),
          info: {
            DOI: "https://doi.org/10.1109/TVCG.2022.3144975",
            paper: "/papers/somnus.pdf",
            video: "https://youtu.be/fQ-eN_4vhso",
            code: "https://github.com/xkKevin/Somnus-code",
            material: "https://github.com/xkKevin/Somnus",
            slide: "/slides/somnus.pptx",
          },
        },
        {
          title:
            "VisArena: A Testbed for Visualization with Synthetic Data Tables",
          authors:
            "Siwei Fu, Junjie Jin, Qi Ma, Zhongsu Luo, <b>Kai Xiong</b>, Yingcai Wu",
          journal:
            "The 11th China Visualizationand Visual Analytics Conference (ChinaVis)",
          year: 2024,
        },
        {
          title:
            "EEG signature orchestrating expression of ictal behavior in mesial temporal lobe epilepsy",
          authors:
            "Chenmin He, Wenhan Hu, <b>Kai Xiong</b>, Lingqi Ye, Hongyi Ye, Lingli Hu, Yi Ge, Meng Wang, Cong Chen, Bo Jin, Cenglin Xu, Yi Wang, Sha Xu, Yao Ding, Yingcai Wu, Hongjie Jiang, Junming Zhu, Meiping Ding, Wenling Li, Kai Zhang, Shuang Wang, Shan Wang",
          journal:
            "Clinical Neurophysiology",
          year: 2025,
          info: {
            DOI: "https://doi.org/10.1016/j.clinph.2024.12.029",
            paper: "https://www.sciencedirect.com/science/article/pii/S1388245725000203",
          },
        },
        {
          title:
            "Pre-ictal fluctuation of EEG functional connectivity discriminates seizure phenotypes in mesial temporal lobe epilepsy",
          authors:
            "Hongyi Ye, Chenmin He, Wenhan Hu, <b>Kai Xiong</b>, Lingli Hu, Cong Chen, Sha Xu, Cenglin Xu, Yi Wang, Yao Ding, Yingcai Wu, Kai Zhang, Shan Wang, Shuang Wang",
          journal:
            "Clinical Neurophysiology",
          year: 2023,
          // image: '',
          info: {
            DOI: "https://doi.org/10.1016/j.clinph.2023.05.004",
            paper: "https://www.sciencedirect.com/science/article/abs/pii/S1388245723006223",
          },
        },
        {
          title:
            "Ictal EEG desynchronization during low-voltage fast activity for prediction of surgical outcomes in focal epilepsy",
          authors:
            "Lingli Hu, <b>Kai Xiong</b>, Lingqi Ye, Yuyu Yang, Cong Chen, Shan Wang, Yao Ding, Zhongjin Wang, Wenjie Ming, Zhe Zheng, Hongjie Jiang, Hong Li, Junming Zhu, Cenglin Xu, Yi Wang, Meiping Ding, Zhong Chen, Yingcai Wu, Shuang Wang",
          journal:
            "Journal of Neurosurgery (JNS)",
          year: 2022,
          // image: '',
          info: {
            DOI: "https://doi.org/10.3171/2022.11.JNS221469",
            paper: "https://thejns.org/view/journals/j-neurosurg/aop/article-10.3171-2022.11.JNS221469/article-10.3171-2022.11.JNS221469.xml",
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
      for (let i = 1; i <= 4; i++) {
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