<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Tipos de ética'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 A continuación, conozcamos los diferentes tipos de ética.



    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Ética de la virtud


    p Para conocer sobre esta temática, lo invitamos a ver el siguiente video.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9TlqeTQohGs?si=hvinlfhYPpjlBiG3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    h2 Ética de la virtud en el derecho

    .row.mb-5
      .col-lg-8
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Desde una perspectiva filosófica, la ética de la virtud, desarrollada por Aristóteles, sostiene que la moralidad no depende únicamente de reglas externas o de las consecuencias de los actos, sino del carácter y las disposiciones internas de la persona. 
    
        p(data-aos="fade-left") En el contexto jurídico, esto significa que, un buen abogado o juez, no es aquel que solo sigue la Ley al pie de la letra, sino aquel que, además, posee virtudes como la justicia, la prudencia y la honestidad, las cuales le permiten tomar decisiones correctas y equitativas.
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
    
    h2 Las virtudes en la práctica jurídica
    p El Derecho, al regular situaciones complejas de la vida social, requiere que quienes lo ejercen no solo dominen la normativa legal, sino que también cultiven virtudes esenciales para una correcta aplicación de la justicia:

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8
            p(data-aos="fade-left") 
    
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/icono-1.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Justicia
                p.text-center Es la virtud fundamental del Derecho, dado que su objetivo es dar a cada quien lo que le corresponde. Un jurista debe tener un sentido de justicia que vaya más allá de la letra de la Ley y se enfoque en su espíritu.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/icono-2.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Prudencia
                p.text-center En la toma de decisiones jurídicas, es necesario evaluar las circunstancias y las consecuencias, con detenimiento. Un juez prudente no se deja llevar por impulsos ni aplica la norma de manera mecánica, sino que la interpreta con sensatez.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/icono-3.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Honestidad
                p.text-center Un abogado debe actuar con transparencia y evitar el uso del Derecho con fines corruptos o engañosos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/icono-4.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Fortaleza
                p.text-center En muchas ocasiones, los profesionales del Derecho enfrentan presiones sociales, políticas o económicas. La fortaleza les permite mantenerse firmes en sus principios y resistir influencias indebidas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/icono-5.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Templanza
                p.text-center Controlar las emociones y mantener una actitud equilibrada, es crucial para la imparcialidad en la toma de decisiones.

    
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/4.png', alt='')
    

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Epicureísmo

    p El epicureísmo es una corriente filosófica que propone alcanzar la felicidad a través del placer moderado, la ausencia de dolor y una vida sencilla.

    .bg-full-width.bg-color-4.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/5.png', alt='')
    
          .col-lg-8
            h2.mb-4(data-aos="flip-up") ¿Qué es el epicureísmo?
            p.mb-4(data-aos="fade-right") En el PDF Qué es el epicureísmo, se presentan los principios esenciales de esta escuela y su relevancia en el pensamiento jurídico, destacando cómo conceptos como la justicia, el pacto social y la eliminación del miedo, pueden contribuir a un sistema legal orientado al bienestar y la paz social.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> ¿Qué es el epicureísmo?

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Estoicismo
    
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") El estoicismo es una escuela filosófica fundada en Atenas, por Zenón de Citio, en el siglo IV a. C. Su enseñanza principal radica en la idea de que la clave para alcanzar la felicidad y la tranquilidad, es vivir en armonía con la razón, aceptar con serenidad aquello que no podemos controlar y actuar con virtud en todo momento.
    
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          p.mb-0 Los estoicos, según Parra (2000), creían que el sufrimiento humano surge del deseo y la resistencia a la realidad. En lugar de lamentarse por lo que no se puede cambiar, proponían cultivar la autodisciplina, la fortaleza emocional y el desapego de las pasiones. Entre los filósofos estoicos más influyentes se encuentran: Séneca, Epicteto y el emperador Marco Aurelio, quienes dejaron enseñanzas que aún hoy inspiran a personas de todo el mundo.
        
        p Los principios fundamentales del estoicismo, son:
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in")


    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-1.png")
            .col-lg-7
              h5 Dicotomía del control
              p Hay cosas que podemos controlar (nuestros pensamientos, acciones y actitudes) y cosas que no (las opiniones de los demás, los sucesos externos, la muerte). La clave está en concentrarnos en lo que depende de nosotros, y aceptar con ecuanimidad lo que no.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-2.png")
            .col-lg-7
              h5 Vivir conforme a la razón y la naturaleza
              p Para los estoicos, la naturaleza está regida por un orden racional. El ser humano debe actuar con sabiduría y virtud, en armonía con ese orden.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-3.png")
            .col-lg-7
              h5 Autodisciplina y dominio de las emociones
              p El estoico no se deja llevar por las pasiones ni por impulsos irracionales. Busca la serenidad interior, mediante la prudencia, la justicia, la templanza y la fortaleza.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-4.png")
            .col-lg-7
              h5 Aceptación del destino
              p Todo lo que sucede forma parte del orden del universo. En lugar de resistirse, el sabio estoico abraza su destino con valentía y gratitud.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-5.png")
            .col-lg-7
              h5 Ética del deber
              p El estoico cree en el cumplimiento de sus responsabilidades y en hacer el bien, sin esperar recompensas externas.
    
    
    h2 El estoicismo en la vida cotidiana

    .row.mb-5
      .col-lg-8
        .bg-color-2.px-4.py-5(data-aos="fade-left").mb-4
          p.mb-0 El estoicismo no es solo una teoría filosófica, sino una práctica de vida. Una de las aplicaciones más comunes del estoicismo en la vida cotidiana, es el manejo de las emociones. El estoico no busca reprimirlas, sino comprenderlas y gobernarlas mediante la razón. Cuando una persona enfrenta una frustración, como una discusión laboral o una contrariedad inesperada, puede aplicar el principio estoico de distinguir entre lo que puede cambiar (su actitud, su respuesta emocional) y lo que no (la conducta del otro, las circunstancias externas). Esta forma de pensar ayuda a evitar el sufrimiento innecesario y a tomar decisiones más equilibradas y racionales, sin dejarse llevar por el enojo, el miedo o la ansiedad.
        
        p(data-aos="fade-left") Otro aspecto clave del estoicismo en la cotidianidad, es el ejercicio del desapego y la gratitud. Los estoicos recuerdan constantemente que todo es efímero: la salud, las posesiones, incluso las relaciones. Este pensamiento no conduce al pesimismo, sino a una mayor apreciación de lo que se tiene mientras se tiene, y a una mayor fortaleza cuando se pierde. Practicar la gratitud estoica implica valorar lo esencial, vivir con sobriedad y no dejar que el deseo de cosas externas perturbe la tranquilidad del alma. Muchas personas adoptan hoy esta actitud frente al consumismo o ante situaciones de pérdida personal, encontrando consuelo en la aceptación racional de lo inevitable.
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/7.png", data-aos="zoom-in").mb-4.mb-lg-0


    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-4.p-4.p-xl-5(data-aos="fade-left").mb-4
          p.mb-0 El estoicismo se manifiesta también en la búsqueda del deber y la virtud como guías de conducta. En lugar de actuar por impulso, por interés o por presión social, el estoico se pregunta constantemente: “¿Qué es lo correcto?” y actúa en consecuencia, con coherencia y sentido del deber. Esto se traduce en pequeños actos cotidianos de integridad, responsabilidad y autocontrol: cumplir con el trabajo aunque nadie lo supervise, tratar a los demás con justicia, o mantenerse fiel a los propios principios en contextos difíciles. En una sociedad marcada por la prisa, la incertidumbre y la superficialidad, el estoicismo ofrece una brújula ética que orienta hacia una vida más reflexiva, libre y significativa.


    h2 El estoicismo y su relación con el Derecho

    .row.mb-5
      .col-lg-8
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El estoicismo ha influido profundamente en la concepción del Derecho y la justicia, al proponer una visión del mundo basada en la razón, el orden natural y la virtud. La filosofía estoica defiende que el Derecho no es solo un conjunto de normas impuestas por el Estado, sino que debe estar alineado con principios universales de justicia y la dignidad humana. Según Giraldo (2012), esta idea anticipó conceptos esenciales en el desarrollo del Derecho Natural y en la formulación de derechos fundamentales.
    
        p(data-aos="fade-left") Ampliemos la información sobre el estoicismo y su relación con el Derecho:
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in")

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/11.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        
        AcordionA(tipo="b")
          .div(titulo="La razón y la justicia como fundamento del Derecho")
            p Los estoicos creían que el universo está gobernado por una razón universal (logos) y que la justicia es parte de ese orden natural. Desde esta perspectiva, el Derecho debe ser una manifestación de la razón y la equidad, no un simple instrumento del poder político. Esta idea influyó en el pensamiento jurídico romano, en particular en los escritos de Cicerón, quien defendía que las leyes humanas deben inspirarse en la justicia natural.
    
          .div(titulo="El Derecho natural")
            p El estoicismo influyó en el desarrollo del Derecho natural, que sostiene que existen principios jurídicos universales basados en la naturaleza humana y la razón. Según esta visión, los derechos fundamentales no dependen de la voluntad del gobernante, ni de las leyes escritas, sino que son innatos a cada persona, por su propia condición humana.
    
          .div(titulo="Virtud y deber en la práctica jurídica")
            p Los estoicos enseñaban que la virtud es el bien supremo y que el deber moral debe guiar todas las acciones. En el ámbito del Derecho, esto significa que los juristas, jueces y abogados, deben actuar con justicia, prudencia, templanza y fortaleza, priorizando el bien común por encima de los intereses particulares. La ética estoica enfatiza que un verdadero jurista no solo sigue la Ley, sino que busca la justicia en su aplicación.
    
          .div(titulo="Aceptación del orden jurídico y responsabilidad ciudadana")
            p El estoicismo promueve la aceptación serena del destino y de las normas que rigen la sociedad, siempre que sean justas. Esto no significa resignación ante leyes arbitrarias, sino el compromiso de vivir de acuerdo con la razón y la justicia, incluso en circunstancias adversas. Este pensamiento influyó en figuras como Marco Aurelio, quien como emperador y filósofo, defendió la importancia del deber cívico y el respeto a las instituciones.
    

    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Neoplatonismo

    p El neoplatonismo ofrece una visión jerárquica y trascendente de la realidad, en la que el Derecho se concibe como un reflejo del orden racional y armónico del universo.

    .bg-full-width.bg-color-4.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Neoplatonismo
            p.mb-4(data-aos="fade-right") En el PDF Neoplatonismo, se presentan los principios fundamentales de esta corriente y su influencia en el pensamiento jurídico, destacando cómo ideas como el Uno, la razón y la justicia como orden cósmico, contribuyeron a la consolidación del Derecho natural y a la visión moral del Derecho en la filosofía medieval.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Neoplatonismo
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/12.png', alt='')
    

    #t_1_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.5] Ética kantiana

    p La ética kantiana propone una concepción moral basada en el deber, la razón y la autonomía, en contraposición a las teorías que valoran las consecuencias de las acciones.

    .bg-full-width.bg-color-4.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/13.png', alt='')
    
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Ética kantiana
            p.mb-4(data-aos="fade-right") En el PDF Ética kantiana, se presentan los principios fundamentales del pensamiento de Kant y su impacto en el ámbito jurídico, destacando la importancia del imperativo categórico, la universalidad de las normas, la noción de justicia racional y la defensa de la dignidad humana como pilares del Derecho y de los derechos fundamentales en la sociedad contemporánea.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ética kantiana

    #t_1_6.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.6] Utilitarismo

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El utilitarismo es una teoría ética desarrollada principalmente en los siglos XVIII y XIX por filósofos como Jeremy Bentham y John Stuart Mill, quienes buscaban una base racional y práctica para juzgar la moralidad de las acciones humanas. Esta corriente sostiene que una acción es correcta si contribuye a maximizar la felicidad o el bienestar del mayor número de personas. En otras palabras, lo que se considera “bueno” es aquello que produce las mejores consecuencias para la mayoría.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/14.png', alt='')
    

    h2 Principios fundamentales del utilitarismo

    p El utilitarismo se apoya en varios principios claves:

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/info1.png', alt='', style="max-width: 1230px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="10%" y="20%" numero="+")
                h5 Principio de utilidad
                p.mb-0 Toda acción debe evaluarse en función de su utilidad, entendida como la capacidad de producir placer o bienestar y de reducir el dolor o el sufrimiento. Este principio también se conoce como el “principio del mayor bien para el mayor número”.
    
              .bg-color-white.box-shadow.p-3(x="29%" y="20%" numero="+")
                h5 Consecuencialismo
                p.mb-0 El valor moral de una acción no se juzga por las intenciones o por normas abstractas, sino por sus consecuencias reales. Una acción que genera buenos resultados, es moralmente correcta, sin importar otros factores.
    
              .bg-color-white.box-shadow.p-3(x="71%" y="20%" numero="+")
                h5 Imparcialidad
                p.mb-0 Todos los intereses deben considerarse por igual. No hay privilegio moral para ninguna persona en particular; cada individuo cuenta lo mismo, al momento de calcular la utilidad general.
    
              .bg-color-white.box-shadow.p-3(x="91%" y="20%" numero="+")
                h5 Cálculo hedonista 
                p.mb-0 La moralidad puede medirse cuantitativamente, sumando los placeres y restando los dolores que una acción produce. Bentham incluso, propuso una tabla para calcular la intensidad, duración, certeza y extensión del placer.
    

    h2 La relación entre el utilitarismo y el Derecho

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 El utilitarismo ha tenido una profunda influencia en la teoría y práctica del Derecho, especialmente en el pensamiento anglosajón. Jeremy Bentham, uno de sus fundadores, fue también un importante teórico del Derecho y promovió la idea de que las leyes deben elaborarse y evaluarse, en función de su utilidad social.
    
        .bg-color-3.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/14.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Desde esta perspectiva, el Derecho no es un conjunto de normas abstractas con valor en sí mismas, sino una herramienta al servicio del bienestar colectivo. Las leyes deben ser útiles, es decir, deben promover la felicidad, reducir el sufrimiento y resolver los conflictos de forma eficaz y equitativa.
    
        p(data-aos="fade-left").mb-4 Por ejemplo, en el ámbito penal, un enfoque utilitarista buscaría que las sanciones no solo castiguen al infractor, sino que prevengan futuros delitos, protejan a la sociedad y rehabiliten al delincuente, todo ello en función del bienestar general. En el derecho civil o administrativo, se justificarían normas que favorezcan la redistribución de recursos, la eficiencia económica o la protección de derechos, cuando estas contribuyen al bienestar colectivo.

        p El utilitarismo también ha influido en debates actuales sobre derechos humanos, bioética, medio ambiente, políticas públicas y justicia distributiva, al proporcionar un marco racional para sopesar beneficios y perjuicios de diferentes acciones o normativas.
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")
    

    #t_1_7.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.7] Ética marxista
    
    p La ética marxista propone una visión crítica de la moral y el Derecho, entendidos como expresiones históricas y materiales de las relaciones de producción en cada sociedad.

    .bg-full-width.bg-color-4.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/16.png', alt='')
    
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Ética marxista
            p.mb-4(data-aos="fade-right") En el PDF Ética marxista, se analizan los fundamentos teóricos de esta corriente, centrados en el materialismo histórico, la crítica a la moral burguesa y la defensa de una praxis revolucionaria, orientada a la transformación social. Además, se explora su vínculo con el Derecho, concebido como una superestructura ideológica que, en el contexto capitalista, reproduce las condiciones de desigualdad y dominación de clase.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ética marxista


    #t_1_8.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.8] Ética cristiana
    
    .row.mb-5
      .col-lg-8
        .bg-color-1.px-4.py-5(data-aos="fade-left").mb-4
          p.mb-0 La ética cristiana es una corriente moral basada en los principios y enseñanzas de Jesucristo, tal como se encuentran en la Biblia. Se fundamenta en valores absolutos y universales, como el amor, la justicia, la misericordia y la verdad. A diferencia de otras éticas que pueden depender de factores socioeconómicos o históricos, la ética cristiana sostiene que la moralidad proviene de Dios y es inmutable.
        
        p(data-aos="fade-left") Desde la perspectiva cristiana, la ética no es solo un conjunto de normas, sino una guía para la vida, basada en la fe y la relación con Dios. Se enfoca en la dignidad humana, el bien común y la promoción de una sociedad justa y fraterna. De acuerdo con Monroy (2013), está centrada en liberar a los seres humanos del pecado para crear un mundo nuevo, promoviendo el respeto de la vida propia y de las demás personas.

      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/17.png", data-aos="zoom-in").mb-4.mb-lg-0
    
    
    
    h2 Principios fundamentales de la ética cristiana

    p La ética cristiana se fundamenta en diversos principios que guían la conducta humana, según la voluntad de Dios. Entre los más relevantes se encuentran:


    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/18.png', alt='')
    
          .col-lg-8
    
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/icono-1-2.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 El amor como principio supremo
                p.text-center El amor a Dios y al prójimo, es el eje central de la ética cristiana.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/icono-2-2.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 La dignidad humana
                p.text-center Todo ser humano tiene un valor intrínseco por ser creado a imagen y semejanza de Dios.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/icono-3-2.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 La justicia y la misericordia
                p.text-center La ética cristiana equilibra la justicia con la misericordia. Mientras que la justicia implica dar a cada uno lo que le corresponde, la misericordia llama a perdonar y ayudar a los demás, siguiendo el ejemplo de Jesucristo.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/icono-4-2.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 La verdad y la honestidad
                p.text-center La vida cristiana está basada en la búsqueda de la verdad, tanto en el plano moral como en la conducta diaria. La mentira y el engaño son contrarios a los principios cristianos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/icono-5-2.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 El servicio y la humildad
                p.text-center El cristianismo enfatiza la importancia del servicio desinteresado hacia los demás, especialmente hacia los más necesitados.


        h2 La relación entre la ética cristiana y el Derecho

        p La relación entre la ética cristiana y el derecho, ha sido históricamente profunda, puesto que muchas de las leyes y principios jurídicos en diversas sociedades, han estado influidas por valores cristianos. Esta relación se manifiesta en varios aspectos:

    .row.align-items-start.mb-5
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="El Derecho como expresión de la ley moral natural")
            p Desde la perspectiva cristiana, el derecho debe reflejar la ley moral inscrita por Dios en el corazón humano. Santo Tomás de Aquino desarrolló la teoría de la ley natural, según la cual el derecho positivo debe alinearse con la justicia y la moral divina.
    
          .div(titulo="Protección de la dignidad y los derechos humanos")
            p Los principios cristianos han influido en la creación de leyes que protegen la dignidad humana, como el derecho a la vida, la libertad religiosa y la prohibición de la esclavitud.
    
          .div(titulo="Justicia y bien común")
            p La ética cristiana enfatiza que el Derecho debe servir al bien común y a la justicia, promoviendo una convivencia pacífica y solidaria.
    
          .div(titulo="El perdón y la rehabilitación")
            p A diferencia de visiones puramente punitivas del derecho, la ética cristiana promueve la rehabilitación del infractor y la posibilidad de redención, reflejada en sistemas de justicia restaurativa.

          .div(titulo="Límites del Derecho positivo")
            p No todas las leyes humanas son justas desde la perspectiva cristiana. San Agustín y Santo Tomás de Aquino, sostuvieron que una Ley injusta no es una verdadera ley, y los cristianos están llamados a obedecer a Dios antes que a los hombres, cuando el Derecho positivo entra en conflicto con la moral divina.
            
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/19.png", alt="").mb-4.mb-lg-0
    

    #t_1_9.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.9] Ética cívica
    
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/20.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/21.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La ética cívica, para Esquivel (2006), es un conjunto de principios y valores que rigen la convivencia en una sociedad democrática y pluralista. Se basa en la responsabilidad ciudadana, el respeto a los derechos y deberes, la justicia y la solidaridad. A diferencia de las éticas religiosas o filosóficas que pueden depender de creencias particulares, la ética cívica busca establecer normas de conducta comunes para garantizar la armonía social y el bien común.
    
        p(data-aos="fade-left").mb-4 Desde esta perspectiva, la ética cívica promueve la participación activa de los ciudadanos en la vida política, económica y cultural, fomentando valores como la tolerancia, la igualdad y el respeto a la diversidad. Su objetivo es fortalecer la democracia y la cohesión social, garantizando que los individuos actúen con responsabilidad y en beneficio de la comunidad.

    h2 Principios fundamentales de la ética cívica
    p La ética cívica se fundamenta en una serie de principios que permiten la organización de la vida en sociedad, de manera pacífica y justa. Entre los más importantes se encuentran:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-1-2.png")
            .col-lg-7.order-lg-1
              h5 Respeto y tolerancia
              p Toda sociedad pluralista requiere el respeto mutuo entre sus ciudadanos, independientemente de sus creencias, origen o ideología. La tolerancia es fundamental para la convivencia pacífica.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-2-2.png")
            .col-lg-7.order-lg-1
              h5 Responsabilidad y compromiso
              p Cada ciudadano tiene deberes y responsabilidades para con la sociedad. La participación activa en asuntos públicos y el cumplimiento de las leyes, son pilares esenciales de la ética cívica.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-3-2.png")
            .col-lg-7.order-lg-1
              h5 Justicia y equidad
              p La equidad implica garantizar que todos los ciudadanos tengan acceso a las mismas oportunidades y derechos, promoviendo una distribución justa de los recursos y los beneficios sociales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-4-2.png")
            .col-lg-7.order-lg-1
              h5 Solidaridad y bien común
              p La vida en sociedad, requiere de cooperación y apoyo mutuos. La solidaridad fortalece la cohesión social y permite superar desigualdades y crisis colectivas.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-5-2.png")
            .col-lg-7.order-lg-1
              h5 Participación democrática
              p La democracia se sostiene en la participación de los ciudadanos, en la toma de decisiones. Votar, debatir y respetar las instituciones democráticas, son acciones fundamentales para el funcionamiento de un Estado de Derecho.

    h2 Relación entre la ética cívica y el Derecho
    p La ética cívica y el Derecho, están estrechamente vinculados, puesto que ambos buscan regular la conducta humana en sociedad, para garantizar la convivencia pacífica y el orden social. Esta relación se manifiesta en diversos aspectos:

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/22.png", alt="").mb-4.mb-lg-0
      .col-lg-8

    
        AcordionA(tipo="b")
          .div(titulo="El Derecho como instrumento de regulación social")
            p Las leyes establecen normas obligatorias que reflejan valores de la ética cívica, como la justicia, la igualdad y el respeto por los derechos humanos.
    
          .div(titulo="Garantía de derechos y libertades")
            p El Derecho protege los derechos fundamentales de los ciudadanos, como la libertad de expresión, la igualdad ante la Ley y el acceso a la justicia, principios también defendidos por la ética cívica.
    
          .div(titulo="Deberes ciudadanos y cumplimiento de la Ley")
            p La ética cívica enfatiza la importancia de respetar las normas jurídicas y cumplir con los deberes ciudadanos, como el pago de impuestos, la participación en elecciones y el respeto al orden público.
    
          .div(titulo="Promoción de una cultura de paz y democracia")
            p Tanto el Derecho como la ética cívica, buscan prevenir conflictos y fomentar la resolución pacífica de diferencias a través del diálogo y la justicia social.

          .div(titulo="Límites del Derecho")
            p Aunque el Derecho es una herramienta fundamental para la regulación social, no todas las leyes son justas desde la ética cívica. En contextos de injusticia o desigualdad, la ética cívica puede servir como una guía para la reforma y mejora del sistema legal.





    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/39401" target="_blank" rel="noopener noreferrer") Torres Hernández, Z. (2015). Introducción a la ética. Grupo Editorial Patria. 

              
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/63103" target="_blank" rel="noopener noreferrer") Muinelo Cobo, J. C. (2011). La invención del derecho en Aristóteles. Dykinson. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/235559" target="_blank" rel="noopener noreferrer") Loaiza Merediz, A. (2023). Principios de Filosofía y Ética. Grupo Editorial Éxodo. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/79032" target="_blank" rel="noopener noreferrer") Divenosa, M. (2010). Filosofía para la formación ética y ciudadana I. Editorial Maipue.


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Fy9TkHcMkSk" target="_blank" rel="noopener noreferrer") Etica Psicológica. (2019). La ética utilitarista: conflicto de principios éticos y utilitarismo - Teorías éticas

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=xO5ErzjQyPU" target="_blank" rel="noopener noreferrer") Cátedra Alfonso Reyes. (2014). FERNANDO SAVATER - Ética y ciudadanía (conferencia)

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=OmJlsrPXsPk" target="_blank" rel="noopener noreferrer") La repostería. (2021). Historia de la ética- Marx: la moral como ideología

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Fy9TkHcMkSk" target="_blank" rel="noopener noreferrer") La repostería. (2020). Historia de la ética- Cirenaicos y epicúreos: el placer

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=KLOjzAWgfcg" target="_blank" rel="noopener noreferrer") La repostería. (2020). Historia de la ética-Aristóteles II: la virtud como término medio 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=B20ErCDdG9Q" target="_blank" rel="noopener noreferrer") Etica Psicológica. (2019). La  ética deontológica: autonomía personal y política - Teorías éticas

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
