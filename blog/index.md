---
title: Blog
description: Latest articles and updates from Nature'S Healing Blog
---

# Blog

<div class="container mx-auto px-4 py-8">

Welcome to our blog! Here you'll find articles, tutorials, and insights.

</div>

<script setup>
import { data as posts } from './.vitepress/theme/posts.data.js'
</script>

<div class="container mx-auto px-4">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <a v-for="post in posts" :key="post.url" :href="post.url" 
       class="block p-6 rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg transition-all">
      <div class="text-sm text-gray-500 mb-2">{{ post.date }}</div>
      <h2 class="text-2xl font-bold mb-2 gradient-text">{{ post.title }}</h2>
      <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
      <div class="flex flex-wrap gap-2">
        <span v-for="tag in post.tags" :key="tag" 
              class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
          {{ tag }}
        </span>
      </div>
    </a>
  </div>
</div>
