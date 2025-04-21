# React + Vite

Github Link : https://github.com/bhagatbhutale/ShoppyGlobe_Ecom
--------------------------
cd shoppy_ecom_app
npm install 
npm run dev
---------------------------

2nd Method : git clone https://github.com/bhagatbhutale/ShoppyGlobe_Ecom.git


🛍️ ShoppyGlobe E-com Application
 React + Redux + Routing + Lazy Loading

🎯 Objective:
Build a basic e-commerce platform with product browsing, cart functionality, and checkout.

🧩 Component Structure 
App: Main component with routes.
Header: Navigation + Cart icon.
ProductList: Fetches and displays product list.
ProductItem: Single product with "Add to Cart".
ProductDetail: Detailed view of a product.
Cart: Lists cart items, updates quantity or removes.
CartItem: Displays and manages a cart product.
Checkout: Form for order placement.
OrderSuccess: Order placed confirmation page.
NotFound: 404 for unmatched routes.

📦 Props 
Pass data using props.

Reusable functional components with prop types.

🔄 Data Fetching 
useEffect + custom hook to fetch product list.

useEffect to fetch product details by ID.

Handle loading and error states.

🧠 State Management 
Redux: Manages cart state with actions, reducers, selectors.

Search: Filters products using Redux state.

⚙️ Event Handling 
"Add to Cart" & "Remove from Cart" buttons using Redux.

🌐 React Router 
Pages: Home, Product Detail, Cart, Checkout, Order Success.

Use useParams for dynamic routing.

📋 React Lists
Map product & cart lists with unique keys.

🚀 Performance Optimization 
Code splitting with React.lazy + Suspense.
