<template>
    <div class="courses header-padded">
        <div class="row">
            <div class="container">
                <div class="v-padded">
                    <h3 class="row-title">AI Courses @ KAIST</h3>
                </div>
                <course-card
                v-for="(course, i) in courses"
                :key="i"
                :course="course"
            />
            </div>
        </div>
    </div>
</template>

<script>
import CourseCard from '@/components/CourseCard.vue'
export default {
    name: 'courses',
    components: {
        CourseCard,
    },
    props: {
        courses: Array,
    }
}
</script>

<style scoped>
    .courses {
        overflow: auto;
    }
</style>