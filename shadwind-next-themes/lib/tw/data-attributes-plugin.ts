// credit goes to: https://github.com/tailwindlabs/headlessui/blob/main/packages/%40headlessui-tailwindcss/src/index.ts

import plugin from 'tailwindcss/plugin'

interface Options {
   prefix?: string
}

export default plugin.withOptions<Options>(({ prefix = 'ui' } = {}) => {
   return ({ addVariant }) => {
      for (const state of ['open', 'checked', 'selected', 'active', 'disabled']) {
         addVariant(`${prefix}-${state}`, [
            `&[data-${state}~="true"]`,
         ])
         addVariant(`${prefix}-not-${state}`, [
            `&:not([data-${state}~="true"])`,
         ])
      }
   }
})