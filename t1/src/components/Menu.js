import React from "react";

const Menu = ({ darkMode }) => {
  const menuItems = [
 
    {
      name: "Spaghetti Bolognese",
      description: "Traditional Italian pasta with meat sauce.",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      category: "Pasta"
    },
    {
      name: "Fettuccine Alfredo",
      description: "Creamy pasta with parmesan cheese sauce.",
      price: "$13.99",
      image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Pasta"
    },
    {
      name: "Penne Arrabbiata",
      description: "Spicy tomato sauce with garlic and chili flakes.",
      price: "$11.99",
      image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      category: "Pasta"
    },
    {
      name: "Lobster Ravioli",
      description: "Handmade ravioli stuffed with lobster meat in a light cream sauce.",
      price: "$21.99",
      image: "https://images.unsplash.com/photo-1571167366136-b57e07761625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Pasta"
    },
   
    
    // Seafood
    {
      name: "Grilled Salmon",
      description: "Freshly grilled salmon with lemon butter sauce.",
      price: "$18.99",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Seafood"
    },
    {
      name: "Shrimp Scampi",
      description: "Garlic butter shrimp served with toasted baguette.",
      price: "$17.99",
      image: "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Seafood"
    },
  
    {
      name: "Seared Scallops",
      description: "Pan-seared scallops with cauliflower puree and brown butter.",
      price: "$22.99",
      image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Seafood"
    },
    {
      name: "Seafood Paella",
      description: "Spanish rice dish with mixed seafood and saffron.",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Seafood"
    },
    
    // Pizza
    {
      name: "Margherita Pizza",
      description: "Classic pizza with tomato, mozzarella, and basil.",
      price: "$10.99",
      image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Pizza"
    },
    {
      name: "Quattro Formaggi",
      description: "Four cheese pizza with mozzarella, gorgonzola, parmesan, and ricotta.",
      price: "$13.99",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Pizza"
    },
    {
      name: "Prosciutto & Arugula",
      description: "Thin crust pizza with prosciutto, arugula, and shaved parmesan.",
      price: "$15.99",
      image: "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Pizza"
    },
    {
      name: "Vegetarian Supreme",
      description: "Loaded with bell peppers, onions, mushrooms, olives, and artichokes.",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1604917877934-07d8d248d396?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Pizza"
    },
    {
      name: "Pepperoni & Jalapeño",
      description: "Spicy pizza with pepperoni and fresh jalapeños.",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      category: "Pizza"
    },
    
    // Meat
    {
      name: "Filet Mignon",
      description: "8oz prime beef tenderloin with red wine reduction.",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Meat"
    },
    
    {
      name: "Roasted Duck",
      description: "Half duck with orange glaze and wild rice.",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80",
      category: "Meat"
    },
    {
      name: "Beef Short Ribs",
      description: "Slow-cooked beef ribs with mashed potatoes.",
      price: "$22.99",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      category: "Meat"
    },
   
  
    
   
    {
      name: "Crème Brûlée",
      description: "Vanilla custard with a caramelized sugar top.",
      price: "$7.99",
      image: "https://images.unsplash.com/photo-1615865417491-9941019fbc00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Dessert"
    },
   
    {
      name: "Apple Tart",
      description: "Warm apple tart with cinnamon ice cream and caramel sauce.",
      price: "$7.99",
      image: "https://images.unsplash.com/photo-1587248720327-8eb72564be1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Dessert"
    },
    {
      name: "Gelato Selection",
      description: "Choice of three scoops: chocolate, vanilla, pistachio, or strawberry.",
      price: "$6.99",
      image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      category: "Dessert"
    }
  ];

  // Group menu items by category
  const categories = [...new Set(menuItems.map(item => item.category))];

  return (
    <section id="menu" className={darkMode ? "dark" : "light"}>
      <h2>Menu Highlights</h2>
      
      {categories.map(category => (
        <div key={category} className="menu-category">
          <h3 className="category-title">{category}</h3>
          <div className="menu-items">
            {menuItems
              .filter(item => item.category === category)
              .map((item, index) => (
                <div key={index} className="menu-item">
                  <img src={item.image} alt={item.name} />
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <span className="price">{item.price}</span>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Menu;