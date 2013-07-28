require 'json'
require 'faraday'

module News
  API_URL="http://content.guardianapis.com/search"

  def self.fetch(section)
    connection.get do |req|
      req.params["format"] = 'json'
      req.params["section"] = section
    end.body
  end

  private

  def self.connection
    @connection ||= Faraday.new(url: API_URL)
  end
end

class NewsApi < Sinatra::Base
  before do
    content_type :json
  end

  get '/news/uk.json' do
    News.fetch('uk')
  end

  get '/news/ita.json' do
    News.fetch('world/italy')
  end
end
