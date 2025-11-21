import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Pergaminho de contato inválido'),
  password: z.string().min(6, 'A chave secreta deve ter pelo menos 6 caracteres'),
  rememberMe: z.boolean().optional(),
})

export const registerSchema = z.object({
  username: z.string().min(3, 'Nome do aventureiro deve ter pelo menos 3 caracteres'),
  email: z.string().email('Pergaminho de contato inválido'),
  password: z.string().min(6, 'A chave secreta deve ter pelo menos 6 caracteres'),
})

export const forgotPasswordSchema = z.object({
  email: z.string().email('Pergaminho de contato inválido'),
  newPassword: z.string().min(6, 'A nova chave secreta deve ter pelo menos 6 caracteres'),
})

export type LoginInput = z.infer<typeof loginSchema>
export type RegisterInput = z.infer<typeof registerSchema>
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>
