function ConceptController(){
  this.concepts = [
    {
      title: 'module',
      description: 'Trozo de código que puede contener controladores, servicios, directivas, componentes, filtros',
      image: 'images/module.png'
    },
    {
      title: 'controller',
      description: 'Esta relacionado con la lógica de la vista(HTML) y enlaza propiedades a la vista (HTML), bind es el enlace entre la función de propiedades y métodos',
      image: 'images/controller.png'
    },
    {
      title: 'controller-As',
      description: 'MainController ya no existe, se obtiene "main" como instancia',
      image: 'images/controllerAs.png'
    },
    {
      title: 'Binding to $scope',
      description: 'fuera de los enlaces genericos, puede utilizarse la dependencia $scope para crear algo especial',
      image: 'images/bindingToScope.png'
    },
    {
      title: 'Dependency Injection and minification',
      description: 'El sistema de dependencias e inyección en Angular usa un String que no puede ser minificado',
      image: 'images/dependencyInjection.png'
    },
    {
      title: 'ng-repeat',
      description: 'Directiva que trabaja de manera muy similar a un loop en JS, se aplica en tags como div, p, article o en cualquiera que sea necesario',
      image: 'images/ng-repeat.png'
    },
    {
      title: 'ng-show/ng-hide',
      description: 'Directivas que muestran u ocultan elementos basados en condiciones específicas',
      image: 'images/ng-show.png'
    },
    {
      title: 'ng-if',
      description: 'Directiva que es similar a ng-show con la diferencia de: si la expresión se evalua como falsa lo elimina por completo del DOM',
      image: 'images/ng-if.png'
    },
    {
      title: 'ng-switch',
      description: 'Directiva similar a ng-show/ng-hide, mucho mas poderoso. Cambia el HTML con diferentes valores',
      image: 'images/ng-switch.png'
    },
    {
      title: 'ng-class',
      description: 'Directiva que permite establecer dinamicamente las clases CSS a un elemento HTML por databinding de una expresión que repesenta las clases que se agregaran',
      image: 'images/ng-class.png'
    },
    {
      title: 'ng-model',
      description: 'Es un tipo especial de Directiva que permite enlazar datos a input, textarea, campos de un form, es "two-way databind" cambia los valores y los actualiza, vincula una entrada a una propiedad',
      image: 'images/ng-model.png'
    },
    {
      title: 'ng-href/ng-src',
      description: 'En caso de hacer referencia a una url incorrecta y el usuario hace click antes de que Angular lo reemplace por su valor, esta directiva lo resuelve',
      image: 'images/ng-src.png'
    },
    {
      title: 'ng-click',
      description: 'Al declarar esta directiva en un elemento que se enlazará a una función en particular',
      image: 'images/ng-click.png'
    },
    {
      title: 'ng-submit',
      description: 'Directiva que habilita enlazar expresiones a otros eventos en un formulario u otros elementos',
      image: 'images/ng-submit.png'
    },
    {
      title: 'ng-blur/ng-focus',
      description: 'Directiva aplicada a elementos HTML que epecifica un comportamiento customizable',
      image: 'images/ng-focus.png'
    },
    {
      title: 'ng-change',
      description: 'Se tienen propiedades públicas en los input o textarea puede enlazarlos, se comunican con el backend',
      image: 'images/ng-change.png'
    },
    {
      title: 'in-depth-expressions',
      description: 'Las expresiones en Angular son porciones de código similares a JS que permiten crear un template poderoso',
      image: 'images/depth-expressions.png'
    },
    {
      title: 'date-filter',
      description: 'AngularJS tiene distintos formatos de fecha, para husos horarios diferentes se considera la hora local ',
      image: 'images/date.png'
    },
    {
      title: 'currency-filter',
      description: 'Un numero que es formateado como moneda, Redondea valores :0 para el superior y :1 decimal inferior',
      image: 'images/currency.png'
    },
    {
      title: 'json-debugging',
      description: 'Utilizar json filter debugging es mucho mas fácil, claro y específico ',
      image: 'images/json.png'
    },
    {
      title: '$http-view-binding',
      description: 'Una función, que recibe el objeto y se puede definir qué método utilizar GET, POST..',
      image: 'images/view-binding.png'
    },
    {
      title: 'factories',
      description: 'Lugar donde se crean objetos, similar a un module en JS',
      image: 'images/factory.png'
    },
    {
      title: 'ng-options',
      description: 'En Angular diferentes valores en un módulo pueden mostrarse en si',
      image: 'images/ng-options.png'
    },
    {
      title: 'ng-disabled',
      description: 'Validar elementos individuales y todo el "form" la directiva contiene la expresión que la evalúa como T o F',
      image: 'images/disabled.png'
    },
    {
      title: 'data-driven-validation',
      description: 'Crear forms poderosos, que se comunican con otros componentes, pueden actualizar determinadas piezas de datos y mostrar todas las validaciones',
      image: 'images/data-driven.png'
    },
    {
      title: 'filters',
      description: 'Son funciones que permiten añadir o cambiar el aspecto(o formato) de un valor',
      image: 'images/filter.png'
    },
    {
      title: 'directives',
      description: 'Añaden y/o modifican un comportamiento a un elemento del DOM',
      image: 'images/directivas.png'
    },
    {
      title: 'services',
      description: 'Contiene la lógica del negocio, se comunica con el backend como ser RESTFUL API (url) utilizando los verbos http, o web service o puede permitir enlazar a algún servicio',
      image: 'images/services.png'
    },
    {
      title: 'components',
      description: 'Es el que imprime el html en la vista, dibuja el template en el browser. Enlazan y muestran las propiedades del controlador',
      image: 'images/component.png'
    }
  ];
}

angular
  .module('learning-angular')
  .controller('ConceptController', ConceptController);
