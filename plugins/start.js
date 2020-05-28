import Vue from 'vue'
import GlobalComponent from '@/components/GlobalComponents/GlobalComponent'
import DynamicRenderer from '@/components/GlobalComponents/DynamicRenderer'
import h7 from '@/components/GlobalComponents/h7'
import checkView from 'vue-check-view'

Vue.use(checkView)

Vue.component('GlobalComponent', GlobalComponent)
Vue.component('DynamicRenderer', DynamicRenderer)
Vue.component('h7', h7)