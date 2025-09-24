

const PRODUCTS_DATA = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 79.99,
        category: "Electronics",
        description: "Premium quality wireless headphones with active noise cancellation and 30-hour battery life. Features crystal-clear audio, comfortable over-ear design, and quick-charge technology. Perfect for music lovers, gamers, and professionals who need superior sound quality.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop"
        ],
        featured: true,
        inStock: true,
        tags: ["wireless", "bluetooth", "noise-cancellation", "premium"]
    },
    {
        id: 2,
        name: "Organic Cotton T-Shirt",
        price: 24.99,
        category: "Clothing",
        description: "Comfortable, eco-friendly organic cotton t-shirt made from 100% sustainable materials. Soft, breathable fabric that gets better with every wash. Available in multiple colors and sizes. Perfect for casual wear and environmentally conscious consumers.",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=300&fit=crop"
        ],
        featured: false,
        inStock: true,
        tags: ["organic", "cotton", "eco-friendly", "casual"]
    },
    {
        id: 3,
        name: "Smart Fitness Watch",
        price: 199.99,
        category: "Electronics",
        description: "Advanced fitness tracking smartwatch with heart rate monitoring, GPS navigation, and smartphone connectivity. Features include sleep tracking, workout modes, water resistance up to 50m, and 7-day battery life. Track your health goals with style and precision.",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=300&fit=crop"
        ],
        featured: true,
        inStock: true,
        tags: ["smartwatch", "fitness", "gps", "health-tracking"]
    },
    {
        id: 4,
        name: "Artisan Coffee Beans",
        price: 18.50,
        category: "Food & Beverage",
        description: "Premium single-origin coffee beans sourced directly from small farms and roasted to perfection. Rich, bold flavor profile with notes of dark chocolate, caramel, and a hint of citrus. Perfect for espresso, drip coffee, or French press brewing methods.",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop"
        ],
        featured: false,
        inStock: true,
        tags: ["coffee", "artisan", "single-origin", "premium"]
    },
    {
        id: 5,
        name: "Minimalist Desk Lamp",
        price: 45.00,
        category: "Home & Garden",
        description: "Modern LED desk lamp with adjustable brightness levels and color temperature control. Features a sleek minimalist design, touch controls, USB charging port, and energy-efficient LED bulbs that last up to 50,000 hours. Perfect for work, study, or reading.",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
        ],
        featured: false,
        inStock: true,
        tags: ["led", "desk-lamp", "minimalist", "adjustable"]
    },
    {
        id: 6,
        name: "Premium Yoga Mat",
        price: 59.99,
        category: "Sports & Fitness",
        description: "Professional-grade yoga mat made from natural rubber with superior grip and cushioning. Extra thick (6mm) padding provides comfort during extended practice sessions. Non-slip surface, eco-friendly materials, and comes with a carrying strap. Ideal for yoga, pilates, and meditation.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
        ],
        featured: false,
        inStock: true,
        tags: ["yoga", "fitness", "rubber", "non-slip"]
    },
    {
        id: 7,
        name: "Ceramic Plant Pot Set",
        price: 34.99,
        category: "Home & Garden",
        description: "Elegant set of 3 handcrafted ceramic plant pots in different sizes (small, medium, large). Features drainage holes, matching saucers, and a modern matte finish. Perfect for succulents, herbs, or small houseplants. Adds a touch of sophistication to any living space.",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop"
        ],
        featured: false,
        inStock: true,
        tags: ["ceramic", "plant-pots", "home-decor", "handcrafted"]
    },
    {
        id: 8,
        name: "Leather Crossbody Bag",
        price: 89.99,
        category: "Fashion",
        description: "Handcrafted genuine leather crossbody bag with multiple compartments and adjustable strap. Features RFID blocking technology, premium hardware, and a timeless design that complements any outfit. Perfect size for daily essentials while maintaining an elegant silhouette.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop"
        ],
        featured: true,
        inStock: true,
        tags: ["leather", "crossbody", "handcrafted", "rfid-blocking"]
    },
    {
        id: 9,
        name: "Stainless Steel Water Bottle",
        price: 22.99,
        category: "Sports & Fitness",
        description: "Double-wall insulated stainless steel water bottle that keeps beverages cold for 24 hours or hot for 12 hours. Features a leak-proof cap, wide mouth opening for easy cleaning, and BPA-free construction. Available in multiple colors with a durable powder-coated finish.",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=300&fit=crop"
        ],
        featured: false,
        inStock: true,
        tags: ["stainless-steel", "insulated", "bpa-free", "leak-proof"]
    },
    {
        id: 10,
        name: "Bamboo Cutting Board Set",
        price: 39.99,
        category: "Kitchen",
        description: "Totally Bamboo 3-Piece Bamboo Wood Cutting Board Set for Kitchen, 3 Assorted Sizes" ,
        image: "https://i5.walmartimages.com/asr/a0d59f67-5757-421f-8bdd-4db82cbc0c43.63a5195124af1dc62b855862e39e545f.jpeg",
        images: [
            "https://images.unsplash.com/photo-1594736797933-d0b22d3b23c8?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
        ],
        featured: false,
        inStock: true,
        tags: ["bamboo", "cutting-board", "antimicrobial", "sustainable"]
    },
    {
        id: 11,
        name: "Aromatherapy Candle Collection",
        price: 28.50,
        category: "Home & Garden",
        description: "Lavault Jar Candles Aromatherapy Candle Set For Supports Stress, Better Sleep, And Improve Mood",
        image: "https://media.kohlsimg.com/is/image/kohls/7337257?wid=1000&hei=1000&op_sharpen=1",
        images: [
            "https://images.unsplash.com/photo-1602874801007-aec4edc7a6e8?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop"
        ],
        featured: false,
        inStock: true,
        tags: ["soy-wax", "aromatherapy", "essential-oils", "hand-poured"]
    },
    {
        id: 12,
        name: "Portable Bluetooth Speaker",
        price: 64.99,
        category: "Electronics",
        description: "Compact wireless speaker with 360-degree surround sound and deep bass. IPX7 waterproof rating makes it perfect for outdoor adventures. Features 12-hour battery life, built-in microphone for hands-free calls, and connects to multiple devices simultaneously.",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=300&fit=crop"
        ],
        featured: false,
        inStock: true,
        tags: ["bluetooth", "portable", "waterproof", "360-sound"]
    },
    {
        id: 13,
        name: "Professional Chef Knife",
        price: 129.99,
        category: "Kitchen",
        description: "High-carbon stainless steel chef knife with razor-sharp edge and ergonomic handle. Hand-forged blade maintains sharpness longer and provides exceptional cutting performance. Includes protective sheath and care instructions. Essential tool for serious home cooks and culinary professionals.",
        image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1594736797933-d0b22d3b23c8?w=400&h=300&fit=crop"
        ],
        featured: true,
        inStock: true,
        tags: ["chef-knife", "stainless-steel", "professional", "hand-forged"]
    },
    {
        id: 14,
        name: "Memory Foam Pillow",
        price: 49.99,
        category: "Home & Garden",
        description: "Rest Haven Gel Memory Foam Bed Pillow, Queen, Single Pack",
        image: "https://i5.walmartimages.com/seo/Rest-Haven-Gel-Memory-Foam-Bed-Pillow-Queen-Single-Pack_23778e10-4ac6-4ccd-a89f-7ae1cf507d3e.15c558c5c783f7c2757469e0e3ab4238.jpeg",
        images: [
            "https://images.unsplash.com/photo-1586047844559-c8d3e9c5c4d6?w=400&h=300&fit=crop"
        ],
        featured: false,
        inStock: true,
        tags: ["memory-foam", "ergonomic", "hypoallergenic", "bamboo-cover"]
    },
    {
        id: 15,
        name: "Resistance Band Set",
        price: 29.99,
        category: "Sports & Fitness",
        description: "Complete resistance band workout system with 5 different resistance levels. Includes door anchor, ankle straps, foam handles, and carrying bag. Perfect for strength training, physical therapy, and home workouts. Compact and portable for exercise anywhere.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop"
        ],
        featured: false,
        inStock: true,
        tags: ["resistance-bands", "home-workout", "portable", "strength-training"]
    }
];


const CATEGORIES = {
    "Electronics": {
        description: "Latest gadgets and tech accessories",
        icon: "📱"
    },
    "Clothing": {
        description: "Fashion and apparel for every occasion",
        icon: "👕"
    },
    "Food & Beverage": {
        description: "Gourmet foods and premium beverages",
        icon: "☕"
    },
    "Home & Garden": {
        description: "Transform your living space",
        icon: "🏡"
    },
    "Sports & Fitness": {
        description: "Gear for active lifestyles",
        icon: "🏃"
    },
    "Fashion": {
        description: "Stylish accessories and bags",
        icon: "👜"
    },
    "Kitchen": {
        description: "Essential tools for culinary excellence",
        icon: "🔪"
    }
};


const PRICE_RANGES = [
    { label: "Under $25", min: 0, max: 25 },
    { label: "$25 - $50", min: 25, max: 50 },
    { label: "$50 - $100", min: 50, max: 100 },
    { label: "$100 - $200", min: 100, max: 200 },
    { label: "Over $200", min: 200, max: Infinity }
];


const SORT_OPTIONS = [
    { value: "name", label: "Name (A-Z)" },
    { value: "name-desc", label: "Name (Z-A)" },
    { value: "price-low", label: "Price (Low to High)" },
    { value: "price-high", label: "Price (High to Low)" },
    { value: "featured", label: "Featured First" },
    { value: "newest", label: "Newest First" }
];


const ProductDataUtils = {
    
    getCategories() {
        return [...new Set(PRODUCTS_DATA.map(product => product.category))].sort();
    },

    getFeaturedProducts() {
        return PRODUCTS_DATA.filter(product => product.featured);
    },

    
    getProductsByCategory(category) {
        return PRODUCTS_DATA.filter(product => product.category === category);
    },


    getInStockProducts() {
        return PRODUCTS_DATA.filter(product => product.inStock);
    },


    getProductsByPriceRange(min, max) {
        return PRODUCTS_DATA.filter(product => 
            product.price >= min && product.price <= max
        );
    },

    
    searchProducts(query) {
        const searchTerm = query.toLowerCase();
        return PRODUCTS_DATA.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    },

    
    getProductById(id) {
        return PRODUCTS_DATA.find(product => product.id === id);
    },

    
    getRandomProducts(count = 4) {
        const shuffled = [...PRODUCTS_DATA].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    },

    
    getPriceStats() {
        const prices = PRODUCTS_DATA.map(product => product.price);
        return {
            min: Math.min(...prices),
            max: Math.max(...prices),
            average: prices.reduce((sum, price) => sum + price, 0) / prices.length
        };
    }
};


if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PRODUCTS_DATA,
        CATEGORIES,
        PRICE_RANGES,
        SORT_OPTIONS,
        ProductDataUtils
    };
}


if (typeof window !== 'undefined') {
    window.PRODUCTS_DATA = PRODUCTS_DATA;
    window.CATEGORIES = CATEGORIES;
    window.PRICE_RANGES = PRICE_RANGES;
    window.SORT_OPTIONS = SORT_OPTIONS;
    window.ProductDataUtils = ProductDataUtils;
}