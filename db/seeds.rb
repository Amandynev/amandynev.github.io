# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"

puts"destroy skill"
Skill.destroy_all
puts "create skills"

ruby =Skill.create!(name: "Ruby")
css =Skill.create!(name: "CSS(3)")
html =Skill.create!(name: "HTML(5)")
bootstrap =Skill.create!(name: "Bootstrap")
sql =Skill.create!(name: "SQL")
command =Skill.create!(name: "Command line interface")
js =Skill.create!(name: "JavaScript(ES6)")
github =Skill.create!(name: "Github")
heroku =Skill.create!(name: "Heroku")
mvc =Skill.create!(name: "MVC pattern")
active =Skill.create!(name: "Active Record")
rails =Skill.create!(name: "Ruby On Rails")
wordpress =Skill.create!(name: "Wordpress")

mac =Skill.create!(name: "Macintosh")
figma =Skill.create!(name: "Figma")
indesign =Skill.create!(name: "Indesign")
photoshop =Skill.create!(name: "Photoshop")
microsoft = Skill.create!(name: "Microsoft Office")
iwork = Skill.create!(name: "iWork")

