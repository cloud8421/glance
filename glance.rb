require 'sinatra'

ENV['RACK_ENV'] ||= 'development'

class Glance < Sinatra::Base

  configure do
    set :root, File.dirname(__FILE__)
    set :public_folder, File.join(root, 'app')
  end

end
