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
  value = null;

  constructor(key) {
    this.value = key;
  }
}

class BinarySearchThree {
  root = null;
  compareFn = null;

  constructor(compareFn = null) {
    this.compareFn = compareFn;
  }

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
    if (node?.value) {
      if (node.value < key) {
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
    if (!node || !node.value) {
      return false;
    }
    if (node.value === key) {
      return true;
    }
    if (key > node.value) {
      return this.searchNode(node.right, key);
    }
    return this.searchNode(node.left, key);
  }

  checkNode() {}
}

const binarySearchThree = new BinarySearchThree();

binarySearchThree.insert(10);
binarySearchThree.insert(11);
binarySearchThree.insert(12);
binarySearchThree.insert(9);

console.log(binarySearchThree.search(91));

// O(log n) n 1/2
