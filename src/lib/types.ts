import { z } from 'zod';

export const FormSchema = z.object({
  email: z
    .string()
    .describe('Email')
    .email({ message: '유효하지 않은 이메일' }),
  password: z.string().describe('Password').min(1, '패스워드가 필요합니다'),
});
