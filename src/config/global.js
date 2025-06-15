export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Tipos de ética - Práctica del abogado',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Tipos de ética',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Ética de la virtud',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Epicureismo',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Estoicismo',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Neoplatonismo',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Ética kantiana',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Utilitarismo',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Ética marxista',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Ética cristiana',
            hash: 't_1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Ética cívica',
            hash: 't_1_9',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Práctica del abogado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Ética del abogado',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Axiología moral',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Los principios éticos del abogado',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Aristóteles. (2004). Ética a Nicómaco. El Cid Editor.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/93982',
    },
    {
      referencia:
        'Parra Álvarez, C. (2022) La filosofía y el sabio estoico: Examen de la virtud. Universidad del Bío-Bío.',
      link: 'https://revistas.ubiobio.cl/index.php/RHE/article/view/5282',
    },
    {
      referencia:
        'Giraldo Díaz, R. (2012). Política y la estética en el estoicismo. Criterio Libre jurídico, 17, 59-71.',
      link:
        'https://revistas.unilibre.edu.co/index.php/criteriojuridico/article/view/742/577',
    },
    {
      referencia:
        'Martin De Blassi, F. G. (2021). Plotino y la novedad de su principio metafísico. Franciscanum. Revista de las Ciencias del Espíritu, 63(176).',
      link:
        'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0120-14682021000200008',
    },
    {
      referencia: 'Moreno, D. (s.f.). JUSTICIA Michael Sandel.',
      link: 'https://www.academia.edu/34763569/JUSTICIA_Michael_Sandel',
    },
    {
      referencia:
        'Ortiz Quevedo, J. P., Bravo Dedfor, C. & Arismendy Mazabel, R. (2020). Concepciones de violencia intrafamiliar de los militares del Batallón de Comunicaciones del Ejército Nacional a partir de sus configuraciones familiares. Misión Jurídica, 13(19), 1-26.',
      link: 'http://doi.org/10.25058/1794600X.1799',
    },
    {
      referencia:
        'Monroy Rueda, F. J. (2013). La formación moral cristiana en los grupos juveniles. Pontificia Universidad Javeriana.',
      link:
        'https://repository.javeriana.edu.co/it ems/e1e3650c-c9ca-48e6-ba5d-31486d1399f6',
    },
    {
      referencia:
        'Esquivel Estrada, N. H. (2006). Ética cívica: Una alternativa más para la educación. Tiempo de educar, 7(13), 31-66.',
      link: 'http://www.redalyc.org/articulo.oa?id=31171303',
    },
    {
      referencia:
        'Herazo Girón, F. A. (2013) La ética profesional del abogado. Revista cultural Unilibre, 2, 16-28.',
      link:
        'https://revistas.unilibre.edu.co/index.php/revista_cultural/article/view/4053',
    },
    {
      referencia:
        'Faggioli, A. A., Fuentes Águila, M. R. & Castellanos Fuentes, P. E. (2021). Principios que rigen la actuación del abogado como auxiliar de la justicia en la prevención de la corrupción. Revista de la Facultad de Derecho y Ciencias Políticas, 51(135), 348-367.',
      link:
        'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0120-388620210002000348',
    },
  ],
  glosario: [
    {
      termino: 'Axiología del Derecho',
      significado:
        'Rama de la filosofía jurídica que estudia los valores que fundamentan el Derecho, como la justicia, la equidad, el bien común y la seguridad jurídica. Se interesa por el contenido ético del Derecho y su relación con los ideales morales de una sociedad.',
    },
    {
      termino: 'Ética cristiana',
      significado:
        'Sistema moral basado en las enseñanzas de Jesucristo y la tradición cristiana. Pone énfasis en valores como el amor al prójimo, la caridad, la humildad y el perdón, y considera que la conducta humana debe orientarse, según la voluntad de Dios.',
    },
    {
      termino: 'Ética cívica',
      significado:
        'Conjunto de principios y valores que regulan la convivencia democrática y el respeto a los derechos de los demás, en una sociedad pluralista. Promueve el diálogo, la tolerancia, la responsabilidad ciudadana y la justicia social.',
    },
    {
      termino: 'Ética kantiana',
      significado:
        'Corriente ética desarrollada por Immanuel Kant, que se basa en el deber moral. Propone que las acciones deben regirse por principios racionales y universales, conocidos como imperativos categóricos, y que la moralidad no depende de las consecuencias, sino de la intención y el cumplimiento del deber.',
    },
    {
      termino: 'Ética marxista',
      significado:
        'Concepción moral basada en el pensamiento de Karl Marx, que vincula la ética con las condiciones materiales y las relaciones de producción. Critica las éticas tradicionales por encubrir las injusticias del sistema capitalista y propone una ética revolucionaria orientada a la emancipación de los trabajadores y la eliminación de la explotación.',
    },
    {
      termino: 'Ética de la virtud',
      significado:
        'Perspectiva ética que valora el desarrollo del carácter moral y las virtudes personales, como la justicia, la prudencia, el coraje y la templanza. Tiene sus raíces en la filosofía griega clásica, especialmente en las ideas de Aristóteles, y considera que la vida buena consiste en cultivar hábitos virtuosos.',
    },
    {
      termino: 'Epicureísmo',
      significado:
        'Doctrina filosófica fundada por Epicuro, que propone que el fin de la vida es alcanzar el placer entendido como la ausencia de dolor y perturbaciones. Defiende una vida simple, moderada y guiada por la razón, y considera que el placer intelectual es superior al placer corporal.',
    },
    {
      termino: 'Estoicismo',
      significado:
        'Escuela filosófica que enseña que la felicidad se alcanza mediante el dominio de las pasiones y la aceptación racional del destino. Promueve la virtud, la autodisciplina y la conformidad con la naturaleza y la razón universal.',
    },
    {
      termino: 'Neoplatonismo',
      significado:
        'Corriente filosófica que surge en el siglo III d.C., influenciada por Platón, que combina elementos del pensamiento platónico con ideas religiosas. Propone una jerarquía del ser que parte de "lo Uno" como principio supremo, y considera que el alma puede alcanzar la perfección a través del conocimiento y la contemplación.',
    },
    {
      termino: 'Utilitarismo',
      significado:
        'Corriente ética que sostiene que una acción es moralmente correcta si produce el mayor beneficio o felicidad para el mayor número de personas. Sus principales exponentes son Jeremy Bentham y John Stuart Mill. Valora las consecuencias de las acciones como criterio fundamental para determinar su moralidad.',
    },
  ],
}
