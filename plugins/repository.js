import { SocialRepository } from '~/api'

export default (ctx, inject) => {
  // dependency injection
  inject('socialRepository', SocialRepository(ctx.$axios))
}
