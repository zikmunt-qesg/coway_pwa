<template>
<div class="position-relative min-vh-100">
    <b-row no-gutters class="py-5 bg-blue3 mb-5">
        <b-col class="py-5 my-5"><div style="height:20vw;"></div></b-col>
    </b-row>
    <b-container>
        <hr class="mb-4">
        <h1 class="text-center mb-4"> SUSTAINABILITY ISSUES 2019</h1>
        <p class="text-center f-95"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.
        </p>
        <b-row>
            <b-col class="col-12 col-md-4 text-white">
                <b-card class="bg-blue4 p-lg-2 mb-3 mb-md-0 h-100 main1-card">
                    <div class="f-80 fw-300 main1-card-script"> 최근의 글로벌 사회·환경 문제는 소비자 생활패턴의 변화를 이끌며 환경가전 시장에 큰 영향을 끼치고 있습니다. 코웨이는 제품과 서비스 혁신을 통해 건강과 위생은 물론 고객 개인의 라이프스타일을 반영한 새로운 가치를 창출합니다.
                    </div>
                    <div class="mb-3 mb-md-5"></div>
                    <div style="bottom:0;"><b-img src="https://picsum.photos/400/400/?image=20" rounded="circle" class="main1-card-img"></b-img></div>
                </b-card>
            </b-col>
            <b-col class="col-12 col-md-4 text-white">
                <b-card class="bg-blue7 p-lg-2 mb-3 mb-md-0 h-100 main1-card">
                    <div class="f-80 fw-300 main1-card-script"> 최근의 글로벌 사회·환경 문제는 소비자 생활패턴의 변화를 이끌며 환경가전 시장에 큰 영향을 끼치고 있습니다. 코웨이는 제품과 서비스 혁신을 통해 건강과 위생은
                    </div>
                    <div class="mb-3 mb-md-5"></div>
                    <div style="bottom:0;"><b-img src="https://picsum.photos/400/400/?image=20" rounded="circle" class="main1-card-img"></b-img></div>
                </b-card>
            </b-col>
            <b-col class="col-12 col-md-4 text-white">
                <b-card class="bg-blue3 p-lg-2 mb-3 mb-md-0 h-100 main1-card">
                    <div class="f-80 fw-300 main1-card-script"> 최근의 글로벌 사회·환경 문제는 소비자 생활패턴의 변화를 이끌며 환경가전 시장에 큰 영향을 끼치고 있습니다. 코웨이는 제품과 서비스 혁신을 통해 건강과 위생은 물론 고객
                    </div>
                    <div class="mb-3 mb-md-5"></div>
                    <div style="bottom:0;"><b-img src="https://picsum.photos/400/400/?image=20" rounded="circle" class="main1-card-img"></b-img></div>
                </b-card>
            </b-col>
        </b-row>

       
        <hr class="space-p75">
    </b-container>
</div>
</template>

<script>
export default {
  transition(to, from) {
    if (!from) {
      return "slide-left";
    }
    return "slide-right";
  },
  components: {},
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  },
  computed: {
    blog_posts() {
      return this.$store.state.blog_posts;
    }
  }
};
</script>

<style lang="scss">
.main-top-img{
    position: absolute;
    z-index: -1;
    top: -20vw;
}
.main1-card-img{
    width: 70%;
    max-width: 170px;
}
// .title {
//   display: block;
//   font-weight: bold;
//   font-size: 2.3em;
//   /*color: #35495e;*/
// }

// .subtitle {
//   font-weight: 300;
//   font-size: 1.2em;
//   /*color: #526488;*/
//   padding-top: 10px;
//   padding-bottom: 15px;
// }
</style>
