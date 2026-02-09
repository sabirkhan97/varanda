import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Search, Filter, Heart, Star, Sparkles, Zap, TrendingUp, Clock, Truck, Shield } from 'lucide-react';

const VarandaStore = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

const products = [
  {
    id: 1,
    name: 'Vintage Denim Overshirt',
    category: 'men',
    price: 45,
    originalPrice: 89,
    condition: 'Vintage',
    size: 'L',
    image: 'https://bundlclothing.co.uk/cdn/shop/files/download_9e4adc1c-c2dc-4d4a-9fad-0a3a0bac74e0.jpg?v=1723739874&width=1445',
    rating: 4.8,
    sold: 12,
    tags: ['Y2K', 'Rare', 'Trending']
  },
  {
    id: 2,
    name: 'Y2K Floral Mesh Dress',
    category: 'women',
    price: 32,
    originalPrice: 65,
    condition: 'Like New',
    size: 'M',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRivbaGkopoDodbUTr8cft0gmZr-z2UBHykFg&s', // example from Etsy listings (replace with actual if needed; many floral mesh Y2K dresses look like this)
    rating: 4.9,
    sold: 24,
    tags: ['Y2K', 'Going Fast']
  },
  {
    id: 3,
    name: 'Cyberpunk Leather Bomber',
    category: 'men',
    price: 68,
    originalPrice: 120,
    condition: 'Retro',
    size: 'XL',
    image: 'https://i.ebayimg.com/images/g/6cAAAOSw8J5jTMCN/s-l1200.jpg',
    rating: 4.7,
    sold: 8,
    tags: ['Statement', 'Limited']
  },
  {
    id: 4,
    name: 'Minimalist Oversized Shirt',
    category: 'men',
    price: 28,
    originalPrice: 55,
    condition: 'Excellent',
    size: 'M',
    image: 'https://bollywoo.ooo/cdn/shop/products/9ChengizOverTFront2.png?v=1681738340&width=900',
    rating: 4.6,
    sold: 18,
    tags: ['Capsule', 'Minimal']
  },
  {
    id: 5,
    name: 'Cropped Ribbed Set',
    category: 'women',
    price: 25,
    originalPrice: 50,
    condition: 'Like New',
    size: 'XS',
    image: 'https://images.meesho.com/images/products/458359434/sx9lj_512.webp?width=512', // typical ribbed crop + pants set from Amazon listings
    rating: 4.8,
    sold: 31,
    tags: ['Coquette', 'Trending']
  },
  {
    id: 6,
    name: 'Kawaii Knit Cardigan',
    category: 'women',
    price: 38,
    originalPrice: 75,
    condition: 'Excellent',
    size: 'L',
    image: 'https://m.media-amazon.com/images/I/71vO6Jn3-oL._AC_UY1100_.jpg',
    rating: 4.9,
    sold: 15,
    tags: ['Kawaii', 'Soft']
  },
  {
    id: 7,
    name: 'Baggy Cargo Jeans',
    category: 'men',
    price: 42,
    originalPrice: 85,
    condition: 'Good',
    size: 'L',
    image: 'https://wrogn.com/cdn/shop/files/1_ef9d9330-e957-42e5-8023-a89a9325b93f.webp?v=1740634437',
    rating: 4.5,
    sold: 22,
    tags: ['Streetwear', 'Oversized']
  },
  {
    id: 8,
    name: 'E-Girl Mesh Top',
    category: 'women',
    price: 18,
    originalPrice: 35,
    condition: 'Like New',
    size: 'S',
    image: 'https://i.pinimg.com/736x/b2/cb/c6/b2cbc63e83eaea3dcfa322360fd20830.jpg',
    rating: 4.7,
    sold: 27,
    tags: ['E-Girl', 'Going Fast']
  },
  // Additional 22 products (similar style/theme)
  {
    id: 9,
    name: 'Vintage Levi\'s Denim Jacket',
    category: 'men',
    price: 55,
    originalPrice: 110,
    condition: 'Vintage',
    size: 'M',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyeZhZyZjiRwzF8yhv6t_Q2z56_7qLCU9nUQ&s',
    rating: 4.8,
    sold: 19,
    tags: ['Vintage', 'Classic']
  },
  {
    id: 10,
    name: 'Y2K Butterfly Mesh Top',
    category: 'women',
    price: 22,
    originalPrice: 48,
    condition: 'Like New',
    size: 'S',
    image: 'https://i.pinimg.com/736x/ca/ff/4f/caff4ff38c2b5ccdbe8d75c7b466e768.jpg',
    rating: 4.9,
    sold: 35,
    tags: ['Y2K', 'Butterfly']
  },
  {
    id: 11,
    name: 'Oversized Graphic Tee',
    category: 'men',
    price: 20,
    originalPrice: 40,
    condition: 'Excellent',
    size: 'L',
    image: 'https://veirdo.in/cdn/shop/files/ai_creative_0000_Layer_6.jpg?v=1754546584',
    rating: 4.6,
    sold: 40,
    tags: ['Streetwear', 'Graphic']
  },
  {
    id: 12,
    name: 'Pastel Kawaii Hoodie',
    category: 'women',
    price: 45,
    originalPrice: 90,
    condition: 'Like New',
    size: 'M',
    image: 'https://m.media-amazon.com/images/I/61fFHMf7EsL._AC_UY1100_.jpg',
    rating: 4.9,
    sold: 28,
    tags: ['Kawaii', 'Pastel']
  },
  {
    id: 13,
    name: 'Distressed Cargo Pants',
    category: 'men',
    price: 38,
    originalPrice: 76,
    condition: 'Good',
    size: 'XL',
    image: 'https://projectisr.com/cdn/shop/files/06_313a5084-dee8-43f5-b3c2-58a4f71d4b81.jpg',
    rating: 4.5,
    sold: 16,
    tags: ['Cargo', 'Distressed']
  },
  {
    id: 14,
    name: 'Floral Slip Dress Y2K',
    category: 'women',
    price: 30,
    originalPrice: 60,
    condition: 'Excellent',
    size: 'M',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYLPrjQ8wBvOwbeHMEzzrdzM-AOUgLw2lElA&s',
    rating: 4.8,
    sold: 22,
    tags: ['Y2K', 'Floral']
  },
  {
    id: 15,
    name: 'Retro Leather Biker Jacket',
    category: 'men',
    price: 75,
    originalPrice: 150,
    condition: 'Retro',
    size: 'L',
    image: 'https://m.media-amazon.com/images/I/71XGHpzOyOS._AC_UY1100_.jpg',
    rating: 4.7,
    sold: 10,
    tags: ['Retro', 'Biker']
  },
  {
    id: 16,
    name: 'Cherry Print Knit Cardigan',
    category: 'women',
    price: 42,
    originalPrice: 84,
    condition: 'Like New',
    size: 'S',
    image: 'https://m.media-amazon.com/images/I/71dwCiQYdOL._AC_UY1100_.jpg',
    rating: 4.9,
    sold: 18,
    tags: ['Kawaii', 'Cherry']
  },
  {
    id: 17,
    name: 'Wide Leg Ribbed Pants Set',
    category: 'women',
    price: 35,
    originalPrice: 70,
    condition: 'Excellent',
    size: 'M',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM4z23n27QBHQvZMNxtSpf4x3qRWXq93SQbg&s',
    rating: 4.7,
    sold: 30,
    tags: ['Ribbed', 'Lounge']
  },
  {
    id: 18,
    name: 'Vintage Wrangler Denim Shirt',
    category: 'men',
    price: 40,
    originalPrice: 80,
    condition: 'Vintage',
    size: 'L',
    image: 'https://i.etsystatic.com/18581285/r/il/54782e/3941016742/il_fullxfull.3941016742_959b.jpg',
    rating: 4.6,
    sold: 14,
    tags: ['Vintage', 'Denim']
  },
  {
    id: 19,
    name: 'Sheer Mesh Long Sleeve Top',
    category: 'women',
    price: 15,
    originalPrice: 30,
    condition: 'Like New',
    size: 'S',
    image: 'https://littleboxindia.com/cdn/shop/products/Cloud_Like_Illusion_Sheer_Printed_Full_Sleeve_Top.jpg?v=1742809207',
    rating: 4.7,
    sold: 45,
    tags: ['E-Girl', 'Sheer']
  },
  {
    id: 20,
    name: 'Parachute Cargo Pants',
    category: 'men',
    price: 50,
    originalPrice: 100,
    condition: 'Good',
    size: 'XL',
    image: 'https://offduty.in/cdn/shop/files/SHEIN_Coolane_Flap_Pocket_Side_Drawstring_Waist_Parachute_Cargo_Trousers__SHEIN_UK_main_5_5bb78260-babd-41ce-bca2-dbbb721425ca_1080x.jpg?v=1734806170',
    rating: 4.5,
    sold: 25,
    tags: ['Streetwear', 'Parachute']
  },
  {
    id: 21,
    name: 'Coquette Bow Crop Top',
    category: 'women',
    price: 28,
    originalPrice: 56,
    condition: 'Trending',
    size: 'XS',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxYM7g7mCFmnwYXglk_8u-pFbqnFN32jM9MQ&s',
    rating: 4.8,
    sold: 33,
    tags: ['Coquette', 'Bow']
  },
  {
    id: 22,
    name: '90s Oversized Band Tee',
    category: 'men',
    price: 25,
    originalPrice: 50,
    condition: 'Vintage',
    size: 'L',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8ldN36RdF5O1byuVUSzvqs016sqcjHYpsQ&s',
    rating: 4.7,
    sold: 20,
    tags: ['90s', 'Vintage']
  },
  {
    id: 23,
    name: 'Rainbow Knit Sweater',
    category: 'women',
    price: 48,
    originalPrice: 96,
    condition: 'Excellent',
    size: 'M',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Hcm3bGwpKnWUwOs0bdydwUcTkLWAL-mPRg&s',
    rating: 4.9,
    sold: 12,
    tags: ['Kawaii', 'Rainbow']
  },
  {
    id: 24,
    name: 'Faded Black Cargo Jeans',
    category: 'men',
    price: 44,
    originalPrice: 88,
    condition: 'Good',
    size: 'M',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFF0rPzaRpa48FwJBlcpjnoyaMsdrj3lz7w&s',
    rating: 4.6,
    sold: 17,
    tags: ['Cargo', 'Faded']
  },
  {
    id: 25,
    name: 'Limited Mesh Mini Dress',
    category: 'women',
    price: 36,
    originalPrice: 72,
    condition: 'Like New',
    size: 'S',
    image: 'https://lachicpick.in/wp-content/uploads/2023/02/743-1.jpg',
    rating: 4.8,
    sold: 26,
    tags: ['Y2K', 'Mesh']
  },
  {
    id: 26,
    name: 'Techwear Bomber Jacket',
    category: 'men',
    price: 80,
    originalPrice: 160,
    condition: 'Retro',
    size: 'XL',
    image: 'https://images-cdn.ubuy.co.in/6943ed91ae3e61b0540e90df-bomber-jacket-techwear-for-men-punk-hip.jpg',
    rating: 4.7,
    sold: 9,
    tags: ['Cyberpunk', 'Techwear']
  },
  {
    id: 27,
    name: 'Soft Girl Knit Set',
    category: 'women',
    price: 52,
    originalPrice: 104,
    condition: 'Trending',
    size: 'L',
    image: 'https://spunkies.com/cdn/shop/files/INF-SET-1123_1.jpg?v=1741171315',
    rating: 4.9,
    sold: 21,
    tags: ['Soft Girl', 'Knit']
  },
  {
    id: 28,
    name: 'Streetwear Hooded Overshirt',
    category: 'men',
    price: 58,
    originalPrice: 116,
    condition: 'Excellent',
    size: 'L',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOGk1rV5IcbVcei_LtK0qkYJC_LUt6Fa5WAw&s',
    rating: 4.6,
    sold: 15,
    tags: ['Streetwear', 'Hooded']
  },
  {
    id: 29,
    name: 'Vintage Checkered Cardigan',
    category: 'women',
    price: 40,
    originalPrice: 80,
    condition: 'Vintage',
    size: 'M',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOI0NmwgCZWznHFE1BBCLDZzG1RBCkcE_og&s',
    rating: 4.8,
    sold: 19,
    tags: ['Vintage', 'Checkered']
  },
  {
    id: 30,
    name: 'E-Girl Cut-Out Top',
    category: 'women',
    price: 24,
    originalPrice: 48,
    condition: 'Like New',
    size: 'S',
    image: 'https://cdn.shopify.com/s/files/1/0687/0325/6856/files/S958a45d7fdd54d149a0bcc352c00aa7ct.webp?v=1706554678',
    rating: 4.7,
    sold: 32,
    tags: ['E-Girl', 'Cut-Out']
  }
];

  const categories = [
    { id: 'all', label: 'All Drops', count: products.length, color: 'from-purple-500 to-pink-500' },
    { id: 'men', label: "Boymode", count: products.filter(p => p.category === 'men').length, color: 'from-blue-500 to-cyan-500' },
    { id: 'women', label: "Girlmode", count: products.filter(p => p.category === 'women').length, color: 'from-pink-500 to-rose-500' },
    { id: 'trending', label: 'Trending', count: 12, color: 'from-orange-500 to-yellow-500' },
    { id: 'y2k', label: 'Y2K Era', count: 8, color: 'from-green-500 to-emerald-500' }
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : selectedCategory === 'trending' 
      ? products.filter(p => p.tags.includes('Trending'))
      : selectedCategory === 'y2k'
        ? products.filter(p => p.tags.includes('Y2K'))
        : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Glitch Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo with glitch effect */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center font-black text-xl">
                  V
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-tighter bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  VARANDA
                </h1>
                <p className="text-[10px] text-gray-400 tracking-wider">THRIFT CORE • 24/7 DROPS</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-sm font-medium hover:text-purple-300 transition-colors px-3 py-2 rounded-lg hover:bg-white/5">
                New Drops
              </a>
              <a href="#" className="text-sm font-medium hover:text-pink-300 transition-colors px-3 py-2 rounded-lg hover:bg-white/5">
                Archives
              </a>
              <a href="#" className="text-sm font-medium hover:text-cyan-300 transition-colors px-3 py-2 rounded-lg hover:bg-white/5">
                Vault
              </a>
              <button className="relative p-2 group">
                <div className="relative">
                  <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-pink-500 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                      {cartItems.length}
                    </span>
                  )}
                </div>
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Login
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-md">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              <a href="#" className="py-3 px-4 rounded-lg hover:bg-white/5 transition-colors font-medium">
                New Drops
              </a>
              <a href="#" className="py-3 px-4 rounded-lg hover:bg-white/5 transition-colors font-medium">
                Archives
              </a>
              <a href="#" className="py-3 px-4 rounded-lg hover:bg-white/5 transition-colors font-medium">
                Vault
              </a>
              <button className="py-3 px-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 font-bold">
                Login
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Sparkles className="w-4 h-4 text-purple-300" />
              <span className="text-sm font-medium">NEW DROP ALERT</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                THRIFT
              </span>
              <span className="block">BUT MAKE IT</span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                COOL
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Curated vintage finds for the digital generation. 
              No cap, just drip. 24/7 drops.
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto mb-16">
              <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all">
                <Search className="w-5 h-5 ml-6 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search the vault..."
                  className="flex-1 px-4 py-4 bg-transparent outline-none placeholder-gray-500"
                />
                <button className="m-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                  GO
                </button>
              </div>
            </div>

         
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-[73px] z-40 bg-black/95 backdrop-blur-md border-y border-white/10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between overflow-x-auto scrollbar-hide">
            <div className="flex items-center space-x-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                      : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat.label} • {cat.count}
                </button>
              ))}
            </div>
            <button className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Sort</span>
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-3xl md:text-4xl font-black tracking-tighter">
              {selectedCategory === 'all' ? '✨ LATEST DROPS' : `${selectedCategory.toUpperCase()} ✨`}
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Curated for the culture • Updated hourly
            </p>
          </div>
          <p className="text-sm text-gray-400 hidden md:block">
            {filteredProducts.length} pieces • Hurry!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="group relative"
            >
              {/* Sale Badge */}
              {product.originalPrice && (
                <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-bold animate-pulse">
                  -{Math.round((1 - product.price/product.originalPrice) * 100)}%
                </div>
              )}

              {/* Wishlist Button */}
              <button 
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-3 right-3 z-10 p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/80 transition-colors"
              >
                <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} />
              </button>

              {/* Product Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                {/* Product Image */}
                <div className="relative aspect-square bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-9xl border-b border-white/10">
                  {/* {product.image} */}
                  <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Name & Category */}
                  <div className="mb-3">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                      {product.category === 'men' ? "BOYMODE" : "GIRLMODE"}
                    </p>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-purple-300 transition-colors">
                      {product.name}
                    </h4>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold">{product.rating}</span>
                    <span className="text-xs text-gray-400">• {product.sold} copped</span>
                  </div>

                  {/* Price & Size */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-black">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <span className="text-sm text-gray-300 bg-white/5 px-3 py-1 rounded-full">
                      Size: {product.size}
                    </span>
                  </div>

                  {/* Add to Cart */}
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-2 group"
                  >
                    <ShoppingCart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>ADD TO CART</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-sm hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 inline-flex items-center space-x-2 group">
            <span>LOAD MORE DROPS</span>
            <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </section>


         {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all group">
                <div className="flex items-center justify-between mb-2">
                  <Clock className="w-5 h-5 text-purple-400" />
                  <TrendingUp className="w-5 h-5 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-xs text-gray-400">Live Drops</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-pink-500/50 transition-all group">
                <div className="flex items-center justify-between mb-2">
                  <Truck className="w-5 h-5 text-pink-400" />
                  <Zap className="w-5 h-5 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-2xl font-bold">2-Day</p>
                <p className="text-xs text-gray-400">Shipping</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all group">
                <div className="flex items-center justify-between mb-2">
                  <Shield className="w-5 h-5 text-cyan-400" />
                  <Sparkles className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-2xl font-bold">Auth</p>
                <p className="text-xs text-gray-400">Verified</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-yellow-500/50 transition-all group">
                <div className="flex items-center justify-between mb-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Heart className="w-5 h-5 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-2xl font-bold">4.9</p>
                <p className="text-xs text-gray-400">Rating</p>
              </div>
            </div>

      {/* Newsletter */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span className="text-sm font-medium">JOIN THE WAITLIST</span>
          </div>
          
          <h3 className="text-4xl font-black tracking-tighter mb-6">
            GET <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">EARLY ACCESS</span>
          </h3>
          
          <p className="text-gray-400 mb-8">
            Be the first to know about new drops, secret sales, and exclusive collabs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="your@email.com"
              className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-purple-500/50 transition-colors placeholder-gray-500"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"></div>
                <span className="text-xl font-black">VARANDA</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Curating the internet's favorite vintage finds. 
                No cap, just good vibes and better fits.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold mb-4">QUICK LINKS</h4>
              <ul className="space-y-2 text-sm">
                {['About', 'Careers', 'Press', 'Sustainability', 'Blog'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div>
              <h4 className="font-bold mb-4">NEED HELP?</h4>
              <ul className="space-y-2 text-sm">
                {['FAQ', 'Shipping', 'Returns', 'Size Guide', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>



            {/* Social */}
            <div>
              <h4 className="font-bold mb-4">STAY CONNECTED</h4>
              <p className="text-sm text-gray-400 mb-4">
                Follow for daily drops and community fits
              </p>
              <div className="flex space-x-3">
                {[
                  { icon: '📱', label: 'TikTok' },
                  { icon: '📸', label: 'IG' },
                  { icon: '🐦', label: 'X' },
                  { icon: '🎬', label: 'YT' }
                ].map((social) => (
                  <a 
                    key={social.label}
                    href="#" 
                    className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2024 VARANDA. All vibes reserved. Made with ❤️ for the internet.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Prices in USD • 24/7 customer support • Secure checkout
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VarandaStore;