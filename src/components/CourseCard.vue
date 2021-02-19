<template>
    <div class="course-card">
        <div class="card-top">
            <div class="department">
                <div class="tag" :style="departmentTagStyle">
                    {{ course.department }}
                </div>
            </div>
            <div class="title">{{ course.title }}</div>
            <div class="code">{{ course.code }}</div>
        </div>
        <div class="card-bottom">
            <div class="tags">
                <div 
                    class="tag small" 
                    v-for="(tag, i) in course.studentTags" 
                    v-tooltip="tags.student[tag].description"
                    :key="i"
                >
                    {{ tag }}
                </div>
                <div 
                    class="tag small" 
                    v-for="(tag, i) in course.applicationTags" 
                    v-tooltip="tags.application[tag].description"
                    :key="i"
                >
                    {{ tag }}
                </div>
            </div>
            <div class="instructor">{{ course.instructor }}</div>
            <a 
                class="card-button small full-width" 
                @click="showDetails"
            >
                자세히 보기
            </a>
        </div>
        <modal :name="`modal-${course.title}`" class="modal">
            <div class="modal-content">
                <div class="department">
                    <div class="tag" :style="departmentTagStyle">{{ course.department }}</div>
                </div>
                <div class="title">{{ course.title }}</div>
                <div class="code">{{ course.code }}</div>
                <div class="instructor">{{ course.instructor }}</div>
                <div class="contents">
                    <div class="label">
                        대상 학생
                    </div>
                    <div class="text">
                        {{ course.student }}
                    </div>
                    <div class="label">
                        과목의 취지
                    </div>
                    <div class="text">
                        {{ course.description }}
                    </div>
                    <div class="label">
                        학습 내용
                    </div>
                    <div class="text">
                        {{ course.content }}
                    </div>
                    <div class="label">
                        권장 선수과목
                    </div>
                    <div class="text">
                        {{ course.prerequisite }}
                    </div>
                    <div class="label">
                        비고
                    </div>
                    <div class="text">
                        {{ course.misc }}
                    </div>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
import Vue from 'vue'
import VModal from 'vue-js-modal'
import VTooltip from 'v-tooltip'
import 'v-tooltip/dist/v-tooltip.css'
Vue.use(VTooltip)
Vue.use(VModal)
export default {
    name: 'course-card',
    props: {
        course: Object,
        departments: Object,
        tags: Object,
    },
    methods: {
        showDetails() {
            this.$modal.show(`modal-${this.course.title}`)
        }
    },
    computed: {
        departmentTagStyle() {
            return {
                backgroundColor: (this.departments[this.course.department] || {}).color || '#444'
            }
        }
    }
}
</script>

<style scoped>
    .course-card {
        position: relative;
        margin: 0 0.5rem 0.5rem 0;
        background-color: #fff;
        border: 2px solid #ddd;
        border-radius: 4px; 
        float: left;
        width: 18rem;
        height: 10rem;
    }
    @media screen and (max-width: 48rem) {
        .course-card {
            float: none;
            width: 100%;
            max-width: 100%;
        }
    }
    .card-top {
        position: absolute;
        padding: 0.25rem;
        width: 100%;
        left: 0;
        top: 0;
    }
    .card-bottom {
        position: absolute;
        padding: 0.25rem;
        width: 100%;
        left: 0;
        bottom: 0;
    }
    .department {
        font-size: 0.8rem;
        font-weight: bold;
        padding-bottom: 0.25rem;
    }
    .title {
        font-size: 1rem;
        font-weight: bold;
        padding-bottom: 0.25rem;
    }
    .code {
        font-size: 0.6rem;
        color: #666;
        font-weight: bold;
        padding-bottom: 0.25rem;
    }
    .instructor {
        font-size: 0.8rem;
        color: #666;
        padding-bottom: 0.25rem;
    }
    .modal /deep/ .vm--modal {
        top: 5rem !important;
        max-height: calc(100% - 10rem);
        height: auto !important;
        width: 38rem !important;
        max-width: 100% !important;
    }
    @media screen and (max-width: 38rem) {
        .modal /deep/ .vm--modal {
            left: 0 !important;
        }
    }
    .modal-content {
        background-color: #fff;
        padding: 0.8rem;
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }
    .contents {
        padding: 0.5rem 0;
    }
    .label {
        font-size: 0.8rem;
        font-weight: bold;
        color: #444;
        padding-bottom: 0.3rem;
    }
    .text {
        font-size: 0.8rem;
        line-height: 1rem;
        color: #444;
        padding-bottom: 0.6rem;
    }
</style>