---
title: 'WORK'
layout: 'layouts/page.html'
custom_css: 'main {margin-bottom: 5rem;} main h2 {color: black;} body {background-color: white;} header'
---


<div class="mc">
{% for item in collections.featuredWork %}
  <a class="image" href="{{ item.url }}">
    <img src="{{ item.data.image }}" alt="{{ item.data.summary }}"/>
    <p>{{ item.title }}</p>
  </a>
{% endfor %}
</div>
