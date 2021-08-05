"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App = /*#__PURE__*/function () {
  // Construtor
  function App() {
    _classCallCheck(this, App);

    // Lista de repositórios
    this.repositorios = []; // Form

    this.formulario = document.querySelector('form'); // Lista

    this.lista = document.querySelector('.list-group'); // Método para registrar os eventos do form

    this.registrarEventos();
  }

  _createClass(App, [{
    key: "registrarEventos",
    value: function registrarEventos() {
      var _this = this;

      this.formulario.onsubmit = function (evento) {
        return _this.adicionarRepositorio(evento);
      };
    }
  }, {
    key: "adicionarRepositorio",
    value: function adicionarRepositorio(evento) {
      // Evita que o formulário recarregue a página
      evento.preventDefault(); // Adiciona o repositório na lista

      this.repositorios.push({
        nome: 'Nerd fontes',
        descricao: 'Iconic font aggregator, collection, and patcher',
        avatar_url: 'https:/avatars0.githubusercontent.com/u/8083459?v=4',
        link: 'https://github.com/ryanoasis/nerd-fonts'
      }); // Renderizar na tela

      this.renderizarTela();
    }
  }, {
    key: "renderizarTela",
    value: function renderizarTela() {
      var _this2 = this;

      // Limpar o conteúdo de lista
      this.lista.innerHTML = ''; // Percorrer toda a lista de repositórios e criar os elementos

      this.repositorios.forEach(function (repositorio) {
        // <li>
        var li = document.createElement('li');
        li.setAttribute('class', 'list-group-item list-group-item-action'); // <img>

        var img = document.createElement('img');
        img.setAttribute('src', repositorio.avatar_url);
        li.appendChild(img); // <strong>

        var strong = document.createElement('strong');
        var txtNome = document.createTextNode(repositorio.nome);
        strong.appendChild(txtNome);
        li.appendChild(strong); // <p>

        var p = document.createElement('p');
        var txtDescricao = document.createTextNode(repositorio.descricao);
        p.appendChild(txtDescricao);
        li.appendChild(p); // <a>

        var a = document.createElement('a');
        a.setAttribute('target', '_blank');
        a.setAttribute('href', repositorio.link);
        var txtA = document.createTextNode('Acessar');
        a.appendChild(txtA);
        li.appendChild(a); // Adicionar <li> como filho da ul

        _this2.lista.appendChild(li); // Limpar o conteúdo do input


        _this2.formulario.querySelector('input[id=repositorio]').value = ''; // Adiciona o foco no input

        _this2.formulario.querySelector('input[id=repositorio]').focus();
      });
    }
  }]);

  return App;
}();

new App();
