---
title: {{ blog.attributes.title }}
layout: dashboard.njk
pagination:
  data: blog
  size: 1
  alias: post
permalink: 'detail/{{ post.attributes.slug }}/'
---

<div class="blog-detail bg-white shadow-md rounded-lg p-4 my-4">
      <h1 class="text-3xl font-bold text-gray-800">{{post.attributes.title}}</h1>
      <div class="my-5">
      {{post.attributes.content | markdown }}
      </div>
</div>
