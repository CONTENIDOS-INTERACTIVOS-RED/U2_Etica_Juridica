<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. La práctica del abogado'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      p En este tema conoceremos sobre la práctica del abogado, comenzando por la ética, continuando con la axiología moral y finalizando con los principios éticos del abogado.
  
      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Ética del abogado


      p La ética del abogado constituye un pilar fundamental para el ejercicio responsable de la profesión jurídica, dado que orienta la conducta del profesional en la defensa de la justicia y los derechos de las personas.


      .bg-full-width.bg-color-4.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Ética del abogado 
              p.mb-4(data-aos="fade-right") En el PDF Ética del abogado, se examinan sus antecedentes históricos, sus funciones dentro del sistema legal y su aplicación en la práctica profesional, destacando la importancia de principios como la lealtad, la independencia, la honestidad y la diligencia. Este enfoque permite comprender cómo la ética jurídica no solo regula la actuación individual del abogado, sino que también garantiza la integridad y legitimidad del sistema de justicia.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Ética del abogado 
      
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/1.png', alt='')
      

      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Axiología moral

      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 La axiología moral es la disciplina filosófica que estudia los valores éticos que guían el comportamiento humano y fundamentan los principios de justicia, en una sociedad. En este sentido, el Derecho no es un sistema normativo aislado, sino que se sustenta en valores morales que orientan su desarrollo y aplicación.
      
          .bg-color-3.p-4.mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 El Derecho, como conjunto de normas que regulan la convivencia social, está profundamente influenciado por la axiología moral. La relación entre ambos es dinámica: los valores morales determinan la creación y evolución de las leyes, mientras que el derecho, a su vez, influye en la consolidación y transformación de los valores, dentro de una sociedad.
      

      


      h2 La axiología moral como fundamento del Derecho

      .bg-color-1.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") El derecho no surge en el vacío. Su existencia y legitimidad dependen de los valores que una sociedad reconoce como fundamentales. Sin principios axiológicos claros, el derecho sería un mero instrumento de coerción, sin una justificación moral que lo respalde.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/4.png', alt='')


      h2 Valores fundamentales en el Derecho
      p Algunos de los valores esenciales que sustentan el Derecho, incluyen:

      .bg-full-width-2.bg-fondo-2
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center
            .col-lg-4
              figure
                img(src='@/assets/curso/tema2/5.png', alt='')
            .col-lg-8

      
              SlyderF(columnas="col-12 col-lg-6")
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/icono-1.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Justicia
                  p.text-center Es el principio central del derecho. Desde Aristóteles hasta la teoría jurídica contemporánea, la justicia se concibe como la búsqueda de equilibrio y equidad, en la aplicación de las normas.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/icono-2.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Dignidad humana
                  p.text-center Base de los derechos humanos, este valor reconoce que todas las personas tienen un valor intrínseco que debe ser respetado por el orden jurídico.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/icono-3.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Libertad
                  p.text-center Garantiza la autonomía de los individuos dentro de un marco normativo que protege, tanto la libertad individual como la colectiva.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/icono-4.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Igualdad
                  p.text-center Principio fundamental que exige que todas las personas sean tratadas con los mismos derechos y oportunidades, ante la Ley.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/icono-5.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Seguridad jurídica
                  p.text-center Permite la previsibilidad en la aplicación de las normas, asegurando que las personas conozcan sus derechos y obligaciones.

      .bg-full-width.bg-color-5.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Estos valores no solo fundamentan la existencia del derecho, sino que también actúan como criterios para evaluar su legitimidad y eficacia.
      

      h2 Influencia de la axiología moral en la creación y evolución del Derecho
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left") Las normas jurídicas suelen surgir como una formalización de valores morales compartidos por una sociedad. Por ejemplo, el derecho penal tipifica delitos como el homicidio o el robo, porque vulneran valores como la vida y la propiedad, que son considerados fundamentales para la convivencia.
      
          .bg-color-4.p-4(data-aos="fade-left")
            p.mb-0 El proceso legislativo también está guiado por principios axiológicos. Cuando un parlamento debate una nueva Ley, lo hace basándose en argumentos que invocan valores morales y sociales, como la equidad o la protección de los más vulnerables.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")


      h2 Evolución del Derecho, según los cambios en los valores

      p Los sistemas jurídicos no son estáticos; evolucionan en función de los cambios axiológicos de una sociedad. Ejemplos de esta evolución, incluyen:

      .bg-full-width.bg-fondo-slider
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slider-1.png")
              .col-lg-7 
                h5 Derechos humanos
                p La abolición de la esclavitud y el reconocimiento de derechos fundamentales son el resultado de una transformación axiológica en la que se pasó de aceptar la desigualdad a reconocer la dignidad de todas las personas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5 
                figure
                  img(src="@/assets/curso/tema2/slider-2.png")
              .col-lg-7 
                h5 Igualdad de género
                p Las leyes sobre derechos políticos y laborales de las mujeres, han evolucionado a medida que la sociedad ha adoptado valores más igualitarios.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5 
                figure
                  img(src="@/assets/curso/tema2/slider-3.png")
              .col-lg-7 
                h5 Protección del medio ambiente
                p Hace décadas, la explotación de los recursos naturales se consideraba un derecho ilimitado. Hoy, la axiología moral ha impulsado leyes que regulan el impacto ambiental para proteger el bienestar de las futuras generaciones.


      .bg-full-width.bg-color-2.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Estos ejemplos muestran cómo la axiología moral actúa como motor de cambio dentro del derecho, adaptando las normas a los valores emergentes de cada época.

      h2 La Axiología moral en la aplicación e interpretación del Derecho


      .bg-color-3.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") El derecho no solo se nutre de la axiología moral en su creación, sino también en su aplicación e interpretación.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/9.png', alt='')

      h2 Moral y decisión judicial

      p Los jueces, al interpretar la Ley, recurren a principios morales cuando las normas son ambiguas o insuficientes para resolver un caso. Esto es evidente en situaciones como:

      .bg-full-width-2.bg-fondo-4
        .p-4.p-md-5

          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-6.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/10.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Conflictos de derechos.
                  p.mb-0 Cuando un tribunal debe decidir entre la libertad de expresión y el derecho al honor, utiliza criterios axiológicos para equilibrar ambos valores.

            .col-lg-6.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/11.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Casos de lagunas jurídicas
                  p.mb-0 En situaciones no previstas por la Ley, los jueces recurren a principios de equidad y justicia, para resolver el problema de manera moralmente aceptable.


          h2 Ética y ejercicio del Derecho

          .bg-color-1.mb-5(data-aos="fade-up")
            .row.justify-content-center.align-items-center
              .col-lg-auto
                figure
                  img(src='@/assets/curso/tema2/12.png', alt='')
              .col-lg
                .p-4
                  p.mb-0(data-aos="fade-up") Los profesionales del derecho, como abogados y fiscales, también deben actuar conforme a valores axiológicos. La ética profesional exige que el derecho se practique con honestidad, respeto y compromiso con la justicia. Un abogado no solo debe conocer la Ley, sino también actuar con integridad, para evitar prácticas injustas o desleales.

          h2 Derecho y conflictos de valores

          p En algunas ocasiones, el derecho enfrenta dilemas axiológicos, es decir, conflictos entre valores igualmente importantes. Algunos ejemplos incluyen:

          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/13.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Eutanasia
                  p.mb-0 Enfrenta el valor de la dignidad humana (derecho a morir con dignidad) contra el valor de la vida (protegida por el derecho).
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/14.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Pena de muerte
                  p.mb-0 Opone la seguridad jurídica (castigo severo para delitos graves) a la justicia y la dignidad (derecho a la vida).
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/15.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Libertad de religión y laicismo
                  p.mb-0 Enfrenta el derecho a la libertad de culto con el principio de neutralidad del Estado.


      .bg-full-width.bg-color-5.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/16.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Estos conflictos demuestran que el derecho no puede separarse de la axiología moral, porque constantemente debe equilibrar valores en competencia.

      h2 El Derecho como regulador de la moral

      .row.mb-5
        .col-lg-8
          .bg-color-1.px-4.py-5(data-aos="fade-left").mb-4
            p.mb-0 Si bien el derecho se fundamenta en la axiología moral, también cumple la función de regular la conducta social y, en muchos casos, influir en la moralidad de la sociedad.
          
          p(data-aos="fade-left") A veces, las leyes no solo reflejan valores morales preexistentes, sino que también los modifican. Ejemplos de ello incluyen:
        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in").mb-4.mb-lg-0


      TabsC.color-acento-contenido.mb-5
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Título tab 1" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Leyes contra la discriminación
              p Aunque en algunas sociedades existía tolerancia hacia la discriminación racial o de género, las leyes han promovido un cambio axiológico, en favor de la igualdad.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/tab-1.png', alt='')
      
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Título tab 2" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Normas sobre violencia doméstica
              p En muchas culturas, el maltrato dentro del hogar era considerado un asunto privado, pero con la promulgación de leyes que lo castigan, se ha generado un cambio en la percepción moral de la violencia intrafamiliar.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/tab-2.png', alt='')


      .bg-full-width.bg-color-5.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/18.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El derecho, por tanto, no solo es producto de la axiología moral, sino que también puede ser un agente de transformación moral en la sociedad.


      #t_2_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.3] Los principios éticos del abogado


      p Los principios éticos del abogado constituyen la base sobre la cual se construye el ejercicio responsable, digno y justo de la profesión jurídica.

      .bg-full-width.bg-color-4.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Los principios éticos del abogado
              p.mb-4(data-aos="fade-right") En el PDF Los principios éticos del abogado, se exponen los fundamentos que guían la conducta del abogado en su compromiso con la justicia, la lealtad hacia sus clientes y el respeto al orden jurídico. Este enfoque permite comprender cómo la ética profesional no solo orienta las decisiones individuales, sino que también fortalece la confianza en el sistema legal y promueve una cultura de legalidad y responsabilidad social.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Los principios éticos del abogado
      
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/19.png', alt='')
      
      
      
      

      
      


      
          


          


      
      
      
      

      


      

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://revistas.unilibre.edu.co/index.php/rev.ista_cultural/article/view/4053/" target="_blank" rel="noopener noreferrer") Herazo Girón, F. A. (2013) La ética profesional del abogado. Revista cultural Unilibre, 2, 16-28.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0120-38862021000200348" target="_blank" rel="noopener noreferrer") Faggioli, A. A., Fuentes Águila, M. R. & Castellanos Fuentes, P. E. (2021). Principios que rigen la actuación del abogado como auxiliar de la justicia en la prevención de la corrupción. Revista de la Facultad de Derecho y Ciencias Políticas, 51(135), 348-367.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=z2B57ea0uP8" target="_blank" rel="noopener noreferrer") Cultura Jurídica Org. (2020). Ética y Derecho. Prof. Gustavo Omana | Estado del Derecho
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
