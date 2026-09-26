---
layout: page
title: Additive Manufaktur
tagline: 3D-Druck nach Auftrag & Modelldesign
hero: true
permalink: /
---

## Über mich / Über Additive Manufaktur

Ich fertige 3D-gedruckte Teile nach Kundenwunsch und entwerfe eigene Modelle.

Mein Schwerpunkt liegt auf **Inserts (Sortiereinsätzen) für Brettspiele** –
von der Idee bis zum fertigen, passgenauen Druck, in kundenindividueller Einzelstückfertigung.

## Leistungen

<div class="services" markdown="0">
  <ul>
    <li>3D-Druck nach Auftrag (eigene Vorlagen oder STL-Dateien)</li>
    <li>Modelldesign / individuelle Konstruktion</li>
    <li>Expertise: Brettspiel-Inserts &amp; Sortiereinsätze nach Maß</li>
  </ul>
</div>

## Galerie

<div class="carousel" data-carousel markdown="0">
  <div class="carousel__viewport">
    <div class="carousel__track" data-carousel-track>
      <div class="carousel__slide">
        <picture>
          <source srcset="{{ '/assets/images/drucker.webp' | relative_url }}" type="image/webp">
          <img src="{{ '/assets/images/drucker.jpg' | relative_url }}" alt="Mein 3D-Drucker" loading="lazy">
        </picture>
        <p class="carousel__caption">Mein 3D-Drucker</p>
      </div>
      <div class="carousel__slide">
        <picture>
          <source srcset="{{ '/assets/images/insert-calico.webp' | relative_url }}" type="image/webp">
          <img src="{{ '/assets/images/insert-calico.jpg' | relative_url }}" alt="Brettspiel-Insert für Calico, eigenes Design" loading="lazy">
        </picture>
        <p class="carousel__caption">Brettspiel-Insert für Calico &ndash; eigenes Design</p>
      </div>
      <div class="carousel__slide">
        <picture>
          <source srcset="{{ '/assets/images/cad-design.webp' | relative_url }}" type="image/webp">
          <img src="{{ '/assets/images/cad-design.jpg' | relative_url }}" alt="3D-Design in der CAD-Software" loading="lazy">
        </picture>
        <p class="carousel__caption">3D-Design in der CAD-Software</p>
      </div>
    </div>
    <button class="carousel__button carousel__button--prev" type="button" data-carousel-prev aria-label="Vorheriges Bild">&#10094;</button>
    <button class="carousel__button carousel__button--next" type="button" data-carousel-next aria-label="Nächstes Bild">&#10095;</button>
  </div>
  <div class="carousel__dots" data-carousel-dots></div>
</div>

<script>
  document.querySelectorAll('[data-carousel]').forEach(function (carousel) {
    var track = carousel.querySelector('[data-carousel-track]');
    var slides = Array.prototype.slice.call(track.children);
    var dotsWrap = carousel.querySelector('[data-carousel-dots]');
    var index = 0;

    slides.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'carousel__dot' + (i === 0 ? ' is-active' : '');
      dot.setAttribute('aria-label', 'Bild ' + (i + 1));
      dot.addEventListener('click', function () { goTo(i); });
      dotsWrap.appendChild(dot);
    });

    function update() {
      track.style.transform = 'translateX(-' + (index * 100) + '%)';
      dotsWrap.querySelectorAll('.carousel__dot').forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === index);
      });
    }

    function goTo(i) {
      index = (i + slides.length) % slides.length;
      update();
    }

    carousel.querySelector('[data-carousel-prev]').addEventListener('click', function () { goTo(index - 1); });
    carousel.querySelector('[data-carousel-next]').addEventListener('click', function () { goTo(index + 1); });
  });
</script>

## Kontakt

<div class="contact" markdown="0">
  <ul>
    <li>E-Mail: <a href="mailto:{{ site.email }}">{{ site.email }}</a></li>
    <li>Instagram: <a href="https://www.instagram.com/{{ site.instagram_username }}">@{{ site.instagram_username }}</a></li>
  </ul>
</div>

