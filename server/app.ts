import express, { type Request, type Response } from 'express'
import cors from 'cors'
import { prisma } from './db.js'

export const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

app.post('/api/contact', async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body ?? {}

    const trimmedName = typeof name === 'string' ? name.trim() : ''
    const trimmedEmail = typeof email === 'string' ? email.trim() : ''
    const trimmedMessage = typeof message === 'string' ? message.trim() : ''

    const errors: string[] = []

    if (!trimmedName) {
      errors.push('Name is required.')
    } else if (trimmedName.length > 100) {
      errors.push('Name must be less than 100 characters.')
    }

    if (!trimmedEmail) {
      errors.push('Email is required.')
    } else if (!EMAIL_REGEX.test(trimmedEmail)) {
      errors.push('A valid email address is required.')
    } else if (trimmedEmail.length > 255) {
      errors.push('Email must be less than 255 characters.')
    }

    if (!trimmedMessage) {
      errors.push('Message is required.')
    } else if (trimmedMessage.length > 5000) {
      errors.push('Message must be less than 5000 characters.')
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        error: errors.join(' '),
        errors,
      })
    }

    const savedMessage = await prisma.contactMessage.create({
      data: {
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage,
      },
    })

    return res.status(201).json({
      success: true,
      message: 'Message sent successfully.',
      data: {
        id: savedMessage.id,
        createdAt: savedMessage.createdAt,
      },
    })
  } catch (error) {
    console.error('Error handling contact form submission:', error)
    return res.status(500).json({
      success: false,
      error: 'Failed to save your message. Please try again later.',
    })
  }
})
