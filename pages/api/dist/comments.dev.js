"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = comments;

var _graphqlRequest = require("graphql-request");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    mutation CreateComment($name:String!, $email:String!, $comment:String!, $slug:String!){\n      createComment(data:{name:$name,email:$email, comment:$comment, post:{connect:{slug:$slug}}}){\n        id\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
var graphcmsToken = process.env.GRAPHCMS_CMS;

function comments(req, res) {
  var graphQLCLIENT, query, result;
  return regeneratorRuntime.async(function comments$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          graphQLCLIENT = new _graphqlRequest.GraphQLClient(graphqlAPI, {
            headers: {
              authorization: "Bearer ".concat(graphcmsToken)
            }
          });
          query = (0, _graphqlRequest.gql)(_templateObject());
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(graphQLCLIENT.request(query, req.body));

        case 5:
          result = _context.sent;
          return _context.abrupt("return", res.status(200).send(result));

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](2);
          console.log(_context.t0);
          return _context.abrupt("return", res.status(500).send(_context.t0));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 9]]);
}