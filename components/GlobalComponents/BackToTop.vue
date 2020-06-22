<template>
<div>
    <transition name="show-fade" mode="out-in">
        <div v-if="isVisible" class="position-fixed text-center" style="right:10px; top:15vh">
            
            <b-button variant="icon-gray" :aria-expanded="is_opened ? 'false' : 'true'" aria-controls="external-btns" @click="changeCollapse" style="width:64px;">           
                <div v-if="is_opened==true" key="opened"><i class="fas fa-angle-double-right"></i></div>
                <div v-else key="closed"> <i class="fas fa-angle-double-left"></i> </div>          
            </b-button>
            
            <transition name="slide-fade" mode="out-in">  
                <div id="external-btns" v-if="is_opened==true" class="">             
                    <div class="d-flex flex-column justify-content-center">
                        <a href="http://www.coway.co.kr/" target="_blank" class="py-3 text-center"><b-img src="/images/109_1.svg" class="external-link-btn"></b-img> </a>
                        <div class="short-divide-line"></div>
                        <a href="http://www.coway.co.kr/" target="_blank" class="py-3 text-center"><b-img src="/images/110_1.svg" class="external-link-btn"></b-img> </a>
                        <div class="short-divide-line"></div>
                        <a href="http://www.coway.co.kr/" target="_blank" class="py-3 text-center"><b-img src="/images/111_1.svg" class="external-link-btn"></b-img> </a>
                        <div class="short-divide-line"></div>
                        <a href="http://www.coway.co.kr/" target="_blank" class="py-3 text-center"><b-img src="/images/112_1.svg" class="external-link-btn"></b-img> </a>
                        <div class="short-divide-line"></div>
                        <div @click="backToTop" class="py-3 text-center cursor go-to-top"><b-img src="/images/113_1.svg"></b-img> </div>
                    </div>            
                </div>
            </transition>
        </div>
    </transition>
</div>
</template>
<script>
export default {
    data() {
        return {
            position: {x:0, y:0},
            is_opened: true,
            interval: null,
            temp_scrollHeight: 0
        }
    },
    computed: {
        isVisible: {
            get(){
                if(this.position.y <= 400 || this.position.y >= this.get_height-1400) return false
                else return true
            }
        },
        get_height(){
            if (process.client){
                // let temp_scrollHeight = document.body.scrollHeight
                return this.temp_scrollHeight
            }
            else return 100000
        }
    },
    methods: {
        backToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        },
        changeCollapse(){
            this.is_opened = !this.is_opened
        }
    },
    created(){
            if (!this.$isServer) {
            this._scrollListener = () => {
                // window.pageX/YOffset is equivalent to window.scrollX/Y, but works in IE
                // We round values because high-DPI devies can provide some really nasty subpixel values
                this.position = {
                    x: Math.round(window.pageXOffset),
                    y: Math.round(window.pageYOffset)
                }
            }
 
            // Call listener once to detect initial position
            this._scrollListener()

            // When scrolling, update the position
            window.addEventListener('scroll', this._scrollListener)
        }
    },
    mounted() {
        console.log(document.body.scrollHeight);
        this.interval = setInterval(() => {
            this.temp_scrollHeight = document.body.scrollHeight;
        }, 100);
    },
    beforeDestroy() {
        // Detach the listener when the component is gone
        window.removeEventListener('scroll', this._scrollListener)
    },
    destroyed() {
        clearInterval(this.interval);
    },
    // watch:{
    //     '$route'(to, from){
    //         console.log(to.path);
    //         console.log(from.path);
    //         if (to.path!=from.path){
    //             this.temp_scrollHeight = document.body.scrollHeight
    //         }
    //     }
    // }
}
</script>
<style lang="scss">
.short-divide-line{
    border-bottom: 1px solid $gray6;
    width: 43px;
    height: 1px;
    margin-left: 10px;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .6s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.show-fade-enter-active {
  transition: all .3s ease;
}
.show-fade-leave-active {
  transition: all .6s ease;
}
.show-fade-enter, .show-fade-leave-to
/* .show-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-50px);
  opacity: 0;
}
.external-link-btn, .go-to-top{
    transition: all ease-out .3s;
}
.external-link-btn:hover{
    transform: translateX(5px);
}
.go-to-top:hover{
    transform: translateY(5px);
}

// .goTop {
//   border-radius: 5px;
//   background-color: rgba(0,0,0,0.8)!important;
//   /* position: fixed;
//   width: 50px;
//   height: 30px; */
//   display: block;
//   /* left: 47vw;
//   bottom: 32px; */
//   border: none;
//   padding: 0.15rem;
//   z-index: 999;
// }

// .goTop .fa {
//     color: white;
//     font-size: 40px;
// }

// .goTop:hover {
//     background-color: rgba(0,0,0,0.5)!important;
// }


</style>