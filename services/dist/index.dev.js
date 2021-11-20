"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFeaturedPosts = exports.getComments = exports.submitComment = exports.getCategories = exports.getSimilarPosts = exports.getRecentPosts = exports.getPostDetails = exports.getPosts = void 0;

var _graphqlRequest = require("graphql-request");

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      query GetCategoryPost() {\n        posts(where: {featuredpost: true}) {\n          author {\n            name\n            photo {\n              url\n            }\n          }\n          featuredimage {\n            url\n          }\n          title\n          slug\n          createdAt\n        }\n      }   \n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        query GetComments($slug:String){\n            comments(where: {post: {slug: $slug}}){\n                name\n                createdAt\n                comment\n            }\n        }\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n        query GetCategories{\n            categories {\n                name\n                slug\n              }\n        }\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        query GetPostDetails($slug:String!, $categories: [String!]){\n            posts(\n                where:{slug_not:$slug, AND: {categories_some: {slug_in:$categories}}}\n                last:3\n            ){\n                title\n                featuredimage{\n                    url\n                }\n                createdAt\n                slug\n            }\n        }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        query GetPostDetails(){\n            posts(\n                orderBy:createdAt_ASC\n                last:3\n            ){\n                title\n                featuredimage{\n                    url\n                }\n                createdAt\n                slug\n            }\n        }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      query GetPostDetails($slug : String!) {\n        post(where: {slug: $slug}) {\n          title\n          excerpt\n          featuredimage {\n            url\n          }\n          author{\n            name\n            bio\n            photo {\n              url\n            }\n          }\n          createdAt\n          slug\n          content {\n            raw\n          }\n          categories {\n            name\n            slug\n          }\n        }\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        query MyQuery {\n            postsConnection {\n                edges {\n                    cursor\n                    node {\n                        author {\n                            bio\n                            name\n                            id\n                            photo {\n                                url\n                            }\n                        }\n                        createdAt\n                        slug\n                        title\n                        excerpt\n                        featuredimage {\n                            url\n                        }\n                        categories {\n                            name\n                            slug\n                        }\n                    }\n                }\n            }\n        }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

var getPosts = function getPosts() {
  var query, results;
  return regeneratorRuntime.async(function getPosts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = (0, _graphqlRequest.gql)(_templateObject());
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _graphqlRequest.request)(graphqlAPI, query));

        case 3:
          results = _context.sent;
          return _context.abrupt("return", results.postsConnection.edges);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getPosts = getPosts;

var getPostDetails = function getPostDetails(slug) {
  var query, result;
  return regeneratorRuntime.async(function getPostDetails$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          query = (0, _graphqlRequest.gql)(_templateObject2());
          _context2.next = 3;
          return regeneratorRuntime.awrap((0, _graphqlRequest.request)(graphqlAPI, query, {
            slug: slug
          }));

        case 3:
          result = _context2.sent;
          return _context2.abrupt("return", result.post);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.getPostDetails = getPostDetails;

var getRecentPosts = function getRecentPosts() {
  var query, results;
  return regeneratorRuntime.async(function getRecentPosts$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          query = (0, _graphqlRequest.gql)(_templateObject3());
          _context3.next = 3;
          return regeneratorRuntime.awrap((0, _graphqlRequest.request)(graphqlAPI, query));

        case 3:
          results = _context3.sent;
          return _context3.abrupt("return", results.posts);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.getRecentPosts = getRecentPosts;

var getSimilarPosts = function getSimilarPosts(categories, slug) {
  var query, results;
  return regeneratorRuntime.async(function getSimilarPosts$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          query = (0, _graphqlRequest.gql)(_templateObject4());
          _context4.next = 3;
          return regeneratorRuntime.awrap((0, _graphqlRequest.request)(graphqlAPI, query, {
            categories: categories,
            slug: slug
          }));

        case 3:
          results = _context4.sent;
          return _context4.abrupt("return", results.posts);

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.getSimilarPosts = getSimilarPosts;

var getCategories = function getCategories() {
  var query, result;
  return regeneratorRuntime.async(function getCategories$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          query = (0, _graphqlRequest.gql)(_templateObject5());
          _context5.next = 3;
          return regeneratorRuntime.awrap((0, _graphqlRequest.request)(graphqlAPI, query));

        case 3:
          result = _context5.sent;
          return _context5.abrupt("return", result.categories);

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
};

exports.getCategories = getCategories;

var submitComment = function submitComment(obj) {
  var result;
  return regeneratorRuntime.async(function submitComment$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(fetch('/api/comments', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
          }));

        case 2:
          result = _context6.sent;
          return _context6.abrupt("return", result.json());

        case 4:
        case "end":
          return _context6.stop();
      }
    }
  });
};

exports.submitComment = submitComment;

var getComments = function getComments(slug) {
  var query, result;
  return regeneratorRuntime.async(function getComments$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          query = (0, _graphqlRequest.gql)(_templateObject6());
          _context7.next = 3;
          return regeneratorRuntime.awrap((0, _graphqlRequest.request)(graphqlAPI, query, {
            slug: slug
          }));

        case 3:
          result = _context7.sent;
          return _context7.abrupt("return", result.comments);

        case 5:
        case "end":
          return _context7.stop();
      }
    }
  });
};

exports.getComments = getComments;

var getFeaturedPosts = function getFeaturedPosts() {
  var query, result;
  return regeneratorRuntime.async(function getFeaturedPosts$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          query = (0, _graphqlRequest.gql)(_templateObject7());
          _context8.next = 3;
          return regeneratorRuntime.awrap((0, _graphqlRequest.request)(graphqlAPI, query));

        case 3:
          result = _context8.sent;
          return _context8.abrupt("return", result.posts);

        case 5:
        case "end":
          return _context8.stop();
      }
    }
  });
};

exports.getFeaturedPosts = getFeaturedPosts;