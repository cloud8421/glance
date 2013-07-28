require 'bundler'

Bundler.setup
require './glance'

map "/styles" do
    run Rack::Directory.new("./.tmp/styles")
end if ENV['RACK_ENV'] == 'development'

run Glance
