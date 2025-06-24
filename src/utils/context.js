import { createContext, useState } from "react"
import useGetProducts from "@/hooks/queries/product/useGetProucts";


const productContextValue = {
  products: [],
  addProduct: (product) => {},
  getProduct: (id) => {},
  product: {},
  cart: [],
  addCart: (product) => {},
  updateProductQuantity: (id, quantity) => {},
  removeProductFromCart: (id) => {},
  getProductByCategory: (category) => {},
  loading: false
}
 
const ProductContext = createContext(productContextValue)

const ProductProvider = ({ children }) => {
  const { data: products, isLoading: isProductListLoading } = useGetProducts();
  const [, setProducts] = useState(products);

  const [product, setProduct] = useState();
  const [cart, setCart] = useState([]);

const [loading, setLoading] = useState(false)

  const addProduct = newProduct => {
    setProducts(prevProducts => [...prevProducts, newProduct])
  }

  const calculateGrandTotal = products => {
    return products.reduce(
      (acc, product) => acc + product.productTotal,
      0
    )
  }

  isProductListLoading ?? setLoading(true);

  const addCart = (product) => {
    setCart(prevCart => {
      const newProduct = {
        products:   [...prevCart?.products, {product, productTotal: product.price * product.quantity}],
        grandTotal: calculateGrandTotal(...prevCart?.products)
      }

      return prevCart ? [...prevCart, newProduct] : [newProduct]
    })
  }
  const updateProductQuantity = (id, quantity) => {
    setCart((prevCart) => 
      prevCart?.map((item) => 
        item.id === id ? { ...item, quantity } : item // Update quantity for the product with matching ID
      )
    );
  };

  const getProduct = id => {
    setProduct(products.find(product => product?.id === id))
  }

  const removeProductFromCart = id => {
    setCart(
      prevCart =>
        prevCart && {
          ...prevCart,
          products: prevCart?.products.filter(product => product?.id !== id)
        }
    )
  }

    const getProductByCategory = category => {
      setProducts(productsInCategory)
      isLoading ?? setLoading(true);
    }

    
  const productContextType = {
    products,
    addProduct,
    getProduct,
    product,
    cart,
    addCart,
    updateProductQuantity,
    removeProductFromCart,
    getProductByCategory,
    loading
  }
  return (
    <ProductContext.Provider value={productContextType}>
      {children}
    </ProductContext.Provider>
  )
}

export { ProductContext, ProductProvider, productContextValue }
