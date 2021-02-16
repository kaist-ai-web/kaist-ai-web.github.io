<template>
    <div class="home">
        Hello world from Home view. ({{ text }})
    </div>
</template>

<script>
export default {
    name: 'home',
    props: {
        text: String,
    }
}
</script>
