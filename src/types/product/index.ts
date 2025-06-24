interface Product {
    id: string;
    name: string;
    price: number;
  }
  
  // Define the CartItem interface
  interface CartItem {
    product: Product;
    quantity: number;
  }

  interface ProductContextType {
    products: Product[]; // Array of products
    addProduct: (product: Product) => void; // Method to add a product
    getProduct: (id: string) => Product | undefined; // Method to get a product by ID
    product: Product | null; // Current selected product
    cart: CartItem[]; // Array of items in the cart
    addCart: (product: Product, quantity: number) => void; // Method to add an item to the cart
    removeProductFromCart: (productId: string) => void; // Method to remove an item from the cart
  }


  export default ProductContextType;