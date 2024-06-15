import hello from "../locales/zh/hello.json";
import item from "../locales/zh/form/label/item.json";

export default defineI18nLocale(() => {
  return { hello, form: { label: { item } } }
})
