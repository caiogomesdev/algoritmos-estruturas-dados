/**
 * Métodos:
 * insert(key): esse método insere uma nova chave na árvore
 * search(key): esse método busca a chave na árvore e devolve true se ela existir, e false se o nó não existir
 * inOrderTraverse(): esse método visita todos os nós da árvore usando um percurso em-ordem (in-order)
 * preOderTraverse(): esse método visita todos os nós da árvore usando um percurso pré-ordem (pre-order)
 * postOrderTraverse(): esse método visita todos os nós da árvore usando um percurso pós-ordem (post-order)
 * min(): esse método devolve a chave/valor mínimo da árvore.
 * max(): esse método devolve a chave/valor máximo da árvore.
 * remove(key): esse método remove a chave da árvore.
 */

class ThreeNode {
  left = null;
  right = null;
  key = null;

  constructor(key) {
    this.key = key;
  }
}

class BinarySearchThree {
  root = null;

  /**
   * esse método insere uma nova chave na árvore
   * @param {number} key
   */
  insert(key) {
    if (this.root === null) {
      this.root = new ThreeNode(key);
      return;
    }
    this.insertNode(this.root, key);
  }

  insertNode(node, key) {
    if (node?.key) {
      if (node.key < key) {
        if (node.right) {
          this.insertNode(node.right, key);
          return;
        }
        node.right = new ThreeNode(key);
      } else {
        if (node.left) {
          this.insertNode(node.left, key);
          return;
        }
        node.left = new ThreeNode(key);
      }
      return;
    }
    node = new ThreeNode(key);
  }

  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    if (!node || !node.key) {
      return false;
    }
    if (node.key === key) {
      return true;
    }
    if (key > node.key) {
      return this.searchNode(node.right, key);
    }
    return this.searchNode(node.left, key);
  }

  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  inOrderTraverseNode(node, callback) {
    if (node) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  preOrderTraverseNode(node, callback) {
    if (node) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }

  postOrderTraverseNode(node, callback) {
    if (node) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  min() {
    if (this.root.left) {
      let current = this.root;
      while (current && current.left) {
        current = current.left;
      }
      return current;
    }
    return this.root.value;
  }

  max() {
    if (this.root.right) {
      let current = this.root;
      while (current && current.right) {
        current = current.right;
      }
      return current;
    }
    return this.root.value;
  }
}

const three = new BinarySearchThree();

// Inserindo em uma árvore binária
three.insert(10);
three.insert(11);
three.insert(13);
three.insert(12);
three.insert(7);
three.insert(3);
three.insert(8);

/**
 *                                    10
 *                                7       11
 *                             3    8        13
 *                                        12
 */

// Pesquisando em uma árvore binária
// console.log(three.search(91));
// O(log n) n 1/2

const callback = (key) => console.log(key);

/**
 * Percorrendo uma árvore em percurso em-ordem
 * Visita todos os nós de uma BST( Binary search Three) de forma crescente. Ou seja, do menor para o maior.
 * */
// three.inOrderTraverse(callback);

/**
 * Percorrendo uma árvore em percurso pré-ordem
 * A diferença entre os percursos em-ordem e pré-ordem é que o percurso pré-ordem
 * visita o nó raiz antes, depois o nó da esquerda e, por fim, o nó da direita
 * */
// three.preOrderTraverse(callback);

/**
 * Percorrendo uma árvore em percurso pós-ordem
 * Um percurso pós-ordem visita o nó depois de visitar os seus decendentes.
 */
// three.postOrderTraverse(callback);

// A valor mínimo está no nó mais à esquerda no último nível da árvore.
// console.log(three.min());

// A valor máximo está no nó mais à direita no último nível da árvore.
console.log(three.max());
