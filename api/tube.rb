require 'active_support/core_ext/hash'
require 'json'
require 'faraday'

module TubeStatus
  API_URL="http://cloud.tfl.gov.uk"

  def self.fetch
    response = connection.get '/TrackerNet/LineStatus'
    Hash.from_xml(response.body)['ArrayOfLineStatus']['LineStatus']
  end

  private

  def self.connection
    @connection ||= Faraday.new(url: API_URL)
  end
end

module TubeWeekend
  API_URL="http://www.tfl.gov.uk/tfl/businessandpartners/syndication/feed.aspx"

  def self.fetch
    response = connection.get do |req|
      req.params['feedId'] = ENV['TUBE_FEED_ID']
      req.params['email'] = ENV['TUBE_USER']
    end
    Hash.from_xml(response.body)["SyndicatedFeed"]["Lines"]["Line"]
  end

  private

  def self.connection
    @connection ||= Faraday.new(url: API_URL)
  end

end

class TubeApi < Sinatra::Base
  use Rack::Cache

  before do
    content_type :json
  end

  get '/tube/status.json' do
    expires 60, :public, :must_revalidate
    TubeStatus.fetch.to_json
  end

  get '/tube/weekend.json' do
    expires 3600, :public, :must_revalidate
    TubeWeekend.fetch.to_json
  end
end
