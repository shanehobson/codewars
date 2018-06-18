function loop_size(node) {
    let visitedNodes = [];
    let index = -1;
    
    while (node) {
    let index = visitedNodes.indexOf(node);
      if (index === -1) {
        visitedNodes.push(node);
        node = node.getNext();
      } else {
        return visitedNodes.length - index;
      }
    }
  }