<template>
  <div>
    <!--    <el-color-picker @change="colorChange" v-model="colors.primary"></el-color-picker>-->
  </div>
</template>

<script>
  import formula from "./formula";

  const version = require('element-plus/package.json').version;
  import objectAssign from "object-assign";
  import color from "css-color-function";

  export default {
    name: "App",
    props: {
      primaryColor: {
        type: String,
        default: '#409EFF',
      }
    },
    data() {
      return {
        cssUrl: `https:////unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`,
        originalStylesheetCount: -1,//记录当前已引入style数量
        originalStyle: "",//获取拿到的.css的字符串
        defaultColor: '#409EFF',
        colors: {
          primary: this.primaryColor,
        },
      };
    },
    watch: {
      primaryColor: function (newVal) {
        this.colors.primary = newVal;
        this.colorChange(newVal);
      }
    },
    mounted() {
      // 如果是记住用户的状态就需要，在主题切换的时候记录颜色值，在下次打开的时候从新赋值
      // this.colors.primary = localStorage.getItem('primaryColor') || this.colors.primary;
      // this.getRemoteCss(this.cssUrl);
      //
      // this.$nextTick(() => {
      //   this.originalStylesheetCount = document.styleSheets.length; // 获取页面一共引入了多少个style 文件
      // });
    },
    methods: {
      getRemoteCss(url) {
        this.axios.get(url).then(response => {
          this.originalStyle = this.getStyleTemplate(response.data);
          this.writeNewStyle();
        }).catch(err => {
          this.$message.error('远程样式获取失败');
        });
      },
      // 获取样式模板
      getStyleTemplate(data) {
        const colorMap = {
          "#3a8ee6": "shade-1",
          "#409eff": "primary",
          "#53a8ff": "light-1",
          "#66b1ff": "light-2",
          "#79bbff": "light-3",
          "#8cc5ff": "light-4",
          "#a0cfff": "light-5",
          "#b3d8ff": "light-6",
          "#c6e2ff": "light-7",
          "#d9ecff": "light-8",
          "#ecf5ff": "light-9"
        };
        Object.keys(colorMap).forEach(key => {
          const value = colorMap[key];
          data = data.replace(new RegExp(key, "ig"), value);
        });
        return data;
      },
      // 写入新的样式
      writeNewStyle() {
        let cssText = this.originalStyle;
        Object.keys(this.colors).forEach(key => {
          cssText = cssText.replace(new RegExp("(:|\\s+)" + key, "g"), "$1" + this.colors[key]);
        });
        if (this.originalStylesheetCount === document.styleSheets.length) { // 如果之前没有插入就插入
          const style = document.createElement("style");
          style.innerText = ".primaryColor{background-color:" + this.colors.primary + "}" + cssText;
          document.head.appendChild(style);
        } else { // 否则修改
          document.head.lastChild.innerText = ".primaryColor{background-color:" + this.colors.primary + "} " + cssText;
        }
      },
      // 生成颜色值
      generateColors(primary) {
        let colors = {};
        Object.keys(formula).forEach(key => {
          const value = formula[key].replace(/primary/g, primary);
          colors[key] = color.convert(value);
        });
        return colors;
      },
      // 颜色修改事件
      colorChange(colorString) {
        if (!colorString) return;
        localStorage.setItem('primaryColor', colorString);
        this.colors = objectAssign({}, this.colors, this.generateColors(this.colors.primary));
        this.writeNewStyle();
      },
    },
  };
</script>

<style scoped>

</style>