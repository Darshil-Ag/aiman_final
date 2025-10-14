import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  Heart,
  Brain,
  Baby,
  Activity,
  Eye,
  Zap,
  Shield,
  Tag,
  BookOpen,
  TrendingUp
} from 'lucide-react'
import logo from '../photo/logo.png'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'mental-health', name: 'Mental Health' },
    { id: 'wellness', name: 'Wellness' },
    { id: 'cardiology', name: 'Cardiology' },
    { id: 'pediatrics', name: 'Pediatrics' },
    { id: 'prevention', name: 'Prevention' },
    { id: 'nutrition', name: 'Nutrition' }
  ]

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Mental Health: A Comprehensive Guide',
      excerpt: 'Learn about the importance of mental health and how to maintain it in today\'s fast-paced world. Discover practical strategies for managing stress, anxiety, and depression.',
      content: 'Mental health is just as important as physical health, yet it\'s often overlooked or stigmatized. In this comprehensive guide, we explore the various aspects of mental health, from understanding common conditions to implementing effective coping strategies...',
      author: 'Dr. Michael Chen',
      authorTitle: 'Senior Psychiatrist',
      authorImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face',
      date: '2024-12-15',
      readTime: '8 min read',
      category: 'mental-health',
      categoryName: 'Mental Health',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      tags: ['mental health', 'wellness', 'stress management'],
      featured: true,
      icon: Brain,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 2,
      title: 'Preventive Care: Your First Line of Defense',
      excerpt: 'Discover how regular check-ups and preventive measures can help you maintain optimal health and catch potential issues early.',
      content: 'Preventive care is the cornerstone of maintaining good health throughout your life. By taking proactive steps to monitor and protect your health, you can prevent many diseases and conditions before they become serious...',
      author: 'Dr. Sarah Johnson',
      authorTitle: 'Chief of Cardiology',
      authorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face',
      date: '2024-12-10',
      readTime: '6 min read',
      category: 'prevention',
      categoryName: 'Prevention',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      tags: ['prevention', 'health checkups', 'wellness'],
      featured: true,
      icon: Shield,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 3,
      title: 'Heart Health: Tips for a Stronger Heart',
      excerpt: 'Simple lifestyle changes that can significantly improve your cardiovascular health and reduce the risk of heart disease.',
      content: 'Your heart is one of the most important organs in your body, and taking care of it should be a top priority. Heart disease is the leading cause of death worldwide, but the good news is that many cases are preventable...',
      author: 'Dr. David Kumar',
      authorTitle: 'Interventional Cardiologist',
      authorImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face',
      date: '2024-12-05',
      readTime: '7 min read',
      category: 'cardiology',
      categoryName: 'Cardiology',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      tags: ['heart health', 'cardiology', 'lifestyle'],
      featured: false,
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 4,
      title: 'Child Development: Milestones and Red Flags',
      excerpt: 'Understanding your child\'s development stages and knowing when to seek professional help for developmental concerns.',
      content: 'Every child develops at their own pace, but there are general milestones that can help parents understand if their child is on track. Early intervention is crucial for addressing developmental delays...',
      author: 'Dr. Emily Rodriguez',
      authorTitle: 'Pediatric Specialist',
      authorImage: 'https://images.unsplash.com/photo-1594824388852-8a0b1b0b0b0b?w=100&h=100&fit=crop&crop=face',
      date: '2024-11-28',
      readTime: '9 min read',
      category: 'pediatrics',
      categoryName: 'Pediatrics',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      tags: ['child development', 'pediatrics', 'parenting'],
      featured: false,
      icon: Baby,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 5,
      title: 'Exercise and Joint Health: Moving Without Pain',
      excerpt: 'Learn how to exercise safely to maintain joint health and prevent injuries, especially as you age.',
      content: 'Regular exercise is essential for maintaining joint health and mobility, but it\'s important to do it safely. As we age, our joints become more susceptible to wear and tear, making proper exercise techniques crucial...',
      author: 'Dr. James Wilson',
      authorTitle: 'Orthopedic Surgeon',
      authorImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face',
      date: '2024-11-20',
      readTime: '6 min read',
      category: 'wellness',
      categoryName: 'Wellness',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      tags: ['exercise', 'joint health', 'fitness'],
      featured: false,
      icon: Activity,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 6,
      title: 'Nutrition for Eye Health: Foods That Protect Your Vision',
      excerpt: 'Discover the essential nutrients and foods that can help protect your eyesight and prevent age-related eye diseases.',
      content: 'Your eyes are complex organs that require specific nutrients to function optimally. While genetics and age play significant roles in eye health, nutrition can also have a profound impact...',
      author: 'Dr. Robert Thompson',
      authorTitle: 'Eye Surgeon',
      authorImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face',
      date: '2024-11-15',
      readTime: '5 min read',
      category: 'nutrition',
      categoryName: 'Nutrition',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop',
      tags: ['nutrition', 'eye health', 'vitamins'],
      featured: false,
      icon: Eye,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 7,
      title: 'Managing Chronic Pain: A Holistic Approach',
      excerpt: 'Explore comprehensive strategies for managing chronic pain, including medical treatments, lifestyle changes, and alternative therapies.',
      content: 'Chronic pain affects millions of people worldwide and can significantly impact quality of life. While medication can help, a holistic approach that addresses physical, emotional, and lifestyle factors is often most effective...',
      author: 'Dr. Lisa Park',
      authorTitle: 'Neurologist',
      authorImage: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=100&h=100&fit=crop&crop=face',
      date: '2024-11-10',
      readTime: '10 min read',
      category: 'wellness',
      categoryName: 'Wellness',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop',
      tags: ['chronic pain', 'pain management', 'holistic health'],
      featured: false,
      icon: Brain,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 8,
      title: 'Emergency Preparedness: What to Do in a Medical Crisis',
      excerpt: 'Learn essential first aid skills and emergency response procedures that could save lives in critical situations.',
      content: 'Medical emergencies can happen at any time, and being prepared can make the difference between life and death. This guide covers essential first aid skills, emergency response procedures, and when to seek professional help...',
      author: 'Dr. Amanda Foster',
      authorTitle: 'Emergency Physician',
      authorImage: 'https://images.unsplash.com/photo-1594824388852-8a0b1b0b0b0b?w=100&h=100&fit=crop&crop=face',
      date: '2024-11-05',
      readTime: '8 min read',
      category: 'prevention',
      categoryName: 'Prevention',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      tags: ['emergency care', 'first aid', 'safety'],
      featured: false,
      icon: Zap,
      color: 'from-red-600 to-red-500'
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        {/* Logo Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img src={logo} alt="AIMAN logo" className="opacity-15 w-80 h-auto" />
        </div>
        
        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Health Resources & Blog
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto">
              Stay informed with our latest health tips, medical insights, 
              and wellness advice from our expert doctors and healthcare professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredPosts.length > 0 && (
        <section className="section-padding bg-primary-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center space-x-2 mb-4">
                <TrendingUp className="w-6 h-6 text-primary-600" />
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                  Featured Articles
                </h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most popular and important health articles
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-full h-64 rounded-lg overflow-hidden mb-6">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex items-center space-x-2 mb-3">
                    <div className={`w-8 h-8 bg-gradient-to-r ${post.color} rounded-full flex items-center justify-center`}>
                      {React.createElement(post.icon, { className: "w-4 h-4 text-white" })}
                    </div>
                    <span className="text-sm text-primary-600 font-medium">
                      {post.categoryName}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">
                      {formatDate(post.date)}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          {post.author}
                        </p>
                        <p className="text-xs text-gray-600">
                          {post.authorTitle}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              All Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} available
            </p>
          </motion.div>

          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex items-center space-x-2 mb-3">
                    <div className={`w-6 h-6 bg-gradient-to-r ${post.color} rounded-full flex items-center justify-center`}>
                      {React.createElement(post.icon, { className: "w-3 h-3 text-white" })}
                    </div>
                    <span className="text-sm text-primary-600 font-medium">
                      {post.categoryName}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">
                      {formatDate(post.date)}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="text-xs text-gray-500">
                        +{post.tags.length - 2} more
                      </span>
                    )}
                  </div>

                  <button className="w-full btn-outline text-sm py-2">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No articles found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or category filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Subscribe to our newsletter and get the latest health tips, 
              medical insights, and wellness advice delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium px-6 py-3 rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blog
