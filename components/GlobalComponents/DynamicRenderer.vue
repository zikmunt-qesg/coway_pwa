<script>
var __decorate =
  (this && this.__decorate) ||
  function(decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc)
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
    return c > 3 && r && Object.defineProperty(target, key, r), r
  }

import Vue from 'vue'
import VueWithCompiler from 'vue/dist/vue.esm'
import Component from 'nuxt-class-component'

let DynamicRenderer = /** @class */ (() => {
  let DynamicRenderer = class DynamicRenderer extends Vue {
    render(createElement) {
      if (this.templateRender) {
        return this.templateRender()
      } else {
        return createElement('div', 'Looading')
      }
    }
    created() {
      const compiled = VueWithCompiler.compile(`<div>${this.body}</div>`)
      this.templateRender = compiled.render
      this.$options.staticRenderFns = []
      for (const staticRenderFunction of compiled.staticRenderFns) {
        this.$options.staticRenderFns.push(staticRenderFunction)
      }
    }
  }
  DynamicRenderer = __decorate(
    [
      Component({
        props: ['body'],
        components: {}
      })
    ],
    DynamicRenderer
  )
  return DynamicRenderer
})()
export default DynamicRenderer
</script>