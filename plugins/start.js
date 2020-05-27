import Vue from 'vue'
import GlobalComponent from '@/components/GlobalComponents/GlobalComponent'
import DynamicRenderer from '@/components/GlobalComponents/DynamicRenderer'
import h7 from '@/components/GlobalComponents/h7'
import cssVars from 'css-vars-ponyfill'

Vue.component('GlobalComponent', GlobalComponent)
Vue.component('DynamicRenderer', DynamicRenderer)
Vue.component('h7', h7)

if (process.client){
    cssVars({
        rootElement: document,
        shadowDOM: false,
    
        include: 'link[rel=stylesheet], style',
        exclude: '',
        variables: {},
    
        onlyLegacy: true,
        preserveStatic: true,
        preserveVars: false,
        silent: false,
        updateDOM: true,
        updateURLs: true,
        watch: false

    })
}