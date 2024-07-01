import sql from "better-sqlite3"
import xss from "xss"
import slugify from "slugify"

const db = sql("meals.db")

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return db.prepare("SELECT * from meals").all()
} 

export function getMeal(slug) {
    //await new Promise((resolve) => setTimeout(resolve, 2000))
    return db.prepare("SELECT * from meals WHERE slug = ?").get(slug)
} 

export function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true })
  meal.instructions = xss(meal.instructions)
}