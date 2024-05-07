---
title: "Blog"
layout: dashboard.njk
description: "The Blog page."
---
<div class="mt-8">
    {%- for post in blog -%}
    <a href="/detail/{{ post.attributes.slug }}/">
        <div class="blog-preview bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 class="text-xl line-clamp-1 font-bold text-gray-800">
                {{post.attributes.title}}
            </h2>
            <div class="line-clamp-3 my-5">
              {{post.attributes.content | markdown }}
            </div>
            <p className="text-gray-500 text-sm">{% formatDate post.attributes.date %}</p>
        </div>
    </a>
    {%- endfor -%}
</div>