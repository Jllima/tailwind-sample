# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
Post.find_or_create_by!(title: "Post 1", desc: "Descrição do Post 1")
Post.find_or_create_by!(title: "Post 2", desc: "Descrição do Post 2")
Post.find_or_create_by!(title: "Post 3", desc: "Descrição do Post 3")
Post.find_or_create_by!(title: "Post 4", desc: "Descrição do Post 4")
Post.find_or_create_by!(title: "Post 5", desc: "Descrição do Post 5")
