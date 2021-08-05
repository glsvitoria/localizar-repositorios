"use strict";

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
    value: function () {
      var _adicionarRepositorio = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(evento) {
        var input, response, _response$data, name, description, html_url, avatar_url;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Evita que o formulário recarregue a página
                evento.preventDefault(); // Recuperar o valor do input

                input = this.formulario.querySelector('input[id=repositorio]').value; // Se o input vier vazio...sai da app

                if (!(input.length === 0)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                _context.next = 6;
                return _api["default"].get("repos/".concat(input));

              case 6:
                response = _context.sent;
                //console.log(response)
                _response$data = response.data, name = _response$data.name, description = _response$data.description, html_url = _response$data.html_url, avatar_url = _response$data.owner.avatar_url; // Adiciona o repositório na lista

                this.repositorios.push({
                  nome: name,
                  descricao: description,
                  avatar_url: avatar_url,
                  link: html_url
                }); // Renderizar na tela

                this.renderizarTela();

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function adicionarRepositorio(_x) {
        return _adicionarRepositorio.apply(this, arguments);
      }

      return adicionarRepositorio;
    }()
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
