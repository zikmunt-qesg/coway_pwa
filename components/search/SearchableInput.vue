<template>
<div class="form-control p-0">
<b-form-input 
    id="searchable-input"
    autocomplete="off" 
    type="text" 
    class="d-flex search-input" 
    :placeholder="placeholder" 
    :value="value" 
    @focus="showTippy()"
    @input="showTippy()"
    @blur="hideTippy()"
    @keydown.up="upHandler()"
    @keydown.down="downHandler()"
    @keyup.enter="enterHandler()"
    v-on="$listeners"
    @change="$emit('input', value)"
    >
</b-form-input>

    <div v-show="tippy_popup" class="suggested-items" ref="suggestions">
    <template>
        <div v-if="hasResult">
            <div
            v-for="(item, index) in filteredItems"
            :key="item.id"
            class="suggested-items_item text-left"
            :class="{'is-selected': navigatedItemIndex === index}"
            @click="handleQuery(index, item)"
            >
            <span v-for="item_key in search_keys" :key="item_key.id"> {{ item[item_key] }} &nbsp; </span> 
            </div>
        </div>
        <div v-else>
            
        </div>
    </template>
    </div>
</div>


</template>

<script>
import Fuse from 'fuse.js'
import tippy from 'tippy.js'
import 'tippy.js/animations/shift-away.css'
import 'tippy.js/themes/light-border.css'

export default {
    data(){
        return {
            suggestionRange: null,
            navigatedItemIndex: 0,
            tippy_popup: null,
            fuse: null,

            search_error: '',
        }
    },
    props: {
        value: { type: String },
        placeholder: { type: String },
        search_universe: { type: Array },
        search_keys: { type: Array },
    },
    computed: {
        hasResult(){
            return this.filteredItems.length
        },
        showSuggestions(){
            return this.hasResult || this.value
        },
        filteredItems(){
            let fuse_options = {
                shouldSort: true, 
                //findAllMatches: true,
                threshold: 0.2,
                location: 0,
                distance: 100,
                maxPatternLength: 32,
                minMatchCharLength: 1,
                keys: this.search_keys
            }

            //console.log(this.value)
            let fuse = new Fuse(this.search_universe, fuse_options)
            let result = fuse.search(this.value).slice(0,5)

            if(this.tippy_popup) {
                this.navigatedItemIndex = 0
                this.tippy_popup[0].setContent(this.$refs.suggestions)
            }
            return result
        }
    },
    methods: {
        upHandler() {
            this.navigatedItemIndex = ((this.navigatedItemIndex + this.filteredItems.length)-1) % this.filteredItems.length
        },
        downHandler() {
            this.navigatedItemIndex = (this.navigatedItemIndex + 1) % this.filteredItems.length
        },
        enterHandler() {
            const item = this.filteredItems[this.navigatedItemIndex]
            if(item) {
                this.selectItem(item)
            }       
        },
        showTippy(){
            if(!this.tippy_popup)
            {
                this.tippy_popup = tippy('#searchable-input', {
                    content: this.$refs.suggestions,
                    trigger: 'manual',
                    interactive: true,
                    theme: 'light-border',
                    placement: 'bottom-start',
                    inertia: true,
                    duration: 500,
                    arrow: false,
                    animation: 'shift-away',
                    maxWidth: 800,
                })
            }
            //console.log(this.filteredItems)
            this.tippy_popup[0].show()
        }, 
        hideTippy(){
            if(!this.tippy_popup) return false
            else {
                this.tippy_popup[0].hide()
            }
        },
        destroyTippy(){
            if(this.tippy_popup){
                this.tippy_popup[0].destroy()
                this.tippy_popup = null
            }
        },
        selectItem(item){
            this.$emit('input', item.code )
            this.$emit('select-item')
            this.hideTippy()
        },
        handleQuery(index, item){
            this.selectItem(item)
        },
    },
    created(){
    },
    beforeDestroy(){
        this.destroyTippy()
        if(this.fuse != undefined) this.fuse.destroy()
    }
    
}
</script>
<style scoped lang="scss">

.transparent {
    background-color: transparent;
    border-color: transparent;
}

.input-box {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    width: 100%;
    border-radius: 0.2rem;
    border-style: solid;
    border-width: thin;
    background-color: #fff;
}

.search-input {
   padding-left: 16px;
   width: 100%;
   height: 100%;
   background-color: transparent;
   border: none;
   outline: none;

   //box-shadow: none!important;

}

.suggested-items {
    font-size: 0.8em;
    color: $gray7;

    &_item {
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-bottom: 2px;

    cursor: pointer;
    &:last-child {
      margin-bottom: 0;
    }
    &.is-selected,
    &:hover {
      color: black;
      background-color: $gray2;
    }
    &.is-empty {
      opacity: 0.5;
    }
  }

}

.search-button {
    cursor: pointer;
}


</style>
