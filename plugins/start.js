import Vue from 'vue'
import GlobalComponent from '@/components/GlobalComponents/GlobalComponent'
import DynamicRenderer from '@/components/GlobalComponents/DynamicRenderer'
import h7 from '@/components/GlobalComponents/h7'
import Logger from '@/components/GlobalComponents/Logger'
import checkView from 'vue-check-view'
import HjImg from '@/components/GlobalComponents/HjImg'
import BackToTop from '@/components/GlobalComponents/BackToTop'

Vue.use(checkView)

Vue.component('GlobalComponent', GlobalComponent)
Vue.component('DynamicRenderer', DynamicRenderer)
Vue.component('h7', h7)
Vue.component('Logger', Logger)
Vue.component('HjImg', HjImg)
Vue.component('BackToTop', BackToTop)