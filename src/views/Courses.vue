<template>
    <div class="courses header-padded">
        <div class="row">
            <div class="container">
                <div class="v-padded">
                    <h3 class="row-title">AI Courses @ KAIST</h3>
                    <filter-selector 
                        title="학과"
                        :tags="departments" 
                        v-model="activeDepartment" 
                    />
                    <filter-selector 
                        title="대상 학생"
                        :tags="tags.student" 
                        v-model="activeStudentTag" 
                    />
                    <filter-selector 
                        title="응용/이론"
                        :tags="tags.application" 
                        v-model="activeApplicationTag" 
                    />
                    <filter-selector 
                        title="키워드"
                        :tags="keywords" 
                        v-model="activeKeyword" 
                    />
                </div>
                <course-card
                    v-for="(course, i) in visibleCourses"
                    :key="i"
                    :course="course"
                    :departments="departments"
                    :tags="tags"
                />
            </div>
        </div>
    </div>
</template>

<script>
import CourseCard from '@/components/CourseCard.vue'
import FilterSelector from '@/components/FilterSelector.vue'
export default {
    name: 'courses',
    components: {
        CourseCard,
        FilterSelector,
    },
    props: {
        courses: Array,
        departments: Object,
        tags: Object,
        keywords: Object,
    },
    data() {
        return {
            activeDepartment: null,
            activeStudentTag: null,
            activeApplicationTag: null,
            activeKeyword: null,
        }
    },
    computed: {
        visibleCourses() {
            const {
                activeDepartment,
                activeStudentTag,
                activeApplicationTag,
                activeKeyword,
            } = this;
            return this.courses.filter(course => {
                let isVisible = true
                if (activeDepartment !== null) {
                    if (course.department !== activeDepartment) {
                        isVisible = false
                    }
                }
                if (activeStudentTag !== null) {
                    if (!course.studentTags.includes(activeStudentTag)) {
                        isVisible = false
                    }
                }
                if (activeApplicationTag !== null) {
                    if (!course.applicationTags.includes(activeApplicationTag)) {
                        isVisible = false
                    }
                }
                if (activeKeyword !== null) {
                    const tokens = this.keywords[activeKeyword].tokens
                    const text = course.description.toLowerCase() + course.content.toLowerCase()
                    if (!tokens.map(token => text.includes(token)).reduce((acc, curr) => curr || acc, false)) {
                        isVisible = false
                    }
                }
                return isVisible
            })
        },
    }
}
</script>

<style scoped>
    .courses {
        overflow: auto;
    }
</style>