import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "demo" | "index"
declare module "C:/Users/akira/Desktop/Stuff/Store/Code/aap/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}