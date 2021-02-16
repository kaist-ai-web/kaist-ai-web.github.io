<template>
    <div id="app">
        <loading 
            :active="loading"
            color="#fff"
            :height="64"
            :width="64"
            background-color="#000"
        ></loading>
        <app-header :scrolled="scrolled" :loading="loading" />
        <section class="body-content">
            <router-view 
              :courses="courses"
              :departments="departments"
              :tags="tags"
              :keywords="keywords"
            />
        </section>
        <app-footer />
    </div>
</template>

<script>
import '@/styles/default.css'
import 'vue-loading-overlay/dist/vue-loading.css'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import Loading from 'vue-loading-overlay'
import * as loader from '@/helpers/loader.js'

export default {
    name: 'App',
    components: {
        AppHeader,
        AppFooter,
        Loading,
    },
    data() {
        return {
            scrolled: false,
            loading: false,
            courses: [],
            departments: {},
            tags: {},
            keywords: {},
        }
    },
    created() {
        this.loadData()
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll)
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll)
    },
    methods: {
        async loadData() {
            this.loading = true
            const data = await loader.loadData()
            this.courses = data.courses
            this.departments = data.departments
            this.tags = data.tags
            this.keywords = data.keywords
            this.loading = false
        },
        handleScroll() {
            const top = window.scrollY
            const threshold = 30
            if (!this.scrolled && top > threshold) {
                this.scrolled = true
            } else if (this.scrolled && top <= threshold) {
                this.scrolled = false
            }
        }
    }
}
</script>

<style>

</style>
