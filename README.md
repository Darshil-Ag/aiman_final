# AIMAN Hospital Website

A modern, responsive hospital website built with React, Tailwind CSS, and Express.js. This website provides comprehensive information about AIMAN Hospital's services, doctors, and facilities, along with WhatsApp-based appointment booking and contact functionality.

## 🏥 Features

### Frontend Features
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and lavender theme
- **Interactive Components**: Dynamic forms, carousels, and interactive elements
- **WhatsApp Integration**: Direct appointment booking via WhatsApp without third-party APIs
- **Floating WhatsApp Button**: Easy access to customer support on every page
- **Accessibility**: Built with accessibility best practices
- **SEO Optimized**: Proper meta tags and semantic HTML

### Pages
1. **Homepage**: Hero section with logo background, specialties, doctor highlights, testimonials, and blog preview
2. **About Us**: Hospital history, mission, vision, values, and achievements
3. **Departments**: Comprehensive list of medical departments with filtering
4. **Doctors**: Expert doctor profiles with search and filtering capabilities
5. **Book Appointment**: Interactive appointment booking form with WhatsApp integration
6. **Patient Stories**: Testimonials and patient success stories
7. **Blog**: Health resources and articles with category filtering
8. **Contact**: Contact form, hospital information, and location details

### Special Features
- **WhatsApp Appointment Booking**: Customers can book appointments directly through WhatsApp (9414355273)
- **Floating WhatsApp Button**: Persistent contact button on all pages for instant customer support
- **No Third-Party Dependencies**: Direct WhatsApp integration using wa.me links
- **Logo Watermark**: Subtle animated logo background on hero sections

### Backend Features
- **RESTful API**: Express.js server with MongoDB integration
- **Form Handling**: Appointment booking and contact form processing
- **Data Validation**: Input validation and error handling
- **Database Models**: Structured data models for appointments and contacts

## 🚀 Tech Stack

### Frontend
- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **React Router**: Client-side routing
- **React Hook Form**: Form handling and validation
- **Lucide React**: Beautiful icon library

### Backend
- **Express.js**: Node.js web framework
- **MongoDB**: NoSQL database with Mongoose ODM
- **CORS**: Cross-origin resource sharing
- **Express Validator**: Input validation middleware
- **Nodemailer**: Email sending capabilities (optional)

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Frontend Setup
```bash
# Navigate to the project directory
cd aiman-hospital

# Install dependencies
npm install

# Start development server
npm run dev
```

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp env.example .env

# Edit .env file with your MongoDB connection string
# MONGODB_URI=mongodb://localhost:27017/aiman-hospital

# Start development server
npm run dev
```

## 🎨 Design System

### Color Palette
- **Primary**: Lavender/Purple tones (#9333ea, #a855f7, #c084fc) - Main brand colors
- **Secondary**: Lavender shades (#e9d5ff, #f3e8ff, #faf5ff) - Complementary tones
- **Accent**: Bright purple/pink tones (#d946ef, #c026d3) - Highlights and CTAs
- **WhatsApp Green**: (#22c55e) - WhatsApp button and appointment submission
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Headings**: Poppins (Google Fonts)
- **Body Text**: Inter (Google Fonts)
- **Responsive**: Fluid typography scaling

### Components
- **Buttons**: Primary, secondary, and outline variants
- **Cards**: Consistent shadow and border radius
- **Forms**: Styled inputs with validation states
- **Navigation**: Sticky header with smooth scrolling

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the backend directory:
```env
MONGODB_URI=mongodb://localhost:27017/aiman-hospital
PORT=5000
```

### Customization
- **Colors**: Update color theme in `src/index.css` under `@theme` section
- **WhatsApp Number**: Update phone number in:
  - `src/components/WhatsAppButton.jsx` (line 6)
  - `src/pages/Appointment.jsx` (line 111)
- **Content**: Modify data in component files
- **Images**: Replace placeholder images with actual hospital photos in `src/photo/`
- **Contact Info**: Update contact details in components

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
# Build for production
npm run build

# Deploy to Vercel
vercel --prod

# Or deploy to Netlify
netlify deploy --prod --dir=dist
```

### Backend (Heroku/Railway)
```bash
# Install Heroku CLI
# Create Heroku app
heroku create aiman-hospital-api

# Set environment variables
heroku config:set MONGODB_URI=your-mongodb-connection-string

# Deploy
git push heroku main
```

## 📊 API Endpoints

### Appointments
**Note**: The appointment booking now uses WhatsApp integration (wa.me links) instead of traditional API endpoints. When users submit the appointment form, it opens WhatsApp with a pre-filled message containing all appointment details to send directly to the hospital's WhatsApp number (9414355273).

Traditional endpoints (optional for admin management):
- `POST /api/appointments` - Book new appointment
- `GET /api/appointments` - Get all appointments (admin)
- `PUT /api/appointments/:id` - Update appointment status

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact messages (admin)

### Health Check
- `GET /api/health` - API health status

## 💬 WhatsApp Integration

### How It Works
1. **Floating WhatsApp Button**: Available on all pages for general inquiries
2. **Appointment Booking**: Form collects all details, then opens WhatsApp with formatted message
3. **No API Keys Required**: Uses wa.me URL format for direct WhatsApp communication
4. **Customer's Phone**: Message is sent from customer's WhatsApp to hospital number

### Benefits
- ✅ No third-party API costs
- ✅ No authentication required
- ✅ Works on all devices (desktop and mobile)
- ✅ Customers can see conversation history
- ✅ Hospital receives rich formatted messages with all details

## 🛠️ Development

### Project Structure
```
aiman-hospital/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── data/          # Static data
│   ├── hooks/         # Custom React hooks
│   └── utils/         # Utility functions
├── backend/
│   ├── models/        # Database models
│   ├── routes/        # API routes
│   └── middleware/    # Custom middleware
└── public/            # Static assets
```

### Available Scripts
```bash
# Frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Backend
npm run dev          # Start with nodemon
npm start            # Start production server
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email info@aimanhospital.com or create an issue in the repository.

## 🙏 Acknowledgments

- Design inspiration from modern healthcare websites
- Icons by [Lucide](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**AIMAN Hospital** - Your Journey to Better Health Starts Here#   a i m a n _ n e w 
 
 