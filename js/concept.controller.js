function ConceptController(){
  this.concepts = [
    {
      title: 'modulo',
      description: 'mucho codigo que puede contener controladores, servicios, directivas, componentes, filtros',
      image: 'images/module.png'
    },
    {
      title: 'controlador',
      description: 'Esta realacionado con la lógica de la vista(HTML) y enlaza propiedades a la vista (HTML)',
      image: 'images/controller.png'
    },
    {
      title: 'filtros',
      description: 'Son funciones que permiten anadir o cambiar el aspecto(o formato) de un valor',
      image: 'images/filter.png'
    }
  ];
}

angular
  .module('learning-angular')
  .controller('ConceptController', ConceptController);
