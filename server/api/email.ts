import { useCompiler } from '#vue-email'

export default defineEventHandler(async (event) => {
  return await await useCompiler('Optilynx.vue', {
    firstName: 'Vojtěch',
    lastName: 'Moravec',
    message: 'Zpráva'
  })
})
