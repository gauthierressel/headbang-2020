###
# Page options, layouts, aliases and proxies
###

# Layout
page "*", :layout => "front"

# No layout
page '*.xml', layout: false
page '*.json', layout: false
page '*.txt', layout: false

# Ignore .md file in assets
ignore "assets/**/*.md"

# Proxy
proxy "/contact/index.html", "/templates/contact/index.html"
proxy "/informations-utiles/index.html", "/templates/informations-utiles/index.html"
proxy "/manifeste/index.html", "/templates/manifeste/index.html"
proxy "/mentions-legales/index.html", "/templates/mentions-legales/index.html"
proxy "/politique-de-confidentialite/index.html", "/templates/politique-de-confidentialite/index.html"
proxy "/credits/index.html", "/templates/credits/index.html"

###
# Dirs
###

# Source & build dir
set :source, "app"

# Assets dir
set :css_dir, "assets/stylesheets"
set :js_dir, "assets/javascripts"
set :images_dir, "assets/images"
set :fonts_dir, "assets/fonts"
set :data_dir, "data"

###
# External pipeline
###
activate :external_pipeline,
  name: :gulp,
  command: "gulp #{build? ? "build" : "" }",
  source: ".tmp/build",
  latency: 0

###
# Extensions
###

# Deploy
activate :deploy do |config|
  branch_name = `git rev-parse --abbrev-ref HEAD`
  config.build_before  = false
  config.deploy_method = :rsync
  config.host          = 'lunaweb@preprod-03.lunaweb.io'
  config.path          = "/home/prototype/.../#{branch_name}"
  config.clean         = true
end

# DatoCMS
# For more informations read the DatoCMS section of the README
activate :dato

dato.dates.each do |date|
  proxy "/#{date.slug}/index.html", "/templates/date/index.html", :locals => { :date => date }
end

###
# Engines
###

# Slim
set :slim, { :pretty => false }

###
# Environnement-specific confirgurations
###

# Development-specific configuration
# configure :development do
#   activate :livereload
# end

# Build-specific configuration
configure :build do
  # Prevent Middleman from trying to compile Sass files since there are compiled in .tmp/build
  ignore "assets/**/*.scss"
  # Prevent Middleman to include individual svg files which composing sprites
  ignore "assets/images/**/sprite*/**"


  # activate :asset_hash
  set :relative_links, true
  set :slim, { :pretty => true }
end
