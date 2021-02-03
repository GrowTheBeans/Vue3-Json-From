<template>
  <div class="posts_container">
    <el-page-header @back="goBack" title="返回首页" content="详情页面"></el-page-header>
    <div class="column">
      <el-avatar shape="square" src="//img1.sycdn.imooc.com/user/5afe3d350001596a02430243-100-100.jpg"></el-avatar>
      <h4>CATTI和MTI考研考试资料与资讯</h4>
    </div>
    <div class="posts_details">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="sidebar">
            <el-card shadow="hover">
              英语语法的第一个坑if从句，你掉进去了吗？（一）
            </el-card>
          </div>
          <div class="sidebar">
            <el-card shadow="hover">
              看了这么多年美剧，我为什么还是没法摆脱字幕？
            </el-card>
          </div>
          <div class="sidebar">
            <el-card shadow="hover">
              鼠标悬浮时显示
            </el-card>
          </div>
          <div class="sidebar">
            <el-card shadow="hover">
              鼠标悬浮时显示
            </el-card>
          </div>
          <div class="sidebar">
            <el-card shadow="hover">
              鼠标悬浮时显示
            </el-card>
          </div>
        </el-col>
        <el-col :span="18">
          <div class="article">
            <el-row>
              <el-col :span="6">
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                <p class="mail">邮箱：2414472387@qq.com</p>
              </el-col>
              <el-col :span="9">
                <el-alert
                  title="Maxime_Nienow"
                  type="#409EFF"
                  :closable="false"
                  center
                  description="Implemented secondary concept"
                >
                </el-alert>
              </el-col>
              <el-col :span="9">
                <div class="block">
                  <p class="demonstration">发表时间为 12:00:00，更新时间为 08:00:00</p>
                  <el-date-picker
                    type="datetimerange"
                    align="left"
                    size="small"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  >
                  </el-date-picker>
                </div>
              </el-col>
            </el-row>
            <img src="http://typescript-vue.oss-cn-beijing.aliyuncs.com/vue-marker/5f33ae6ad5222cb7e6a80f81.png"
                 alt=""/>
            <div class="contents">
              <p>也许你有这样的困扰：所有英语老师都告诉你学英语需要多听多看，为什么看了几年美剧后，眼睛还是得死盯着字幕才能听懂对白呢?说实话，我看日剧也是这个感觉。</p>
              <p><br/>我大学二外选择的是日语，日语的基础语法学过一些，词汇也背过一些。我日剧也看了有十几年了吧，仔细想想，我的日语水平在这十几年里并没有什么提高。上一篇我说过，兴趣是最好的老师，我明明对日剧有兴趣，也坚持看了，为什么还是没有进步？到底缺了哪一环呢?
              </p>
              <p>
                我回想了我人生中英语水平进步最大的两个阶段，一个就是高中开始看美剧的阶段。我高一看了我人生中第一个美剧Friends，85后喜欢美剧的人应该都看过这部剧，我当时疯狂到什么程度？从我高一到大四这将近十年里，Friends总共10季，每季24集，我每一集都至少看过五遍以上，后来我在网上下载了Friends的音频版，睡觉前和上学的路上都会听，我自己都数不清听了多少遍，反正直到现在我还记得每一集的大部分经典台词。我高中的时候会把剧里看到的词组和单词抄写在笔记本上，这样的笔记本我记了不下十本。我不能说我高中的时候是一个很努力的人，做这些事情对我来说就像是喜欢足球的人把英超每一支球队的每一个队员名字和球衣号抄在本子上并背得滚瓜烂熟；喜欢游戏的人每天思考怎么在游戏里布阵一样，完全是出于兴趣。</p>
              <p>
                我在学校里学习的语法知识，让我慢慢能够听懂里面越来越多的台词，也越来越理解那些台词的语法逻辑。但与此同时，我也发现了许多学校里教的语法无法解释的句子。为什么gonna这个词在所有字典里都找不到？为什么台词里会用现在进行时来表示将来的意思？为什么I&#39;m
                good
                不是“我是好人”的意思，而是“我不需要”的意思？我脑子中需要解决的问题远远大于我当时在学校里学习的内容，这个缺口也导致了我从各种其他渠道寻求解答，包括上网（那时候虽然拨号上网相当慢，但是还没有建墙，所以可以去各种国外的网站溜达）。慢慢我自己研究出来原来口语表达和书面表达在语法上存在微妙的差异，原来口语中有许多连读和音变的现象，原来真正的外国人跟学校里的听力发音差那么多。所以我在学校学习的同时也开始了自己的平行学习。只是对当时的我来说，这不是学习，而是为了要听懂我喜欢的东西，考试什么的甚至都是一个次要目标了。</p>
              <p>
                那么回过头来看我看过的日剧，这些年虽然看了许多日剧，但很少有日剧是我看过两遍以上的，更别提做笔记了。一篇材料只是走马观花地粗略看一遍，几乎是没有效果的，因为大多数人看第一遍都是为了娱乐，重点是放在剧情和故事内容上，根本顾不上语言层面。只有看到第二遍以上才会开始留意台词和语言。其次，如果只是单纯看剧而不进行系统的语法学习，也是没用的。我的大四开始就没有再好好学过日语了，所以直到现在我的日语水平仍停留在入门水平。日剧里的那些新词和知识点，我甚至无法意识到是知识点。如果你的知识盲点太多，你的大脑会直接宕机，最后就只能完全看字幕，无法吸收新的知识。所以最好的做法是先通过系统学习打基础，然后在看剧的时候应用出来，这样是记得最牢的。比如，你这周学习了被动语态，那么你看剧的时候就盯着台词里的被动语态看，只要一听/看到台词里出现be
                done
                by的句型，就立马停下来，分析一下，回忆一下上课学到的这个知识点，有必要还可以把句子记下来。这样做反复几次，这个知识点就会记得非常扎实，你以后每次遇到被动语态的句子，就会想起你那时看的某个剧里某个人物在某个情景下说的这句台词。</p>
              <p>总结一下: 看美剧学英语看似是一条学习语言的捷径，因为看剧既是娱乐又能为自己创造珍贵的语言环境。但要真正达到效果，需要满足两个必要条件：1. 同样的内容看一边以上，第二遍之后重点看语言层面
                2.看剧要和系统的语法学习相结合，而且要在这两条平行的轨迹之间来回跳跃。</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Posts',
  setup() {
    const router = useRouter()
    const goBack = () => {
      router.push('/')
    }
    return {
      goBack
    }
  }
})
</script>

<style scoped lang="less">
@import "../style/mixin.less";

.posts_container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .el-page-header {
    width: 100%;
    box-sizing: border-box;
    padding: 12px 40px;
  }

  .column {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: url("../components/image/column@2x.png") no-repeat;
    //background-size: 100% 100%;

    h4 {
      color: #fff;
      font-weight: bold;
      letter-spacing: .2rem;
    }

    .el-avatar {
      margin-right: 20px;
    }
  }

  .posts_details {
    width: 1323px;
    height: 100vh;
    background: #fff;
    padding: 8px 18px;
    overflow: hidden;
    box-shadow: 0 4px 8px 2px #e3e3e3;

    .sidebar {
      .ellips_single;
      font-size: 14px;
      cursor: pointer;
      margin-bottom: 20px;

      &:hover:deep(.el-card) {
        color: #fff;
        background: linear-gradient(90deg, #0065ff, #019fff);
      }
    }

    .article {
      text-align: center;

      .mail {
        font-size: 12px;
      }

      .el-alert {
        padding: 20px 0;
      }

      .el-row {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100px;
        background: #f7f9ff;
        margin-bottom: 20px;

        :deep(.el-range-editor--small.el-input__inner) {
          border: none;
          margin: 0 20px;
        }

        :deep(.el-date-editor--datetimerange.el-input__inner) {
          width: 340px;
        }

        .demonstration {
          font-size: 14px;
          margin-bottom: 10px;
        }
      }

      img {
        width: 50%;
        height: 50%;
        border-radius: 4px;
      }

      .contents {
        padding: 20px 200px;
      }
    }
  }
}
</style>
