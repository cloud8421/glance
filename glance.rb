require 'sinatra'
require_relative 'api/weather'
require_relative 'api/tube'
require_relative 'api/news'

ENV['RACK_ENV'] ||= 'development'

class Glance < Sinatra::Base

  configure do
    set :root, File.dirname(__FILE__)
    set :public_folder, File.join(root, 'app')
  end

  use WeatherApi
  use TubeApi
  use NewsApi

end
