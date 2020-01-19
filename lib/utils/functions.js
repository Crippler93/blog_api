export function generateSlug(title) { 
  return title
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
}