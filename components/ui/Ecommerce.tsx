import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Product, CartItem, Order, 
  ButtonProps, ComponentVariant, ComponentSize 
} from '../../types';
import { 
  Button, Badge, Text, Heading, Icon, Avatar, IconButton, Label, Box, Flex 
} from './Primitives';
import { Card, Stack, Container } from './Layout';
import { Input, SearchInput, Select, Checkbox } from './Forms';
import { Drawer, Tabs, Modal, Wizard } from './Composite';

// --- Mock Data ---
const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Nexus Pro Headphones',
    description: 'High-fidelity audio with active noise cancellation and spatial sound.',
    price: 299,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    category: 'Electronics',
    rating: 4.8,
    reviews: 124,
    stock: 15,
    isNew: true,
    variants: [
      { type: 'color', options: [
        { label: 'Obsidian', value: 'obsidian', color: '#1a1a1a' },
        { label: 'Arctic', value: 'arctic', color: '#f5f5f7' },
        { label: 'Stardust', value: 'stardust', color: '#e2e2e2' }
      ]}
    ]
  },
  {
    id: '2',
    name: 'Minimalist Peak Backpack',
    description: 'Water-resistant, commuter-friendly design with modular compartments.',
    price: 145,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    category: 'Lifestyle',
    rating: 4.6,
    reviews: 89,
    stock: 24,
    isSale: true,
    salePrice: 120
  },
  {
    id: '3',
    name: 'Precision Mechanical Keyboard',
    description: 'Tactile switches with customizable RGB lighting and aluminum frame.',
    price: 189,
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&q=80',
    category: 'Electronics',
    rating: 4.9,
    reviews: 210,
    stock: 8
  },
  {
    id: '4',
    name: 'Aura Smart Watch',
    description: 'Track your health and stay connected with a stunning OLED display.',
    price: 399,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    category: 'Electronics',
    rating: 4.7,
    reviews: 156,
    stock: 42,
    isNew: true
  },
  {
    id: '5',
    name: 'Nomad Leather Wallet',
    description: 'Full-grain leather with RFID protection and slim profile.',
    price: 59,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80',
    category: 'Lifestyle',
    rating: 4.5,
    reviews: 78,
    stock: 120
  },
  {
    id: '6',
    name: 'Zenith Studio Speakers',
    description: 'Reference-grade monitors for crystal clear sound production.',
    price: 549,
    image: 'https://images.unsplash.com/photo-1589190282059-2720352c2826?w=800&q=80',
    category: 'Electronics',
    rating: 5.0,
    reviews: 45,
    stock: 5
  }
];

// --- Sub-components ---

const ProductCard = ({ 
  product, 
  onAddToCart, 
  onViewDetails 
}: { 
  product: Product; 
  onAddToCart: (p: Product) => void;
  onViewDetails: (p: Product) => void;
  key?: React.Key;
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="group overflow-hidden h-full flex flex-col border-neutral-100 dark:border-neutral-800 hover:shadow-2xl transition-all duration-500">
        <div 
          className="relative aspect-square overflow-hidden cursor-pointer"
          onClick={() => onViewDetails(product)}
        >
          <motion.img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && <Badge variant="primary">New Arrival</Badge>}
            {product.isSale && <Badge variant="danger">Sale</Badge>}
          </div>
          <div 
            className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2"
          >
            <Button size="sm" variant="primary" onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}>
              Add to Cart
            </Button>
          </div>
        </div>
        
        <div className="p-4 flex-1 flex flex-col gap-2">
          <div className="flex justify-between items-start gap-4">
            <Text variant="label-md" weight="bold" className="line-clamp-1 group-hover:text-primary-500 transition-colors">
              {product.name}
            </Text>
            <div className="flex items-center gap-1 shrink-0">
               <Icon size="xs" className="text-amber-400">
                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
               </Icon>
               <Text variant="caption">{product.rating}</Text>
            </div>
          </div>
          
          <Text variant="caption" tone="muted" className="line-clamp-2">
            {product.description}
          </Text>
          
          <div className="mt-auto pt-4 flex justify-between items-center">
            <div className="flex items-baseline gap-2">
              <Text variant="heading-md" weight="bold">
                ${product.isSale ? product.salePrice : product.price}
              </Text>
              {product.isSale && (
                <Text variant="caption" tone="muted" className="line-through">
                  ${product.price}
                </Text>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const CartSidebar = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemove,
  onCheckout
}: {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, q: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}) => {
  const total = items.reduce((sum, item) => sum + (item.salePrice || item.price) * item.quantity, 0);

  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="Your Cart" size="md">
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 opacity-50">
              <Icon size="xl" className="mb-4"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></Icon>
              <Text>Your cart is empty</Text>
            </div>
          ) : (
            <Stack spacing={4}>
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800"
                  >
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <Text weight="bold" variant="label-md">{item.name}</Text>
                          <IconButton size="sm" variant="ghost" icon={<Icon size="xs"><path d="M6 18L18 6M6 6l12 12" /></Icon>} onClick={() => onRemove(item.id)} aria-label="Remove" />
                        </div>
                        <Text variant="caption" tone="muted">${item.salePrice || item.price}</Text>
                      </div>
                      <div className="flex items-center gap-3">
                        <IconButton size="sm" variant="outline" icon={<Icon size="xs"><path d="M20 12H4" /></Icon>} onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))} aria-label="Decrease" />
                        <Text weight="medium">{item.quantity}</Text>
                        <IconButton size="sm" variant="outline" icon={<Icon size="xs"><path d="M12 4v16m8-8H4" /></Icon>} onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} aria-label="Increase" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </Stack>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t dark:border-neutral-800 pt-6 mt-auto">
            <div className="flex justify-between mb-4">
              <Text variant="body-lg" weight="medium">Total</Text>
              <Text variant="body-lg" weight="bold" className="text-primary-600">${total.toFixed(2)}</Text>
            </div>
            <Button fullWidth size="lg" variant="primary" onClick={onCheckout}>
              Proceed to Checkout
            </Button>
            <Text variant="caption" tone="muted" align="center" className="mt-4 block">
              Free shipping on orders over $500
            </Text>
          </div>
        )}
      </div>
    </Drawer>
  );
};

// --- Main Template Component ---

export const EcommerceTemplate = () => {
  const [view, setView] = useState<'grid' | 'detail' | 'checkout' | 'success'>('grid');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Filtering
  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const categories = ['All', ...Array.from(new Set(MOCK_PRODUCTS.map(p => p.category)))];

  // Actions
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, q: number) => {
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: q } : item));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // Render Logic
  const renderContent = () => {
    switch (view) {
      case 'grid':
        return (
          <Stack spacing={8}>
             <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                <div>
                   <Heading level={2}>Discover Innovation</Heading>
                   <Text tone="muted">Explore our curated collection of premium tech and lifestyle essentials.</Text>
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                   <div className="flex-1 md:w-64">
                      <SearchInput 
                        placeholder="Search products..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                   </div>
                   <IconButton 
                     variant="outline"
                     aria-label="Filter"
                     icon={<Icon size="sm"><path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></Icon>}
                   />
                </div>
             </div>

             <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                {categories.map(cat => (
                  <Button 
                    key={cat}
                    size="sm"
                    variant={selectedCategory === cat ? 'primary' : 'outline'}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </Button>
                ))}
             </div>

             {filteredProducts.length > 0 ? (
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                 <AnimatePresence mode="popLayout">
                   {filteredProducts.map(product => (
                     <ProductCard 
                       key={product.id} 
                       product={product} 
                       onAddToCart={addToCart}
                       onViewDetails={(p) => { setSelectedProduct(p); setView('detail'); }}
                     />
                   ))}
                 </AnimatePresence>
               </div>
             ) : (
               <div className="py-20 text-center">
                  <Icon size="xl" className="mx-auto mb-4 opacity-20"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></Icon>
                  <Text tone="muted">No products found matching your search.</Text>
               </div>
             )}
          </Stack>
        );
      
      case 'detail':
        if (!selectedProduct) return null;
        return (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
             <div className="space-y-4">
                <Button variant="ghost" size="sm" onClick={() => setView('grid')} className="mb-4">
                  <Icon size="xs" className="mr-2"><path d="M10 19l-7-7m0 0l7-7m-7 7h18" /></Icon>
                  Back to Shop
                </Button>
                <div className="aspect-square rounded-3xl overflow-hidden border border-neutral-100 dark:border-neutral-800">
                   <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                </div>
             </div>
             
             <div className="flex flex-col gap-6 py-8">
                <div>
                   <Badge variant="primary" className="mb-4">{selectedProduct.category}</Badge>
                   <Heading level={1}>{selectedProduct.name}</Heading>
                   <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                         <Icon size="xs" className="text-amber-400"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></Icon>
                         <Text weight="bold">{selectedProduct.rating}</Text>
                      </div>
                      <Text variant="caption" tone="muted">{selectedProduct.reviews} verified reviews</Text>
                   </div>
                </div>

                <div className="flex items-baseline gap-3">
                   <Text variant="display-lg" weight="bold" className="text-primary-600">
                     ${selectedProduct.isSale ? selectedProduct.salePrice : selectedProduct.price}
                   </Text>
                   {selectedProduct.isSale && (
                     <Text weight="medium" tone="muted" className="line-through text-lg">
                       ${selectedProduct.price}
                     </Text>
                   )}
                </div>

                <Text className="text-lg leading-relaxed">{selectedProduct.description}</Text>

                {selectedProduct.variants?.map(variant => (
                  <div key={variant.type} className="space-y-4">
                     <Text weight="bold" className="capitalize">{variant.type}</Text>
                     <div className="flex gap-3">
                        {variant.options.map(opt => (
                           <button
                             key={opt.value}
                             className="w-10 h-10 rounded-full border-2 transition-all hover:scale-110 active:scale-95 focus:ring-2 ring-primary-500 ring-offset-2"
                             style={{ 
                               backgroundColor: opt.color, 
                               borderColor: 'rgba(0,0,0,0.1)' 
                             }}
                             title={opt.label}
                           />
                        ))}
                     </div>
                  </div>
                ))}

                <div className="flex gap-4 mt-8">
                   <Button size="lg" variant="primary" className="flex-1" onClick={() => addToCart(selectedProduct)}>
                     Add to Cart
                   </Button>
                   <IconButton size="lg" variant="outline" icon={<Icon size="sm"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></Icon>} aria-label="Add to wishlist" />
                </div>
                
                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 flex gap-4 items-center">
                   <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                      <Icon size="xs"><path d="M5 13l4 4L19 7" /></Icon>
                   </div>
                   <div>
                      <Text variant="label-md" weight="bold">In Stock & Ready to Ship</Text>
                      <Text variant="caption" tone="muted">Order now and get it by Thursday, Sep 15.</Text>
                   </div>
                </div>
             </div>
          </motion.div>
        );

      case 'checkout':
        return (
          <Container size="md" className="py-12">
             <Card className="p-8">
                <Wizard 
                  variant="modern"
                  currentStep={1}
                  steps={[
                    { id: 1, title: 'Shipping', description: 'Address details' },
                    { id: 2, title: 'Payment', description: 'Payment method' },
                    { id: 3, title: 'Review', description: 'Final summary' }
                  ]}
                />
                
                <div className="mt-12 space-y-8">
                   <Stack spacing={4}>
                      <Heading level={4}>Shipping Information</Heading>
                      <div className="grid grid-cols-2 gap-4">
                         <Input label="First Name" placeholder="John" />
                         <Input label="Last Name" placeholder="Doe" />
                      </div>
                      <Input label="Street Address" placeholder="123 Innovation Drive" />
                      <div className="grid grid-cols-3 gap-4">
                         <div className="col-span-2"><Input label="City" placeholder="San Francisco" /></div>
                         <Input label="ZIP" placeholder="94103" />
                      </div>
                   </Stack>
                   
                   <div className="flex justify-between items-center pt-8 border-t dark:border-neutral-800">
                      <Button variant="ghost" onClick={() => setView('grid')}>Cancel</Button>
                      <Button variant="primary" onClick={() => setView('success')}>Complete Purchase</Button>
                   </div>
                </div>
             </Card>
          </Container>
        );

      case 'success':
        return (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="py-20 text-center space-y-6"
          >
             <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                <Icon size="lg"><path d="M5 13l4 4L19 7" /></Icon>
             </div>
             <Heading level={1}>Order Confirmed!</Heading>
             <Text tone="muted" className="max-w-md mx-auto">
                Your order #NX-98241 has been placed successfully. We'll send you a confirmation email with tracking details shortly.
             </Text>
             <div className="pt-8">
                <Button variant="primary" onClick={() => { setCart([]); setView('grid'); }}>
                   Continue Shopping
                </Button>
             </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-40 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-900">
         <Container size="xl" className="h-20 flex items-center justify-between">
            <div className="flex items-center gap-8">
               <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('grid')}>
                  <div className="w-8 h-8 bg-primary-600 rounded-xl" />
                  <Text weight="bold" className="text-xl tracking-tight">NEXUS<span className="text-primary-500">STORE</span></Text>
               </div>
               <div className="hidden md:flex gap-6">
                  <Text variant="label-md" weight="medium" className="cursor-pointer hover:text-primary-500">Market</Text>
                  <Text variant="label-md" weight="medium" className="cursor-pointer hover:text-primary-500">Categories</Text>
                  <Text variant="label-md" weight="medium" className="cursor-pointer hover:text-primary-500">Sale</Text>
               </div>
            </div>
            
            <div className="flex items-center gap-4">
               <IconButton 
                 variant="ghost" 
                 aria-label="Search"
                 icon={<Icon size="sm"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></Icon>} 
               />
               <div className="relative">
                  <IconButton 
                    variant="ghost" 
                    aria-label="Cart"
                    onClick={() => setIsCartOpen(true)}
                    icon={<Icon size="sm"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></Icon>} 
                  />
                  {cart.length > 0 && (
                    <motion.div 
                      layoutId="cart-badge"
                      className="absolute -top-1 -right-1 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold border-2 border-white dark:border-neutral-950"
                    >
                      {cart.reduce((s, i) => s + i.quantity, 0)}
                    </motion.div>
                  )}
               </div>
               <Avatar src="https://i.pravatar.cc/150?u=current" size="sm" />
            </div>
         </Container>
      </nav>

      {/* Main Content Area */}
      <Container size="xl" className="py-12">
         {renderContent()}
      </Container>

      {/* Cart Drawer */}
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onCheckout={() => { setIsCartOpen(false); setView('checkout'); }}
      />
      
      {/* Footer */}
      <footer className="mt-20 border-t border-neutral-100 dark:border-neutral-900 bg-neutral-50 dark:bg-neutral-950 py-12">
         <Container size="xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               <Stack spacing={4}>
                  <Text weight="bold">Store</Text>
                  <Stack spacing={2}>
                    <Text variant="caption" tone="muted">New Arrivals</Text>
                    <Text variant="caption" tone="muted">Featured</Text>
                    <Text variant="caption" tone="muted">Sale Items</Text>
                  </Stack>
               </Stack>
               <Stack spacing={4}>
                  <Text weight="bold">Support</Text>
                  <Stack spacing={2}>
                    <Text variant="caption" tone="muted">FAQ</Text>
                    <Text variant="caption" tone="muted">Shipping</Text>
                    <Text variant="caption" tone="muted">Returns</Text>
                  </Stack>
               </Stack>
               <Stack spacing={4}>
                  <Text weight="bold">Company</Text>
                  <Stack spacing={2}>
                    <Text variant="caption" tone="muted">About Us</Text>
                    <Text variant="caption" tone="muted">Careers</Text>
                    <Text variant="caption" tone="muted">Press</Text>
                  </Stack>
               </Stack>
               <Stack spacing={4}>
                  <Text weight="bold">Subscribe</Text>
                  <Text variant="caption" tone="muted">Get the latest updates on new products and upcoming sales.</Text>
                  <div className="flex gap-2">
                     <Input placeholder="Email" />
                     <Button variant="primary">Join</Button>
                  </div>
               </Stack>
            </div>
         </Container>
      </footer>
    </div>
  );
};
