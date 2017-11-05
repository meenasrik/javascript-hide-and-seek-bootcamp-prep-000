function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  //get elements with class ranked-list
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  var newinnerHTML = 0;
  for (var i = 0; i < lis.length; i++) {
    newinnerHTML = parseInt(lis[i].innerHTML) + n;
    lis[i].innerHTML = newinnerHTML;
  } // end for
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }

  return node;
}
