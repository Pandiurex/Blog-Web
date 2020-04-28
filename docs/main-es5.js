function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/django/django.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/django/django.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDjangoDjangoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <div class=\"image\">\n    <img src=\"assets/fjango-logo.png\" alt=\"software\" class=\"main-imagen\" />\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12 edicion\">\n      <h1>Django</h1>\n      <p>\n        Django es un framework de desarrollo web de código abierto, escrito en\n        Python, que respeta el patrón de diseño conocido como\n        Modelo–vista–template. Fue desarrollado en origen para gestionar varias\n        páginas orientadas a noticias de la World Company de Lawrence, Kansas, y\n        fue liberada al público bajo una licencia BSD en julio de 2005; el\n        framework fue nombrado en alusión al guitarrista de jazz gitano Django\n        Reinhardt. En junio de 2008 fue anunciado que la recién formada Django\n        Software Foundation se haría cargo de Django en el futuro. La meta\n        fundamental de Django es facilitar la creación de sitios web complejos.\n        Django pone énfasis en el re-uso, la conectividad y extensibilidad de\n        componentes, el desarrollo rápido y el principio No te repitas (DRY, del\n        inglés Don't Repeat Yourself). Python es usado en todas las partes del\n        framework, incluso en configuraciones, archivos, y en los modelos de\n        datos.\n      </p>\n      <h1>Caracteristicas Principales</h1>\n      Al igual que Ruby on Rails, otro popular framework de código abierto,\n      Django se usó en producción durante un tiempo antes de que se liberara al\n      público; fue desarrollado por Adrian Holovaty, Simon Willison, Jacob\n      Kaplan-Moss y Wilson Miner mientras trabajaban en World Online, y\n      originalmente se utilizó para administrar tres sitios web de noticias: The\n      Lawrence Journal-World, lawrence.com y KUsports.com. Los orígenes de\n      Django en la administración de páginas de noticias son evidentes en su\n      diseño, ya que proporciona una serie de características que facilitan el\n      desarrollo rápido de páginas orientadas a contenidos. Por ejemplo, en\n      lugar de requerir que los desarrolladores escriban controladores y vistas\n      para las áreas de administración de la página, Django proporciona una\n      aplicación incorporada para administrar los contenidos, que puede\n      incluirse como parte de cualquier página hecha con Django y que puede\n      administrar varias páginas a partir de una misma instalación; la\n      aplicación administrativa permite la creación, actualización y eliminación\n      de objetos de contenido, llevando un registro de todas las acciones\n      realizadas sobre cada uno, y proporciona una interfaz para administrar los\n      usuarios y los grupos de usuarios (incluyendo una asignación detallada de\n      permisos). La distribución principal de Django también aglutina\n      aplicaciones que proporcionan un sistema de comentarios, herramientas para\n      sindicar contenido via RSS y/o Atom, \"páginas planas\" que permiten\n      gestionar páginas de contenido sin necesidad de escribir controladores o\n      vistas para esas páginas, y un sistema de redirección de URLs. Otras\n      características de Django son:\n      <li>Un mapeador objeto-relacional.</li>\n      <li>\n        Aplicaciones \"enchufables\" que pueden instalarse en cualquier página\n        gestionada con Django.\n      </li>\n      <li>Una API de base de datos robusta.</li>\n      <li>\n        Un sistema incorporado de \"vistas genéricas\" que ahorra tener que\n        escribir la lógica de ciertas tareas comunes.\n      </li>\n      <li>\n        Un sistema extensible de plantillas basado en etiquetas, con herencia de\n        plantillas.\n      </li>\n      <li>\n        Un despachador de URLs basado en expresiones regulares.\n      </li>\n      <li>\n        Un sistema \"middleware\" para desarrollar características adicionales;\n        por ejemplo, la distribución principal de Django incluye componentes\n        middleware que proporcionan cacheo, compresión de la salida,\n        normalización de URLs, protección CSRF y soporte de sesiones.\n      </li>\n      <li>\n        Soporte de internacionalización, incluyendo traducciones incorporadas de\n        la interfaz de administración.\n      </li>\n      <li></li>\n      <li>\n        Documentación incorporada accesible a través de la aplicación\n        administrativa (incluyendo documentación generada automáticamente de los\n        modelos y las bibliotecas de plantillas añadidas por las aplicaciones).\n      </li>\n      Django también es una plataforma habitual que brinda multiples\n      herramientas\n      <h1>Django Windows</h1>\n      <div>\n        <img src=\"assets/win-logo.jpg\" alt=\"\" class=\"logo\" />\n      </div>\n\n      <p>\n        Para ver poder instalar Django, debemos abrir nuestro navegador y\n        buscamos LibreOffice en nuestro servicio de busqueda preferida, ya sea\n        Google, Yahoo, Bing, etc, yo les proporciono el link aqui:\n\n        <a href=\"https://www.djangoproject.com\" target=\"blank\">Django</a>\n      </p>\n      <div>\n        <img src=\"assets/django-linux (1).png\" alt=\"software\" />\n      </div>\n      <p>\n        En esta pantalla podremos ver las descripcion del programa, y\n        simplemente copiamos la parte que dice: python -m pip install Django\n      </p>\n\n      <div>\n        <img src=\"assets/django-linux (2).png\" alt=\"software\" />\n      </div>\n      <p>\n        Abrimos la consola de windows y pegamos el pip de arriba y comenzara la\n        instalacion de Django\n      </p>\n      <div>\n        <img src=\"assets/django-windows.png\" alt=\"software\" />\n      </div>\n      <p>\n        Y listo django quedara instalado en tu sistema\n      </p>\n\n      <h1>Django en Linux</h1>\n\n      <div>\n        <img src=\"assets/django-linux (1).png\" alt=\"software\" />\n      </div>\n\n      <p>\n        Para instalar Django en linux usaremos la forma mas sencilla: y de la\n        misma forma que en windows abrimos la pagina de django\n      </p>\n      <div>\n        <img src=\"assets/django-linux (2).png\" alt=\"software\" />\n\n        <p>\n          En esta pantalla podremos ver las descripcion del programa, y\n          simplemente copiamos la parte que dice: pip3 install Django==2.2.5\n        </p>\n        <div>\n          <img src=\"assets/django-linux (3).png\" alt=\"software\" />\n        </div>\n      <div>\n        <p>\n          Comprobamos si se instalo bien Django con el siguiente comando: python3 -m django --version\n        </p>\n        <div>\n          <img src=\"assets/django-linux (4).png\" alt=\"software\" />\n        </div>\n        <p>\n          Iniciamos un proyecto nuevo con el siguiente comando: django-admin startproject SSOR\n        </p>\n        <div>\n          <img src=\"assets/django-linux (5).png\" alt=\"software\" />\n        </div>\n        <p>\n          Una vez creado el proyecto simplemente accedemos a la carpeta del proyecto y ahora levantamos el servidor\n        </p>\n        <div>\n          <img src=\"assets/django-linux (6).png\" alt=\"software\" />\n        </div>\n        <p>\n          En esta pantalla podremos ver las descripcion del programa, y\n          simplemente copiamos la parte que dice: pip3 install Django==2.2.5\n        </p>\n        <div>\n          <img src=\"assets/django-linux (7).png\" alt=\"software\" />\n        </div>\n        <p>\n          Listo ya podemos editar el codigo de nuestro proyecto Django\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/drop-soft/drop-soft.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/drop-soft/drop-soft.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDropSoftDropSoftComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dropdown menu\">\n  <button\n    class=\"btn btn-secondary dropdown-toggle\"\n    type=\"button\"\n    id=\"dropdownMenuButton\"\n    data-toggle=\"dropdown\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"false\"\n  >\n    Software\n  </button>\n\n  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n    <ul class=\"list\">\n      <li *ngFor=\"let myMenu of menu\">\n       <a class=\"dropdown-item\" [routerLink]=myMenu.software>\n          {{ myMenu[\"software\"] }}\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdown/dropdown.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdown/dropdown.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDropdownDropdownComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dropdown menu\">\n  <button\n    class=\"btn btn-secondary dropdown-toggle\"\n    type=\"button\"\n    id=\"dropdownMenuButton\"\n    data-toggle=\"dropdown\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"false\"\n  >\n    S. Operat\n  </button>\n\n  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n    <ul class=\"list\">\n      <li *ngFor=\"let myMenu of menu\">\n        <a class=\"dropdown-item\" [routerLink]=myMenu.software>\n          {{ myMenu[\"software\"] }}\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/free-office/free-office.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/free-office/free-office.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFreeOfficeFreeOfficeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <div class=\"image\">\n    <img src=\"assets/libre-office.jpg\" alt=\"software\" class=\"main-imagen\" />\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12 edicion\">\n      <h1>Free Office - Libre Office</h1>\n\n      <p>\n        LibreOffice es un Software Libre de ofimática el cual incluye procesador\n        de texto, planilla de cálculo y editor de presentaciones entre otras. Es\n        impulsado y desarrollado por la misma comunidad, bajo un proyecto de la\n        organización sin fines de lucro, llamada The Document Foundation.\n        07/08/2015 Noticias Software Actualizado el: 10/08/2015 LibreOffice\n        nació como un desprendimiento de OpenOffice y es desarrollado por\n        usuarios compartiendo su trabajo con el mundo de manera no restrictiva.\n        Recientemente se liberó la nueva versión 5 de LibreOffice. Esta nueva\n        versión incluye opciones de compatibilidad con Windows 10 y entornos de\n        64 bits, ojo, no solo es compatible con Windows, también es compatible\n        con plataformas Linux y OS X. La nueva versión tiene una nueva interfaz\n        de usuario, que según sus creadores, permite una vista más limpia y un\n        mejor aprovechamiento de la pantalla. Se puede destacar que también a\n        mejorado su compatibilidad con Microsoft Office y con Apple iWork. Posee\n        alrededor de 80 millones de usuarios, en esta versión han logrado mayor\n        estabilidad y prestaciones. Esta misma base, se utilizará para la\n        versión Android, que por el momento, es sólo visor de archivos pero que\n        incorporará la posibilidad de editar documentos en el corto plazo.\n        También avanza, el desarrollo de una versión basada en la Web al estilo\n        de lo que ofrecen Google y Microsoft.\n      </p>\n\n      <h1>Free Office Windows</h1>\n      <div>\n        <img src=\"assets/win-logo.jpg\" alt=\"\" class=\"logo\" />\n      </div>\n\n      <p>\n        Para ver poder instalar libre office, debemos abrir nuestro navegador y\n        buscamos LibreOffice en nuestro servicio de busqueda preferida, ya sea\n        Google, Yahoo, Bing, etc, yo les proporciono el link aqui:\n\n        <a href=\"https://es.libreoffice.org\" target=\"blank\">Libre Office</a>\n      </p>\n      <div>\n        <img src=\"assets/windows-free-office (1).jpg\" alt=\"software\" />\n      </div>\n      <p>\n        En esta pantalla podremos ver lass descripcion del programa, y\n        simplemente le damos a la pestaña de descarga\n      </p>\n\n      <div>\n        <img src=\"assets/windows-free-office (2).jpg\" alt=\"software\" />\n      </div>\n      <p>\n        Seleccionamos la version del sistema operativo que tenemos, ya sea de 64\n        o 32 bits, y le damos en descargar\n      </p>\n      <div>\n        <img src=\"assets/windows-free-office (3).jpg\" alt=\"software\" />\n      </div>\n      <p>\n        Una vez descargado, le damos doble clic al archivo y nos saldra una\n        ventana de instalacion como esta, le damos siguiente\n      </p>\n      <div>\n        <img src=\"assets/windows-free-office (4).jpg\" alt=\"software\" />\n      </div>\n      <p>\n        Aqui seleccionamos la opcion de instalacion tipica para que le\n        instalador haga la configuracion por nosotros y le damos siguiente y\n        comenzara la instalacion del programa\n      </p>\n      <div>\n        <img src=\"assets/windows-free-office (5).jpg\" alt=\"software\" />\n      </div>\n      <p>\n        Una vez terminado la instalacion nos aparecera en nuestro escritorio el\n        icono del programa, simplemente le damos doble click y podemos comenzar\n        a trabajar en este\n      </p>\n      <div>\n        <img src=\"assets/windows-free-office (1).png\" alt=\"software\" />\n      </div>\n      <h1>Servicios de Linux</h1>\n\n      <div>\n        <img src=\"assets/linux-logo.jpg\" alt=\"software\" />\n      </div>\n\n      <p>\n        Para instalar libre office en linux usaremos la mas sencilla: los\n        sistemas linux mas comunes cuentan con un gestor de aplicaciones o un\n        tienda tambien llamada asi la cual cuenta con muchas aplicaciones que\n        podemos instalar directamente sin meternos en consola, simplemente la\n        abrimos\n      </p>\n      <div>\n        <img src=\"assets/linux-free-office (2).png\" alt=\"software\" />\n\n        <p>\n          En donde se encuentre la opcion de busqueda, insertamos el nombre de\n          \"Libre Office\" y nos aparecera la opcion adecuada, la unica diferencia\n          es que aqui nos aparecen de manera individual asi que instalaremos de\n          uno a uno los servicios de libre office\n        </p>\n        <div>\n          <img src=\"assets/linux-free-office (3).png\" alt=\"software\" />\n        </div>\n        <p>\n          Seleccionamos la prrimera que en mi caso la que falta es el de la hoja\n          de calculalo, y simplemente le damos en instalar, automaticamente\n          comenzara con la instalacion del sistema\n        </p>\n        <div>\n          <img src=\"assets/linux-free-office (4).png\" alt=\"software\" />\n        </div>\n        <p>\n          Comenzara a instalar el paquete\n        </p>\n        <div>\n          <img src=\"assets/linux-free-office (5).png\" alt=\"software\" />\n        </div>\n        <p>\n          Una vez terminado de instlar, nos aparecera la opcion de lanzar o\n          ejecutar, simplemente le damos click y se nos abrira la hoja de\n          calculo\n        </p>\n        <div>\n          <img src=\"assets/linux-free-office (6).png\" alt=\"software\" />\n        </div>\n        <p>\n          Aqui podemos ver la hoja de calculo funcionando y listo¡ es tan\n          sencillo como eso, ahora solo resta instalar el resto y tendras libre\n          office instalado en tu sistema\n        </p>\n        <div>\n          <img src=\"assets/linux-free-office (1).png\" alt=\"software\" />\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <div class=\"image\">\n    <img\n      src=\"assets/desarrollo-software.jpg\"\n      alt=\"software\"\n      class=\"imagen\"\n    />\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-4 edit\">\n      <h3>Sistemas Operativos</h3>\n      <app-images></app-images>\n    </div>\n    <div class=\"col-sm-4 edit\">\n      <h3>Software Variado</h3>\n\n      <app-images></app-images>\n    </div>\n    <div class=\"col-sm-4 edit\">\n      <h3>Servidores</h3>\n\n      <app-images></app-images>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/images/images.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/images/images.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsImagesImagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"image\" *ngFor=\"let item of images, let i=index\" class=\"image\">\n    <img src=\"assets/{{item.img}}.jpg\" alt=\"software\" class=\"imagen\">\n    </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ionic/ionic.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ionic/ionic.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsIonicIonicComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <div class=\"image\">\n    <img src=\"assets/ionic-logo.jpg\" alt=\"software\" class=\"main-imagen\" />\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12 edicion\">\n      <h1>Ionic</h1>\n      <p>\n        Se le denomina un SDK (Software Development Kit) completo y de código\n        abierto para el desarrollo de aplicaciones móviles híbridas. La versión\n        original fue lanzada en 2013 y construida sobre AngularJS y Apache\n        Cordova. Las versiones más recientes, conocidas como Ionic 3 o\n        simplemente «Ionic», están basadas en AngularJS. Ionic proporciona\n        herramientas y servicios para desarrollar aplicaciones móviles híbridas\n        utilizando tecnologías web como CSS, HTML5 y Sass (Syntactically awesome\n        style sheets). Las aplicaciones pueden compilarse con estas tecnologías\n        web y luego distribuirse a través de tiendas de aplicaciones nativas\n        para ser instalado en dispositivos aprovechando Cordova. Ionic fue\n        creado por Max Lynch, Ben Sperry y Adam Bradley de Drifty Co. en 2013.\n        Ionic es la plataforma que facilita la creación de aplicaciones móviles\n        con tecnologías web para los programadores web. La plantilla de Ionic\n        permite a los desarrolladores crear aplicaciones móviles en diferentes\n        plataformas que pueden instalarse en teléfonos con Android e iOS.\n        Desarrollado sobre AngularJS y lanzada su versión alfa el noviembre de\n        2013. Se lanzó una versión beta 1.0 en marzo de 2014, una versión final\n        1.0 en mayo de 2015 y varias versiones 2.0 en 2016. Ionic utiliza su\n        base para proporcionarnos la estructura de aplicación mínima sobre la\n        que poder comenzar a trabajar, mientras que Ionic en sí nos ofrecerá\n        facilidades en el desarrollo de la interfaz de usuario. Con esta dupla,\n        AngularJS con su versatilidad y potencia para la creación de\n        aplicaciones e Ionic Framework para el desarrollo de la interfaz,\n        obtenemos una herramienta de creación de aplicaciones completísima, con\n        la que ahorraremos tiempo y trabajo en el desarrollo de cada proyecto.\n      </p>\n      <h1>Caracteristicas Principales</h1>\n      <ul>\n        <li>\n          Desde una única fuente podremos llegar a las plataformas que soporta\n          este framework (Android e iOS).\n        </li>\n        <li>\n          El desarrollo principal se realiza en HTML junto con CSS y JS,\n          lenguajes muy extendidos por la comunidad de desarrolladores, con lo\n          que la implantación de esta herramienta en la empresa, facilitará el\n          desarrollo de proyectos de la forma más efectiva aun cuando la\n          plantilla de desarrolladores contenga nuevas incorporaciones.\n        </li>\n        <li>\n          Que una herramienta tan “reciente” como Ionic sea capaz de dar soporte\n          a un gigantesco framework como AngularJS, nos hace plantearnos hasta\n          dónde serán capaces de llegar, teniendo ya en vistas incluir otros\n          frameworks como EmberJS o KnockOut por ejemplo.\n        </li>\n        <li>\n          Si ya contamos con una web app que queremos convertir en aplicación\n          móvil, en la mayoría de los casos habremos hecho uso de JavaScript,\n          por lo que el código es reutilizable.\n        </li>\n        <li>\n          Para el caso de aplicaciones híbridas, tendremos con un único proceso\n          de desarrollo e implementación, una app para Android, iOS y web.\n        </li>\n        <li>\n          Aunque el soporte para Windows y Windows Phone está en su roadmap para\n          su implementación en próximas versiones, algunos usuarios ya han\n          conseguido mediante algunas modificaciones en su código hacer\n          funcionar apps de Ionic en Windows y Windows Phone .\n        </li>\n        <li>\n          Escribe el código una vez, ejecútalo en la plataforma que desees.\n        </li>\n      </ul>\n\n      <h1>Ionic Windows</h1>\n      <div>\n        <img src=\"assets/win-logo.jpg\" alt=\"\" class=\"logo\" />\n      </div>\n\n      <p>\n        Para ver poder instalar Ionic, debemos abrir nuestro navegador y\n        buscamos Ionic en nuestro servicio de busqueda preferida, ya sea Google,\n        Yahoo, Bing, etc, yo les proporciono el link aqui:\n\n        <a href=\"https://ionicframework.com\" target=\"blank\">Ionic</a>\n      </p>\n      <div>\n        <img src=\"assets/ionic-win(1).jpg\" alt=\"software\" class=\"image-cont\" />\n      </div>\n      <p>\n        En esta pantalla podremos ver las descripcion del programa, y\n        simplemente pasamos a la seccion de descarga\n      </p>\n\n      <div>\n        <img src=\"assets/ionic-win(2).jpg\" alt=\"software\" class=\"image-cont\" />\n      </div>\n      <p>\n        Aqui veremos el comando que utilizaremos para instalarlo en nuestro\n        sistema windows\n      </p>\n      <div>\n        <img src=\"assets/ionic-win(3).jpg\" alt=\"software\" class=\"image-cont\" />\n      </div>\n      <p>\n        Abrimos la consola de windows y utilizamos el comando npm para instalar\n        ionic\n      </p>\n      <div>\n        <img src=\"assets/ionic-win(4).jpg\" alt=\"software\" class=\"image-cont\" />\n      </div>\n      <p>\n        Aqui podemos observar cuando haya terminado de ser instalado\n      </p>\n      <div>\n        <img src=\"assets/ionic-win(5).jpg\" alt=\"software\" class=\"image-cont\" />\n      </div>\n      <p>\n        Despues creamos un nuevo proyecto y empezaremos el desarrollo utilizando\n        una plantilla\n      </p>\n      <div>\n        <img src=\"assets/ionic-win(6).jpg\" alt=\"software\" class=\"image-cont\" />\n      </div>\n      <div>\n        <img src=\"assets/ionic-win(7).jpg\" alt=\"software\" class=\"image-cont\" />\n      </div>\n      <p>\n        Y aqui podemos observar en tiempo real que es 100% funcional\n      </p>\n\n      <h1>Ionic en Linux</h1>\n      <div>\n        <img src=\"assets/linux-logo.jpg\" alt=\"\" class=\"logo\" />\n      </div>\n\n      <p>\n        Para ver poder instalar Ionic, debemos abrir nuestro navegador y\n        buscamos Ionic en nuestro servicio de busqueda preferida, ya sea Google,\n        Yahoo, Bing, etc, yo les proporciono el link aqui:\n\n        <a href=\"https://ionicframework.com\" target=\"blank\">Ionic</a>\n      </p>\n      <div>\n        <img src=\"assets/ionic-win(1).jpg\" alt=\"software\" class=\"image-cont\" />\n      </div>\n      <p>\n        En esta pantalla podremos ver las descripcion del programa, y\n        simplemente pasamos a la seccion de descarga\n      </p>\n\n      <div>\n        <img src=\"assets/ionic-win(2).jpg\" alt=\"software\" class=\"image-cont\" />\n      </div>\n      <p>\n        Aqui veremos el comando que utilizaremos para instalarlo en nuestro\n        sistema linux\n      </p>\n\n      <div>\n        <img src=\"assets/ionic-win(2).jpg\" alt=\"software\" class=\"image-cont\" />\n\n        <p>\n          Utilizamos npm en la consola para instalar ionic en nuestro sistema\n          linux\n        </p>\n        <div>\n          <img\n            src=\"assets/ionic-lin(1).jpg\"\n            alt=\"software\"\n            class=\"image-cont\"\n          />\n        </div>\n        <div>\n          <p>\n            Creamos un proyecto nuevo y levantamos el servidor\n          </p>\n          <div>\n            <img\n              src=\"assets/ionic-lin(2).jpg\"\n              alt=\"software\"\n              class=\"image-cont\"\n            />\n          </div>\n          <p>\n            Se nos abrira el proyecto\n          </p>\n          <div>\n            <img\n              src=\"assets/ionic-lin(3).jpg\"\n              alt=\"software\"\n              class=\"image-cont\"\n            />\n          </div>\n          <p>\n            Una vez levantado el servidor podemos comenzar a trabajar con la\n            plantilla\n          </p>\n          <div>\n            <img\n              src=\"assets/ionic-lin(4).jpg\"\n              alt=\"software\"\n              class=\"image-cont\"\n            />\n          </div>\n          <p>\n            Aqui creamos fierentes componentes llamados TABS\n          </p>\n          <div>\n            <img\n              src=\"assets/ionic-lin(5).jpg\"\n              alt=\"software\"\n              class=\"image-cont\"\n            />\n          </div>\n          <div>\n            <img\n              src=\"assets/ionic-lin(6).jpg\"\n              alt=\"software\"\n              class=\"image-cont\"\n            />\n          </div>\n          <p>\n            Listo ya podemos trabajar nuestro proyecto con IONIC\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/laravel/laravel.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/laravel/laravel.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLaravelLaravelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"image\">\n<img src=\"assets/laravel-logo.png\" alt=\"software\" class=\"main-imagen\" />\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12 edicion\">\n    <h1>Laravel</h1>\n    <p>\n      Laravel es un framework de código abierto para desarrollar aplicaciones y\n      servicios web con PHP 5 y PHP 7. Su filosofía es desarrollar código PHP de\n      forma elegante y simple, evitando el \"código espagueti\". Fue creado en\n      2011 y tiene una gran influencia de frameworks como Ruby on Rails, Sinatra\n      y ASP.NET MVC. Laravel tiene como objetivo ser un framework que permita el\n      uso de una sintaxis elegante y expresiva para crear código de forma\n      sencilla y permitiendo multitud de funcionalidades. Intenta aprovechar lo\n      mejor de otros frameworks y aprovechar las características de las últimas\n      versiones de PHP. Gran parte de Laravel está formado por dependencias,\n      especialmente de Symfony, esto implica que el desarrollo de Laravel\n      dependa también del desarrollo de sus dependencias.\n    </p>\n    <h1>Caracteristicas Principales</h1>\n    Las características de Laravel son:\n    <li>Sistema de ruteo, también RESTful.</li>\n    <li>\n      Blade, Motor de plantillas.\n    </li>\n    <li>Peticiones Fluent.</li>\n    <li>\n      Eloquent ORM.\n    </li>\n    <li>\n      Basado en Composer.\n    </li>\n    <li>\n      Soporte para el caché.\n    </li>\n    <li>\n      Soporte para MVC.\n    </li>\n    <li>\n      Usa componentes de Symfony.\n    </li>\n    <li>\n      Adopta las especificaciones PSR-2​ y PSR-4.\n    </li>\n    <li>\n      Documentación incorporada accesible a través de la aplicación\n      administrativa (incluyendo documentación generada automáticamente de los\n      modelos y las bibliotecas de plantillas añadidas por las aplicaciones).\n    </li>\n    Laravel también es una plataforma habitual que brinda multiples herramientas\n    <h1>Laravel Windows</h1>\n    <div>\n      <img src=\"assets/win-logo.jpg\" alt=\"\" class=\"logo\" />\n    </div>\n\n    <p>\n      Para ver poder instalar Laravel, debemos abrir nuestro navegador y\n      buscamos Laravel en nuestro servicio de busqueda preferida, ya sea Google,\n      Yahoo, Bing, etc, yo les proporciono el link aqui:\n\n      <a href=\"https://laravel.com\" target=\"blank\">Laravel</a>\n    </p>\n    <div>\n      <img src=\"assets/laravel-linux (1).png\" alt=\"software\" />\n    </div>\n    <p>\n      Tambien vamos a tener que descargar composer, aqui les dejo el link\n      <a href=\"https://getcomposer.org\" target=\"blank\">Composer</a>\n    </p>\n\n    <div>\n      <img src=\"assets/laravel-linux (2).png\" alt=\"software\" />\n    </div>\n    <p>\n      Simplemente descargamos el instalador de composer, el cual sera la forma\n      mas sencilla de trabajar con laravel\n    </p>\n    <div>\n      <img src=\"assets/laravel-linux (10).jpg\" alt=\"software\" />\n    </div>\n    <p>\n      Le damos siguiente al instalador y comenzara la instalacion de nuestro\n      programa\n    </p>\n    <div>\n      <img src=\"assets/laravel-linux (11).jpg\" alt=\"software\" />\n    </div>\n    <p>\n      Aqui podemos ver como comienza la instalacion pero una vez que termine\n      podremos acceder al siguiente paso\n    </p>\n    <div>\n      <img src=\"assets/laravel-linux (12).jpg\" alt=\"software\" />\n    </div>\n    <p>\n      Despues de que se instale tendremos esta consola\n    </p>\n    <div>\n      <img src=\"assets/laravel-linux (13).jpg\" alt=\"software\" />\n    </div>\n    <p>\n     Simplemente utilizamos este comando para instalar Laravel: composer\n      global require laravel/installer \n      Y listo ya tenemos Laravel en nuestro sistema\n    </p>\n\n    <h1>Laravel en Linux</h1>\n\n    <div>\n      <img src=\"assets/laravel-linux (1).png\" alt=\"software\" />\n    </div>\n\n    <p>\n      Para instalar Laravel en linux usaremos la forma mas sencilla: y de la\n      misma forma que en windows abrimos la pagina de Laravel\n    </p>\n    <div>\n      <img src=\"assets/laravel-linux (2).png\" alt=\"software\" />\n\n      <p>\n        Tambien tendremos que bajar composer de la misma forma que en windows\n      </p>\n      <div>\n      <img src=\"assets/laravel-linux (3).png\" alt=\"software\" />\n      </div>\n      <div>\n        <p>\n          Procederemos a instalar PHP, para eso tendremos que usar el siguiente comando \n          sudo apt install php\n        </p>\n        <div>\n      <img src=\"assets/laravel-linux (4).png\" alt=\"software\" />\n        </div>\n        <p>\n          Ahora si proseguiremos a instalar composer con el siguiente comando:\n          curl -sS \"https://getcomposer.org/installer | php\"\n          Luego: sudo mv ~/composer.phar /usr/local/bin/composer\n          Finalmente sudo apt install composer\n        </p>\n        <div>\n      <img src=\"assets/laravel-linux (5).png\" alt=\"software\" />\n        </div>\n        <p>\n          Ahora simplemente verificamos que composer este instalado poniendolo en la consola\n        </p>\n        <div>\n      <img src=\"assets/laravel-linux (6).png\" alt=\"software\" />\n        </div>\n        <p>\n          Ahora instalaremos laravel, para eso tenemos que usar los siguientes comandos:\n          composer global require laravel/installer\n        </p>\n        <div>\n      <img src=\"assets/laravel-linux (7).png\" alt=\"software\" />\n        </div>\n        <p>\n          Ahora simplemente creamos un proyecto y levanatamos el servidor de la siguiente forma:\n          composer create-project --prefer-dist laravel/laravel blog\n        </p>\n        <div>\n      <img src=\"assets/laravel-linux (8).png\" alt=\"software\" />\n        </div>\n        <p>\n          Ahora accedemos a la carpeta y levantamos el servidor \n        </p>\n        <div>\n      <img src=\"assets/laravel-linux (9).png\" alt=\"software\" />\n        </div>\n        <p>\n          Listo ya podemos trabajar con Laravel\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/linux-server/linux-server.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/linux-server/linux-server.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLinuxServerLinuxServerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <div class=\"image\">\n    <img src=\"assets/linux.jpg\" alt=\"software\" class=\"main-imagen\" />\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12 edicion\">\n      <h1>Linux Server</h1>\n      <p>\n        Aunque si queremos podemos utilizar una distribución Linux de escritorio\n        para nuestro servidor (como Ubuntu), las distribuciones Linux para\n        servidor son algo diferentes a las distros de escritorio. Por ejemplo,\n        las versiones de servidor suelen ser mucho más reducidas que las\n        versiones de escritorio para que cada administrador pueda\n        personalizarlas a su gusto, no suelen tener interfaz gráfica por defecto\n        para ahorrar recursos y cuentan con optimizaciones y funciones diseñadas\n        para ofrecer el máximo rendimiento, la mayor estabilidad y la mejor\n        seguridad posible. En la red existen una gran cantidad de distribuciones\n        Linux para servidor de manera que cada usuario pueda elegir la que mejor\n        se adapte a sus necesidades según la función que vaya a desempeñar el\n        servidor. A continuación, vamos a ver los sistemas más adecuados que\n        podemos usar, tanto para montar un pequeño servidor (como un NAS) en\n        nuestra casa como para un gran servidor en una empresa o la nube.\n      </p>\n      <h1>Caracteristicas Principales</h1>\n      <ul>\n        <li>\n          CGI scripts\n        </li>\n        <li>\n          Registro de errores personalizado\n        </li>\n        <li>\n          Creación automática de dominios de 3er nivel\n        </li>\n        <li>\n          Instrucciones detalladas\n        </li>\n        <li>\n          Multitarea\n        </li>\n        <li>\n          Compatibilidad : Cuando tocamos este tema, siempre pasa lo mismo, la\n          gente desconfia. Nopuedo ejecutar mi aplicación favorita XXXX para\n          Windows 95, etc. Ten en cuenta que tampocoalguien que utiliza MAC, ni\n          con IRIX, etc\n        </li>\n        <li>\n          Soporte : Las empresas que venden cd's de Linux como Mandrake, SUSE, o\n          RedHat ofrecensoporte tècnico, y existen miles de personas que te\n          ayudarán a solucionar cualquier problemaque tengas con Linux en foros,\n          blogs y listas de correo. No dudes de unirte a las listas\n          dedistribución que hay en Internet, no solo aprenderás, podrás ayudar\n          a otros en los problemasque tengan.\n        </li>\n      </ul>\n\n      <h1>Guia de Instalacion de Linux Server</h1>\n\n      <p>\n        Para poder utilizar Linux en modo servidor necesitamos tener una\n        disitrbucion de linux previamente instalado, una vez que la tengamos\n        pasamos a la configuracion\n      </p>\n\n      <div>\n        <img src=\"assets/linux-logo.jpg\" alt=\"\" class=\"logo\" />\n      </div>\n\n      <p>\n        Ahora comenzaremos con la configuracion de nuestro servidor, para ello\n        crearemos grupos nuevos, los cuales se crean con el siguiente comando\n        \"sudo groupadd nombre_del_grupo\"\n      </p>\n\n      <div>\n        <img src=\"assets/linux-server1.png\" alt=\"software\" class=\"image-cont\" />\n\n        <p>\n          Para crear usuarios nuevos se hace de la siguiente manera \"sudo\n          useradd nombre_usuario\"\n        </p>\n        <div>\n          <img\n            src=\"assets/linux-server2.png\"\n            alt=\"software\"\n            class=\"image-cont\"\n          />\n        </div>\n        <div>\n          <p>\n            Para unir los usurios a los grupos se hace de esta manera \"sudo\n            usermod -a -G nombre_grupo nombre_usuario\"\n          </p>\n          <div>\n            <img\n              src=\"assets/linux-server3.png\"\n              alt=\"software\"\n              class=\"image-cont\"\n            />\n          </div>\n          <p>\n            Despues vemos todos los usuarios\n          </p>\n          <div>\n            <img\n              src=\"assets/linux-server4.png\"\n              alt=\"software\"\n              class=\"image-cont\"\n            />\n          </div>\n          <p>\n            Aqui vemos todos los grupos con sus respectivos usuarios\n          </p>\n          <div>\n            <img\n              src=\"assets/linux-server5.png\"\n              alt=\"software\"\n              class=\"image-cont\"\n            />\n          </div>\n          <p>\n            Y con eso configuramos grupos y usuarios en nuestro sistema linux\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/linux/linux.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/linux/linux.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLinuxLinuxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <div class=\"image\">\n    <img src=\"assets/linux.jpg\" alt=\"software\" class=\"main-imagen\" />\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12 edicion\">\n      <h1>LINUX - UBUNTU 18.04</h1>\n\n      <p>\n        Ubuntu es un sistema operativo de código abierto y libre para\n        computadores. Es una distribución de Linux basada en Debian. Actualmente\n        corre en computadores de escritorio y servidores. Está orientado al\n        usuario promedio, con un fuerte enfoque en la facilidad de uso y en\n        mejorar la experiencia del usuario. Está compuesto de múltiple software\n        normalmente distribuido bajo una licencia libre o de código abierto.\n        Estadísticas web sugieren que la cuota de mercado de Ubuntu dentro de\n        las distribuciones Linux es, aproximadamente, del 52 %,3​4​ y con una\n        tendencia a aumentar como servidor web.5\n      </p>\n\n      <h1>Caracteristicas Principales</h1>\n\n      <ul>\n        <li>\n          1. Escritorio de GNOME 3.28 En caso de que no haya probado Ubuntu\n          17.10 Artful Aardvark, 18.04 LTS va a ser una experiencia\n          completamente nueva para usted. Con 17.10, Canonical ya ha hecho un\n          cambio al escritorio GNOME como predeterminado con algunos ajustes.\n          Entonces, para los usuarios de LTS existentes, las cosas van a ser\n          bastante nuevas. Acerca de la versión de GNOME, podemos esperar que\n          GNOME 3.28 se envíe con 18.04.\n        </li>\n        <li>\n          2. Kernel 4.15 “Cada 6 meses, el equipo Kernel de Ubuntu tiene la\n          tarea de elegir el kernel para usar en la próxima versión. Nos fijamos\n          en el calendario de lanzamientos de Ubuntu y cómo se alineará con las\n          versiones de kernel en sentido ascendente “, escribió el equipo Kernel\n          de Ubuntu en una publicación reciente. El equipo espera que Linux\n          kernel 4.15 alimente Ubuntu 18.04. Algunas de las características\n          notables de Kernel 4.15 son:\n          <p>\n            -Soporte de encriptación de memoria segura\n          </p>\n          <p>\n            -AMD Mejor administración de energía Controlador de CPU para la\n            interfaz cgroup v2\n          </p>\n          <p>\n            -Mejor soporte para hardware antiguo y nuevo\n          </p>\n          <p>\n            -Últimos controladores y correcciones\n          </p>\n        </li>\n        <li>\n          3. Nuevo tema de escritorio e icono (Pospuesto a la próxima versión)\n          Actualización: este cambio se ha pospuesto a 18.10 versión. Aunque\n          Ubuntu 17.10 ha sido sometido a una revisión con el escritorio de\n          GNOME, su apariencia todavía se parece mucho a las versiones\n          anteriores de Ubuntu. En base a los comentarios generales de la\n          comunidad, el equipo busca incluir un nuevo tema de escritorio y de\n          icono para la versión 18.04.\n        </li>\n        <li>\n          4. Xorg por defecto Con vencimiento en abril de 2018, el próximo\n          lanzamiento de LTS vendrá con gráficos tradicionales de Xorg y nueva\n          pila basada en Wayland. Sin embargo, Xorg será el predeterminado. El\n          equipo de desarrollo de Ubuntu ha enumerado diferentes motivos para\n          esta elección, incluido un mejor rendimiento de software como\n          Hangouts, Skype y servicios WebRTC en Xorg. También se recupera mejor\n          de los accidentes de Shell. Para Ubuntu 18.10, el equipo volverá a\n          evaluar Wayland como el valor predeterminado.\n        </li>\n        <li>\n          Opción de instalación mínima Junto con la próxima versión de Ubuntu\n          18.04 LTS, los usuarios podrán realizar una instalación ligera de\n          Ubuntu . Esta opción eliminará muchos paquetes de software y obtendrá\n          un sistema con un entorno de escritorio, navegador web, herramientas\n          del sistema central y mucho más. Esta opción aparecerá en el\n          instalador de Ubuntu. Tenga en cuenta que no es un reemplazo de Ubuntu\n          Minimal ISO preexistente.\n        </li>\n        <li>\n          6. Ubuntu recogerá algunos datos Según un reciente anuncio hecho en la\n          lista de correo de Ubuntu, Canonical comenzará a recopilar algunos\n          datos del usuario relacionados con la configuración del sistema y\n          paquetes instalados en la máquina. A partir de Ubuntu 18.04 LTS, esta\n          opción de exclusión se proporcionará en el instalador. Lea sobre esta\n          característica esperada en detalle aquí.\n        </li>\n        <li>\n          7. Nuevo instalador para Ubuntu Server Con Ubuntu 18.04, Canonical\n          finalmente actualizará el instalador de línea de comando del Servidor\n          Ubuntu. El nuevo instalador llamado Subiquity será el predeterminado\n          en la próxima versión de LTS. Este cambio le dará un nuevo aspecto al\n          proceso de instalación del servidor, que hasta ahora había sido el\n          instalador basado en texto de Debian.\n        </li>\n        <li>\n          8. Soporte para emojis de color Sí, coloridos emojis finalmente están\n          llegando al escritorio de Ubuntu. Esta nueva característica le\n          permitirá mostrar emoji de color en diferentes aplicaciones. A pesar\n          de que muchos entusiastas fanáticos de Linux negarán que se trata de\n          un desarrollo que merezca mucha atención, los emojis son importantes\n          en los mensajes y las comunicaciones actuales. Por lo tanto, poder ver\n          emojis en su colorido atuendo es agradable.\n        </li>\n        <li>\n          9. Tiempo de arranque más rápido Canonical también está trabajando\n          para acelerar el tiempo de arranque de Ubuntu mediante el uso de las\n          características de systemd. Este es un cambio emocionante y será\n          interesante ver lo que el equipo de escritorio logra lograr en esta\n          área.\n        </li>\n        <li>\n          10. Soporte para el algoritmo de compresión zstd Con el algoritmo de\n          compresión zstd de Facebook, ahora puede esperar una velocidad de\n          instalación de Ubuntu más rápida de aproximadamente 10% con 18.04.\n        </li>\n        <li>\n          11. OpenJDK 10 La versión de Ubuntu 18.04 viene con OpenJDK 10 como\n          predeterminado. Después de que OpenJDK 11 se envíe a finales de este\n          año en septiembre, será el predeterminado.\n        </li>\n        <li>\n          12. Cambios de red y mejoras Los principales cambios relacionados con\n          la configuración de red en Ubuntu 18.04 son:\n          <p>\n            systemd-resolved es la resolución DNS predeterminada\n          </p>\n          <p>\n            NetworkManager viene con soporte de equipo con libteam\n          </p>\n          <p>\n            Ifupdown depcrecated; netplan.io agregado\n          </p>\n          <p>\n            Comando networkctl disponible para ver el resumen del dispositivo de\n            red\n          </p>\n        </li>\n        <li>\n          13. Nuevos fondos de pantalla No hace falta decir que Ubuntu 18.04\n          viene con hermosos fondos de pantalla nuevos que han sido aportados\n          por la comunidad a través del concurso Ubuntu 18.04 LTS Free Cultural\n          Showcase.\n        </li>\n        <img src=\"assets/linux-menu.jpg\" alt=\"\" />\n      </ul>\n      <h1>Como instalar Ubuntu 18.04 en tu equipo</h1>\n      <h2>Requisitos:</h2>\n      <ul>\n        <li>Un puerto USB disponible o libre en tu ordenador</li>\n        <li>\n          Un USB de al menos 4 GB\n        </li>\n        <li>Imagen de Ubuntu 18.04</li>\n        <li>Descargar Rufus, version portable o instalable</li>\n      </ul>\n      <h1>Pasos a seguir</h1>\n      <h3>Paso 1: Crear memoria booteable con imagen de Linux Ubuntu 18.04</h3>\n      <ul>\n        <li>\n          Conecta tu USB al ordenador y asegúrate de respaldar cualquier archivo\n          importante en él antes de continuar, puesto que este proceso borrará\n          todos los datos que contenga.\n        </li>\n        <li>\n          Ejecuta Rufus (se recomienda descargar la version portable,\n          <a\n            href=\"https://github.com/pbatard/rufus/releases/download/v3.8/rufus-3.8p.exe\"\n            >click aqui para descargar</a\n          >)\n        </li>\n        <li>\n          Una vez descargado lo ejecutamos y nos mostrara esta ventana\n        </li>\n        <img src=\"assets/rufus-1.jpg\" alt=\"\" />\n        <li>\n          Seleccionamos nuestra memoria USB en la lista que aparece arriba\n        </li>\n        <li>\n          Damos click en el boton de Seleccionar donde se nos abrira un\n          seleccionador de archivos, elegiremos la imagen iso del sistema\n          operativo que vamos a bootear\n        </li>\n\n        <li>\n          Si se desea cambiar el nombre al dispositivo, se lo pondremos donde\n          dice etiqueta de volumen\n        </li>\n        <li>\n          El Esquema de Particion tiene que estar en MBR para que al momento de\n          bootear desde la bios detecte la memoria como un sistema UEFI, si no\n          no se ejecutara por proteccion al sistema de la bios\n        </li>\n        <li>\n          Le daremos click a Empezar para que comience el formateo y\n          configuracion de la memoria USB y solo esperamos a que el proceso\n          termine\n        </li>\n        <img src=\"assets/rufus-2.jpg\" alt=\"\" />\n        <img src=\"assets/rufus-3.jpg\" alt=\"\" />\n      </ul>\n\n      <h1>Paso 2: Ejecutar Memoria desde la Bios del Equipo</h1>\n      <ul>\n        <li>\n          Para eso Reiniciaremos el equipo y presionaremos la tecla\n          correspondiente para arrancar la bios (generalmente las teclas son F2\n          F10 o F12)\n        </li>\n        <img src=\"assets/boot.jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Nos aparacera una pantalla similar a esta, simplemente seleccionamos\n          nuestra memoria usb y le damos Enter\n        </li>\n        <img src=\"assets/Linux (2).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Aparecera la pantalla morada con el simbolo de Ubuntu y eso significa\n          que empezo a cargar el paquete de instalacion\n        </li>\n        <img src=\"assets/Linux (3).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Luego nos mostrara esta ventana donde nos pedira que seleccionemos el\n          idioma del equipo.\n        </li>\n        <img src=\"assets/Linux (4).jpg\" alt=\"\" class=\"imagen\" />\n        <img src=\"assets/Linux (5).jpg\" alt=\"\" class=\"imagen\" />\n\n        <li>\n          Despues nos pedira que selecciones la distribucion de teclado que\n          tenemos o que deseamos utilizar\n        </li>\n\n        <img src=\"assets/Linux (6).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Posteriormente nos conectaremos a una red de internet para continuar\n          la configuracion o podemos brincarnos este paso si se desea\n        </li>\n\n        <img src=\"assets/Linux (7).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Ahora nos da a escoger entre dos opciones de instalacion, para hacerlo\n          de la manera mas adecuada, seleccionaremos la normal done instalara\n          todo los paquetes necesarios y actualizaciones\n        </li>\n\n        <img src=\"assets/Linux (8).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Si contamos con otro sistema operativo instalado en nuestro disco\n          duro, nos preguntara si queremos instalar Ubuntu junto al otro sistema\n          o si deseamos borrar todo el disco para dejar solo el sistema de Linux\n          instalado, en este caso seleccionamos la opcion de instalarlo junto a\n          Windows\n        </li>\n        <img src=\"assets/Linux (9).jpg\" alt=\"\" class=\"imagen\" />\n\n        <li>\n          Seleccionamos la unidad que deseamos utilizar para la instalacion del\n          sistema, una vez que sepamos cual unidad utilizaremos, tenemos que\n          seleccionar el tipo de formato que llevara en este caso seleccionamos\n          ext4, y lo seleccionamos como raiz, es la opcion que señala una\n          diagonal \"/\"\n        </li>\n\n        <img src=\"assets/Linux (10).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Y le damos en Formatear para obtener el formato adecuado para la\n          instalacion del sistema y una vez formateado le damos instalar ahora,\n          donde nos lanzara una advertencia de si estamos seguros de la\n          configuracion escrita, le damos que si\n        </li>\n\n        <img src=\"assets/Linux (11).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Casi para terminar nos pedira que seleccionesmos la region o lugar\n          donde nos encontramos\n        </li>\n        <img src=\"assets/Linux (12).jpg\" alt=\"\" class=\"imagen\" />\n\n        <li>\n          Como ultimo paso ingresaremos los datos del equipo, como nombre del\n          equipo, nombre de la cuenta, y alguna contraseña de acceso\n        </li>\n        <img src=\"assets/Linux (13).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Finalmente comenzara la instalacion de Ubuntu, copiara archivos,\n          extraera y empezara a actualizar recursos necesarios para comenzar con\n          su uso, esto tomara unos cuantos minutos y una vwez finalizado se\n          reiniciara la computadora, solo hay que dejar que cargue el sistema\n          operativo y comenzaremos con la configuracion\n        </li>\n\n        <img src=\"assets/Linux (14).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Una vez terminado nos pedira que reiniciemos la computadora para que\n          podamos ejecutar el sistema operativo\n        </li>\n        <img src=\"assets/Linux (15).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Cuando reiniciemos nos saldra el GRUB o el sistema de seleccion de\n          sistema operativo por el cual queremos que inicie, en nuestro caso\n          iniciaremos con ubuntu\n        </li>\n\n        <img src=\"assets/Linux (16).jpg\" alt=\"\" class=\"imagen\" />\n\n        <li>Y listo, ya tienes Linux Ubuntu 18.04 configurado en tu equipo</li>\n      </ul>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ls-dj-rby/ls-dj-rby.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ls-dj-rby/ls-dj-rby.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLsDjRbyLsDjRbyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <div class=\"image\">\n    <img src=\"assets/djangovsruby.jpeg\" alt=\"software\" class=\"main-imagen\" />\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12 edicion\">\n      <h1>Django y Ruby en Linux Server</h1>\n\n      <h1>Guia de Configuracion de Django y Ruby en Linux Server</h1>\n\n      <p>\n        Para poder realizar esto primero tenemos que configurar usuarios y\n        grupos.\n      </p>\n\n      <div>\n        <img src=\"assets/linux-logo.jpg\" alt=\"\" class=\"logo\" />\n      </div>\n\n      <p>\n        Una vez teniendo los grupos y los usuarios definidos podemos realizar\n        este tutorial.\n      </p>\n\n      <div>\n        <img src=\"assets/linux-server6.png\" alt=\"software\" class=\"image-cont\" />\n\n        <p>\n          Descargamos el sistema que queremos utilizar en nuestro servidor\n        </p>\n        <div>\n          <img\n            src=\"assets/linux-server7.png\"\n            alt=\"software\"\n            class=\"image-cont\"\n          />\n        </div>\n        <div>\n          <p>\n            Podemos ver que el usuario admin tiene todos los accesos\n          </p>\n          <div>\n            <img\n              src=\"assets/linux-server8.png\"\n              alt=\"software\"\n              class=\"image-cont\"\n            />\n          </div>\n          <p>\n            Utilizando los comandos \"chmod\" y \"chown\" para asignar usuarios y\n            grupos para los accesos\n          </p>\n          <div>\n            <img\n              src=\"assets/linux-server9.png\"\n              alt=\"software\"\n              class=\"image-cont\"\n            />\n          </div>\n          <p>\n            Asi mismo con los mismo comandos se les asigna al otro sistema\n          </p>\n          <div>\n            <img\n              src=\"assets/linux-server10.png\"\n              alt=\"software\"\n              class=\"image-cont\"\n            />\n          </div>\n          <p>\n            Una vez asignados si tratamos de entrar con otro usuario que no es,\n            nos denegara el acceso Al menos que estemos en el mismo grupo\n          </p>\n          <div>\n            <img\n              src=\"assets/linux-server11.png\"\n              alt=\"software\"\n              class=\"image-cont\"\n            />\n          </div>\n          <p>\n            Y con eso terminamos configuramos grupos y usuarios, y el sistema de\n            nuestra eleccion en nuestro servidor de linux\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ruby/ruby.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ruby/ruby.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRubyRubyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <div class=\"image\">\n    <img src=\"assets/ruby-logo.jpg\" alt=\"software\" class=\"main-imagen\" />\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12 edicion\">\n      <h1>Ruby on Rails</h1>\n      <p>\n        Ruby es un lenguaje de programación interpretado, reflexivo y orientado\n        a objetos, creado por el programador japonés Yukihiro \"Matz\" Matsumoto,\n        quien comenzó a trabajar en Ruby en 1993, y lo presentó públicamente en\n        1995. Combina una sintaxis inspirada en Python y Perl con\n        características de programación orientada a objetos similares a\n        Smalltalk. Comparte también funcionalidad con otros lenguajes de\n        programación como Lisp, Lua, Dylan y CLU. Ruby es un lenguaje de\n        programación interpretado en una sola pasada y su implementación oficial\n        es distribuida bajo una licencia de software libre.\n      </p>\n      <h1>Caracteristicas Principales</h1>\n      <ul>\n        <li>\n          Orientado a objetos\n        </li>\n        <li>\n          Cuatro niveles de ámbito de variable: global, clase, instancia y\n          local.\n        </li>\n        <li>\n          Manejo de excepciones\n        </li>\n        <li>\n          iteradores y clausuras o closures (pasando bloques de código)\n        </li>\n        <li>\n          expresiones regulares nativas similares a las de Perl a nivel del\n          lenguaje\n        </li>\n        <li>\n          Posibilidad de redefinir los operadores (sobrecarga de operadores)\n        </li>\n        <li>\n          recolección de basura automática\n        </li>\n        <li>\n          Altamente portable\n        </li>\n        <li>\n          Hilos de ejecución simultáneos en todas las plataformas usando hilos\n          verdes, o no gestionados por el sistema operativo.\n        </li>\n        <li>\n          Carga dinámica de DLL/bibliotecas compartidas en la mayoría de las\n          plataformas\n        </li>\n        <li>\n          Introspección, reflexión y metaprogramación\n        </li>\n        <li>\n          Amplia librería estándar\n        </li>\n        <li>\n          Soporta inyección de dependencias\n        </li>\n        <li>\n          Soporta alteración de objetos en tiempo de ejecución\n        </li>\n        <li>\n          continuaciones y generadores\n        </li>\n      </ul>\n\n      <h1>Ruby Windows</h1>\n      <div>\n        <img src=\"assets/win-logo.jpg\" alt=\"\" class=\"logo\" />\n      </div>\n\n      <p>\n        Para ver poder instalar Ruby, debemos abrir nuestro navegador y buscamos\n        Ruby en nuestro servicio de busqueda preferida, ya sea Google, Yahoo,\n        Bing, etc, yo les proporciono el link aqui:\n\n        <a href=\"https://rubyonrails.org\" target=\"blank\">Ruby on Rails</a>\n      </p>\n      <div>\n        <img src=\"assets/ruby-win(1).jpg\" alt=\"software\" class=\"image-cont\" />\n      </div>\n      <p>\n        En esta pantalla podremos ver las descripcion del programa, y\n        simplemente pasamos a la seccion de descarga\n      </p>\n\n      <div>\n        <img src=\"assets/ruby-win(2).jpg\" alt=\"software\" class=\"image-cont\" />\n      </div>\n      <p>\n        Aqui veremos el comando que utilizaremos para instalarlo en nuestro\n        sistema windows\n      </p>\n      <div>\n        <img src=\"assets/ruby-win(3).jpg\" alt=\"software\" class=\"image-cont\" />\n      </div>\n\n      <h1>Ruby en Linux</h1>\n      <div>\n        <img src=\"assets/linux-logo.jpg\" alt=\"\" class=\"logo\" />\n      </div>\n\n      <p>\n        Para ver poder instalar Ruby, debemos abrir nuestro navegador y buscamos\n        Ruby en nuestro servicio de busqueda preferida, ya sea Google, Yahoo,\n        Bing, etc, yo les proporciono el link aqui:\n\n        <a href=\"https://rubyonrails.org\" target=\"blank\">Ruby on Rails</a>\n      </p>\n      <div>\n        <img src=\"assets/ruby-win(1).jpg\" alt=\"software\" class=\"image-cont\" />\n      </div>\n      <p>\n        En esta pantalla podremos ver las descripcion del programa, y\n        simplemente pasamos a la seccion de descarga\n      </p>\n\n      <div>\n        <img src=\"assets/ruby-win(2).jpg\" alt=\"software\" class=\"image-cont\" />\n      </div>\n      <p>\n        Aqui veremos el comando que utilizaremos para instalarlo en nuestro\n        sistema linux\n      </p>\n\n      <div>\n        <img src=\"assets/ruby-lin(1).jpg\" alt=\"software\" class=\"image-cont\" />\n\n        <p>\n          Usamos los comandos para instalar Ruby\n        </p>\n        <div>\n          <img src=\"assets/ruby-lin(2).jpg\" alt=\"software\" class=\"image-cont\" />\n        </div>\n        <div>\n          <p>\n            Comprobamos si se instalo rails\n          </p>\n          <div>\n            <img\n              src=\"assets/ruby-lin(3).jpg\"\n              alt=\"software\"\n              class=\"image-cont\"\n            />\n          </div>\n          <p>\n            Iniciamos un nuevo proyecto en rails\n          </p>\n          <div>\n            <img\n              src=\"assets/ruby-lin(3).jpg\"\n              alt=\"software\"\n              class=\"image-cont\"\n            />\n          </div>\n          <p>\n            Esperamos que se termine de crear...\n          </p>\n          <div>\n            <img\n              src=\"assets/ruby-lin(4).jpg\"\n              alt=\"software\"\n              class=\"image-cont\"\n            />\n          </div>\n          <p>\n            Si la creacion del nuevo proyecto se complica tenemos que instlar\n            sqlite3\n          </p>\n          <div>\n            <img\n              src=\"assets/ruby-lin(5).jpg\"\n              alt=\"software\"\n              class=\"image-cont\"\n            />\n          </div>\n          <p>\n            Despues continuamos con la creacion del proyecto\n          </p>\n          <div>\n            <img\n              src=\"assets/ruby-lin(6).jpg\"\n              alt=\"software\"\n              class=\"image-cont\"\n            />\n          </div>\n          <p>\n            Levantamos el servidor de nuestro proyecto con ruby\n          </p>\n          <div>\n            <img\n              src=\"assets/ruby-lin(7).jpg\"\n              alt=\"software\"\n              class=\"image-cont\"\n            />\n          </div>\n          <div>\n            <img\n              src=\"assets/ruby-lin(8).jpg\"\n              alt=\"software\"\n              class=\"image-cont\"\n            />\n          </div>\n          <p>\n            Iniciamos el servidor y ya tenemos nuestro programa de Ruby\n            levantado\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSearchSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"search\">\n    <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/services/services.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/services/services.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsServicesServicesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <div class=\"image\">\n    <img src=\"assets/servicios.jpg\" alt=\"software\" class=\"main-imagen\" />\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12 edicion\">\n      <h1>Servicios</h1>\n\n      <p>\n        Los servicios a usuarios se brindan, básicamente, por medio de los\n        llamados Programas del Sistema, mientras que a los programas se les\n        brindan a través de las Llamadas al Sistema. Los programas del sistema\n        constituyen una colección más o menos grande de programas (no funciones\n        o subrutinas) suministradas por el fabricante (u otra empresa) que\n        permite realizar operaciones que son comunes a diferentes usuarios,\n        brindando un ambiente más adecuado para el desarrollo y explotación de\n        aplicaciones. Los programas del sistema pueden ser divididos en varias\n        categorías, aunque esto también depende de cada sistema operativo.\n        Algunos posibles grupos serian : Manipulación de ficheros (crear,\n        eliminar, renombrar, imprimir, etc.), obtención de información de estado\n        (fecha, hora, memoria disponible, espacio en disco, etc.), editores de\n        texto, etc. En resumen, los programas del sistema son aquellos que\n        ejecutan las acciones descritas en los comandos de éste o que aparecen\n        en los menús en el caso de las interfaces gráficas.\n      </p>\n\n      <h1>Servicios Windows</h1>\n      <div>\n        <img src=\"assets/win-logo.jpg\" alt=\"\" class=\"logo\" />\n      </div>\n\n      <p>\n        Para ver los servicios en windows, podemos descargar\n        <a href=\"https://drive.google.com/open?id=1O0IYUOfMcEDnmxsYC4yZk28B1Bcj-Ce1\" target=\"blank\">este programa</a> el cual esta hecho en lenguaje C#, aqui\n        podremos ver los servicios que esta ejecutando windows, en forma de\n        lista o seleccionar de uno en uno\n      </p>\n\n      <div>\n        <img src=\"assets/servicios1.jpg\" alt=\"software\" />\n      </div>\n      <p>Aqui podemos la lista completa de servicios</p>\n      <div>\n        <img src=\"assets/servicios2.jpg\" alt=\"software\" />\n      </div>\n      <p>Este es el codigo del programa</p>\n      <div>\n        <img src=\"assets/servicios3.jpg\" alt=\"software\" />\n      </div>\n      <h1>Servicios de Linux</h1>\n\n      <div>\n        <img src=\"assets/linux-logo.jpg\" alt=\"\" class=\"logo\" />\n      </div>\n\n      <p>\n        Para ver los servicios en Linux, podemos descargar\n        <a href=\"https://drive.google.com/file/d/1XYOAD4m2PMzohSKZu4l_8td43DaGz-x0/view?usp=sharing\" target=\"blank\">este script</a>, lo unico que debemos ahcer es configurarlo\n        para correrlo en terminal lo que nos mostrara es lo siguiente\n      </p>\n      <div>\n        <img\n          src=\"assets/servicios-lin (1).jpg\"\n          alt=\"software\"\n          class=\"service-img\"\n        />\n      </div>\n      <p>\n        Esta es la lista de servicios, daemons y procesos con los que esta\n        trabajando linux\n      </p>\n      <div>\n        <img src=\"assets/servicios-lin (2).jpg\" alt=\"software\" class=\"turn\" />\n      </div>\n      <p>Si deseas ejecutarlo en consola funciona de igual manera</p>\n      <div>\n        <img src=\"assets/servicios-lin (3).jpg\" alt=\"software\" class=\"turn\" />\n      </div>\n      <p>\n        El comando <a href=\"\">services --status-all</a> te muestra todos los servicios\n        en la consola, tu puedes filtrarlos por los que estan activos, si\n        quieres eliminar alguno, o si quieres ejecutar uno nuevo\n      </p>\n      <div>\n        <img\n          src=\"assets/servicios-lin (4).jpg\"\n          alt=\"software\"\n          class=\"service-img\"\n        />\n      </div>\n      <p>\n        Primera parte de servicios y procesos\n      </p>\n      <div>\n        <img\n          src=\"assets/servicios-lin (5).jpg\"\n          alt=\"software\"\n          class=\"service-img\"\n        />\n      </div>\n      <p>\n        Todos estos son listas de procesos, servvicios y daemons que se pueden\n        encontrar en linux, estan los que se estan ejecutando, los que estan en\n        stand by y los que no se ejecutan, pueden cambiar de status dependiendo\n        la orden que le quieras dar\n      </p>\n      <div>\n        <img\n          src=\"assets/servicios-lin (6).jpg\"\n          alt=\"software\"\n          class=\"service-img\"\n        />\n      </div>\n      <p>\n        Este comando de aqui sirve tanto en consola como un programa ejecutable,\n        solo hay que guardarlo en un arhcivo de texto y agregarle la terminacion\n        .sh\n      </p>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer-distributed\">\n  <div class=\"footer-left\">\n    <p class=\"footer-links\">\n      <a routerLink=\"home\">Inicio</a>\n      ·\n      <a routerLink=\"diagnostico\">Sistemas Operativos</a>\n      ·\n      <a routerLink=\"tratamiento\">Software</a>\n      ·\n      <a routerLink=\"about\">Conoceme</a>\n      ·\n      <a routerLink=\"faq\">FAQ</a>\n    </p>\n\n    <p class=\"footer-company-name\">Panduro's Blogs &copy; {{ year }}</p>\n  </div>\n\n  <div class=\"footer-center\">\n    <div>\n      <i class=\"fas fa-mobile-alt\"></i>\n      <p>33 2310 6919</p>\n    </div>\n\n    <div>\n      <i class=\"fas fa-envelope\"></i>\n      <p>\n        <a href=\"mailto:cristopher.estrada@alumnos.udg.mx\"\n          >cristopher.estrada@alumnos.udg.mx</a\n        >\n      </p>\n    </div>\n  </div>\n\n  <div class=\"footer-right\">\n    <div class=\"footer-icons\">\n      <a href=\"https://www.facebook.com/panduroo\" target=\"blank\">\n        <i class=\"fab fa-facebook-square icon icon-facebook\"></i>\n      </a>\n      <a href=\"https://www.twitter.com/panduroforever\" target=\"blank\">\n        <i class=\"fab fa-twitter-square icon icon-twitter\"></i>\n      </a>\n      <a href=\"https://www.instagram.com/pandiurex\" target=\"blank\">\n        <i class=\"fab fa-instagram icon icon-instagram\"></i>\n      </a>\n      <a href=\"https://www.youtube.com\" target=\"blank\">\n        <i class=\"fab fa-youtube-square icon icon-instagram\"></i>\n      </a>\n    </div>\n  </div>\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-dark menu\">\n  <a class=\"navbar-brand titulo\" routerLink=\"home\">Panduro Blog</a>\n\n  <div class=\"col col-sm-2 drop\">\n    <app-dropdown></app-dropdown>\n  </div>\n  <div class=\"col col-sm-2 drop\">\n    <app-drop-soft></app-drop-soft>\n  </div>\n  \n  <div class=\"col col-sm-3 drop\">\n    <app-search></app-search>\n  </div>\n  <div class=\"col col-sm-1 drop\">\n    <div class=\"enterBtn\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">\n        Search\n      </button>\n    </div>\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users-ws/users-ws.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users-ws/users-ws.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUsersWsUsersWsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <div class=\"image\">\n    <img src=\"assets/wslogo.jpg\" alt=\"software\" class=\"main-imagen\" />\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12 edicion\">\n      <h1>Windows Server Gestion de Usuarios y Grupos</h1>\n      <p>\n        Windows Server 2019 es el más reciente sistema operativo producido por\n        Microsoft para su familia de servidores. Microsoft lo anunció el 20 de\n        marzo de 2018, y la primera vista previa Windows Insider fue lanzada el\n        mismo día. Se lanzó comercialmente el 2 de octubre de 2018.1​ Al igual\n        que su predecesor,2​ Windows Server 2019 tiene solo dos versiones:\n        Standard y Datacenter, siendo este último el que ofrece mayores\n        prestaciones como SMB Direct o características que no están disponibles\n        en Windows Server 2019 Standard3​ y Storage Spaces Direct,4​ y también\n        un mayor soporte a máquinas virtuales con Hyper-V, que está disponible\n        en las dos versiones. El instalador ofrece la posibilidad de instalar en\n        modo Core (interfaz de usuario mínima) para administración remota, o\n        Experiencia de escritorio (interfaz de usuario completa) para\n        administración local.\n      </p>\n      <h1>Caracteristicas Principales</h1>\n      <ul>\n        <li>\n          Windows Subsystem for Linux (WSL)\n        </li>\n        <li>\n          Soporte para Kubernetes (Beta)\n        </li>\n        <li>\n          Otras características de interfaz nuevas introducidas en Windows 10,\n          versión 1809.\n        </li>\n        <li>\n          Storage Spaces Direct (Únicamente en edición Datacenter)\n        </li>\n        <li>\n          SMB Direct (Únicamente en edición Datacenter)\n        </li>\n        <li>\n          Storage Migration Service\n        </li>\n        <li>\n          Storage Replica\n        </li>\n        <li>\n          System Insights\n        </li>\n        <li>\n          Mejoras en Windows Defender\n        </li>\n      </ul>\n\n      <h1>Guia de Creacion de Usuarios</h1>\n\n      <p>\n        El uso de distintas cuentas de usuario es altamente recomendable en\n        Windows, se utilizan para aumentar la privacidad, mejorar la seguridad y\n        permitir la personalización.\n      </p>\n\n      <div>\n        <img src=\"assets/win-logo.jpg\" alt=\"\" class=\"logo\" />\n      </div>\n\n      <p>\n        El primer paso es acceder a la herramienta de Administrador del\n        servidor, puedes hacerlo desde el menú de Inicio.\n      </p>\n      <div>\n        <img src=\"assets/user-ws(1).png\" alt=\"software\" class=\"image-cont\" />\n      </div>\n      <p>\n        Desde el Administrador del servidor podemos abrir la herramienta de\n        Administración de equipos, para ello nos dirigimos al menu Herramientas\n        -> Administración de Equipos.\n      </p>\n\n      <div>\n        <img src=\"assets/user-ws(2).png\" alt=\"software\" class=\"image-cont\" />\n      </div>\n      <p>\n        En la ventana de Administración de equipos puedes agregar nuevos\n        usuarios desde Administración del equipo -> Usuarios y grupos locales ->\n        Usuarios. Pulsando el botón derecho te aparece la opción de Usuario\n        nuevo.\n      </p>\n      <div>\n        <img src=\"assets/user-ws(3).png\" alt=\"software\" class=\"image-cont\" />\n      </div>\n\n      <p>\n        El formulario para crear usuarios es muy intuitivo, simplemnte rellena\n        los datos y presta atención a las opciones de la parte inferior del\n        formulario, para que el comportamiento del usuario se ajuste a tus\n        necesidades.\n      </p>\n      <div>\n        <img src=\"assets/user-ws(4).png\" alt=\"software\" class=\"image-cont\" />\n      </div>\n      <p>\n        El proceso de creación de grupos es similar, con la salvedad de que\n        puedes añadir usuarios a los grupos. Para ello simplemente escribe el\n        nombre del usuario en el area de texto y pulsa el botón Comprobar\n        nombres para que se valide. Puedes añadir tantos usuarios como\n        necesites.\n      </p>\n\n      <div>\n        <img src=\"assets/user-ws(5).png\" alt=\"software\" class=\"image-cont\" />\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/videogame/videogame.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/videogame/videogame.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsVideogameVideogameComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <div class=\"image\">\n    <img src=\"assets/juego (1).jpg\" alt=\"software\" class=\"main-imagen\" />\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12 edicion\">\n      <h1>Video Juego en el Navegador</h1>\n      <p>\n        El juego que vamos a poder jugar en nuestro dispositivo es Asteroids:\n        Asteroids es un popular videojuego de arcade basado en vectores lanzado\n        en 1979 por Atari. El objetivo del juego es disparar y destruir\n        asteroides evitando chocar contra los fragmentos de estos. Fue uno de\n        los juegos más populares de la Época Dorada de los videojuegos arcade.\n        Asteroids fue inspirado por el juego Spacewar!, el primer videojuego de\n        computadora. En el año 1977, Cinematronics lanzó Space Wars, un juego\n        similar, también basado en Spacewar!. Asteroids en esencialmente una\n        versión de un jugador de Space Wars, caracterizado por la nave y los\n        asteroides como enemigo principal.\n      </p>\n\n      <h1>Asteroids en Windows y Linux</h1>\n      <div>\n        <img src=\"assets/win-logo.jpg\" alt=\"\" class=\"logo\" />\n      </div>\n      <div>\n        <img src=\"assets/linux-logo.jpg\" alt=\"\" class=\"logo\" />\n      </div>\n\n      <p>\n        Para ver poder jugar solo necesitan descargarse el juego aqui\n\n        <a href=\"https://rubyonrails.org\" target=\"blank\">Asteroids</a>\n      </p>\n      <div>\n        <img src=\"assets/juego (1).jpg\" alt=\"software\" class=\"image-cont\" />\n      </div>\n      <p>\n        Para ir avanzando en los niveles vamos a tener que matar a todas las\n        navecitas\n      </p>\n\n      <div>\n        <img src=\"assets/juego (2).jpg\" alt=\"software\" class=\"image-cont\" />\n      </div>\n      <p>\n        Una vez derrotadas podran avanzar al siguiente nivel y asi hasta que\n        mueran\n      </p>\n      <div>\n        <img src=\"assets/juego (3).jpg\" alt=\"software\" class=\"image-cont\" />\n      </div>\n      <p>\n        En el lado superior izquierdo podremos observar el puntaje que llevamos\n      </p>\n      <div>\n        <img src=\"assets/juego (4).jpg\" alt=\"software\" class=\"image-cont\" />\n      </div>\n      <p>\n        Del lado derecho podremos observar las vidas restantes del juego\n      </p>\n      <div>\n        <img src=\"assets/juego (5).jpg\" alt=\"software\" class=\"image-cont\" />\n      </div>\n      <p>\n        Aqui aparece que ganamos y nos pregunta si deseamos volver a jugar.\n      </p>\n      <div>\n        <img src=\"assets/juego (6).jpg\" alt=\"software\" class=\"image-cont\" />\n      </div>\n      <p>\n        De no ser asi nos saldra el siguiente mensaje\n      </p>\n      <div>\n        <img src=\"assets/juego (7).jpg\" alt=\"software\" class=\"image-cont\" />\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/windows-server/windows-server.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/windows-server/windows-server.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsWindowsServerWindowsServerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <div class=\"image\">\n    <img src=\"assets/wslogo.jpg\" alt=\"software\" class=\"main-imagen\" />\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12 edicion\">\n      <h1>Windows Server</h1>\n      <p>\n        Windows Server 2019 es el más reciente sistema operativo producido por\n        Microsoft para su familia de servidores. Microsoft lo anunció el 20 de\n        marzo de 2018, y la primera vista previa Windows Insider fue lanzada el\n        mismo día. Se lanzó comercialmente el 2 de octubre de 2018.1​ Al igual\n        que su predecesor,2​ Windows Server 2019 tiene solo dos versiones:\n        Standard y Datacenter, siendo este último el que ofrece mayores\n        prestaciones como SMB Direct o características que no están disponibles\n        en Windows Server 2019 Standard3​ y Storage Spaces Direct,4​ y también\n        un mayor soporte a máquinas virtuales con Hyper-V, que está disponible\n        en las dos versiones. El instalador ofrece la posibilidad de instalar en\n        modo Core (interfaz de usuario mínima) para administración remota, o\n        Experiencia de escritorio (interfaz de usuario completa) para\n        administración local.\n      </p>\n      <h1>Caracteristicas Principales</h1>\n      <ul>\n        <li>\n          Windows Subsystem for Linux (WSL)\n        </li>\n        <li>\n          Soporte para Kubernetes (Beta)\n        </li>\n        <li>\n          Otras características de interfaz nuevas introducidas en Windows 10,\n          versión 1809.\n        </li>\n        <li>\n          Storage Spaces Direct (Únicamente en edición Datacenter)\n        </li>\n        <li>\n          SMB Direct (Únicamente en edición Datacenter)\n        </li>\n        <li>\n          Storage Migration Service\n        </li>\n        <li>\n          Storage Replica\n        </li>\n        <li>\n          System Insights\n        </li>\n        <li>\n          Mejoras en Windows Defender\n        </li>\n      </ul>\n\n      <h1>Guia de Instalacion de Windows Server</h1>\n\n      <p>\n        Para ver poder instalar Windows Server, debemos abrir nuestro navegador\n        y buscamos Windows Server en nuestro servicio de busqueda preferida, ya\n        sea Google, Yahoo, Bing, etc, yo les proporciono el link aqui:\n\n        <a\n          href=\"https://www.microsoft.com/es-es/cloud-platform/windows-server-trial\"\n          target=\"blank\"\n          >Windows Server</a\n        >\n      </p>\n\n      <div>\n        <img src=\"assets/win-logo.jpg\" alt=\"\" class=\"logo\" />\n      </div>\n\n      <h3>Primero crearemos memoria booteable con imagen de Windows Server</h3>\n      <ul>\n        <li>\n          Conecta tu USB al ordenador y asegúrate de respaldar cualquier archivo\n          importante en él antes de continuar, puesto que este proceso borrará\n          todos los datos que contenga.\n        </li>\n        <li>\n          Ejecuta Rufus (se recomienda descargar la version portable,\n          <a\n            href=\"https://github.com/pbatard/rufus/releases/download/v3.8/rufus-3.8p.exe\"\n            >click aqui para descargar</a\n          >)\n        </li>\n        <li>\n          Una vez descargado lo ejecutamos y nos mostrara esta ventana\n        </li>\n        <img src=\"assets/rufus-1.jpg\" alt=\"\" />\n        <li>\n          Seleccionamos nuestra memoria USB en la lista que aparece arriba\n        </li>\n        <li>\n          Damos click en el boton de Seleccionar donde se nos abrira un\n          seleccionador de archivos, elegiremos la imagen iso del sistema\n          operativo que vamos a bootear\n        </li>\n\n        <li>\n          Si se desea cambiar el nombre al dispositivo, se lo pondremos donde\n          dice etiqueta de volumen, el resto de configuraciones lo dejamos como\n          esta\n        </li>\n        <li>\n          Le daremos click a Empezar para que comience el formateo y\n          configuracion de la memoria USB y solo esperamos a que el proceso\n          termine\n        </li>\n        <img src=\"assets/rufus-2.jpg\" alt=\"\" />\n        <img src=\"assets/rufus-3.jpg\" alt=\"\" />\n      </ul>\n      <p>\n        Una vez que tenemos la memoria lista, reiniciamos el equipo y booteamos\n        desde la memoria, ahora solo seleccionamos el sistema que queremos\n      </p>\n      <div>\n        <img src=\"assets/ws1.1.jpg\" alt=\"software\" class=\"image-cont\" />\n      </div>\n      <p>\n        Leemos y aceptamos los Terminos de Licencia\n      </p>\n\n      <div>\n        <img src=\"assets/ws1.2.jpg\" alt=\"software\" class=\"image-cont\" />\n      </div>\n      <p>\n        Seleccionamos el personalizado para elegir la particion, particionamos,\n        formateamos y empezara la instalacion\n      </p>\n      <div>\n        <img src=\"assets/ws1.3.jpg\" alt=\"software\" class=\"image-cont\" />\n      </div>\n\n      <p>\n        Una vez hecho los pasos anteriores comenzara la instalacion del sistema\n      </p>\n      <div>\n        <img src=\"assets/ws1.4.jpg\" alt=\"software\" class=\"image-cont\" />\n      </div>\n      <p>\n        Una vez terminado la instalacion se reiniciara nuestro sistema y se\n        iniciara nuestro windows server\n      </p>\n\n      <div>\n        <img src=\"assets/ws1.5.jpg\" alt=\"software\" class=\"image-cont\" />\n      </div>\n      <p>\n        Ahora comenzaremos con la configuracion de nuestro servidor, para ello\n        abriremos el panel de servidores y se mostrara la siguiente pantalla\n      </p>\n\n      <div>\n        <img src=\"assets/ws1.png\" alt=\"software\" class=\"image-cont\" />\n\n        <p>\n          Seleccionamos servidor local, agregamos nuevos roles al servidor y\n          escogemos la opcion que dice Active Directory\n        </p>\n        <div>\n          <img src=\"assets/ws3.png\" alt=\"software\" class=\"image-cont\" />\n        </div>\n        <div>\n          <p>\n            El resto de opciones las dejamos tal cual estan\n          </p>\n          <div>\n            <img src=\"assets/ws4.png\" alt=\"software\" class=\"image-cont\" />\n          </div>\n          <p>\n            Le damos siguiente y comenzara la instalacion de nuestro rol\n            personalizado con Active Directory\n          </p>\n          <div>\n            <img src=\"assets/ws5.png\" alt=\"software\" class=\"image-cont\" />\n          </div>\n          <p>\n            Despues simplemente configuramos la nueva implementacion\n          </p>\n          <div>\n            <img src=\"assets/ws6.png\" alt=\"software\" class=\"image-cont\" />\n          </div>\n          <p>\n            Agregamos un nuevo bosque y escogeremos el dominio para nuestro\n            servidor\n          </p>\n          <div>\n            <img src=\"assets/ws7.png\" alt=\"software\" class=\"image-cont\" />\n          </div>\n          <p>\n            Una vez instalada nos aparecera una pantalla como la siguiente\n          </p>\n          <div>\n            <img src=\"assets/ws8.png\" alt=\"software\" class=\"image-cont\" />\n          </div>\n          <p>\n            Finalmente podremos configurar nuestro Active Directory\n          </p>\n          <div>\n            <img src=\"assets/ws9.png\" alt=\"software\" class=\"image-cont\" />\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/windows/windows.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/windows/windows.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsWindowsWindowsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <div class=\"image\">\n    <img\n      src=\"assets/windows-10.jpg\"\n      alt=\"software\"\n      class=\"main-imagen\"\n    />\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12 edicion\">\n      <h1>WINDOWS 10</h1>\n      <p>\n        Windows 10 es el vigente sistema operativo desarrollado por Microsoft\n        como parte de la familia de sistemas operativos Windows NT.​ Fue dado a\n        conocer oficialmente en septiembre de 2014, seguido por una breve\n        presentación de demostración en la conferencia Build 2014. Entró en fase\n        beta de prueba en octubre de 2014 y fue lanzado al público en general el\n        29 de julio de 2015. Esta edición introdujo una arquitectura de\n        aplicaciones «universales». Desarrolladas con la interfaz Continuum y,\n        posteriormente, con la interfaz Fluent Design, estas aplicaciones pueden\n        ser diseñadas para ejecutarse en todas las familias de productos de\n        Microsoft con un código casi idéntico (incluyendo computadoras\n        personales, tabletas, teléfonos inteligentes, sistemas embebidos, Xbox\n        One, Surface Hub y HoloLens). La interfaz de usuario fue revisada para\n        realizar transiciones entre una interfaz orientada al ratón y una\n        interfaz orientada a la pantalla táctil basadas en dispositivos de\n        entrada disponibles (particularmente en tabletas). Ambas interfaces\n        incluyen un menú Inicio actualizado que comprende un diseño mezclado de\n        Windows 7 con el diseño metro de Windows 8. También se introduce la\n        Vista de Tareas, un sistema de escritorio virtual, el navegador web\n        Microsoft Edge y otras aplicaciones nuevas o actualizadas, un soporte\n        integrado para iniciar sesión a través de huella digital o\n        reconocimiento facial llamado Windows Hello, nuevas características de\n        seguridad para entornos empresariales, DirectX 12 y WDDM 2.0 para\n        mejorar las capacidades gráficas del sistema operativo para los\n        videojuegos.\n      </p>\n      <h1>Caracteristicas Principales</h1>\n      <ul>\n        <li>\n          1-La interfaz de Windows 10 está concebida para funcionar en aparatos\n          de pantalla táctil, como las de tabletas y teléfonos inteligentes\n          --con las cuales Microsoft está un poco rezagado--, pero también en\n          computadoras clásicas por medio de un ratón y un teclado.\n        </li>\n        <li>\n          2-El \"menú de inicio\", que antiguamente permitía acceder a la mayoría\n          de las funciones y programas hasta que Windows 8 la borró totalmente,\n          vuelve a aparecer en la esquina inferior izquierda de la pantalla.\n        </li>\n        <li>\n          3-Una nueva función intuitiva, bautizada \"Continuum\", permite alternar\n          automáticamente de la interfaz clásica a la táctil en los aparatos que\n          son \"dos en uno\", como la Surface de Microsoft, que funciona a la vez\n          como tableta y como ordenador portátil gracias a un teclado removible.\n        </li>\n        <li>\n          4-\"Windows Hello\" es un nuevo sistema de autenticación biométrica que\n          se supone permitirá reemplazar las contraseñas. El aparato deberá no\n          obstante ser compatible.\n        </li>\n        <li>\n          5-El asistente virtual Cortana, rival de Siri de Apple y ya integrado\n          en los smartphones, hace su debut en los ordenadores con Windows 10.\n          Cortana utiliza el motor de búsqueda de Microsoft, Bing, para hallar\n          archivos o datos que pueden estar en el disco o en internet.\n        </li>\n        <li>\n          6-Un nuevo navegador más rápido, Edge, reemplazará al Internet\n          Explorer y está concebido para funcionar con Cortana.\n        </li>\n        <li>\n          7-Un panel llamado \"Centro de acción\" organiza las notificaciones y\n          permite ajustar las configuraciones personales.\n        </li>\n        <li>\n          8-Una nueva aplicación permite transmitir por streaming (difusión en\n          línea) los partidos que se juegan en la consola de videojuegos Xbox,\n          también producida por Microsoft.\n        </li>\n        <li>\n          9-Windows 10 también actualiza su sistema integrado de protección\n          contra los virus, el phishing (ataques por suplantación de identidad)\n          y el malware (programas maliciosos).\n        </li>\n        <img src=\"assets/win-menu.jpg\" alt=\"\" />\n      </ul>\n      <h1>Como instalar Windows 10 en tu equipo</h1>\n      <h2>Requisitos:</h2>\n      <ul>\n        <li>Un puerto USB disponible o libre en tu ordenador</li>\n        <li>\n          Un USB de al menos 8 GB\n        </li>\n        <li>Imagen de Windows 10</li>\n        <li>Descargar Rufus, version portable o instalable</li>\n      </ul>\n      <h1>Pasos a seguir</h1>\n      <h3>Paso 1: Crear memoria booteable con imagen de Windows 10</h3>\n      <ul>\n        <li>\n          Conecta tu USB al ordenador y asegúrate de respaldar cualquier\n          archivo importante en él antes de continuar, puesto que este proceso\n          borrará todos los datos que contenga.\n        </li>\n        <li>\n          Ejecuta Rufus (se recomienda descargar la version portable,\n          <a\n            href=\"https://github.com/pbatard/rufus/releases/download/v3.8/rufus-3.8p.exe\"\n            >click aqui para descargar</a\n          >)\n        </li>\n        <li>\n          Una vez descargado lo ejecutamos y nos mostrara esta ventana\n        </li>\n        <img src=\"assets/rufus-1.jpg\" alt=\"\" />\n        <li>\n          Seleccionamos nuestra memoria USB en la lista que aparece arriba\n        </li>\n        <li>\n          Damos click en el boton de Seleccionar donde se nos abrira un\n          seleccionador de archivos, elegiremos la imagen iso del sistema\n          operativo que vamos a bootear\n        </li>\n        <li>\n          Si quieres descargar el ISO de Windows 10 usando Rufus haz click en la\n          flecha hacia abajo junto al botón de seleccionar para cambiar a\n          DESCARGA:\n        </li>\n        <li>\n          Haz click en el botón DESCARGA y espera unos segundos a que aparezca\n          una nueva ventana para seleccionar sistema operativo:\n        </li>\n        <li>\n          Selecciona Windows 10 en este caso y haz click en Continuar. Luego\n          deberás seleccionar le \"emisión\" o versión de Windows 10. Te\n          recomiendo seleccionar la más reciente (puedes ver las fechas de\n          lanzamiento junto a la versión) para evitar tener que actualizar\n          Windows después. Luego haz click en \"Continuar\".\n        </li>\n        <li>\n          Selecciona la edición de Windows 10, ya sea \"Home/Pro\" o \"Education\".\n          Recuerda que esto dependerá del tipo de licencia que tengas. Si tienes\n          dudas, selecciona siempre \"Home/Pro\" que son las que usan los usuarios\n          individuales. Haz click en \"Continuar\" para elegir el idioma y luego\n          la arquitectura. Elige x64 salvo que tengas un ordenador demasiado\n          antiguo.\n        </li>\n        <li>\n          Finalmente, seleccionar \"Descargar\" y una carpeta donde\n        </li>\n        <li>\n          guardar tu ISO usando el explorador de archivos.\n        </li>\n        <li>\n          Si se desea cambiar el nombre al dispositivo, se lo pondremos donde\n          dice etiqueta de volumen, el resto de configuraciones lo dejamos como\n          esta\n        </li>\n        <li>\n          Le daremos click a Empezar para que comience el formateo y\n          configuracion de la memoria USB y solo esperamos a que el proceso\n          termine\n        </li>\n        <img src=\"assets/rufus-2.jpg\" alt=\"\" />\n        <img src=\"assets/rufus-3.jpg\" alt=\"\" />\n      </ul>\n\n      <h1>Paso 2: Ejecutar Memoria desde la Bios del Equipo</h1>\n      <ul>\n        <li>\n          Para eso Reiniciaremos el equipo y presionaremos la tecla\n          correspondiente para arrancar la bios (generalmente las teclas son F2\n          F10 o F12)\n        </li>\n        <img src=\"assets/boot.jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Nos aparacera una pantalla similar a esta, simplemente seleccionamos\n          nuestra memoria usb y le damos Enter\n        </li>\n        <img src=\"assets/windows (2).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Aparecera la pantalla negra con el simbolo de windows y eso significa\n          que empezo a cargar el paquete de instalacion\n        </li>\n        <img src=\"assets/windows (3).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Luego nos mostrara esta ventana donde nos pedira que seleccionemos el\n          idioma del equipo, asi como el formato de moneda y teclado que\n          utilizaremos\n        </li>\n        <img src=\"assets/windows (4).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Le damos click al boton de instalar\n        </li>\n        <img src=\"assets/windows (5).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Aceptamos los avisos y terminos de licencia dando click en el check y\n          le damos siguiente\n        </li>\n        <img src=\"assets/windows (6).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Nos da a escoger entre dos opciones de instalacion, para hacerlo de la\n          manera mas adecuada, seleccionaremos la Personalizada\n        </li>\n        <img src=\"assets/windows (7).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Seleccionamos la unidad que deseamos utilizar para la instalacion del\n          sistema\n        </li>\n        <img src=\"assets/windows (8).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Y le damos en Formatear para obtener el formato adecuado para la\n          instalacion del sistema y una vez formateado le damos siguiente\n        </li>\n        <img src=\"assets/windows (9).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Comenzara la instalacion de windows, copiara archivos, extraera y\n          empezara a actualizar recursos necesarios para comenzar con su uso,\n          esto tomara unos cuantos minutos y una vwez finalizado se reiniciara\n          la computadora, solo hay que dejar que cargue el sistema operativo y\n          comenzaremos con la configuracion\n        </li>\n        <img src=\"assets/windows (10).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Lo primero que nos pedira que elijamos sera la region en la que nos\n          encontramos\n        </li>\n        <img src=\"assets/windows (11).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Despues elegiremos la distribucion del teclado que deseamos utilizar,\n          esto se refiere a el tipo de acomodo de teclas que contamos en nuestro\n          teclado\n        </li>\n        <img src=\"assets/windows (12).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Nos preguntara si deseamos agregar una distribucion extra, esto a es a\n          eleccion del usuario.\n        </li>\n        <img src=\"assets/windows (13).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Posteriormente nos conectaremos a una red de internet para continuar\n          la configuracion\n        </li>\n        <img src=\"assets/windows (14).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Podemos iniciar en nuestra sesion de hotmail u outlook o podemos\n          elegir tener una cuenta local\n        </li>\n        <img src=\"assets/windows (15).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Puedes ingresar un pin numerico para poder acceder al equipo, o si se\n          desea puede ser alfanumerico (letras y numeros), de no desearse puede\n          omitirse este paso\n        </li>\n        <img src=\"assets/windows (16).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Podras elegir en darle autorizacion a microsoft para personalizar aun\n          mejor tu experiencia de usuario\n        </li>\n        <img src=\"assets/windows (17).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Si lo deseas, puedes agregar un numero telefonico para enlazarlo a tu\n          cuenta de microsoft, lo que te permite acceder a distintas funciones\n        </li>\n        <img src=\"assets/windows (18).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Si accediste con tu cuenta microsoft te preguntara si deseas activar\n          tu cuenta de One Drive, es un almacenamiento en la nube para respaldar\n          archivos de manera automatica, es a eleccion dle usuario\n        </li>\n        <img src=\"assets/windows (19).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Finalmente solo queda esperar a que windows termine de configurarse,\n          te mostrara letreros del avance, tarda de 2 a 5 minutos dependiendo\n          del equipo.\n        </li>\n        <img src=\"assets/windows (20).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          \"Lo estamos preparando todo para ti\"\n        </li>\n        <img src=\"assets/windows (21).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Tarda de 2 a 5 minutos en terminar de configurarse el sistema\n          operativo, es el ultimo paso.\n        </li>\n        <img src=\"assets/windows (22).jpg\" alt=\"\" class=\"imagen\" />\n        <li>\n          Finalmente, lo primero que te muestra es Edge, el navegador de\n          windows, para configurarlo a tu gusto.\n        </li>\n        <img src=\"assets/windows (1).jpg\" alt=\"\" class=\"imagen\" />\n        <li>Y listo, ya tienes windows 10 configurado en tu equipo</li>\n      </ul>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_windows_windows_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/windows/windows.component */
    "./src/app/components/windows/windows.component.ts");
    /* harmony import */


    var _components_linux_linux_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/linux/linux.component */
    "./src/app/components/linux/linux.component.ts");
    /* harmony import */


    var _components_services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/services/services.component */
    "./src/app/components/services/services.component.ts");
    /* harmony import */


    var _components_free_office_free_office_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/free-office/free-office.component */
    "./src/app/components/free-office/free-office.component.ts");
    /* harmony import */


    var _components_django_django_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/django/django.component */
    "./src/app/components/django/django.component.ts");
    /* harmony import */


    var _components_laravel_laravel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/laravel/laravel.component */
    "./src/app/components/laravel/laravel.component.ts");
    /* harmony import */


    var _components_ionic_ionic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/ionic/ionic.component */
    "./src/app/components/ionic/ionic.component.ts");
    /* harmony import */


    var _components_ruby_ruby_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/ruby/ruby.component */
    "./src/app/components/ruby/ruby.component.ts");
    /* harmony import */


    var _components_videogame_videogame_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/videogame/videogame.component */
    "./src/app/components/videogame/videogame.component.ts");
    /* harmony import */


    var _components_windows_server_windows_server_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/windows-server/windows-server.component */
    "./src/app/components/windows-server/windows-server.component.ts");
    /* harmony import */


    var _components_users_ws_users_ws_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/users-ws/users-ws.component */
    "./src/app/components/users-ws/users-ws.component.ts");
    /* harmony import */


    var _components_linux_server_linux_server_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/linux-server/linux-server.component */
    "./src/app/components/linux-server/linux-server.component.ts");
    /* harmony import */


    var _components_ls_dj_rby_ls_dj_rby_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/ls-dj-rby/ls-dj-rby.component */
    "./src/app/components/ls-dj-rby/ls-dj-rby.component.ts");

    var routes = [{
      path: "home",
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: "Linux",
      component: _components_linux_linux_component__WEBPACK_IMPORTED_MODULE_5__["LinuxComponent"]
    }, {
      path: "Windows",
      component: _components_windows_windows_component__WEBPACK_IMPORTED_MODULE_4__["WindowsComponent"]
    }, {
      path: "Servicios",
      component: _components_services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"]
    }, {
      path: "Free-Office",
      component: _components_free_office_free_office_component__WEBPACK_IMPORTED_MODULE_7__["FreeOfficeComponent"]
    }, {
      path: "Django",
      component: _components_django_django_component__WEBPACK_IMPORTED_MODULE_8__["DjangoComponent"]
    }, {
      path: "Laravel",
      component: _components_laravel_laravel_component__WEBPACK_IMPORTED_MODULE_9__["LaravelComponent"]
    }, {
      path: "Ionic",
      component: _components_ionic_ionic_component__WEBPACK_IMPORTED_MODULE_10__["IonicComponent"]
    }, {
      path: "Ruby",
      component: _components_ruby_ruby_component__WEBPACK_IMPORTED_MODULE_11__["RubyComponent"]
    }, {
      path: "VideoJuego",
      component: _components_videogame_videogame_component__WEBPACK_IMPORTED_MODULE_12__["VideogameComponent"]
    }, {
      path: "Windows Server",
      component: _components_windows_server_windows_server_component__WEBPACK_IMPORTED_MODULE_13__["WindowsServerComponent"]
    }, {
      path: "Linux Server",
      component: _components_linux_server_linux_server_component__WEBPACK_IMPORTED_MODULE_15__["LinuxServerComponent"]
    }, {
      path: "Linux Server Django y Ruby",
      component: _components_ls_dj_rby_ls_dj_rby_component__WEBPACK_IMPORTED_MODULE_16__["LsDjRbyComponent"]
    }, {
      path: "Usuarios y Grupos Windows Server",
      component: _components_users_ws_users_ws_component__WEBPACK_IMPORTED_MODULE_14__["UsersWSComponent"]
    }, {
      path: "**",
      pathMatch: "full",
      redirectTo: "home"
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'blogSSOR';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/shared/navbar/navbar.component */
    "./src/app/components/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/shared/footer/footer.component */
    "./src/app/components/shared/footer/footer.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/dropdown/dropdown.component */
    "./src/app/components/dropdown/dropdown.component.ts");
    /* harmony import */


    var _components_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/search/search.component */
    "./src/app/components/search/search.component.ts");
    /* harmony import */


    var _components_drop_soft_drop_soft_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/drop-soft/drop-soft.component */
    "./src/app/components/drop-soft/drop-soft.component.ts");
    /* harmony import */


    var _components_images_images_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/images/images.component */
    "./src/app/components/images/images.component.ts");
    /* harmony import */


    var _components_windows_windows_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/windows/windows.component */
    "./src/app/components/windows/windows.component.ts");
    /* harmony import */


    var _components_linux_linux_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/linux/linux.component */
    "./src/app/components/linux/linux.component.ts");
    /* harmony import */


    var _components_services_services_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/services/services.component */
    "./src/app/components/services/services.component.ts");
    /* harmony import */


    var _components_free_office_free_office_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/free-office/free-office.component */
    "./src/app/components/free-office/free-office.component.ts");
    /* harmony import */


    var _components_django_django_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/django/django.component */
    "./src/app/components/django/django.component.ts");
    /* harmony import */


    var _components_laravel_laravel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/laravel/laravel.component */
    "./src/app/components/laravel/laravel.component.ts");
    /* harmony import */


    var _components_ionic_ionic_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/ionic/ionic.component */
    "./src/app/components/ionic/ionic.component.ts");
    /* harmony import */


    var _components_ruby_ruby_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/ruby/ruby.component */
    "./src/app/components/ruby/ruby.component.ts");
    /* harmony import */


    var _components_videogame_videogame_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/videogame/videogame.component */
    "./src/app/components/videogame/videogame.component.ts");
    /* harmony import */


    var _components_windows_server_windows_server_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/windows-server/windows-server.component */
    "./src/app/components/windows-server/windows-server.component.ts");
    /* harmony import */


    var _components_users_ws_users_ws_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/users-ws/users-ws.component */
    "./src/app/components/users-ws/users-ws.component.ts");
    /* harmony import */


    var _components_linux_server_linux_server_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/linux-server/linux-server.component */
    "./src/app/components/linux-server/linux-server.component.ts");
    /* harmony import */


    var _components_ls_dj_rby_ls_dj_rby_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/ls-dj-rby/ls-dj-rby.component */
    "./src/app/components/ls-dj-rby/ls-dj-rby.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["DropdownComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"], _components_drop_soft_drop_soft_component__WEBPACK_IMPORTED_MODULE_10__["DropSoftComponent"], _components_images_images_component__WEBPACK_IMPORTED_MODULE_11__["ImagesComponent"], _components_windows_windows_component__WEBPACK_IMPORTED_MODULE_12__["WindowsComponent"], _components_linux_linux_component__WEBPACK_IMPORTED_MODULE_13__["LinuxComponent"], _components_services_services_component__WEBPACK_IMPORTED_MODULE_14__["ServicesComponent"], _components_free_office_free_office_component__WEBPACK_IMPORTED_MODULE_15__["FreeOfficeComponent"], _components_django_django_component__WEBPACK_IMPORTED_MODULE_16__["DjangoComponent"], _components_laravel_laravel_component__WEBPACK_IMPORTED_MODULE_17__["LaravelComponent"], _components_ionic_ionic_component__WEBPACK_IMPORTED_MODULE_18__["IonicComponent"], _components_ruby_ruby_component__WEBPACK_IMPORTED_MODULE_19__["RubyComponent"], _components_videogame_videogame_component__WEBPACK_IMPORTED_MODULE_20__["VideogameComponent"], _components_windows_server_windows_server_component__WEBPACK_IMPORTED_MODULE_21__["WindowsServerComponent"], _components_users_ws_users_ws_component__WEBPACK_IMPORTED_MODULE_22__["UsersWSComponent"], _components_linux_server_linux_server_component__WEBPACK_IMPORTED_MODULE_23__["LinuxServerComponent"], _components_ls_dj_rby_ls_dj_rby_component__WEBPACK_IMPORTED_MODULE_24__["LsDjRbyComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/django/django.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/django/django.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDjangoDjangoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-imagen {\n  width: 100%;\n  height: 800px;\n}\n\n.logo {\n    height: auto;\n    width: 25%;\n}\n\n.imagen {\n  width: 50%;\n  height: 500px;\n}\n\n.image {\n  padding: 0;\n}\n\n.edit {\n  padding: 0;\n}\n\n.edicion {\n  background-color: #135285;\n  color: #ffffff;\n  text-align: center;\n}\n\n.edicion p {\n  font-size: 25px;\n  margin: 50px 0; \n}\n\n.edicion h2, h1 {\n    margin-top: 50px;\n    text-decoration: underline;\n}\n\n.edicion li {\n  border-radius: 2px;\n  border-style: double;\n  border-color: red;\n  margin: 20px 0;\n  list-style-type: none;\n  font-size: 25px;\n  text-align: center;\n}\n\n.service-img{\n  width: 40%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kamFuZ28vZGphbmdvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDBCQUEwQjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RqYW5nby9kamFuZ28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWltYWdlbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwMHB4O1xufVxuXG4ubG9nbyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAyNSU7XG59XG5cbi5pbWFnZW4ge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4uaW1hZ2Uge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZWRpdCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5lZGljaW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzNTI4NTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVkaWNpb24gcCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luOiA1MHB4IDA7IFxufVxuXG4uZWRpY2lvbiBoMiwgaDEge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5lZGljaW9uIGxpIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXItc3R5bGU6IGRvdWJsZTtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gIG1hcmdpbjogMjBweCAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VydmljZS1pbWd7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/django/django.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/django/django.component.ts ***!
    \*******************************************************/

  /*! exports provided: DjangoComponent */

  /***/
  function srcAppComponentsDjangoDjangoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DjangoComponent", function () {
      return DjangoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DjangoComponent =
    /*#__PURE__*/
    function () {
      function DjangoComponent() {
        _classCallCheck(this, DjangoComponent);
      }

      _createClass(DjangoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DjangoComponent;
    }();

    DjangoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-django',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./django.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/django/django.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./django.component.css */
      "./src/app/components/django/django.component.css")).default]
    })], DjangoComponent);
    /***/
  },

  /***/
  "./src/app/components/drop-soft/drop-soft.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/drop-soft/drop-soft.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDropSoftDropSoftComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menu {\n  margin-left: 3%;\n  background-color: #2196f3;\n  color: white;\n  padding: 0;\n}\n\n.menu a {\n  font-size: 22px;\n}\n\n.menu button {\n  background-color: #0d528b;\n  width: 100%;\n  color: white;\n  font-size: 22px;\n  padding-right: 6px;\n}\n\n.menu button:hover {\n  background-color: #106bb6;\n  color: white;\n}\n\n.list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.show > .btn-secondary.dropdown-toggle {\n  background-color: #081d2f;\n}\n\n.dropdown-menu.show {\n  margin: 0;\n  padding: 0;\n}\n\n.boton {\n  background-color: #0d528b;\n  border-radius: 10%;\n  margin-right: 15px;\n  color: white;\n}\n\n.dropdown-item {\n  font-size: 15px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kcm9wLXNvZnQvZHJvcC1zb2Z0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ryb3Atc29mdC9kcm9wLXNvZnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tZW51IGEge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5tZW51IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDUyOGI7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZy1yaWdodDogNnB4O1xufVxuLm1lbnUgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwNmJiNjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubGlzdCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2hvdyA+IC5idG4tc2Vjb25kYXJ5LmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODFkMmY7XG59XG5cbi5kcm9wZG93bi1tZW51LnNob3cge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5ib3RvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDUyOGI7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uZHJvcGRvd24taXRlbSB7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/drop-soft/drop-soft.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/drop-soft/drop-soft.component.ts ***!
    \*************************************************************/

  /*! exports provided: DropSoftComponent */

  /***/
  function srcAppComponentsDropSoftDropSoftComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropSoftComponent", function () {
      return DropSoftComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DropSoftComponent =
    /*#__PURE__*/
    function () {
      function DropSoftComponent() {
        _classCallCheck(this, DropSoftComponent);

        this.menu = [{
          software: 'Servicios'
        }, {
          software: 'Free-Office'
        }, {
          software: 'Java'
        }, {
          software: 'Django'
        }, {
          software: 'Laravel'
        }, {
          software: 'Ruby'
        }, {
          software: 'Ionic'
        }, {
          software: 'VideoJuego'
        }, {
          software: 'Samba'
        }];
      }

      _createClass(DropSoftComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DropSoftComponent;
    }();

    DropSoftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-drop-soft',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./drop-soft.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/drop-soft/drop-soft.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./drop-soft.component.css */
      "./src/app/components/drop-soft/drop-soft.component.css")).default]
    })], DropSoftComponent);
    /***/
  },

  /***/
  "./src/app/components/dropdown/dropdown.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/dropdown/dropdown.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDropdownDropdownComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menu {\n  margin-left: 3%;\n  background-color: #2196f3;\n  color: white;\n  padding: 0;\n}\n\n.menu a {\n  font-size: 22px;\n}\n\n.menu button {\n  background-color: #0d528b;\n  width: 100%;\n  color: white;\n  font-size: 22px;\n  padding-right: 6px;\n}\n\n.menu button:hover {\n  background-color: #106bb6;\n  color: white;\n}\n\n.list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.show > .btn-secondary.dropdown-toggle {\n  background-color: #081d2f;\n}\n\n.dropdown-menu.show {\n  margin: 0;\n  padding: 0;\n}\n\n.boton {\n  background-color: #0d528b;\n  border-radius: 10%;\n  margin-right: 15px;\n  color: white;\n}\n\n.dropdown-item {\n  font-size: 15px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUge1xuICBtYXJnaW4tbGVmdDogMyU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1lbnUgYSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLm1lbnUgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkNTI4YjtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG59XG4ubWVudSBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA2YmI2O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5saXN0IHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5zaG93ID4gLmJ0bi1zZWNvbmRhcnkuZHJvcGRvd24tdG9nZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MWQyZjtcbn1cblxuLmRyb3Bkb3duLW1lbnUuc2hvdyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJvdG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkNTI4YjtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kcm9wZG93bi1pdGVtIHtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/dropdown/dropdown.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/dropdown/dropdown.component.ts ***!
    \***********************************************************/

  /*! exports provided: DropdownComponent */

  /***/
  function srcAppComponentsDropdownDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownComponent", function () {
      return DropdownComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DropdownComponent =
    /*#__PURE__*/
    function () {
      function DropdownComponent() {
        _classCallCheck(this, DropdownComponent);

        this.menu = [{
          software: "Windows"
        }, {
          software: "Linux"
        }, {
          software: "Windows Server"
        }, {
          software: "Usuarios y Grupos Windows Server"
        }, {
          software: "Linux Server"
        }, {
          software: "Linux Server Django y Ruby"
        }];
      }

      _createClass(DropdownComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DropdownComponent;
    }();

    DropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-dropdown",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dropdown.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdown/dropdown.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dropdown.component.css */
      "./src/app/components/dropdown/dropdown.component.css")).default]
    })], DropdownComponent);
    /***/
  },

  /***/
  "./src/app/components/free-office/free-office.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/components/free-office/free-office.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFreeOfficeFreeOfficeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-imagen {\n  width: 100%;\n  height: 800px;\n}\n\n.logo {\n    height: auto;\n    width: 25%;\n}\n\n.imagen {\n  width: 50%;\n  height: 500px;\n}\n\n.image {\n  padding: 0;\n}\n\n.edit {\n  padding: 0;\n}\n\n.edicion {\n  background-color: #135285;\n  color: #ffffff;\n  text-align: center;\n}\n\n.edicion p {\n  font-size: 25px;\n  margin: 50px 0; \n}\n\n.edicion h2, h1 {\n    margin-top: 50px;\n    text-decoration: underline;\n}\n\n.edicion li {\n  border-radius: 2px;\n  border-style: double;\n  border-color: red;\n  margin: 20px 0;\n  list-style-type: none;\n  font-size: 25px;\n  text-align: center;\n}\n\n.service-img{\n  width: 40%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mcmVlLW9mZmljZS9mcmVlLW9mZmljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwwQkFBMEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mcmVlLW9mZmljZS9mcmVlLW9mZmljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4taW1hZ2VuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODAwcHg7XG59XG5cbi5sb2dvIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDI1JTtcbn1cblxuLmltYWdlbiB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbi5pbWFnZSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5lZGl0IHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmVkaWNpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM1Mjg1O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZWRpY2lvbiBwIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW46IDUwcHggMDsgXG59XG5cbi5lZGljaW9uIGgyLCBoMSB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmVkaWNpb24gbGkge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlci1zdHlsZTogZG91YmxlO1xuICBib3JkZXItY29sb3I6IHJlZDtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZXJ2aWNlLWltZ3tcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/free-office/free-office.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/free-office/free-office.component.ts ***!
    \*****************************************************************/

  /*! exports provided: FreeOfficeComponent */

  /***/
  function srcAppComponentsFreeOfficeFreeOfficeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FreeOfficeComponent", function () {
      return FreeOfficeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FreeOfficeComponent =
    /*#__PURE__*/
    function () {
      function FreeOfficeComponent() {
        _classCallCheck(this, FreeOfficeComponent);
      }

      _createClass(FreeOfficeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FreeOfficeComponent;
    }();

    FreeOfficeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-free-office',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./free-office.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/free-office/free-office.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./free-office.component.css */
      "./src/app/components/free-office/free-office.component.css")).default]
    })], FreeOfficeComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/home/home.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".imagen {\n    width: 100%;\n    height: 500px;\n}\n\n.image {\n    padding: 0;\n}\n\n.edit {\n    padding: 0;\n}\n\n.edit h3{\n    /* margin-left: 10%; */\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2VuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4uaW1hZ2Uge1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5lZGl0IHtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uZWRpdCBoM3tcbiAgICAvKiBtYXJnaW4tbGVmdDogMTAlOyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/components/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/images/images.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/images/images.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsImagesImagesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".imagen {\n    width: 85%;\n    height: 200px;\n    margin-top: 4%;\n    margin-left: 8%;\n}\n\n.image {\n    padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbWFnZXMvaW1hZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbWFnZXMvaW1hZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2VuIHtcbiAgICB3aWR0aDogODUlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgbWFyZ2luLXRvcDogNCU7XG4gICAgbWFyZ2luLWxlZnQ6IDglO1xufVxuXG4uaW1hZ2Uge1xuICAgIHBhZGRpbmc6IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/images/images.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/images/images.component.ts ***!
    \*******************************************************/

  /*! exports provided: ImagesComponent */

  /***/
  function srcAppComponentsImagesImagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesComponent", function () {
      return ImagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ImagesComponent =
    /*#__PURE__*/
    function () {
      function ImagesComponent() {
        _classCallCheck(this, ImagesComponent);

        this.images = [{
          img: "windows-10"
        }, {
          img: "linux"
        }, {
          img: "windows-server"
        }];
      }

      _createClass(ImagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ImagesComponent;
    }();

    ImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-images",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./images.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/images/images.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./images.component.css */
      "./src/app/components/images/images.component.css")).default]
    })], ImagesComponent);
    /***/
  },

  /***/
  "./src/app/components/ionic/ionic.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/ionic/ionic.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsIonicIonicComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-imagen {\n  width: 100%;\n  height: 800px;\n}\n\n.logo {\n  height: auto;\n  width: 25%;\n}\n\n.imagen {\n  width: 50%;\n  height: 500px;\n}\n\n.image {\n  padding: 0;\n}\n\n.edit {\n  padding: 0;\n}\n\n.edicion {\n  background-color: #135285;\n  color: #ffffff;\n  text-align: center;\n}\n\n.edicion p {\n  font-size: 25px;\n  margin: 50px 0;\n}\n\n.edicion h2,\nh1 {\n  margin-top: 50px;\n  text-decoration: underline;\n}\n\n.edicion li {\n  border-radius: 2px;\n  border-style: double;\n  border-color: red;\n  margin: 20px 0;\n  list-style-type: none;\n  font-size: 25px;\n  text-align: center;\n}\n\n.service-img {\n  width: 40%;\n  height: auto;\n}\n\n.image-cont {\n  width: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pb25pYy9pb25pYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW9uaWMvaW9uaWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWltYWdlbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwMHB4O1xufVxuXG4ubG9nbyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDI1JTtcbn1cblxuLmltYWdlbiB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbi5pbWFnZSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5lZGl0IHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmVkaWNpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM1Mjg1O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZWRpY2lvbiBwIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW46IDUwcHggMDtcbn1cblxuLmVkaWNpb24gaDIsXG5oMSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZWRpY2lvbiBsaSB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXN0eWxlOiBkb3VibGU7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xuICBtYXJnaW46IDIwcHggMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlcnZpY2UtaW1nIHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaW1hZ2UtY29udCB7XG4gIHdpZHRoOiA1MCU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/ionic/ionic.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/ionic/ionic.component.ts ***!
    \*****************************************************/

  /*! exports provided: IonicComponent */

  /***/
  function srcAppComponentsIonicIonicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IonicComponent", function () {
      return IonicComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var IonicComponent =
    /*#__PURE__*/
    function () {
      function IonicComponent() {
        _classCallCheck(this, IonicComponent);
      }

      _createClass(IonicComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IonicComponent;
    }();

    IonicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ionic',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ionic.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ionic/ionic.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ionic.component.css */
      "./src/app/components/ionic/ionic.component.css")).default]
    })], IonicComponent);
    /***/
  },

  /***/
  "./src/app/components/laravel/laravel.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/laravel/laravel.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLaravelLaravelComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-imagen {\n  width: 100%;\n  height: 800px;\n}\n\n.logo {\n    height: auto;\n    width: 25%;\n}\n\n.imagen {\n  width: 50%;\n  height: 500px;\n}\n\n.image {\n  padding: 0;\n}\n\n.edit {\n  padding: 0;\n}\n\n.edicion {\n  background-color: #135285;\n  color: #ffffff;\n  text-align: center;\n}\n\n.edicion p {\n  font-size: 25px;\n  margin: 50px 0; \n}\n\n.edicion h2, h1 {\n    margin-top: 50px;\n    text-decoration: underline;\n}\n\n.edicion li {\n  border-radius: 2px;\n  border-style: double;\n  border-color: red;\n  margin: 20px 0;\n  list-style-type: none;\n  font-size: 25px;\n  text-align: center;\n}\n\n.service-img{\n  width: 40%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXJhdmVsL2xhcmF2ZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsMEJBQTBCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFyYXZlbC9sYXJhdmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1pbWFnZW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MDBweDtcbn1cblxuLmxvZ28ge1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMjUlO1xufVxuXG4uaW1hZ2VuIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxuLmltYWdlIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmVkaXQge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZWRpY2lvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzUyODU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lZGljaW9uIHAge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbjogNTBweCAwOyBcbn1cblxuLmVkaWNpb24gaDIsIGgxIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZWRpY2lvbiBsaSB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXN0eWxlOiBkb3VibGU7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xuICBtYXJnaW46IDIwcHggMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlcnZpY2UtaW1ne1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/laravel/laravel.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/laravel/laravel.component.ts ***!
    \*********************************************************/

  /*! exports provided: LaravelComponent */

  /***/
  function srcAppComponentsLaravelLaravelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LaravelComponent", function () {
      return LaravelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LaravelComponent =
    /*#__PURE__*/
    function () {
      function LaravelComponent() {
        _classCallCheck(this, LaravelComponent);
      }

      _createClass(LaravelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LaravelComponent;
    }();

    LaravelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-laravel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./laravel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/laravel/laravel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./laravel.component.css */
      "./src/app/components/laravel/laravel.component.css")).default]
    })], LaravelComponent);
    /***/
  },

  /***/
  "./src/app/components/linux-server/linux-server.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/linux-server/linux-server.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLinuxServerLinuxServerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-imagen {\n  width: 100%;\n  height: 800px;\n}\n\n.logo {\n  height: auto;\n  width: 25%;\n}\n\n.imagen {\n  width: 50%;\n  height: 500px;\n}\n\n.image {\n  padding: 0;\n}\n\n.edit {\n  padding: 0;\n}\n\n.edicion {\n  background-color: #135285;\n  color: #ffffff;\n  text-align: center;\n}\n\n.edicion p {\n  font-size: 25px;\n  margin: 50px 0;\n}\n\n.edicion h2,\nh1 {\n  margin-top: 50px;\n  text-decoration: underline;\n}\n\n.edicion li {\n  border-radius: 2px;\n  border-style: double;\n  border-color: red;\n  margin: 20px 0;\n  list-style-type: none;\n  font-size: 25px;\n  text-align: center;\n}\n\n.service-img {\n  width: 40%;\n  height: auto;\n}\n\n.image-cont {\n  width: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saW51eC1zZXJ2ZXIvbGludXgtc2VydmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saW51eC1zZXJ2ZXIvbGludXgtc2VydmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1pbWFnZW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MDBweDtcbn1cblxuLmxvZ28ge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5pbWFnZW4ge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4uaW1hZ2Uge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZWRpdCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5lZGljaW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzNTI4NTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVkaWNpb24gcCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luOiA1MHB4IDA7XG59XG5cbi5lZGljaW9uIGgyLFxuaDEge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmVkaWNpb24gbGkge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlci1zdHlsZTogZG91YmxlO1xuICBib3JkZXItY29sb3I6IHJlZDtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZXJ2aWNlLWltZyB7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmltYWdlLWNvbnQge1xuICB3aWR0aDogNTAlO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/linux-server/linux-server.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/linux-server/linux-server.component.ts ***!
    \*******************************************************************/

  /*! exports provided: LinuxServerComponent */

  /***/
  function srcAppComponentsLinuxServerLinuxServerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinuxServerComponent", function () {
      return LinuxServerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LinuxServerComponent =
    /*#__PURE__*/
    function () {
      function LinuxServerComponent() {
        _classCallCheck(this, LinuxServerComponent);
      }

      _createClass(LinuxServerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LinuxServerComponent;
    }();

    LinuxServerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-linux-server',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./linux-server.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/linux-server/linux-server.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./linux-server.component.css */
      "./src/app/components/linux-server/linux-server.component.css")).default]
    })], LinuxServerComponent);
    /***/
  },

  /***/
  "./src/app/components/linux/linux.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/linux/linux.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLinuxLinuxComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-imagen {\n  width: 100%;\n  height: 500px;\n}\n\n.imagen {\n  width: 50%;\n  height: 500px;\n}\n\n.image {\n  padding: 0;\n}\n\n.edit {\n  padding: 0;\n}\n\n.edicion {\n  background-color: #135285;\n  color: #ffffff;\n  text-align: center;\n}\n\n.edicion p {\n  font-size: 25px;\n  margin: 50px 0;\n}\n\n.edicion h2,\nh1 {\n  text-decoration: underline;\n}\n\n.edicion li {\n  border-radius: 2px;\n  border-style: double;\n  border-color: red;\n  margin: 20px 0;\n  list-style-type: none;\n  font-size: 25px;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saW51eC9saW51eC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGludXgvbGludXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWltYWdlbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4uaW1hZ2VuIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxuLmltYWdlIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmVkaXQge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZWRpY2lvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzUyODU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lZGljaW9uIHAge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbjogNTBweCAwO1xufVxuXG4uZWRpY2lvbiBoMixcbmgxIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5lZGljaW9uIGxpIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXItc3R5bGU6IGRvdWJsZTtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gIG1hcmdpbjogMjBweCAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/linux/linux.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/linux/linux.component.ts ***!
    \*****************************************************/

  /*! exports provided: LinuxComponent */

  /***/
  function srcAppComponentsLinuxLinuxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinuxComponent", function () {
      return LinuxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LinuxComponent =
    /*#__PURE__*/
    function () {
      function LinuxComponent() {
        _classCallCheck(this, LinuxComponent);
      }

      _createClass(LinuxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LinuxComponent;
    }();

    LinuxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-linux',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./linux.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/linux/linux.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./linux.component.css */
      "./src/app/components/linux/linux.component.css")).default]
    })], LinuxComponent);
    /***/
  },

  /***/
  "./src/app/components/ls-dj-rby/ls-dj-rby.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/ls-dj-rby/ls-dj-rby.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLsDjRbyLsDjRbyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-imagen {\r\n  width: 100%;\r\n  height: 600px;\r\n}\r\n\r\n.logo {\r\n  height: auto;\r\n  width: 25%;\r\n}\r\n\r\n.imagen {\r\n  width: 50%;\r\n  height: 500px;\r\n}\r\n\r\n.image {\r\n  padding: 0;\r\n}\r\n\r\n.edit {\r\n  padding: 0;\r\n}\r\n\r\n.edicion {\r\n  background-color: #135285;\r\n  color: #ffffff;\r\n  text-align: center;\r\n}\r\n\r\n.edicion p {\r\n  font-size: 25px;\r\n  margin: 50px 0;\r\n}\r\n\r\n.edicion h2,\r\nh1 {\r\n  margin-top: 50px;\r\n  text-decoration: underline;\r\n}\r\n\r\n.edicion li {\r\n  border-radius: 2px;\r\n  border-style: double;\r\n  border-color: red;\r\n  margin: 20px 0;\r\n  list-style-type: none;\r\n  font-size: 25px;\r\n  text-align: center;\r\n}\r\n\r\n.service-img {\r\n  width: 40%;\r\n  height: auto;\r\n}\r\n\r\n.image-cont {\r\n  width: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9scy1kai1yYnkvbHMtZGotcmJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9scy1kai1yYnkvbHMtZGotcmJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1pbWFnZW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLmltYWdlbiB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5lZGl0IHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uZWRpY2lvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzNTI4NTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lZGljaW9uIHAge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBtYXJnaW46IDUwcHggMDtcclxufVxyXG5cclxuLmVkaWNpb24gaDIsXHJcbmgxIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uZWRpY2lvbiBsaSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJvcmRlci1zdHlsZTogZG91YmxlO1xyXG4gIGJvcmRlci1jb2xvcjogcmVkO1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2VydmljZS1pbWcge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uaW1hZ2UtY29udCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/ls-dj-rby/ls-dj-rby.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/ls-dj-rby/ls-dj-rby.component.ts ***!
    \*************************************************************/

  /*! exports provided: LsDjRbyComponent */

  /***/
  function srcAppComponentsLsDjRbyLsDjRbyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LsDjRbyComponent", function () {
      return LsDjRbyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LsDjRbyComponent =
    /*#__PURE__*/
    function () {
      function LsDjRbyComponent() {
        _classCallCheck(this, LsDjRbyComponent);
      }

      _createClass(LsDjRbyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LsDjRbyComponent;
    }();

    LsDjRbyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ls-dj-rby',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ls-dj-rby.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ls-dj-rby/ls-dj-rby.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ls-dj-rby.component.css */
      "./src/app/components/ls-dj-rby/ls-dj-rby.component.css")).default]
    })], LsDjRbyComponent);
    /***/
  },

  /***/
  "./src/app/components/ruby/ruby.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/ruby/ruby.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRubyRubyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-imagen {\n  width: 100%;\n  height: 800px;\n}\n\n.logo {\n  height: auto;\n  width: 25%;\n}\n\n.imagen {\n  width: 50%;\n  height: 500px;\n}\n\n.image {\n  padding: 0;\n}\n\n.edit {\n  padding: 0;\n}\n\n.edicion {\n  background-color: #135285;\n  color: #ffffff;\n  text-align: center;\n}\n\n.edicion p {\n  font-size: 25px;\n  margin: 50px 0;\n}\n\n.edicion h2,\nh1 {\n  margin-top: 50px;\n  text-decoration: underline;\n}\n\n.edicion li {\n  border-radius: 2px;\n  border-style: double;\n  border-color: red;\n  margin: 20px 0;\n  list-style-type: none;\n  font-size: 25px;\n  text-align: center;\n}\n\n.service-img {\n  width: 40%;\n  height: auto;\n}\n\n.image-cont {\n  width: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ydWJ5L3J1YnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3J1YnkvcnVieS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4taW1hZ2VuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODAwcHg7XG59XG5cbi5sb2dvIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMjUlO1xufVxuXG4uaW1hZ2VuIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxuLmltYWdlIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmVkaXQge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZWRpY2lvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzUyODU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lZGljaW9uIHAge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbjogNTBweCAwO1xufVxuXG4uZWRpY2lvbiBoMixcbmgxIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5lZGljaW9uIGxpIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXItc3R5bGU6IGRvdWJsZTtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gIG1hcmdpbjogMjBweCAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VydmljZS1pbWcge1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5pbWFnZS1jb250IHtcbiAgd2lkdGg6IDUwJTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/ruby/ruby.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/ruby/ruby.component.ts ***!
    \***************************************************/

  /*! exports provided: RubyComponent */

  /***/
  function srcAppComponentsRubyRubyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RubyComponent", function () {
      return RubyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RubyComponent =
    /*#__PURE__*/
    function () {
      function RubyComponent() {
        _classCallCheck(this, RubyComponent);
      }

      _createClass(RubyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RubyComponent;
    }();

    RubyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ruby',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ruby.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ruby/ruby.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ruby.component.css */
      "./src/app/components/ruby/ruby.component.css")).default]
    })], RubyComponent);
    /***/
  },

  /***/
  "./src/app/components/search/search.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/search/search.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSearchSearchComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".search {\n    margin-top: 0;\n}\n.search input {\n    width: 100%;\n    margin-left: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cbi5zZWFyY2ggaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/search/search.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/search/search.component.ts ***!
    \*******************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppComponentsSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SearchComponent =
    /*#__PURE__*/
    function () {
      function SearchComponent() {
        _classCallCheck(this, SearchComponent);
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SearchComponent;
    }();

    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search.component.css */
      "./src/app/components/search/search.component.css")).default]
    })], SearchComponent);
    /***/
  },

  /***/
  "./src/app/components/services/services.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/services/services.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsServicesServicesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-imagen {\n  width: 100%;\n  height: 800px;\n}\n\n.logo {\n    height: auto;\n    width: 25%;\n}\n\n.imagen {\n  width: 50%;\n  height: 500px;\n}\n\n.image {\n  padding: 0;\n}\n\n.edit {\n  padding: 0;\n}\n\n.edicion {\n  background-color: #135285;\n  color: #ffffff;\n  text-align: center;\n}\n\n.edicion p {\n  font-size: 25px;\n  margin: 50px 0; \n}\n\n.edicion h2, h1 {\n    margin-top: 50px;\n    text-decoration: underline;\n}\n\n.edicion li {\n  border-radius: 2px;\n  border-style: double;\n  border-color: red;\n  margin: 20px 0;\n  list-style-type: none;\n  font-size: 25px;\n  text-align: center;\n}\n\n.service-img{\n  width: 40%;\n  height: auto;\n}\n\n.turn {\n  width: 30%;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  margin: 75px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwwQkFBMEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWltYWdlbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwMHB4O1xufVxuXG4ubG9nbyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAyNSU7XG59XG5cbi5pbWFnZW4ge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4uaW1hZ2Uge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZWRpdCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5lZGljaW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzNTI4NTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVkaWNpb24gcCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luOiA1MHB4IDA7IFxufVxuXG4uZWRpY2lvbiBoMiwgaDEge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5lZGljaW9uIGxpIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXItc3R5bGU6IGRvdWJsZTtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gIG1hcmdpbjogMjBweCAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VydmljZS1pbWd7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnR1cm4ge1xuICB3aWR0aDogMzAlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIG1hcmdpbjogNzVweCAwO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/services/services.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/services/services.component.ts ***!
    \***********************************************************/

  /*! exports provided: ServicesComponent */

  /***/
  function srcAppComponentsServicesServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesComponent", function () {
      return ServicesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ServicesComponent =
    /*#__PURE__*/
    function () {
      function ServicesComponent() {
        _classCallCheck(this, ServicesComponent);
      }

      _createClass(ServicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServicesComponent;
    }();

    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-services',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./services.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/services/services.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./services.component.css */
      "./src/app/components/services/services.component.css")).default]
    })], ServicesComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/footer/footer.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/components/shared/footer/footer.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer-distributed {\n  background-color: #2196f3;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n  width: 100%;\n  text-align: left;\n  font: bold 16px sans-serif;\n\n  bottom: 0;\n  padding: 10px 30px 30px;\n  margin-top: 30px;\n}\n\n.footer-distributed .footer-left,\n.footer-distributed .footer-center,\n.footer-distributed .footer-right {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.footer-distributed .footer-left {\n  width: 40%;\n}\n\n.footer-distributed h3 {\n  color: #ffffff;\n  font: normal 36px 'Cookie', cursive;\n  margin: 0;\n}\n\n.footer-distributed h3 span {\n  color: red;\n}\n\n.footer-distributed .footer-links {\n  color: #ffffff;\n  margin: 20px 0 12px;\n  padding: 0;\n  font-size: 15px;\n  text-align: center;\n}\n\n.footer-distributed .footer-links a {\n  display: inline-block;\n  line-height: 1.8;\n  text-decoration: none;\n  color: inherit;\n}\n\n.footer-distributed .footer-company-name {\n  color: gold;\n  font-size: 14px;\n  font-weight: normal;\n  margin: 0;\n  text-align: center;\n}\n\n.footer-distributed .footer-center {\n  width: 35%;\n}\n\n.footer-distributed .footer-center i {\n  background-color: red;\n  color: #ffffff;\n  font-size: 25px;\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 42px;\n  margin: 10px 15px;\n  vertical-align: middle;\n}\n\n.footer-distributed .footer-center i.fa-envelope {\n  font-size: 17px;\n  line-height: 38px;\n}\n\n.footer-distributed .footer-center p {\n  display: inline-block;\n  color: #ffffff;\n  vertical-align: middle;\n  margin: 0;\n}\n\n.footer-distributed .footer-center p span {\n  display: block;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 2;\n}\n\n.footer-distributed .footer-center p a {\n  color: gold;\n  text-decoration: none;\n  ;\n}\n\n.footer-distributed .footer-right {\n  width: 20%;\n}\n\n.footer-distributed .footer-company-about {\n  line-height: 20px;\n  color: white;\n  font-size: 16px;\n  font-weight: normal;\n  margin: 0;\n}\n\n.footer-distributed .footer-company-about span {\n  display: block;\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n\n.footer-distributed .footer-icons {\n  margin-top: 25px;\n}\n\n.footer-distributed .footer-icons a {\n  display: inline-block;\n  width: 35px;\n  height: 35px;\n  cursor: pointer;\n  background-color: white;\n  border-radius: 2px;\n\n  font-size: 20px;\n  color: #ffffff;\n  text-align: center;\n  line-height: 35px;\n\n  margin-right: 3px;\n  margin-bottom: 5px;\n}\n\n.icon {\n  color: black;\n  width: auto;\n  font-size: 35px;\n}\n\n.icon-facebook {\n  color: #3b5998;\n}\n\n.icon-twitter {\n  color: #00acee;\n}\n\n.icon-instagram {\n  color: red;\n}\n\n@media (max-width: 992px) {\n\n  .footer-distributed {\n    font: bold 14px sans-serif;\n    padding: 0 50px 15px;\n        height: 170px;\n\n  }\n\n  .footer-distributed .footer-left,\n  .footer-distributed .footer-right {\n    display: block;\n    width: 100%;\n    margin-bottom: 40px;\n    text-align: center;\n    font-size: 20px;\n  }\n\n  .footer-distributed .footer-center {\n    display: none;\n  }\n\n  .footer-distributed .footer-left {\n    font-size: 20px;\n  }\n\n  .footer-distributed .footer-left h3 {\n    display: none;\n  }\n\n  .footer-distributed .footer-center i {\n    margin-left: 0;\n  }\n\n}\n\n@media (height: 1366px) and (width: 1024px){\n  .footer-distributed{\n    position: absolute;\n  }\n}\n\n@media (max-height: 823px){\n  .footer-distributed{\n    height: 200px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLDJDQUEyQztFQUMzQyxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQiwwQkFBMEI7O0VBRTFCLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7RUFHRSxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUdBO0VBQ0UsVUFBVTtBQUNaOztBQUdBO0VBQ0UsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7O0FBRXZCOztBQUdBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjs7RUFFbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCOztFQUVqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7O0VBRUU7SUFDRSwwQkFBMEI7SUFDMUIsb0JBQW9CO1FBQ2hCLGFBQWE7O0VBRW5COztFQUVBOztJQUVFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUY7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItZGlzdHJpYnV0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udDogYm9sZCAxNnB4IHNhbnMtc2VyaWY7XG5cbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAxMHB4IDMwcHggMzBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxlZnQsXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyLFxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLXJpZ2h0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG5cbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0IHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIGgzIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQ6IG5vcm1hbCAzNnB4ICdDb29raWUnLCBjdXJzaXZlO1xuICBtYXJnaW46IDA7XG59XG5cbi5mb290ZXItZGlzdHJpYnV0ZWQgaDMgc3BhbiB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1saW5rcyB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW46IDIwcHggMCAxMnB4O1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxpbmtzIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxLjg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jb21wYW55LW5hbWUge1xuICBjb2xvcjogZ29sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciB7XG4gIHdpZHRoOiAzNSU7XG59XG5cbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgaSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgd2lkdGg6IDM4cHg7XG4gIGhlaWdodDogMzhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xuICBtYXJnaW46IDEwcHggMTVweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBpLmZhLWVudmVsb3BlIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMzhweDtcbn1cblxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIHAgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufVxuXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIHAgYSB7XG4gIGNvbG9yOiBnb2xkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIDtcbn1cblxuXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItcmlnaHQge1xuICB3aWR0aDogMjAlO1xufVxuXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY29tcGFueS1hYm91dCB7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY29tcGFueS1hYm91dCBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItaWNvbnMge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItaWNvbnMgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuXG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG5cbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmljb24ge1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiBhdXRvO1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5pY29uLWZhY2Vib29rIHtcbiAgY29sb3I6ICMzYjU5OTg7XG59XG5cbi5pY29uLXR3aXR0ZXIge1xuICBjb2xvcjogIzAwYWNlZTtcbn1cblxuLmljb24taW5zdGFncmFtIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG5cbiAgLmZvb3Rlci1kaXN0cmlidXRlZCB7XG4gICAgZm9udDogYm9sZCAxNHB4IHNhbnMtc2VyaWY7XG4gICAgcGFkZGluZzogMCA1MHB4IDE1cHg7XG4gICAgICAgIGhlaWdodDogMTcwcHg7XG5cbiAgfVxuXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0LFxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItcmlnaHQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGVmdCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxlZnQgaDMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIGkge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbn1cblxuQG1lZGlhIChoZWlnaHQ6IDEzNjZweCkgYW5kICh3aWR0aDogMTAyNHB4KXtcbiAgLmZvb3Rlci1kaXN0cmlidXRlZHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtaGVpZ2h0OiA4MjNweCl7XG4gIC5mb290ZXItZGlzdHJpYnV0ZWR7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/shared/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/shared/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.year = new Date().getFullYear();
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/components/shared/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/navbar/navbar.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/components/shared/navbar/navbar.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');\n@import url('https://fonts.googleapis.com/css?family=Courgette&display=swap');\n.navbar {\n  z-index: 950;\n}\n.enterBtn button{\n  background-color: #0d528b;\n  color: white;\n\n}\n.titulo {\n    font-family: 'Pacifico',\n    cursive;\n        font-size: 30px;\n        margin-left: 3%;\n\n}\n.trans {\n  background-color: transparent;\n}\n.drop{\n    margin-left: 2%;\n    padding: 0;\n}\n.menu {\n  background-color: #2196f3;\n  color: white;\n  padding: 0;\n}\n.active-link {\n  background-color: #0d528b;\n}\n.navbar-toggler {\n    background-color: #0d528b;\n}\n@media (max-width: 992px) {\n\n  .mod-color a {\n    float: right;\n    width: 150px;\n    text-align: center;\n    background-color: #2196f3;\n    color: white;\n  }\n\n  .mod-color a:hover {\n    color: red;\n  }\n\n  .menu {\n    background-color: #2196f3;\n    padding: 0 30px;\n  }\n\n  .menu a {\n    padding: 0;\n  }\n\n  .boton {\n    display: none;\n  }\n  .hidden {\n    display: block;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUE0RTtBQUM1RSw2RUFBNkU7QUFFN0U7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZOztBQUVkO0FBRUE7SUFDSTtXQUNPO1FBQ0gsZUFBZTtRQUNmLGVBQWU7O0FBRXZCO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0FBQ2Q7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osVUFBVTtBQUNaO0FBSUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUtBOztFQUVFO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBhY2lmaWNvJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Db3VyZ2V0dGUmZGlzcGxheT1zd2FwJyk7XG5cbi5uYXZiYXIge1xuICB6LWluZGV4OiA5NTA7XG59XG5cbi5lbnRlckJ0biBidXR0b257XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDUyOGI7XG4gIGNvbG9yOiB3aGl0ZTtcblxufVxuXG4udGl0dWxvIHtcbiAgICBmb250LWZhbWlseTogJ1BhY2lmaWNvJyxcbiAgICBjdXJzaXZlO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzJTtcblxufVxuLnRyYW5zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5kcm9we1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4ubWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMDtcbn1cblxuXG5cbi5hY3RpdmUtbGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDUyOGI7XG59XG5cbi5uYXZiYXItdG9nZ2xlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkNTI4Yjtcbn1cblxuXG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG5cbiAgLm1vZC1jb2xvciBhIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5tb2QtY29sb3IgYTpob3ZlciB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuXG4gIC5tZW51IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgfVxuXG4gIC5tZW51IGEge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAuYm90b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmhpZGRlbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/shared/navbar/navbar.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
    \**************************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsSharedNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/components/shared/navbar/navbar.component.css")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/components/users-ws/users-ws.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/users-ws/users-ws.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUsersWsUsersWsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-imagen {\n  width: 100%;\n  height: 800px;\n}\n\n.logo {\n  height: auto;\n  width: 25%;\n}\n\n.imagen {\n  width: 50%;\n  height: 500px;\n}\n\n.image {\n  padding: 0;\n}\n\n.edit {\n  padding: 0;\n}\n\n.edicion {\n  background-color: #135285;\n  color: #ffffff;\n  text-align: center;\n}\n\n.edicion p {\n  font-size: 25px;\n  margin: 50px 0;\n}\n\n.edicion h2,\nh1 {\n  margin-top: 50px;\n  text-decoration: underline;\n}\n\n.edicion li {\n  border-radius: 2px;\n  border-style: double;\n  border-color: red;\n  margin: 20px 0;\n  list-style-type: none;\n  font-size: 25px;\n  text-align: center;\n}\n\n.service-img {\n  width: 40%;\n  height: auto;\n}\n\n.image-cont {\n  width: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy13cy91c2Vycy13cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMtd3MvdXNlcnMtd3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWltYWdlbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwMHB4O1xufVxuXG4ubG9nbyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDI1JTtcbn1cblxuLmltYWdlbiB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbi5pbWFnZSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5lZGl0IHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmVkaWNpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM1Mjg1O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZWRpY2lvbiBwIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW46IDUwcHggMDtcbn1cblxuLmVkaWNpb24gaDIsXG5oMSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZWRpY2lvbiBsaSB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXN0eWxlOiBkb3VibGU7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xuICBtYXJnaW46IDIwcHggMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlcnZpY2UtaW1nIHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaW1hZ2UtY29udCB7XG4gIHdpZHRoOiA1MCU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/users-ws/users-ws.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/users-ws/users-ws.component.ts ***!
    \***********************************************************/

  /*! exports provided: UsersWSComponent */

  /***/
  function srcAppComponentsUsersWsUsersWsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersWSComponent", function () {
      return UsersWSComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UsersWSComponent =
    /*#__PURE__*/
    function () {
      function UsersWSComponent() {
        _classCallCheck(this, UsersWSComponent);
      }

      _createClass(UsersWSComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UsersWSComponent;
    }();

    UsersWSComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users-ws',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./users-ws.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users-ws/users-ws.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./users-ws.component.css */
      "./src/app/components/users-ws/users-ws.component.css")).default]
    })], UsersWSComponent);
    /***/
  },

  /***/
  "./src/app/components/videogame/videogame.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/videogame/videogame.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsVideogameVideogameComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-imagen {\n  width: 100%;\n  height: 800px;\n}\n\n.logo {\n  height: auto;\n  width: 25%;\n}\n\n.imagen {\n  width: 50%;\n  height: 500px;\n}\n\n.image {\n  padding: 0;\n}\n\n.edit {\n  padding: 0;\n}\n\n.edicion {\n  background-color: #135285;\n  color: #ffffff;\n  text-align: center;\n}\n\n.edicion p {\n  font-size: 25px;\n  margin: 50px 0;\n}\n\n.edicion h2,\nh1 {\n  margin-top: 50px;\n  text-decoration: underline;\n}\n\n.edicion li {\n  border-radius: 2px;\n  border-style: double;\n  border-color: red;\n  margin: 20px 0;\n  list-style-type: none;\n  font-size: 25px;\n  text-align: center;\n}\n\n.service-img {\n  width: 40%;\n  height: auto;\n}\n\n.image-cont {\n  width: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWRlb2dhbWUvdmlkZW9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92aWRlb2dhbWUvdmlkZW9nYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1pbWFnZW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MDBweDtcbn1cblxuLmxvZ28ge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5pbWFnZW4ge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4uaW1hZ2Uge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZWRpdCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5lZGljaW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzNTI4NTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVkaWNpb24gcCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luOiA1MHB4IDA7XG59XG5cbi5lZGljaW9uIGgyLFxuaDEge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmVkaWNpb24gbGkge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlci1zdHlsZTogZG91YmxlO1xuICBib3JkZXItY29sb3I6IHJlZDtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZXJ2aWNlLWltZyB7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmltYWdlLWNvbnQge1xuICB3aWR0aDogNTAlO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/videogame/videogame.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/videogame/videogame.component.ts ***!
    \*************************************************************/

  /*! exports provided: VideogameComponent */

  /***/
  function srcAppComponentsVideogameVideogameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideogameComponent", function () {
      return VideogameComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var VideogameComponent =
    /*#__PURE__*/
    function () {
      function VideogameComponent() {
        _classCallCheck(this, VideogameComponent);
      }

      _createClass(VideogameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VideogameComponent;
    }();

    VideogameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-videogame',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./videogame.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/videogame/videogame.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./videogame.component.css */
      "./src/app/components/videogame/videogame.component.css")).default]
    })], VideogameComponent);
    /***/
  },

  /***/
  "./src/app/components/windows-server/windows-server.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/components/windows-server/windows-server.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsWindowsServerWindowsServerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-imagen {\n  width: 100%;\n  height: 800px;\n}\n\n.logo {\n  height: auto;\n  width: 25%;\n}\n\n.imagen {\n  width: 50%;\n  height: 500px;\n}\n\n.image {\n  padding: 0;\n}\n\n.edit {\n  padding: 0;\n}\n\n.edicion {\n  background-color: #135285;\n  color: #ffffff;\n  text-align: center;\n}\n\n.edicion p {\n  font-size: 25px;\n  margin: 50px 0;\n}\n\n.edicion h2,\nh1 {\n  margin-top: 50px;\n  text-decoration: underline;\n}\n\n.edicion li {\n  border-radius: 2px;\n  border-style: double;\n  border-color: red;\n  margin: 20px 0;\n  list-style-type: none;\n  font-size: 25px;\n  text-align: center;\n}\n\n.service-img {\n  width: 40%;\n  height: auto;\n}\n\n.image-cont {\n  width: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aW5kb3dzLXNlcnZlci93aW5kb3dzLXNlcnZlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2luZG93cy1zZXJ2ZXIvd2luZG93cy1zZXJ2ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWltYWdlbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwMHB4O1xufVxuXG4ubG9nbyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDI1JTtcbn1cblxuLmltYWdlbiB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbi5pbWFnZSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5lZGl0IHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmVkaWNpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM1Mjg1O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZWRpY2lvbiBwIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW46IDUwcHggMDtcbn1cblxuLmVkaWNpb24gaDIsXG5oMSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZWRpY2lvbiBsaSB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXN0eWxlOiBkb3VibGU7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xuICBtYXJnaW46IDIwcHggMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlcnZpY2UtaW1nIHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaW1hZ2UtY29udCB7XG4gIHdpZHRoOiA1MCU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/windows-server/windows-server.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/windows-server/windows-server.component.ts ***!
    \***********************************************************************/

  /*! exports provided: WindowsServerComponent */

  /***/
  function srcAppComponentsWindowsServerWindowsServerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WindowsServerComponent", function () {
      return WindowsServerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WindowsServerComponent =
    /*#__PURE__*/
    function () {
      function WindowsServerComponent() {
        _classCallCheck(this, WindowsServerComponent);
      }

      _createClass(WindowsServerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WindowsServerComponent;
    }();

    WindowsServerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-windows-server',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./windows-server.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/windows-server/windows-server.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./windows-server.component.css */
      "./src/app/components/windows-server/windows-server.component.css")).default]
    })], WindowsServerComponent);
    /***/
  },

  /***/
  "./src/app/components/windows/windows.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/windows/windows.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsWindowsWindowsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-imagen {\n  width: 100%;\n  height: 500px;\n}\n\n.imagen {\n  width: 50%;\n  height: 500px;\n}\n\n.image {\n  padding: 0;\n}\n\n.edit {\n  padding: 0;\n}\n\n.edicion {\n  background-color: #135285;\n  color: #ffffff;\n  text-align: center;\n}\n\n.edicion p {\n  font-size: 25px;\n  margin: 50px 0; \n}\n\n.edicion h2, h1 {\n    text-decoration: underline;\n}\n\n.edicion li {\n  border-radius: 2px;\n  border-style: double;\n  border-color: red;\n  margin: 20px 0;\n  list-style-type: none;\n  font-size: 25px;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aW5kb3dzL3dpbmRvd3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2luZG93cy93aW5kb3dzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1pbWFnZW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxuLmltYWdlbiB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbi5pbWFnZSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5lZGl0IHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmVkaWNpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM1Mjg1O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZWRpY2lvbiBwIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW46IDUwcHggMDsgXG59XG5cbi5lZGljaW9uIGgyLCBoMSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5lZGljaW9uIGxpIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXItc3R5bGU6IGRvdWJsZTtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gIG1hcmdpbjogMjBweCAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/windows/windows.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/windows/windows.component.ts ***!
    \*********************************************************/

  /*! exports provided: WindowsComponent */

  /***/
  function srcAppComponentsWindowsWindowsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WindowsComponent", function () {
      return WindowsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WindowsComponent =
    /*#__PURE__*/
    function () {
      function WindowsComponent() {
        _classCallCheck(this, WindowsComponent);
      }

      _createClass(WindowsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WindowsComponent;
    }();

    WindowsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-windows',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./windows.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/windows/windows.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./windows.component.css */
      "./src/app/components/windows/windows.component.css")).default]
    })], WindowsComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\criss\Desktop\blogSSOR\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map