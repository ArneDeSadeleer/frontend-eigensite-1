---
title: 'WORK'
layout: 'layouts/page.html'
custom_css: 'main {margin-bottom: 5rem;}'
---


<div class="mc">
{% for item in collections.featuredWork %}
  <a href="{{ item.url }}">
    <img src="{{ item.data.image }}" alt="{{ item.data.summary }}"/>
    <h2>{{ item.title }}</h2>
  </a>
{% endfor %}
</div>
