import React, { createContext, useContext, useState, useEffect } from 'react'
import adityaImg from '../photo/aditya.jpg'
import akshitaImg from '../photo/akshita.jpg'
import keshavImg from '../photo/keshav.jpg'
import kiranImg from '../photo/kiran.jpg'
import piyushImg from '../photo/piyush.jpg'
import sangeethaImg from '../photo/sangeetha.jpg'

const DataContext = createContext()

// Use a const declaration with arrow function for maximum compatibility
const useData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within DataProvider')
  }
  return context
}

export { useData }

export const DataProvider = ({ children }) => {
  // Initial data with some sample entries
  const [doctors, setDoctors] = useState(() => {
    // Force reset doctors data to ensure all 6 doctors are available
    const saved = localStorage.getItem('aimanDoctors')
    const defaultDoctors = [
      { 
        id: 'piyush', 
        name: 'Dr. Piyush Verma', 
        specialty: 'Psychiatrist', 
        experience: '11+', 
        email: 'piyush.verma@aimanhospital.com',
        phone: '+91 98765 43210',
        qualifications: 'MBBS, MD Psychiatry, PGIMER Rohtak',
        description: 'Dr Piyush believe that mental health is for all. As a psychiatrist of more than 11 years of clinical expertise, he has deep compassion to support individuals and their family through their mental health journey. With academic training and experience from PGIMER Rohtak dr Piyush integrate latest scientific findings into ever day psychiatry practice. He actively contribute to ongoing research and medical education. Dr Piyush is also passionate about raising awareness around mental health and reducing stigma.',
        image: piyushImg,
        available: true
      },
      { 
        id: 'sangeetha', 
        name: 'Dr. Sangeeta Hatila', 
        specialty: 'Psychiatrist', 
        experience: '8+', 
        email: 'sangeetha.hatila@aimanhospital.com',
        phone: '+91 98765 43211',
        qualifications: 'MBBS, MD Psychiatry, SMS Medical College',
        description: 'Dr Sangeeta is dedicated and compassionate psychiatrist with 8 years of extensive experience in diagnosing and treating wide range of mental health conditions. After her MBBS, she did her MD psychiatry from SMS Medical college. She also served as assistant professor in SPMC, Bikaner which equipped her with comprehensive knowledge and skills to deliver high quality care. She has number of publications and academics paper throughout her career. Dr Sangeeta communicate fluently in English, Hindi allowing her to engage effectively with diverse patient population.',
        image: sangeethaImg,
        available: true
      },
      { 
        id: 'aditya', 
        name: 'Dr. Aditya Sharma', 
        specialty: 'Psychiatrist', 
        experience: '5+', 
        email: 'aditya.sharma@aimanhospital.com',
        phone: '+91 98765 43212',
        qualifications: 'MBBS, MD Psychiatry, SMS Medical College, IHBAS Delhi',
        description: 'Dr Aditya is consultant psychiatrist with strong background in clinical psychiatry and mental health advocacy. After doing his MD from SMS medical college, Dr Aditya had experience of working in IHBAS, Delhi. With over 5 years of experiences he has worked with diverse patient population addressing range of psychiatric disorders. Dr Aditya is actively involved in medical education and academic research.',
        image: adityaImg,
        available: true
      },
      { 
        id: 'kiran', 
        name: 'Dr. Kiran Bala', 
        specialty: 'Neurologist', 
        experience: '30+', 
        email: 'kiran.bala@aimanhospital.com',
        phone: '+91 98765 43213',
        qualifications: 'MBBS, MD Neurology, DM Neurology',
        description: 'Dr. Kiran Bala is a highly respected neurologist with over 30 years of experience in the field. Based in Gurgaon, she has built a distinguished career diagnosing and treating a broad spectrum of neurological conditions, earning widespread recognition and trust from both patients and medical professionals. Renowned for her deep clinical expertise and dedication to excellence, Dr. Bala is considered a leading authority in neurology. Her patient-centered approach, marked by compassion and attentiveness, ensures that every individual receives personalized care tailored to their unique needs.',
        image: kiranImg,
        available: true
      },      
      { 
        id: 'akshita', 
        name: 'Miss Akshita Shukla', 
        specialty: 'Psychologist', 
        experience: '5+', 
        email: 'akshita.shukla@aimanhospital.com',
        phone: '+91 98765 43214',
        qualifications: 'M.Phil Clinical Psychology, Amity University Noida',
        description: 'Committed to create safe spaces for healing, Miss Akshita received her clinical psychology and M.phil degree from Amity university, Noida. She has worked extensively in assessment, therapy of individuals. She provides tailored integrative care in various psychiatric disorders.',
        image: akshitaImg,
        available: true
      },
      { 
        id: 'keshav', 
        name: 'Miss Keshav Sharma', 
        specialty: 'Psychologist', 
        experience: '8+', 
        email: 'keshav.sharma@aimanhospital.com',
        phone: '+91 98765 43215',
        qualifications: 'M.Sc Clinical Psychology, University of Jammu and Kashmir',
        description: 'With years of clinical expertise, Miss Keshav is dedicated to provide compassionate health care. She hold master of science in clinical psychology from university of Jammu and Kashmir. She specialise in grief counselling and psycho-oncology. She works with individuals of all age group.',
        image: keshavImg,
        available: true
      }   
      
    ]
    
    // Use saved doctors if available, otherwise use default doctors
    return saved ? JSON.parse(saved) : defaultDoctors
  })

  const [blogs, setBlogs] = useState(() => {
    const saved = localStorage.getItem('aimanBlogs')
    return saved ? JSON.parse(saved) : [
      {
        id: '1',
        title: 'Understanding Mental Health: A Comprehensive Guide',
        excerpt: 'Learn about the importance of mental health and how to maintain it in today\'s fast-paced world.',
        content: 'Full blog content here...',
        category: 'Mental Health',
        author: 'Dr. Sarah Johnson',
        date: new Date().toISOString(),
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
        published: true
      }
    ]
  })

  const [departments, setDepartments] = useState(() => {
    const saved = localStorage.getItem('aimanDepartments')
    return saved ? JSON.parse(saved) : [
      {
        id: '1',
        name: 'psychiatrist',
        description: 'Advanced heart care with state-of-the-art technology',
        icon: 'Heart',
        facilities: ['24/7 Emergency', 'ICU', 'Cath Lab'],
        doctors: 5
      },
      {
        id: '2',
        name: 'Mental Health',
        description: 'Comprehensive mental wellness and psychiatric care',
        icon: 'Brain',
        facilities: ['Counseling', 'Therapy', 'Support Groups'],
        doctors: 3
      }
    ]
  })

  const [newsletterSubscribers, setNewsletterSubscribers] = useState(() => {
    const saved = localStorage.getItem('aimanNewsletterSubscribers')
    return saved ? JSON.parse(saved) : []
  })

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('aimanDoctors', JSON.stringify(doctors))
  }, [doctors])

  useEffect(() => {
    localStorage.setItem('aimanBlogs', JSON.stringify(blogs))
  }, [blogs])

  useEffect(() => {
    localStorage.setItem('aimanDepartments', JSON.stringify(departments))
  }, [departments])

  useEffect(() => {
    localStorage.setItem('aimanNewsletterSubscribers', JSON.stringify(newsletterSubscribers))
  }, [newsletterSubscribers])

  // Doctor CRUD operations
  const addDoctor = (doctor) => {
    const newDoctor = { 
      ...doctor, 
      id: `doctor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}` 
    }
    setDoctors([...doctors, newDoctor])
    return newDoctor
  }

  const updateDoctor = (id, updatedDoctor) => {
    setDoctors(doctors.map(doc => doc.id === id ? { ...doc, ...updatedDoctor } : doc))
  }

  const deleteDoctor = (id) => {
    setDoctors(doctors.filter(doc => doc.id !== id))
  }

  // Blog CRUD operations
  const addBlog = (blog) => {
    const newBlog = { 
      ...blog, 
      id: `blog_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`, 
      date: new Date().toISOString() 
    }
    setBlogs([...blogs, newBlog])
    return newBlog
  }

  const updateBlog = (id, updatedBlog) => {
    setBlogs(blogs.map(blog => blog.id === id ? { ...blog, ...updatedBlog } : blog))
  }

  const deleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id))
  }

  // Department CRUD operations
  const addDepartment = (department) => {
    const newDepartment = { 
      ...department, 
      id: `dept_${Date.now()}_${Math.random().toString(36).substr(2, 9)}` 
    }
    setDepartments([...departments, newDepartment])
    return newDepartment
  }

  const updateDepartment = (id, updatedDepartment) => {
    setDepartments(departments.map(dept => dept.id === id ? { ...dept, ...updatedDepartment } : dept))
  }

  const deleteDepartment = (id) => {
    setDepartments(departments.filter(dept => dept.id !== id))
  }

  // Newsletter operations
  const addNewsletterSubscriber = (email) => {
    const subscriber = {
      id: `subscriber_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      email,
      subscribedAt: new Date().toISOString(),
      active: true
    }
    setNewsletterSubscribers([...newsletterSubscribers, subscriber])
    return subscriber
  }

  // Reset doctors to default (admin function)
  const resetDoctorsToDefault = () => {
    const defaultDoctors = [
      { 
        id: 'aditya', 
        name: 'Dr. Aditya Sharma', 
        specialty: 'Psychiatrist', 
        experience: '15+', 
        email: 'aditya.sharma@aimanhospital.com',
        phone: '+91 88008 33411',
        qualifications: 'MD, DM psychiatrist, FACC',
        description: 'Dr. Aditya Sharma is a renowned cardiologist with over 15 years of experience in treating complex heart conditions. He specializes in interventional psychiatrist and has performed thousands of successful procedures.',
        image: adityaImg,
        available: true
      },
      { 
        id: 'akshita', 
        name: 'Dr. Akshita Patel', 
        specialty: 'Mental Health & Psychiatry', 
        experience: '12+', 
        email: 'akshita.patel@aimanhospital.com',
        phone: '+1 (555) 123-4568',
        qualifications: 'MD, DPM, PhD Psychology',
        description: 'Dr. Akshita Patel is a compassionate psychiatrist specializing in mood disorders, anxiety, and trauma therapy. She combines evidence-based treatments with a patient-centered approach.',
        image: akshitaImg,
        available: true
      },
      { 
        id: 'keshav', 
        name: 'Dr. Keshav Singh', 
        specialty: 'Orthopedics', 
        experience: '18+', 
        email: 'keshav.singh@aimanhospital.com',
        phone: '+1 (555) 123-4569',
        qualifications: 'MS Orthopedics, MCh, FRCS',
        description: 'Dr. Keshav Singh is a leading orthopedic surgeon specializing in joint replacement and sports medicine. He has performed over 2000 successful surgeries and is known for his innovative techniques.',
        image: keshavImg,
        available: true
      },
      { 
        id: 'kiran', 
        name: 'Dr. Kiran Reddy', 
        specialty: 'Pediatrics', 
        experience: '14+', 
        email: 'kiran.reddy@aimanhospital.com',
        phone: '+1 (555) 123-4570',
        qualifications: 'MD Pediatrics, DCH, MRCPCH',
        description: 'Dr. Kiran Reddy is a dedicated pediatrician with a special focus on child development and preventive care. She has a gentle approach that makes children feel comfortable during visits.',
        image: kiranImg,
        available: true
      },
      { 
        id: 'piyush', 
        name: 'Dr. Piyush Verma', 
        specialty: 'Psychiatrist', 
        experience: '11+', 
        email: 'piyush.verma@aimanhospital.com',
        phone: '+91 98765 43210',
        qualifications: 'MBBS, MD Psychiatry, PGIMER Rohtak',
        description: 'Dr Piyush believe that mental health is for all. As a psychiatrist of more than 11 years of clinical expertise, he has deep compassion to support individuals and their family through their mental health journey. With academic training and experience from PGIMER Rohtak dr Piyush integrate latest scientific findings into ever day psychiatry practice. He actively contribute to ongoing research and medical education. Dr Piyush is also passionate about raising awareness around mental health and reducing stigma.',
        image: piyushImg,
        available: true
      },
      { 
        id: 'sangeetha', 
        name: 'Dr. Sangeetha Iyer', 
        specialty: 'Ophthalmology', 
        experience: '13+', 
        email: 'sangeetha.iyer@aimanhospital.com',
        phone: '+1 (555) 123-4572',
        qualifications: 'MS Ophthalmology, DNB, FICO',
        description: 'Dr. Sangeetha Iyer is a skilled ophthalmologist specializing in cataract surgery and retinal treatments. She has performed over 3000 successful eye surgeries with excellent outcomes.',
        image: sangeethaImg,
        available: true
      }
    ]
    setDoctors(defaultDoctors)
    return defaultDoctors
  }

  const contextValue = {
    doctors,
    blogs,
    departments,
    newsletterSubscribers,
    addDoctor,
    updateDoctor,
    deleteDoctor,
    addBlog,
    updateBlog,
    deleteBlog,
    addDepartment,
    updateDepartment,
    deleteDepartment,
    addNewsletterSubscriber,
    resetDoctorsToDefault
  }

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  )
}

